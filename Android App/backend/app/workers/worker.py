from urllib.parse import urlparse

from arq.connections import RedisSettings

from app.core.config import get_settings
from app.workers.tasks import fanout_notifications, score_recompute, transcode_media

settings = get_settings()
redis_url = urlparse(settings.redis_url)


class WorkerSettings:
    redis_settings = RedisSettings(
        host=redis_url.hostname or "localhost",
        port=redis_url.port or 6379,
        database=int(redis_url.path.removeprefix("/") or "0"),
    )
    functions = [score_recompute, transcode_media, fanout_notifications]
