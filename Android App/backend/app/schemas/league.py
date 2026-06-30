from pydantic import BaseModel, Field


class League(BaseModel):
    id: str
    name: str
    sport: str
    age_group: str
    season: str
    join_code: str


class Team(BaseModel):
    id: str
    league_id: str
    name: str
    logo_url: str | None = None


class ValidateCodeRequest(BaseModel):
    code: str = Field(min_length=6, max_length=6)


class JoinLeagueRequest(BaseModel):
    team_id: str


class Membership(BaseModel):
    id: str
    league_id: str
    team_id: str
    athlete_id: str
    status: str = "active"

