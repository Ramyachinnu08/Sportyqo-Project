from datetime import datetime
from uuid import uuid4

from sqlalchemy import DateTime, ForeignKey, Integer, String, UniqueConstraint
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base


class QoScore(Base):
    __tablename__ = "qo_scores"

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid4()))
    athlete_id: Mapped[str] = mapped_column(ForeignKey("athlete_profiles.id"), index=True)
    sport: Mapped[str] = mapped_column(String(40), index=True)
    season: Mapped[str] = mapped_column(String(40), index=True)
    score: Mapped[int] = mapped_column(Integer, default=0)
    card_tier: Mapped[str] = mapped_column(String(32))
    formula_version: Mapped[int] = mapped_column(Integer)


class QoScoreEvent(Base):
    __tablename__ = "qo_score_events"
    __table_args__ = (
        UniqueConstraint(
            "athlete_id",
            "match_id",
            "formula_version",
            name="uq_qo_score_events_idempotency",
        ),
    )

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid4()))
    athlete_id: Mapped[str] = mapped_column(ForeignKey("athlete_profiles.id"), index=True)
    match_id: Mapped[str] = mapped_column(ForeignKey("matches.id"), index=True, nullable=True)
    delta: Mapped[int] = mapped_column(Integer)
    reason: Mapped[str] = mapped_column(String(255))
    formula_version: Mapped[int] = mapped_column(Integer)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=datetime.utcnow)
