from datetime import date
from uuid import uuid4

from sqlalchemy import Date, ForeignKey, Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base


class AthleteProfile(Base):
    __tablename__ = "athlete_profiles"

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid4()))
    user_id: Mapped[str] = mapped_column(ForeignKey("users.id"), unique=True, index=True)
    display_name: Mapped[str] = mapped_column(String(120))
    sport: Mapped[str] = mapped_column(String(40), index=True)
    position: Mapped[str] = mapped_column(String(80))
    dob: Mapped[date] = mapped_column(Date, nullable=True)
    age_group: Mapped[str] = mapped_column(String(20), index=True)
    location: Mapped[str] = mapped_column(String(120), index=True)
    school: Mapped[str] = mapped_column(String(160), nullable=True)
    bio: Mapped[str] = mapped_column(Text, nullable=True)


class AcademyExperience(Base):
    __tablename__ = "academy_experiences"

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid4()))
    athlete_id: Mapped[str] = mapped_column(ForeignKey("athlete_profiles.id"), index=True)
    academy: Mapped[str] = mapped_column(String(160))
    role: Mapped[str] = mapped_column(String(120))
    start_year: Mapped[int] = mapped_column(Integer)
    end_year: Mapped[int] = mapped_column(Integer, nullable=True)


class Recommendation(Base):
    __tablename__ = "recommendations"

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid4()))
    athlete_id: Mapped[str] = mapped_column(ForeignKey("athlete_profiles.id"), index=True)
    author: Mapped[str] = mapped_column(String(120))
    role: Mapped[str] = mapped_column(String(120))
    quote: Mapped[str] = mapped_column(Text)
