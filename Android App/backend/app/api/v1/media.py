from fastapi import APIRouter

from app.schemas.media import MediaItem, PresignRequest, PresignResponse
from app.services import media_service

router = APIRouter()


@router.post("/presign", response_model=PresignResponse, status_code=201)
async def presign(payload: PresignRequest) -> PresignResponse:
    return await media_service.create_presigned_upload(payload)


@router.get("", response_model=list[MediaItem])
async def list_media(owner_id: str, tab: str | None = None) -> list[MediaItem]:
    return await media_service.list_media(owner_id, tab)

