from pydantic import BaseModel


class DugoutPlayer(BaseModel):
    athlete_id: str
    display_name: str
    sport: str
    position: str
    age_group: str
    region: str
    qo_score: int
    card_tier: str
    is_verified: bool

