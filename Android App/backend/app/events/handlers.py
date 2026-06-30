from app.services.score.engine import replay_season


async def handle_score_recompute(athlete_id: str, match_id: str) -> dict[str, str]:
    return {"status": "handled", "athlete_id": athlete_id, "match_id": match_id}


async def handle_replay_season(sport: str, season: str) -> dict[str, str]:
    return await replay_season(sport, season)

