# SportyQo Backend (FastAPI)

Enterprise-grade, async FastAPI service powering identity, leagues, matches, the **Qo Score
engine**, media, and the Dugout discovery feed.

Designed around two non-negotiables: **easy to debug** (structured logs, correlation IDs,
tracing, RFC 9457 errors, reproducible local stack) and **enterprise-grade** (layered
architecture, RBAC, migrations, an auditable score ledger, full test coverage).

---

## Table of contents
1. [Stack](#stack)
2. [Architecture & layering](#architecture--layering)
3. [Project structure](#project-structure)
4. [Quick start](#quick-start)
5. [Configuration](#configuration)
6. [Database & migrations](#database--migrations)
7. [Running & developing](#running--developing)
8. [Background workers](#background-workers)
9. [Testing](#testing)
10. [Debugging & observability](#debugging--observability)
11. [Code conventions](#code-conventions)
12. [API reference](#api-reference)

---

## Stack

| Concern | Tool |
|---------|------|
| Web framework | FastAPI (async) |
| Server | Uvicorn (dev) / Gunicorn + Uvicorn workers (prod) |
| ORM | SQLAlchemy 2.0 (async) |
| Migrations | Alembic |
| Database | PostgreSQL 16 |
| Cache / ranks / rate limit | Redis 7 |
| Background jobs | ARQ (async-native) |
| Object storage | S3 / MinIO (presigned uploads) |
| Validation / settings | Pydantic v2 / pydantic-settings |
| Auth | OAuth2 + JWT (access + refresh) |
| Logging | structlog (JSON) |
| Tracing / metrics | OpenTelemetry + Prometheus |
| Errors | Sentry + RFC 9457 problem+json |
| Tests | pytest, pytest-asyncio, httpx, testcontainers, factory_boy |
| Lint / format / types | ruff, black, mypy, pre-commit |

---

## Architecture & layering

A request flows through **four strict layers**. Each layer only knows the one below it, which
keeps business logic testable and makes stack traces shallow and obvious.

```
HTTP  →  Router (api/)        ── request/response, auth deps, status codes, NO business logic
      →  Service (services/)  ── business rules, orchestration, transactions, domain events
      →  Repository (repos/)  ── all DB access; the only layer that touches SQLAlchemy sessions
      →  Model (models/)      ── ORM tables; Schemas (schemas/) are Pydantic I/O contracts
```

Rules that keep it debuggable:
- Routers never import repositories directly — they call services.
- Services never build raw SQL — they call repositories.
- Pydantic **schemas** (`schemas/`) are the only things crossing the HTTP boundary; ORM
  **models** never leak out of the service layer.
- Side effects (score recompute, notifications, media processing) are emitted as **events**
  and handled by workers — request latency stays low and the hot path is easy to read.

---

## Project structure

```
backend/
├── README.md
├── pyproject.toml              # deps, ruff/black/mypy config
├── Makefile                    # one-word commands (see below)
├── docker-compose.yml          # api + worker + postgres + redis + minio + mailhog
├── Dockerfile
├── .env.example
├── alembic/                    # migrations
│   └── versions/
└── app/
    ├── main.py                 # FastAPI app factory, middleware, exception handlers, lifespan
    ├── core/
    │   ├── config.py           # Pydantic Settings (env-driven)
    │   ├── logging.py          # structlog setup (JSON, request-id processor)
    │   ├── security.py         # JWT, password hashing, RBAC dependencies
    │   ├── middleware.py       # request-id, timing, exception → problem+json
    │   ├── telemetry.py        # OpenTelemetry + Prometheus wiring
    │   └── errors.py           # AppError hierarchy → RFC 9457 responses
    ├── db/
    │   ├── session.py          # async engine + session factory + get_session dependency
    │   └── base.py             # declarative Base, naming conventions
    ├── events/
    │   ├── bus.py              # publish() → enqueues ARQ task
    │   └── handlers.py         # subscribers (score recompute, notify, media)
    ├── api/
    │   ├── deps.py             # shared dependencies (current_user, require_role, pagination)
    │   └── v1/
    │       ├── router.py       # mounts all v1 routers under /api/v1
    │       ├── auth.py
    │       ├── profiles.py     # Profile + Playbook
    │       ├── leagues.py      # join-code, teams, memberships
    │       ├── matches.py      # fixtures + result recording
    │       ├── scores.py       # Qo Score, card progress, journey, ranking
    │       ├── dugout.py       # search / filter / leaderboard
    │       └── media.py        # presigned uploads, media items
    ├── services/               # one module per bounded context
    │   ├── auth_service.py
    │   ├── profile_service.py
    │   ├── league_service.py
    │   ├── match_service.py
    │   ├── score/
    │   │   ├── engine.py        # pure compute: stats -> qo_points
    │   │   ├── strategies.py    # per-sport ScoringStrategy (cricket, football, ...)
    │   │   ├── cards.py         # configurable tier bands
    │   │   └── ranking.py       # Redis ZSET leaderboards
    │   ├── dugout_service.py
    │   ├── media_service.py
    │   └── notification_service.py
    ├── repositories/           # DB access only
    │   ├── base.py             # generic async CRUD repo
    │   ├── user_repo.py
    │   ├── league_repo.py
    │   ├── match_repo.py
    │   ├── score_repo.py        # qo_scores + qo_score_events (ledger)
    │   └── media_repo.py
    ├── models/                 # SQLAlchemy ORM
    │   ├── user.py
    │   ├── profile.py
    │   ├── league.py  team.py  membership.py
    │   ├── match.py   stats.py
    │   ├── score.py            # QoScore + QoScoreEvent
    │   ├── media.py
    │   └── social.py           # follows, recommendations, notifications
    ├── schemas/                # Pydantic request/response DTOs (mirror models/)
    └── workers/
        ├── worker.py           # ARQ worker entrypoint
        └── tasks.py            # score_recompute, transcode_media, fanout_notifications
```

---

## Quick start

Everything runs in Docker — no local Postgres/Redis needed.

```bash
cd backend
cp .env.example .env            # adjust secrets if you like
make up                         # build + start the full stack
make migrate                    # apply Alembic migrations
make seed                       # optional: demo athletes, leagues, matches
```

Then open:

| URL | What |
|-----|------|
| http://localhost:8000/api/v1/docs | Swagger UI (interactive API) |
| http://localhost:8000/api/v1/redoc | ReDoc |
| http://localhost:8000/health | Liveness probe |
| http://localhost:8000/ready | Readiness (checks DB + Redis) |
| http://localhost:8000/metrics | Prometheus metrics |
| http://localhost:9001 | MinIO console (media) |
| http://localhost:8025 | Mailhog (captured emails) |

### Makefile commands

```
make up        # docker compose up --build
make down      # stop and remove containers
make logs      # tail structured logs
make migrate   # alembic upgrade head
make revision m="add x"   # autogenerate a migration
make seed      # load demo data
make test      # run the test suite
make lint      # ruff + black --check + mypy
make fmt       # ruff --fix + black
make shell     # python shell with app context
```

---

## Configuration

All config is environment-driven via `app/core/config.py` (Pydantic `Settings`). Nothing is
hard-coded; nothing secret is committed. Key variables (`.env.example`):

```dotenv
ENV=local                       # local | staging | production
LOG_LEVEL=DEBUG                 # DEBUG locally, INFO in prod
DATABASE_URL=postgresql+asyncpg://sportyqo:sportyqo@db:5432/sportyqo
REDIS_URL=redis://redis:6379/0
JWT_SECRET=change-me
JWT_ACCESS_TTL_SECONDS=900
JWT_REFRESH_TTL_SECONDS=2592000
S3_ENDPOINT=http://minio:9000
S3_BUCKET=sportyqo-media
QO_FORMULA_VERSION=1            # bump to roll a new scoring model
SENTRY_DSN=                     # empty disables Sentry
OTEL_EXPORTER_OTLP_ENDPOINT=    # empty disables tracing export
```

---

## Database & migrations

- SQLAlchemy 2.0 async models in `app/models/`, with a consistent naming convention so Alembic
  diffs are clean.
- **Never edit the schema by hand.** Generate a migration:

```bash
make revision m="add qo_score_event ledger"
make migrate
```

- The Qo Score is stored as both a **current value** (`qo_scores`) and an **append-only
  ledger** (`qo_score_events`). The ledger is the source of truth and lets you replay history
  when `QO_FORMULA_VERSION` changes.

---

## Running & developing

Hot reload is on in the `api` container (`uvicorn --reload`). Edit a file under `app/` and the
server restarts automatically; logs stream via `make logs`.

To run the API without Docker (for IDE debugging):

```bash
uv pip install -e ".[dev]"      # or pip
uvicorn app.main:app --reload --port 8000
```

Point `DATABASE_URL`/`REDIS_URL` at the Docker services (`localhost:5432`, `localhost:6379`).

---

## Background workers

Workers consume domain events and run the heavy/bursty work off the request path:

- `score_recompute(athlete_id, match_id)` — idempotent; appends a ledger event, updates the
  score + card tier, updates the Redis leaderboard, enqueues a notification.
- `transcode_media(media_id)` — generates thumbnails/renditions, flips media to `ready`.
- `fanout_notifications(...)` — push/email/SMS.

Run locally (already started by `make up`) or standalone:

```bash
arq app.workers.worker.WorkerSettings
```

Because recompute is **idempotent and versioned**, you can safely re-run the whole season:

```bash
make shell
>>> from app.services.score.engine import replay_season
>>> await replay_season(sport="cricket", season="2024-25")
```

---

## Testing

```bash
make test                  # full suite
pytest tests/unit          # fast, pure-logic (score engine strategies)
pytest tests/integration   # spins ephemeral Postgres/Redis via testcontainers
pytest -k qo_score -vv     # focus
```

Test layers mirror the architecture:
- **Unit** — `services/score/` strategies and `engine.py` are pure functions: feed stats,
  assert `qo_points`. No DB.
- **Integration** — real Postgres + Redis (testcontainers), exercising repositories and the
  recompute worker.
- **API/contract** — `httpx.AsyncClient` against the app, asserting status codes, RBAC, and
  RFC 9457 error bodies.

Fixtures use `factory_boy` for athletes, leagues, and matches so tests read like the domain.

---

## Debugging & observability

This service is built to be diagnosed quickly.

**Correlation IDs.** Every request gets an `X-Request-ID` (generated or echoed). It is attached
to every log line and propagated to workers, so you can grep one ID across the whole lifecycle
of a match-result submission, including the async score recompute.

**Structured logs.** JSON via structlog. Example:

```json
{"event":"score.recomputed","request_id":"a1b2","athlete_id":"...","match_id":"...",
 "delta":63,"new_score":242,"card_tier":"green","formula_version":1,"level":"info"}
```

Set `LOG_LEVEL=DEBUG` locally for SQL echo and verbose service logs.

**Consistent errors (RFC 9457).** All exceptions funnel through one handler and return
`application/problem+json`:

```json
{"type":"https://sportyqo.dev/errors/invalid-join-code","title":"Invalid league code",
 "status":404,"detail":"No active league found for code 4821X9","request_id":"a1b2"}
```

Domain errors subclass `AppError` (in `core/errors.py`) and declare their own type/status, so
clients get stable, documented error codes instead of opaque 500s.

**Tracing & metrics.** OpenTelemetry auto-instruments FastAPI, SQLAlchemy, and Redis; set
`OTEL_EXPORTER_OTLP_ENDPOINT` to ship spans. `/metrics` exposes request latency/error counters
plus custom counters like `qo_score_recompute_total`.

**Health probes.** `/health` (liveness) and `/ready` (checks DB + Redis) for k8s and load
balancers.

**Step debugging.** Run uvicorn from your IDE (see [Running](#running--developing)) and set
breakpoints in services — because routers contain no logic, the interesting frames are always
in `services/`.

---

## Code conventions

- **Async all the way** — async endpoints, async SQLAlchemy, async Redis; never block the loop.
- **Type everything** — `mypy` runs in CI; public service functions are fully typed.
- **No business logic in routers; no SQL in services.** Enforced by review.
- **One service per bounded context.** New feature → new/extended service + repository, not
  fatter routers.
- **Events for side effects.** If an action triggers scoring, notifications, or media work,
  publish an event rather than calling inline.
- **pre-commit** runs ruff + black + mypy before every commit (`pre-commit install`).

---

## API reference

Full, always-current interactive docs at `/api/v1/docs`. Representative endpoints:

| Method | Path | Purpose |
|--------|------|---------|
| `POST` | `/api/v1/auth/register` · `/login` · `/refresh` | Auth |
| `GET`  | `/api/v1/home` | Home dashboard aggregate (score + delta, active league, next match) |
| `POST` | `/api/v1/leagues/validate-code` | Validate a 6-digit join code (rate-limited) |
| `GET`  | `/api/v1/leagues/{id}/teams` | Teams available to join |
| `POST` | `/api/v1/leagues/{id}/join` | Create team membership |
| `GET`  | `/api/v1/dugout` | Search/filter by sport, sorted by Qo Score |
| `GET`  | `/api/v1/profiles/{id}` · `/playbook` | Profile + Playbook media tabs |
| `POST` | `/api/v1/media/presign` | Presigned upload URL |
| `GET`  | `/api/v1/scores/me` | Qo Score, card progress, season journey |
| `GET`  | `/api/v1/scores/me/ranking` | Rank within sport/age group |
| `POST` | `/api/v1/matches/{id}/results` | (coach/organizer) record result → triggers recompute |

All list endpoints use cursor pagination; protected endpoints require a Bearer token and the
appropriate role.
