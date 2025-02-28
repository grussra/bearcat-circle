# server/app/models/pydantic.py

from pydantic import BaseModel


class SummaryPayloadSchema(BaseModel):
    url: str

class SummaryResponseSchema(SummaryPayloadSchema):
    id: int

class UserPayloadSchema(BaseModel):
    name: str

class UserResponseSchema(BaseModel):
    id: int