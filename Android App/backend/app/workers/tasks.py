from app.events.handlers import handle_score_recompute


async def score_recompute(ctx: dict[str, str], athlete_id: str, match_id: str) -> dict[str, str]:
    return await handle_score_recompute(athlete_id, match_id)


async def transcode_media(ctx: dict[str, str], media_id: str) -> dict[str, str]:
    return {"status": "queued", "media_id": media_id}


async def fanout_notifications(ctx: dict[str, str], user_id: str) -> dict[str, str]:
    return {"status": "queued", "user_id": user_id}

