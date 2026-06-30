from typing import Any

from fastapi import Request
from fastapi.responses import JSONResponse


class AppError(Exception):
    status_code = 500
    title = "Internal server error"
    type = "https://sportyqo.dev/errors/internal-server-error"

    def __init__(self, detail: str | None = None, extra: dict[str, Any] | None = None) -> None:
        self.detail = detail or self.title
        self.extra = extra or {}


class NotFoundError(AppError):
    status_code = 404
    title = "Not found"
    type = "https://sportyqo.dev/errors/not-found"


class InvalidJoinCodeError(AppError):
    status_code = 404
    title = "Invalid league code"
    type = "https://sportyqo.dev/errors/invalid-join-code"


class UnauthorizedError(AppError):
    status_code = 401
    title = "Unauthorized"
    type = "https://sportyqo.dev/errors/unauthorized"


class ForbiddenError(AppError):
    status_code = 403
    title = "Forbidden"
    type = "https://sportyqo.dev/errors/forbidden"


def problem_response(
    request: Request,
    status_code: int,
    title: str,
    detail: str,
    error_type: str,
    extra: dict[str, Any] | None = None,
) -> JSONResponse:
    body: dict[str, Any] = {
        "type": error_type,
        "title": title,
        "status": status_code,
        "detail": detail,
        "request_id": getattr(request.state, "request_id", None),
    }
    if extra:
        body.update(extra)
    return JSONResponse(
        status_code=status_code,
        content=body,
        media_type="application/problem+json",
    )

