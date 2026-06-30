from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    env: str = "local"
    app_name: str = "SportyQo Backend"
    debug: bool = True
    log_level: str = "DEBUG"
    api_v1_prefix: str = "/api/v1"
    database_url: str = "postgresql+asyncpg://sportyqo:sportyqo@localhost:5432/sportyqo"
    redis_url: str = "redis://localhost:6379/0"
    jwt_secret: str = "change-me"
    jwt_algorithm: str = "HS256"
    jwt_access_ttl_seconds: int = 900
    jwt_refresh_ttl_seconds: int = 2_592_000
    s3_endpoint: str = "http://localhost:9000"
    s3_bucket: str = "sportyqo-media"
    s3_access_key: str = "minioadmin"
    s3_secret_key: str = "minioadmin"
    qo_formula_version: int = 1
    sentry_dsn: str = ""
    otel_exporter_otlp_endpoint: str = ""

    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")


@lru_cache
def get_settings() -> Settings:
    return Settings()
