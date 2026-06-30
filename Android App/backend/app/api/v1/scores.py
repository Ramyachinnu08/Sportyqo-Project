from fastapi import APIRouter

from app.schemas.score import QoScoreDetail, Ranking
from app.services.score import engine

router = APIRouter()


@router.get("/me", response_model=QoScoreDetail)
async def my_score() -> QoScoreDetail:
    return await engine.get_my_score()


@router.get("/me/ranking", response_model=Ranking)
async def my_ranking() -> Ranking:
    return await engine.get_my_ranking()

