from fastapi import APIRouter

from app.schemas.media import MediaItem
from app.schemas.profile import AthleteProfile, HomeDashboard
from app.services import media_service, profile_service

router = APIRouter()


@router.get("/home", response_model=HomeDashboard)
async def home() -> HomeDashboard:
    return await profile_service.get_home_dashboard()


@router.get("/profiles/{profile_id}", response_model=AthleteProfile)
async def get_profile(profile_id: str) -> AthleteProfile:
    return await profile_service.get_profile(profile_id)


@router.get("/profiles/{profile_id}/playbook", response_model=list[MediaItem])
async def get_playbook(profile_id: str, tab: str | None = None) -> list[MediaItem]:
    await profile_service.get_profile(profile_id)
    return await media_service.list_media(profile_id, tab=tab)

