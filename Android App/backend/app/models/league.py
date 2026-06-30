from uuid import uuid4

from sqlalchemy import ForeignKey, String
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base


class League(Base):
    __tablename__ = "leagues"

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid4()))
    name: Mapped[str] = mapped_column(String(160))
    sport: Mapped[str] = mapped_column(String(40), index=True)
    age_group: Mapped[str] = mapped_column(String(20), index=True)
    season: Mapped[str] = mapped_column(String(40), index=True)
    join_code: Mapped[str] = mapped_column(String(6), unique=True, index=True)


class Division(Base):
    __tablename__ = "divisions"

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid4()))
    league_id: Mapped[str] = mapped_column(ForeignKey("leagues.id"), index=True)
    name: Mapped[str] = mapped_column(String(120))


class Team(Base):
    __tablename__ = "teams"

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid4()))
    league_id: Mapped[str] = mapped_column(ForeignKey("leagues.id"), index=True)
    division_id: Mapped[str] = mapped_column(ForeignKey("divisions.id"), nullable=True)
    name: Mapped[str] = mapped_column(String(120))
    logo_url: Mapped[str] = mapped_column(String(500), nullable=True)


class TeamMembership(Base):
    __tablename__ = "team_memberships"

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid4()))
    team_id: Mapped[str] = mapped_column(ForeignKey("teams.id"), index=True)
    athlete_id: Mapped[str] = mapped_column(ForeignKey("athlete_profiles.id"), index=True)
    status: Mapped[str] = mapped_column(String(32), default="active")
