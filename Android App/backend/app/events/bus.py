import structlog

logger = structlog.get_logger(__name__)


async def publish(event_name: str, payload: dict[str, str]) -> None:
    logger.info("event.published", event_name=event_name, payload=payload)

