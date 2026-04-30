.PHONY: help build up down test lint migrate discover-ad analyze-risks run-migration-plan validate-identity

help:
	@echo "Legacy AD Modernisation - Management Commands"
	@echo "------------------------------------------"
	@echo "build           : Build all containers"
	@echo "up              : Start all services"
	@echo "down            : Stop all services"
	@echo "test            : Run all tests"
	@echo "lint            : Run linting checks"
	@echo "migrate         : Run database migrations"
	@echo "discover-ad     : Trigger Active Directory environment discovery"
	@echo "analyze-risks   : Execute security and legacy risk analysis"
	@echo "run-migration-plan: Orchestrate identity migration to hybrid/cloud"
	@echo "validate-identity: Perform post-migration identity verification"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

test:
	pytest tests/api
	npm test --prefix apps/web

lint:
	flake8 apps/api apps/worker
	npm run lint --prefix apps/web

migrate:
	docker-compose exec api alembic upgrade head

discover-ad:
	docker-compose exec api python scripts/discover/scan_topology.py

analyze-risks:
	docker-compose exec api python scripts/discover/evaluate_security.py

run-migration-plan:
	docker-compose exec api python scripts/migrate/execute_transform.py

validate-identity:
	docker-compose exec api python scripts/validate/check_consistency.py
