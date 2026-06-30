from sqlalchemy.ext.asyncio import AsyncSession

from app.models.media import MediaItem
from app.repositories.base import BaseRepository


class MediaRepository(BaseRepository[MediaItem]):
    def __init__(self, session: AsyncSession) -> None:
        super().__init__(session, MediaItem)

