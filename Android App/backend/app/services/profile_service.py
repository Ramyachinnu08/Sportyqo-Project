from app.core.errors import NotFoundError
from app.schemas.profile import AthleteProfile, HomeDashboard
from app.services.sample_data import ATHLETE_ID, LEAGUE, MATCH, PROFILE


async def get_profile(profile_id: str) -> AthleteProfile:
    if profile_id != ATHLETE_ID:
        raise NotFoundError(f"No profile found for id {profile_id}")
    return AthleteProfile(**PROFILE)


async def get_home_dashboard() -> HomeDashboard:
    return HomeDashboard(
        profile=AthleteProfile(**PROFILE),
        qo_score=758,
        monthly_delta=35,
        card_tier="green",
        active_league={"id": LEAGUE["id"], "name": LEAGUE["name"], "status": "active"},
        upcoming_match={
            "id": MATCH["id"],
            "label": f"{MATCH['home_team']} vs {MATCH['away_team']}",
            "venue": MATCH["venue"],
        },
    )

