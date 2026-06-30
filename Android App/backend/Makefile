.PHONY: up down logs migrate revision seed test lint fmt shell run

up:
	docker compose up --build

down:
	docker compose down

logs:
	docker compose logs -f api worker

migrate:
	alembic upgrade head

revision:
	alembic revision --autogenerate -m "$(m)"

seed:
	python -m app.seed

test:
	pytest

lint:
	ruff check .
	black --check .
	mypy app

fmt:
	ruff check --fix .
	black .

shell:
	python

run:
	uvicorn app.main:app --reload --port 8000

