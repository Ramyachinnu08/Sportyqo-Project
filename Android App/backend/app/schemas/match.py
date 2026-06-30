from datetime import datetime
from typing import Any

from pydantic import BaseModel, Field


class Match(BaseModel):
    id: str
    league_id: str
    home_team: str
    away_team: str
    kickoff_at: datetime
    venue: str
    status: str


class MatchResultRequest(BaseModel):
    athlete_id: str
    result: str = Field(pattern="^(win|loss|draw)$")
    stats: dict[str, Any]
    awards: dict[str, Any] = {}


class MatchResultAccepted(BaseModel):
    match_id: str
    athlete_id: str
    status: str = "accepted"
    event: str = "score_recompute"

