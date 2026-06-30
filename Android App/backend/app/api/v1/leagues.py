from fastapi import APIRouter

from app.schemas.league import JoinLeagueRequest, League, Membership, Team, ValidateCodeRequest
from app.services import league_service

router = APIRouter()


@router.post("/validate-code", response_model=League)
async def validate_code(payload: ValidateCodeRequest) -> League:
    return await league_service.validate_code(payload.code)


@router.get("/{league_id}/teams", response_model=list[Team])
async def list_teams(league_id: str) -> list[Team]:
    return await league_service.list_teams(league_id)


@router.post("/{league_id}/join", response_model=Membership, status_code=201)
async def join_league(league_id: str, payload: JoinLeagueRequest) -> Membership:
    return await league_service.join_league(league_id, payload)

