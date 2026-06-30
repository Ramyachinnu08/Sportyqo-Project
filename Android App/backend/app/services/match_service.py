from app.core.errors import NotFoundError
from app.schemas.match import Match, MatchResultAccepted, MatchResultRequest
from app.services.sample_data import MATCH, MATCH_ID


async def get_match(match_id: str) -> Match:
    if match_id != MATCH_ID:
        raise NotFoundError(f"No match found for id {match_id}")
    return Match(**MATCH)


async def record_result(match_id: str, payload: MatchResultRequest) -> MatchResultAccepted:
    await get_match(match_id)
    return MatchResultAccepted(match_id=match_id, athlete_id=payload.athlete_id)

