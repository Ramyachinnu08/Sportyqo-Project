from datetime import date

from pydantic import BaseModel


class AcademyExperience(BaseModel):
    academy: str
    role: str
    start_year: int
    end_year: int | None = None


class Recommendation(BaseModel):
    author: str
    role: str
    quote: str


class AthleteProfile(BaseModel):
    id: str
    user_id: str
    display_name: str
    sport: str
    position: str
    dob: date | None = None
    age_group: str
    location: str
    school: str | None = None
    bio: str | None = None
    is_verified: bool = True
    academy_experience: list[AcademyExperience] = []
    recommendations: list[Recommendation] = []


class HomeDashboard(BaseModel):
    profile: AthleteProfile
    qo_score: int
    monthly_delta: int
    card_tier: str
    active_league: dict[str, str]
    upcoming_match: dict[str, str]

