from fastapi import APIRouter

from app.api.v1 import auth, dugout, leagues, matches, media, profiles, scores

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(profiles.router, tags=["profiles"])
api_router.include_router(leagues.router, prefix="/leagues", tags=["leagues"])
api_router.include_router(matches.router, prefix="/matches", tags=["matches"])
api_router.include_router(scores.router, prefix="/scores", tags=["scores"])
api_router.include_router(dugout.router, prefix="/dugout", tags=["dugout"])
api_router.include_router(media.router, prefix="/media", tags=["media"])

