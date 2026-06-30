from datetime import date

from pydantic import BaseModel


class QoScore(BaseModel):
    athlete_id: str
    sport: str
    season: str
    score: int
    card_tier: str
    formula_version: int


class CardProgress(BaseModel):
    current_tier: str
    next_tier: str | None
    current_score: int
    next_threshold: int | None
    points_to_next: int | None


class ScoreJourneyPoint(BaseModel):
    date: date
    score: int


class QoScoreDetail(BaseModel):
    score: QoScore
    progress: CardProgress
    journey: list[ScoreJourneyPoint]


class Ranking(BaseModel):
    rank: int
    total: int
    percentile_label: str
    scope: dict[str, str]

