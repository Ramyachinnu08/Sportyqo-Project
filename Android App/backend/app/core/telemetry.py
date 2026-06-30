from fastapi import APIRouter, Response

router = APIRouter()


@router.get("/metrics", include_in_schema=False)
def metrics() -> Response:
    content = "\n".join(
        [
            "# HELP sportyqo_app_info SportyQo application info",
            "# TYPE sportyqo_app_info gauge",
            'sportyqo_app_info{service="api"} 1',
            "",
        ]
    )
    return Response(content=content, media_type="text/plain; version=0.0.4")

