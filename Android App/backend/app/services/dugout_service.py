from app.schemas.dugout import DugoutPlayer
from app.services.sample_data import DUGOUT_PLAYERS


async def search_players(
    query: str | None = None,
    sport: str | None = None,
    age_group: str | None = None,
    region: str | None = None,
) -> list[DugoutPlayer]:
    players = [DugoutPlayer(**player) for player in DUGOUT_PLAYERS]
    if query:
        players = [player for player in players if query.lower() in player.display_name.lower()]
    if sport:
        players = [player for player in players if player.sport == sport]
    if age_group:
        players = [player for player in players if player.age_group == age_group]
    if region:
        players = [player for player in players if player.region == region]
    return sorted(players, key=lambda player: player.qo_score, reverse=True)

