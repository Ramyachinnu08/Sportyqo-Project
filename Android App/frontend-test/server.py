from __future__ import annotations

import argparse
import json
import mimetypes
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import urljoin
from urllib.request import Request, urlopen


ROOT = Path(__file__).resolve().parent
STATIC_TYPES = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
}


class FrontendHandler(BaseHTTPRequestHandler):
    backend_url = "http://127.0.0.1:8000"

    def do_HEAD(self) -> None:
        if self.path.startswith(("/api/", "/health", "/ready", "/metrics")):
            self.proxy(write_body=False)
            return
        self.serve_static(write_body=False)

    def do_GET(self) -> None:
        if self.path.startswith(("/api/", "/health", "/ready", "/metrics")):
            self.proxy()
            return
        self.serve_static()

    def do_POST(self) -> None:
        if self.path.startswith("/api/"):
            self.proxy()
            return
        self.send_error(404)

    def do_OPTIONS(self) -> None:
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.end_headers()

    def serve_static(self, write_body: bool = True) -> None:
        requested = self.path.split("?", 1)[0].lstrip("/") or "index.html"
        target = (ROOT / requested).resolve()
        if not str(target).startswith(str(ROOT)) or not target.exists() or target.is_dir():
            target = ROOT / "index.html"
        content = target.read_bytes()
        content_type = STATIC_TYPES.get(target.suffix) or mimetypes.guess_type(target.name)[0] or "application/octet-stream"
        self.send_response(200)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(content)))
        self.end_headers()
        if write_body:
            self.wfile.write(content)

    def proxy(self, write_body: bool = True) -> None:
        body = None
        if self.command in {"POST", "PUT", "PATCH"}:
            length = int(self.headers.get("Content-Length", "0"))
            body = self.rfile.read(length) if length else None

        target_url = urljoin(self.backend_url, self.path)
        headers = {
            "Accept": self.headers.get("Accept", "application/json"),
        }
        if self.headers.get("Content-Type"):
            headers["Content-Type"] = self.headers["Content-Type"]
        if self.headers.get("Authorization"):
            headers["Authorization"] = self.headers["Authorization"]

        request = Request(target_url, data=body, headers=headers, method=self.command)
        try:
            with urlopen(request, timeout=20) as response:
                payload = response.read()
                self.send_response(response.status)
                self.copy_headers(response.headers, len(payload))
                if write_body:
                    self.wfile.write(payload)
        except HTTPError as error:
            payload = error.read()
            self.send_response(error.code)
            self.copy_headers(error.headers, len(payload))
            if write_body:
                self.wfile.write(payload)
        except URLError as error:
            payload = json.dumps(
                {
                    "title": "Backend unavailable",
                    "detail": f"Could not reach {self.backend_url}: {error.reason}",
                }
            ).encode()
            self.send_response(502)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(payload)))
            self.end_headers()
            if write_body:
                self.wfile.write(payload)

    def copy_headers(self, headers, content_length: int) -> None:
        excluded = {"connection", "content-encoding", "transfer-encoding", "content-length"}
        for key, value in headers.items():
            if key.lower() not in excluded:
                self.send_header(key, value)
        self.send_header("Content-Length", str(content_length))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()

    def log_message(self, format: str, *args) -> None:
        print(f"[frontend-test] {self.address_string()} - {format % args}")


def main() -> None:
    parser = argparse.ArgumentParser(description="Serve SportyQo frontend tester and proxy backend API calls.")
    parser.add_argument("--host", default="127.0.0.1")
    parser.add_argument("--port", default=5173, type=int)
    parser.add_argument("--backend", default="http://127.0.0.1:8000")
    args = parser.parse_args()

    FrontendHandler.backend_url = args.backend.rstrip("/")
    server = ThreadingHTTPServer((args.host, args.port), FrontendHandler)
    print(f"Frontend tester: http://{args.host}:{args.port}")
    print(f"Proxy backend:   {FrontendHandler.backend_url}")
    server.serve_forever()


if __name__ == "__main__":
    main()
