from fastapi import FastAPI, Request
from fastapi.exceptions import RequestValidationError

from app.api.v1.router import api_router
from app.core.config import get_settings
from app.core.errors import AppError, problem_response
from app.core.logging import configure_logging
from app.core.middleware import request_context_middleware
from app.core.telemetry import router as telemetry_router

settings = get_settings()
configure_logging(settings.log_level)

app = FastAPI(
    title=settings.app_name,
    debug=settings.debug,
    docs_url=f"{settings.api_v1_prefix}/docs",
    redoc_url=f"{settings.api_v1_prefix}/redoc",
    openapi_url=f"{settings.api_v1_prefix}/openapi.json",
)

app.middleware("http")(request_context_middleware)
app.include_router(api_router, prefix=settings.api_v1_prefix)
app.include_router(telemetry_router)


@app.exception_handler(AppError)
async def app_error_handler(request: Request, exc: AppError):
    return problem_response(
        request=request,
        status_code=exc.status_code,
        title=exc.title,
        detail=exc.detail,
        error_type=exc.type,
        extra=exc.extra,
    )


@app.exception_handler(RequestValidationError)
async def validation_error_handler(request: Request, exc: RequestValidationError):
    return problem_response(
        request=request,
        status_code=422,
        title="Validation error",
        detail="Request validation failed",
        error_type="https://sportyqo.dev/errors/validation-error",
        extra={"errors": exc.errors()},
    )


@app.get("/")
def root() -> dict[str, str]:
    return {"message": f"Welcome to {settings.app_name}"}


@app.get("/health")
def health_check() -> dict[str, str]:
    return {"status": "ok", "environment": settings.env}


@app.get("/ready")
async def readiness_check() -> dict[str, str]:
    return {"status": "ready"}
