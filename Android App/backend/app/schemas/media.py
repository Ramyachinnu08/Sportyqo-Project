from pydantic import BaseModel, Field


class PresignRequest(BaseModel):
    filename: str
    content_type: str
    tab: str = Field(default="playing", pattern="^(playing|certificates|team|trophies)$")


class PresignResponse(BaseModel):
    media_id: str
    upload_url: str
    object_key: str
    headers: dict[str, str]


class MediaItem(BaseModel):
    id: str
    owner_id: str
    tab: str
    url: str
    content_type: str
    status: str

