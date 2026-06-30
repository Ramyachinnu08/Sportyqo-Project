from uuid import uuid4

from app.core.config import get_settings
from app.schemas.media import MediaItem, PresignRequest, PresignResponse
from app.services.sample_data import ATHLETE_ID


async def create_presigned_upload(payload: PresignRequest) -> PresignResponse:
    settings = get_settings()
    media_id = str(uuid4())
    object_key = f"{ATHLETE_ID}/{payload.tab}/{media_id}-{payload.filename}"
    return PresignResponse(
        media_id=media_id,
        upload_url=f"{settings.s3_endpoint}/{settings.s3_bucket}/{object_key}",
        object_key=object_key,
        headers={"Content-Type": payload.content_type},
    )


async def list_media(owner_id: str, tab: str | None = None) -> list[MediaItem]:
    items = [
        MediaItem(
            id="media_001",
            owner_id=owner_id,
            tab="playing",
            url="https://cdn.sportyqo.test/highlights/media_001.mp4",
            content_type="video/mp4",
            status="ready",
        )
    ]
    if tab:
        return [item for item in items if item.tab == tab]
    return items

