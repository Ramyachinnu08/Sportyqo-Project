from sqlalchemy.ext.asyncio import AsyncSession

from app.models.match import Match, PlayerMatchStats
from app.repositories.base import BaseRepository


class MatchRepository(BaseRepository[Match]):
    def __init__(self, session: AsyncSession) -> None:
        super().__init__(session, Match)


class PlayerMatchStatsRepository(BaseRepository[PlayerMatchStats]):
    def __init__(self, session: AsyncSession) -> None:
        super().__init__(session, PlayerMatchStats)

