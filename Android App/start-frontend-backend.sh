#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BACKEND_DIR="$ROOT_DIR/backend"
FRONTEND_DIR="$ROOT_DIR/frontend-test"
BACKEND_URL="${BACKEND_URL:-http://127.0.0.1:8000}"
BACKEND_HOST="${BACKEND_HOST:-127.0.0.1}"
BACKEND_PORT="${BACKEND_PORT:-8000}"
FRONTEND_HOST="${FRONTEND_HOST:-127.0.0.1}"
FRONTEND_PORT="${FRONTEND_PORT:-5173}"

cleanup() {
  if [[ -n "${BACKEND_PID:-}" ]]; then
    kill "$BACKEND_PID" 2>/dev/null || true
  fi
  if [[ -n "${FRONTEND_PID:-}" ]]; then
    kill "$FRONTEND_PID" 2>/dev/null || true
  fi
}

trap cleanup EXIT INT TERM

cd "$BACKEND_DIR"
if [[ -x "./venv/bin/python" ]]; then
  ./venv/bin/python -m uvicorn app.main:app --reload --host "$BACKEND_HOST" --port "$BACKEND_PORT" &
elif [[ -x "./.venv/bin/python" ]]; then
  ./.venv/bin/python -m uvicorn app.main:app --reload --host "$BACKEND_HOST" --port "$BACKEND_PORT" &
else
  uvicorn app.main:app --reload --host "$BACKEND_HOST" --port "$BACKEND_PORT" &
fi
BACKEND_PID=$!

until curl -fsS "http://$BACKEND_HOST:$BACKEND_PORT/health" >/dev/null 2>&1; do
  sleep 1
done

cd "$FRONTEND_DIR"
python3 server.py --host "$FRONTEND_HOST" --port "$FRONTEND_PORT" --backend "$BACKEND_URL" &
FRONTEND_PID=$!

wait
