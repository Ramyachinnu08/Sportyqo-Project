from collections.abc import Callable

from fastapi import Depends, Header
from jose import JWTError

from app.core.errors import ForbiddenError, UnauthorizedError
from app.core.security import decode_token
from app.schemas.auth import CurrentUser
from app.services.auth_service import get_demo_user


async def current_user(authorization: str | None = Header(default=None)) -> CurrentUser:
    if authorization is None:
        return await get_demo_user()
    scheme, _, token = authorization.partition(" ")
    if scheme.lower() != "bearer" or not token:
        raise UnauthorizedError("Expected Bearer token")
    try:
        payload = decode_token(token)
    except JWTError as exc:
        raise UnauthorizedError("Invalid or expired token") from exc
    demo_user = await get_demo_user()
    return demo_user.model_copy(update={"id": str(payload["sub"])})


def require_role(*roles: str) -> Callable[[CurrentUser], CurrentUser]:
    async def dependency(user: CurrentUser = Depends(current_user)) -> CurrentUser:
        if user.role not in roles:
            raise ForbiddenError(f"Requires one of these roles: {', '.join(roles)}")
        return user

    return dependency

