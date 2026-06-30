from fastapi import APIRouter

from app.schemas.common import CursorPage
from app.schemas.dugout import DugoutPlayer
from app.services import dugout_service

router = APIRouter()


@router.get("", response_model=CursorPage[DugoutPlayer])
async def dugout(
    q: str | None = None,
    sport: str | None = None,
    age_group: str | None = None,
    region: str | None = None,
) -> CursorPage[DugoutPlayer]:
    players = await dugout_service.search_players(q, sport, age_group, region)
    return CursorPage[DugoutPlayer](items=players)

