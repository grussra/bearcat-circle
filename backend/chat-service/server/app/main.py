# server/app/main.py

import logging

from fastapi import FastAPI

from app.api import ping, summaries
from app.sockets import sio_app
from app.db import init_db


log = logging.getLogger("uvicorn")

def create_application() -> FastAPI:
    application = FastAPI(title="Bearcat Circle")
    application.include_router(ping.router)
    application.include_router(summaries.router, prefix="/summaries", tags=["summaries"])
    application.mount("/ws", sio_app)
    return application

app = create_application()


@app.on_event("startup")
async def startup_event():
    log.info("Starting up...")
    init_db(app)

@app.on_event("shutdown")
async def shutdown_event():
    log.info("Shutting down...")