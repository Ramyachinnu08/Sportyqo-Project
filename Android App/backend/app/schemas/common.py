from pydantic import BaseModel, Field


class CursorPage[T](BaseModel):
    items: list[T]
    next_cursor: str | None = None


class MessageResponse(BaseModel):
    message: str


class SportFilter(BaseModel):
    sport: str | None = Field(default=None, examples=["football"])
    age_group: str | None = Field(default=None, examples=["U16"])
    region: str | None = Field(default=None, examples=["Mumbai"])

