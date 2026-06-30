from datetime import UTC, date, datetime, timedelta

ATHLETE_ID = "ath_001"
USER_ID = "usr_001"
LEAGUE_ID = "lg_falcons_u16"
TEAM_ID = "team_alpha"
MATCH_ID = "match_001"

PROFILE = {
    "id": ATHLETE_ID,
    "user_id": USER_ID,
    "display_name": "Aarav Mehta",
    "sport": "football",
    "position": "Forward",
    "dob": date(2010, 5, 14),
    "age_group": "U16",
    "location": "Mumbai",
    "school": "National Sports Academy",
    "bio": "Explosive forward with strong off-ball movement and consistent finishing.",
    "is_verified": True,
    "academy_experience": [
        {
            "academy": "Falcons Youth Academy",
            "role": "Forward",
            "start_year": 2022,
            "end_year": None,
        }
    ],
    "recommendations": [
        {
            "author": "Rohan Shah",
            "role": "Head Coach",
            "quote": "Aarav reads space early and converts pressure into chances.",
        }
    ],
}

LEAGUE = {
    "id": LEAGUE_ID,
    "name": "Falcons FC Youth League",
    "sport": "football",
    "age_group": "U16",
    "season": "2026",
    "join_code": "482193",
}

TEAMS = [
    {"id": TEAM_ID, "league_id": LEAGUE_ID, "name": "Alpha Warriors", "logo_url": None},
    {"id": "team_thunder", "league_id": LEAGUE_ID, "name": "Thunder Strikers", "logo_url": None},
]

MATCH = {
    "id": MATCH_ID,
    "league_id": LEAGUE_ID,
    "home_team": "Alpha Warriors",
    "away_team": "Thunder Strikers",
    "kickoff_at": datetime.now(UTC) + timedelta(days=3),
    "venue": "Cooperage Football Ground",
    "status": "scheduled",
}

DUGOUT_PLAYERS = [
    {
        "athlete_id": ATHLETE_ID,
        "display_name": "Aarav Mehta",
        "sport": "football",
        "position": "Forward",
        "age_group": "U16",
        "region": "Mumbai",
        "qo_score": 758,
        "card_tier": "green",
        "is_verified": True,
    },
    {
        "athlete_id": "ath_002",
        "display_name": "Kabir Rao",
        "sport": "cricket",
        "position": "All-rounder",
        "age_group": "U16",
        "region": "Pune",
        "qo_score": 731,
        "card_tier": "purple",
        "is_verified": True,
    },
]

