from fastapi import APIRouter

from app.core.security import decode_token
from app.schemas.auth import LoginRequest, RefreshRequest, RegisterRequest, TokenPair
from app.services import auth_service

router = APIRouter()


@router.post("/register", response_model=TokenPair, status_code=201)
async def register(payload: RegisterRequest) -> TokenPair:
    return await auth_service.register(payload)


@router.post("/login", response_model=TokenPair)
async def login(payload: LoginRequest) -> TokenPair:
    return await auth_service.login(payload)


@router.post("/refresh", response_model=TokenPair)
async def refresh(payload: RefreshRequest) -> TokenPair:
    token_payload = decode_token(payload.refresh_token)
    return await auth_service.refresh(str(token_payload["sub"]))

