from uuid import uuid4

from app.core.config import get_settings
from app.core.errors import UnauthorizedError
from app.core.security import create_token, hash_password, verify_password
from app.schemas.auth import CurrentUser, LoginRequest, RegisterRequest, TokenPair

_users_by_email: dict[str, dict[str, str]] = {}


def _issue_tokens(user_id: str) -> TokenPair:
    settings = get_settings()
    return TokenPair(
        access_token=create_token(user_id, "access", settings.jwt_access_ttl_seconds),
        refresh_token=create_token(user_id, "refresh", settings.jwt_refresh_ttl_seconds),
    )


async def register(payload: RegisterRequest) -> TokenPair:
    user_id = str(uuid4())
    _users_by_email[payload.email] = {
        "id": user_id,
        "email": payload.email,
        "password_hash": hash_password(payload.password),
        "role": payload.role,
        "display_name": payload.display_name,
    }
    return _issue_tokens(user_id)


async def login(payload: LoginRequest) -> TokenPair:
    user = _users_by_email.get(payload.email)
    if not user or not verify_password(payload.password, user["password_hash"]):
        raise UnauthorizedError("Invalid email or password")
    return _issue_tokens(user["id"])


async def refresh(user_id: str) -> TokenPair:
    return _issue_tokens(user_id)


async def get_demo_user() -> CurrentUser:
    return CurrentUser(
        id="usr_001",
        email="athlete@sportyqo.test",
        role="athlete",
        display_name="Aarav Mehta",
    )

