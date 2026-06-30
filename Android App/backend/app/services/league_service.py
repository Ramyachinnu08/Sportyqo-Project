from uuid import uuid4

from app.core.errors import InvalidJoinCodeError, NotFoundError
from app.schemas.league import JoinLeagueRequest, League, Membership, Team
from app.services.sample_data import ATHLETE_ID, LEAGUE, LEAGUE_ID, TEAMS


async def validate_code(code: str) -> League:
    if code != LEAGUE["join_code"]:
        raise InvalidJoinCodeError(f"No active league found for code {code}")
    return League(**LEAGUE)


async def list_teams(league_id: str) -> list[Team]:
    if league_id != LEAGUE_ID:
        raise NotFoundError(f"No league found for id {league_id}")
    return [Team(**team) for team in TEAMS]


async def join_league(league_id: str, payload: JoinLeagueRequest) -> Membership:
    teams = await list_teams(league_id)
    if payload.team_id not in {team.id for team in teams}:
        raise NotFoundError(f"No team found for id {payload.team_id}")
    return Membership(
        id=str(uuid4()),
        league_id=league_id,
        team_id=payload.team_id,
        athlete_id=ATHLETE_ID,
    )

