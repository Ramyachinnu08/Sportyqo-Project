# FastAPI Backend

Minimal FastAPI boilerplate with health checks, versioned routing, and environment-based settings.

## Setup

```bash
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
```

## Run

```bash
uvicorn app.main:app --reload
```

API docs:

- Swagger UI: `http://127.0.0.1:8000/docs`
- ReDoc: `http://127.0.0.1:8000/redoc`

## Endpoints

- `GET /` - API welcome message
- `GET /health` - Health check
- `GET /api/v1/items` - Example endpoint

