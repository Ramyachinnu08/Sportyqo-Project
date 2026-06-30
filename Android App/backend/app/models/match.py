from datetime import datetime
from typing import Any
from uuid import uuid4

from sqlalchemy import DateTime, ForeignKey, JSON, String
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base


class Match(Base):
    __tablename__ = "matches"

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid4()))
    league_id: Mapped[str] = mapped_column(ForeignKey("leagues.id"), index=True)
    home_team_id: Mapped[str] = mapped_column(ForeignKey("teams.id"))
    away_team_id: Mapped[str] = mapped_column(ForeignKey("teams.id"))
    kickoff_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), index=True)
    venue: Mapped[str] = mapped_column(String(160))
    status: Mapped[str] = mapped_column(String(32), index=True)


class PlayerMatchStats(Base):
    __tablename__ = "player_match_stats"

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid4()))
    match_id: Mapped[str] = mapped_column(ForeignKey("matches.id"), index=True)
    athlete_id: Mapped[str] = mapped_column(ForeignKey("athlete_profiles.id"), index=True)
    stats: Mapped[dict[str, Any]] = mapped_column(JSON)
    result: Mapped[str] = mapped_column(String(16))
    awards: Mapped[dict[str, Any]] = mapped_column(JSON, default=dict)
    qo_points: Mapped[int] = mapped_column(nullable=True)
    score_status: Mapped[str] = mapped_column(String(32), default="pending_score")
