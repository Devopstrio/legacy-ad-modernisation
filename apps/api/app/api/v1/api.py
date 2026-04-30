from fastapi import APIRouter
from app.api.v1.endpoints import (
    auth, ad, security, migration, dashboard
)

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(ad.router, prefix="/ad", tags=["ad"])
api_router.include_router(security.router, prefix="/security", tags=["security"])
api_router.include_router(migration.router, prefix="/migration", tags=["migration"])
api_router.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])
