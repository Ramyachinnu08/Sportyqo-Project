const FIXTURES = {
  athleteId: "ath_001",
  leagueId: "lg_falcons_u16",
  teamId: "team_alpha",
  matchId: "match_001",
  joinCode: "482193",
};

const state = {
  backendUrl: "",
  tokens: null,
  tests: [],
};

const checks = [
  {
    id: "health",
    feature: "Health probes",
    request: "GET /health, GET /ready",
    description: "Liveness and readiness checks respond successfully.",
    run: async () => {
      const health = await api("/health");
      const ready = await api("/ready");
      assert(health.status === 200, "Health endpoint should return 200.");
      assert(ready.status === 200, "Ready endpoint should return 200.");
      return `health=${health.data.status}, ready=${ready.data.status}`;
    },
  },
  {
    id: "auth",
    feature: "Auth",
    request: "POST /api/v1/auth/register, /login, /refresh",
    description: "Registers a user, logs in, and refreshes JWT tokens.",
    run: async () => {
      const email = `coach.${Date.now()}@sportyqo.test`;
      const password = "Password123";
      const register = await api("/api/v1/auth/register", {
        method: "POST",
        body: { email, password, role: "coach", display_name: "Coach Tester" },
      });
      assert(register.status === 201, "Register should return 201.");
      const login = await api("/api/v1/auth/login", {
        method: "POST",
        body: { email, password },
      });
      assert(login.status === 200, "Login should return 200.");
      const refresh = await api("/api/v1/auth/refresh", {
        method: "POST",
        body: { refresh_token: login.data.refresh_token },
      });
      assert(refresh.status === 200, "Refresh should return 200.");
      state.tokens = login.data;
      return "JWT pair issued and refresh succeeded.";
    },
  },
  {
    id: "home",
    feature: "Home dashboard",
    request: "GET /api/v1/home",
    description: "Loads score, active league, and next match for the home screen.",
    run: async () => {
      const response = await api("/api/v1/home");
      assert(response.status === 200, "Home should return 200.");
      assert(response.data.profile?.id === FIXTURES.athleteId, "Home profile should use fixture athlete.");
      renderHome(response.data);
      return `${response.data.profile.display_name}, Qo ${response.data.qo_score}`;
    },
  },
  {
    id: "league",
    feature: "Join league",
    request: "POST /leagues/validate-code, GET /teams, POST /join",
    description: "Validates a join code, lists teams, and creates membership.",
    run: runLeagueFlow,
  },
  {
    id: "dugout",
    feature: "Dugout discovery",
    request: "GET /api/v1/dugout?q=Aarav&sport=football",
    description: "Searches players and returns results sorted by Qo Score.",
    run: async () => {
      const response = await api("/api/v1/dugout?q=Aarav&sport=football");
      assert(response.status === 200, "Dugout should return 200.");
      assert(Array.isArray(response.data.items), "Dugout should return a paged items array.");
      renderDugout(response.data.items);
      return `${response.data.items.length} matching player(s).`;
    },
  },
  {
    id: "profile",
    feature: "Profile",
    request: "GET /api/v1/profiles/ath_001",
    description: "Loads academy experience, recommendations, sport, and profile metadata.",
    run: async () => {
      const response = await api(`/api/v1/profiles/${FIXTURES.athleteId}`);
      assert(response.status === 200, "Profile should return 200.");
      renderProfile(response.data);
      return `${response.data.display_name}, ${response.data.position}`;
    },
  },
  {
    id: "playbook",
    feature: "Playbook media",
    request: "GET /profiles/{id}/playbook, GET /media, POST /media/presign",
    description: "Lists media tabs and creates a presigned upload payload.",
    run: runMediaFlow,
  },
  {
    id: "scores",
    feature: "Qo Score and ranking",
    request: "GET /api/v1/scores/me, GET /me/ranking",
    description: "Loads score detail, card progress, journey, and ranking.",
    run: async () => {
      const score = await api("/api/v1/scores/me");
      const ranking = await api("/api/v1/scores/me/ranking");
      assert(score.status === 200, "Score should return 200.");
      assert(ranking.status === 200, "Ranking should return 200.");
      renderPerformance(score.data, ranking.data);
      return `Qo ${score.data.score.score}, rank #${ranking.data.rank}/${ranking.data.total}`;
    },
  },
  {
    id: "match",
    feature: "Match result recording",
    request: "GET /matches/{id}, POST /matches/{id}/results",
    description: "Reads a fixture and attempts result submission with a coach token.",
    run: async () => {
      const match = await api(`/api/v1/matches/${FIXTURES.matchId}`);
      assert(match.status === 200, "Match should return 200.");
      const result = await api(`/api/v1/matches/${FIXTURES.matchId}/results`, {
        method: "POST",
        token: state.tokens?.access_token,
        body: {
          athlete_id: FIXTURES.athleteId,
          result: "win",
          stats: { goals: 2, assists: 1, minutes: 70 },
          awards: { player_of_match: true },
        },
      });
      if (result.status === 202) {
        return "Result accepted and score recompute event returned.";
      }
      return warn(
        `Expected 202 for coach/organizer result recording, got ${result.status}. ` +
          "The backend currently resolves Bearer users as the demo athlete, so RBAC blocks coach tokens.",
      );
    },
  },
  {
    id: "readme-gap",
    feature: "README route consistency",
    request: "GET /api/v1/items",
    description: "Checks the older backend README endpoint still exists.",
    run: async () => {
      const response = await api("/api/v1/items");
      if (response.status === 404) {
        return warn("backend/README.md mentions /api/v1/items, but the current router does not implement it.");
      }
      assert(response.status === 200, "Items endpoint should return 200 if documented.");
      return "Legacy items endpoint is present.";
    },
  },
];

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function warn(message) {
  return { warning: true, message };
}

async function api(path, options = {}) {
  const headers = { Accept: "application/json", ...(options.headers || {}) };
  if (options.body) {
    headers["Content-Type"] = "application/json";
  }
  if (options.token) {
    headers.Authorization = `Bearer ${options.token}`;
  }

  const started = performance.now();
  try {
    const response = await fetch(`${state.backendUrl}${path}`, {
      method: options.method || "GET",
      headers,
      body: options.body ? JSON.stringify(options.body) : undefined,
    });
    const text = await response.text();
    const data = text ? safeJson(text) : null;
    return {
      status: response.status,
      ok: response.ok,
      data,
      ms: Math.round(performance.now() - started),
    };
  } catch (error) {
    return {
      status: 0,
      ok: false,
      data: { detail: error.message },
      ms: Math.round(performance.now() - started),
    };
  }
}

function safeJson(text) {
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

async function runLeagueFlow() {
  const code = document.querySelector("#joinCode").value.trim() || FIXTURES.joinCode;
  const league = await api("/api/v1/leagues/validate-code", {
    method: "POST",
    body: { code },
  });
  assert(league.status === 200, "Validate code should return 200.");
  const teamsResp = await api(`/api/v1/leagues/${league.data.id}/teams`);
  assert(teamsResp.status === 200, "Teams should return 200.");
  const teams = teamsResp.data?.items || teamsResp.data || [];
  assert(Array.isArray(teams) && teams.length > 0, "At least one team should be returned.");
  const join = await api(`/api/v1/leagues/${league.data.id}/join`, {
    method: "POST",
    body: { team_id: teams[0].id },
  });
  assert(join.status === 201, "Join should return 201.");
  renderLeague(league.data, teams, join.data);
  return `${league.data.name}; joined ${teams[0].name}.`;
}

async function runMediaFlow() {
  const tab = document.querySelector("#mediaTab").value;
  const playbook = await api(`/api/v1/profiles/${FIXTURES.athleteId}/playbook?tab=${tab}`);
  const mediaResp = await api(`/api/v1/media?owner_id=${FIXTURES.athleteId}&tab=${tab}`);
  const presignResp = await api("/api/v1/media/presign", {
    method: "POST",
    body: { filename: "highlight.mp4", content_type: "video/mp4", tab },
  });
  assert(playbook.status === 200, "Profile playbook should return 200.");
  assert(mediaResp.status === 200, "Media list should return 200.");
  assert(presignResp.status === 201, "Media presign should return 201.");
  const items = mediaResp.data?.items || mediaResp.data || [];
  renderMedia(items, presignResp.data);
  return `${items.length} media item(s), presign key ${presignResp.data?.object_key || "(unknown)"}.`;
}

async function runAllChecks() {
  state.backendUrl = document.querySelector("#backendUrl").value.trim().replace(/\/$/, "");
  setAllPending();
  for (const check of checks) {
    updateTest(check.id, { status: "Running", type: "neutral", detail: "Request in progress..." });
    const started = performance.now();
    try {
      const result = await check.run();
      const elapsed = Math.round(performance.now() - started);
      if (result?.warning) {
        updateTest(check.id, { status: "Warning", type: "warn", detail: result.message, elapsed });
      } else {
        updateTest(check.id, { status: "Passed", type: "pass", detail: result, elapsed });
      }
    } catch (error) {
      const elapsed = Math.round(performance.now() - started);
      updateTest(check.id, { status: "Failed", type: "fail", detail: error.message, elapsed });
    }
    updateSummary();
  }
  document.querySelector("#lastRun").textContent = new Date().toLocaleTimeString();
}

function setAllPending() {
  state.tests = checks.map((check) => ({
    ...check,
    result: { status: "Waiting", type: "neutral", detail: "Not run yet" },
  }));
  renderTests();
  updateSummary();
}

function updateTest(id, result) {
  const test = state.tests.find((item) => item.id === id);
  if (test) {
    test.result = result;
  }
  renderTests();
  updateFeatureStatus(id, result.type, result.status);
}

function updateSummary() {
  const passed = state.tests.filter((test) => test.result?.type === "pass").length;
  const failed = state.tests.filter((test) => test.result?.type === "fail").length;
  const warnings = state.tests.filter((test) => test.result?.type === "warn").length;
  document.querySelector("#passedCount").textContent = passed;
  document.querySelector("#failedCount").textContent = failed;
  document.querySelector("#warningCount").textContent = warnings;
}

function formatDetail(detail) {
  if (detail == null) return "";
  if (typeof detail === "string") return detail;
  try {
    return JSON.stringify(detail, null, 2);
  } catch {
    return String(detail);
  }
}

function renderTests() {
  document.querySelector("#testList").innerHTML = state.tests
    .map(
      (test) => `
        <article class="test-card">
          <div>
            <h3>${escapeHtml(test.feature)}</h3>
            <p>${escapeHtml(test.description)}</p>
            <div class="test-meta">${escapeHtml(test.request)}</div>
            <div class="test-meta">${escapeHtml(formatDetail(test.result?.detail) || "")}</div>
          </div>
          <span class="status ${test.result?.type || "neutral"}">
            ${escapeHtml(test.result?.status || "Waiting")}
            ${test.result?.elapsed ? ` · ${test.result.elapsed}ms` : ""}
          </span>
        </article>
      `,
    )
    .join("");
}

function updateFeatureStatus(checkId, type, text) {
  const map = {
    home: "#homeStatus",
    league: "#leagueStatus",
    dugout: "#dugoutStatus",
    profile: "#profileStatus",
    playbook: "#mediaStatus",
    scores: "#scoreStatus",
  };
  const target = map[checkId];
  if (!target) return;
  const element = document.querySelector(target);
  element.className = `status ${type}`;
  element.textContent = text;
}

function renderHome(data) {
  document.querySelector("#homeName").textContent = data.profile.display_name;
  document.querySelector("#homeTier").textContent = data.card_tier;
  document.querySelector("#homeScore").textContent = data.qo_score;
  document.querySelector("#homeDelta").textContent = `+${data.monthly_delta} this month`;
  document.querySelector("#homeLeague").textContent = data.active_league.name;
  document.querySelector("#homeMatch").textContent = data.upcoming_match.label;
}

function renderLeague(league, teams, membership) {
  document.querySelector("#leagueOutput").textContent = [
    `League: ${league.name}`,
    `Teams: ${teams.map((team) => team.name).join(", ")}`,
    `Membership: ${membership.id}`,
    `Athlete: ${membership.athlete_id}`,
  ].join("\n");
}

function renderDugout(players) {
  document.querySelector("#dugoutList").innerHTML = players
    .map(
      (player) => `
        <article class="player-card">
          <div>
            <h3>${escapeHtml(player.display_name)}</h3>
            <p class="muted">${escapeHtml(player.position)} · ${escapeHtml(player.age_group)} · ${escapeHtml(player.region)}</p>
          </div>
          <span class="tier">${player.qo_score}</span>
        </article>
      `,
    )
    .join("");
}

function renderProfile(profile) {
  if (!profile) return;
  document.querySelector("#profileName").textContent = profile.display_name || "";
  document.querySelector("#profileBio").textContent = profile.bio || "";
  const metaItems = [profile.sport, profile.position, profile.age_group, profile.location].filter(Boolean);
  document.querySelector("#profileMeta").innerHTML = metaItems
    .map((item) => `<span class="chip">${escapeHtml(item)}</span>`)
    .join("");
  const recs = Array.isArray(profile.recommendations) ? profile.recommendations : [];
  document.querySelector("#profileRecommendations").innerHTML = recs
    .map(
      (item) => `
        <article class="quote-card">
          <strong>${escapeHtml(item.author || "")}</strong>
          <p class="muted">${escapeHtml(item.role || "")}</p>
          <p>${escapeHtml(item.quote || "")}</p>
        </article>
      `,
    )
    .join("");
}

function renderPerformance(score, ranking) {
  document.querySelector("#perfScore").textContent = score.score.score;
  document.querySelector("#perfProgress").textContent = `${score.progress.points_to_next} points to ${score.progress.next_tier}`;
  document.querySelector("#rankingText").textContent = `#${ranking.rank} / ${ranking.total}, ${ranking.percentile_label}`;
  const max = Math.max(...score.journey.map((point) => point.score));
  document.querySelector("#journeyChart").innerHTML = score.journey
    .map((point) => {
      const height = Math.max(22, Math.round((point.score / max) * 140));
      return `
        <div class="bar">
          <span style="height: ${height}px"></span>
          <p>${point.score}</p>
        </div>
      `;
    })
    .join("");
}

function renderMedia(items, presign) {
  const safeItems = Array.isArray(items) ? items : [];
  const cards = safeItems.map(
    (item) => `
      <article class="media-card">
        <h3>${escapeHtml(item.tab || item.label || "Media")}</h3>
        <p class="muted">${escapeHtml(item.content_type || item.type || "?")} · ${escapeHtml(item.status || "?")}</p>
        <p>${escapeHtml(item.url || item.preview_url || "")}</p>
      </article>
    `,
  );
  const contentType = presign?.headers?.["Content-Type"] || presign?.headers?.["content-type"] || presign?.content_type || "application/octet-stream";
  const objectKey = presign?.object_key || presign?.key || "(unknown)";
  cards.push(`
    <article class="media-card">
      <h3>Presigned upload</h3>
      <p class="muted">${escapeHtml(contentType)}</p>
      <p>${escapeHtml(objectKey)}</p>
    </article>
  `);
  document.querySelector("#mediaList").innerHTML = cards.join("");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

document.querySelector("#runAll").addEventListener("click", runAllChecks);
document.querySelector("#runLeague").addEventListener("click", async () => {
  state.backendUrl = document.querySelector("#backendUrl").value.trim().replace(/\/$/, "");
  try {
    const detail = await runLeagueFlow();
    updateFeatureStatus("league", "pass", "Passed");
    document.querySelector("#leagueOutput").textContent += `\n\n${detail}`;
  } catch (error) {
    updateFeatureStatus("league", "fail", "Failed");
    document.querySelector("#leagueOutput").textContent = error.message;
  }
});
document.querySelector("#runDugout").addEventListener("click", async () => {
  state.backendUrl = document.querySelector("#backendUrl").value.trim().replace(/\/$/, "");
  const q = encodeURIComponent(document.querySelector("#dugoutQuery").value.trim());
  const response = await api(`/api/v1/dugout?q=${q}`);
  renderDugout(response.data?.items || []);
  updateFeatureStatus("dugout", response.status === 200 ? "pass" : "fail", response.status === 200 ? "Passed" : "Failed");
});
document.querySelector("#runMedia").addEventListener("click", async () => {
  state.backendUrl = document.querySelector("#backendUrl").value.trim().replace(/\/$/, "");
  try {
    await runMediaFlow();
    updateFeatureStatus("playbook", "pass", "Passed");
  } catch (error) {
    updateFeatureStatus("playbook", "fail", "Failed");
  }
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll(".panel").forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    document.querySelector(`#${tab.dataset.tab}`).classList.add("active");
  });
});

setAllPending();
