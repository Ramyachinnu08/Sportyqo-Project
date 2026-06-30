# SportyQo Backend Feature Tester

Small dependency-free web app for checking whether the backend features documented in
`README_BACKEND.md` are implemented and responding correctly.

## Run

Start the backend first:

```bash
cd backend
uvicorn app.main:app --reload --port 8000
```

Then run the frontend tester:

```bash
cd frontend-test
python3 server.py --port 5173 --backend http://127.0.0.1:8000
```

Open `http://127.0.0.1:5173` and click **Run checks**.

Leave the **API base URL** field blank to use the built-in same-origin proxy. Enter a full
backend URL only if the backend has browser CORS enabled.

## What It Checks

- health and readiness probes
- auth register, login, and refresh
- home dashboard
- league code validation, teams, and join flow
- Dugout search
- athlete profile
- Playbook/media listing and presigned upload payload
- Qo score, progress, journey, and ranking
- match result recording with a coach token
- README consistency for the older `/api/v1/items` endpoint

The Python server serves static files and proxies `/api`, `/health`, `/ready`, and `/metrics`
to the backend, so the browser does not need backend CORS configuration.
