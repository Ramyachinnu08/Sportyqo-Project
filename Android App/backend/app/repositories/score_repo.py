from sqlalchemy.ext.asyncio import AsyncSession

from app.models.score import QoScore, QoScoreEvent
from app.repositories.base import BaseRepository


class QoScoreRepository(BaseRepository[QoScore]):
    def __init__(self, session: AsyncSession) -> None:
        super().__init__(session, QoScore)


class QoScoreEventRepository(BaseRepository[QoScoreEvent]):
    def __init__(self, session: AsyncSession) -> None:
        super().__init__(session, QoScoreEvent)

