from datetime import date, timedelta
from typing import Any

from app.core.config import get_settings
from app.schemas.score import CardProgress, QoScore, QoScoreDetail, Ranking, ScoreJourneyPoint
from app.services.sample_data import ATHLETE_ID
from app.services.score.cards import next_band, tier_for_score
from app.services.score.strategies import strategy_for_sport


def compute_qo_points(
    sport: str,
    stats: dict[str, Any],
    result: str,
    awards: dict[str, Any] | None = None,
) -> int:
    return strategy_for_sport(sport).compute(stats, result, awards or {})


async def get_my_score() -> QoScoreDetail:
    settings = get_settings()
    current_score = 758
    next_tier = next_band(current_score)
    return QoScoreDetail(
        score=QoScore(
            athlete_id=ATHLETE_ID,
            sport="football",
            season="2026",
            score=current_score,
            card_tier=tier_for_score(current_score),
            formula_version=settings.qo_formula_version,
        ),
        progress=CardProgress(
            current_tier=tier_for_score(current_score),
            next_tier=next_tier.name if next_tier else None,
            current_score=current_score,
            next_threshold=next_tier.min_score if next_tier else None,
            points_to_next=next_tier.min_score - current_score if next_tier else None,
        ),
        journey=[
            ScoreJourneyPoint(date=date.today() - timedelta(days=60), score=682),
            ScoreJourneyPoint(date=date.today() - timedelta(days=30), score=723),
            ScoreJourneyPoint(date=date.today(), score=current_score),
        ],
    )


async def get_my_ranking() -> Ranking:
    return Ranking(
        rank=14,
        total=280,
        percentile_label="Top 5%",
        scope={"sport": "football", "age_group": "U16", "region": "Mumbai"},
    )


async def replay_season(sport: str, season: str) -> dict[str, str]:
    return {"status": "queued", "sport": sport, "season": season}

