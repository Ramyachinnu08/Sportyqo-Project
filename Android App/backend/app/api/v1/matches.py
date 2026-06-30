from fastapi import APIRouter, Depends

from app.api.deps import require_role
from app.schemas.auth import CurrentUser
from app.schemas.match import Match, MatchResultAccepted, MatchResultRequest
from app.services import match_service

router = APIRouter()


@router.get("/{match_id}", response_model=Match)
async def get_match(match_id: str) -> Match:
    return await match_service.get_match(match_id)


@router.post("/{match_id}/results", response_model=MatchResultAccepted, status_code=202)
async def record_result(
    match_id: str,
    payload: MatchResultRequest,
    _user: CurrentUser = Depends(require_role("coach", "organizer", "admin")),
) -> MatchResultAccepted:
    return await match_service.record_result(match_id, payload)

