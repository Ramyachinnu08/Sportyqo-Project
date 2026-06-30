from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.league import League, Team
from app.repositories.base import BaseRepository


class LeagueRepository(BaseRepository[League]):
    def __init__(self, session: AsyncSession) -> None:
        super().__init__(session, League)

    async def get_by_join_code(self, join_code: str) -> League | None:
        result = await self.session.execute(select(League).where(League.join_code == join_code))
        return result.scalar_one_or_none()

    async def list_teams(self, league_id: str) -> list[Team]:
        result = await self.session.execute(select(Team).where(Team.league_id == league_id))
        return list(result.scalars().all())

