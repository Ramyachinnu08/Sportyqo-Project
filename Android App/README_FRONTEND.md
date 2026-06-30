# SportyQo Mobile App (React Native)

The athlete-facing mobile app: profile/identity, Qo Score tracking, league joining, the Dugout
discovery feed, the Playbook media locker, and performance analytics. Built as a thin client —
all business logic lives in the [backend](../backend/README.md); the app focuses on a fast,
polished, dark-themed experience that mirrors the product designs.

> **Stack assumption.** The mockups are iOS-styled and consistent across platforms, so this app
> is specified as **React Native (Expo) + TypeScript** for a single cross-platform codebase.
> Flutter is a viable alternative; the API contract is identical either way.

---

## Table of contents
1. [Stack](#stack)
2. [Project structure](#project-structure)
3. [Navigation (maps to the screens)](#navigation-maps-to-the-screens)
4. [Quick start](#quick-start)
5. [Configuration](#configuration)
6. [Data & state](#data--state)
7. [Design system](#design-system)
8. [Debugging](#debugging)
9. [Testing](#testing)
10. [Building & releasing](#building--releasing)

---

## Stack

| Concern | Tool |
|---------|------|
| Framework | React Native via Expo |
| Language | TypeScript (strict) |
| Navigation | React Navigation (bottom tabs + native stack) |
| Server state | TanStack Query (React Query) |
| Client state | Zustand (lightweight, e.g. auth/session) |
| API client | Typed `fetch` wrapper / openapi-typescript generated client |
| Forms | React Hook Form + Zod |
| Secure storage | expo-secure-store (JWT tokens) |
| Charts | victory-native / react-native-svg (Qo journey graph) |
| Media | expo-image, expo-av (video), expo-image-picker (uploads) |
| Notifications | expo-notifications (push) |
| Lint / format | ESLint + Prettier + TypeScript |
| Tests | Jest + React Native Testing Library + Maestro (E2E) |

---

## Project structure

A **feature-first** structure: each feature owns its screens, components, hooks, and API calls,
so the codebase scales without a tangled `components/` dump.

```
app/
├── README.md
├── app.config.ts               # Expo config (env-driven)
├── package.json
├── tsconfig.json
├── .env.example
└── src/
    ├── App.tsx                 # providers (QueryClient, navigation, theme)
    ├── api/
    │   ├── client.ts           # base fetch wrapper: baseURL, auth header, error mapping
    │   ├── queryClient.ts      # TanStack Query config (retries, cache times)
    │   └── generated/          # optional: types generated from backend OpenAPI
    ├── navigation/
    │   ├── RootNavigator.tsx   # auth gate → AppTabs vs AuthStack
    │   ├── AppTabs.tsx         # Home · Dugout · Playbook · Performance · Profile
    │   └── types.ts            # typed route params
    ├── theme/
    │   ├── colors.ts           # dark palette + purple/green/yellow card accents
    │   ├── typography.ts
    │   └── tokens.ts           # spacing, radii, shadows
    ├── components/             # shared UI: QoScoreCard, CardTierBadge, MatchRow, StatPill...
    ├── store/
    │   └── authStore.ts        # Zustand: tokens, current user, login/logout
    ├── features/
    │   ├── auth/               # login / register / refresh
    │   ├── home/               # HomeScreen + dashboard hooks
    │   ├── league/             # JoinLeague, ChooseTeam, LeagueJoined (the 3-step flow)
    │   ├── dugout/             # discovery list, search, sport filters, sort
    │   ├── playbook/           # tabs: Playing / Certificates / Team / Trophies + Add New
    │   ├── performance/        # Qo journey chart, card progress, recent matches, ranking
    │   └── profile/            # academy timeline, recommendations, follow/message/share
    └── lib/
        ├── format.ts           # dates, numbers, "+35 this month"
        └── permissions.ts
```

---

## Navigation (maps to the screens)

The five bottom-tab destinations correspond 1:1 to the designs:

```
AppTabs (bottom navigation)
├── Home          → HomeScreen
│   ├── QoScoreCard (720, +35 this month, sparkline)
│   ├── ActiveLeagueCard (Falcons FC · Active)
│   ├── UpcomingMatch (Alpha Warriors vs Thunder Strikers)
│   └── JoinLeagueCTA ─────────────┐
├── Dugout        → DugoutScreen    │  pushes the Join League flow:
│   ├── SearchBar                   │
│   ├── SportFilters (All/Cricket/…)│   LeagueStack
│   └── PlayerCard[] (Qo Score)     ├── JoinLeagueScreen   (enter 6-digit code)
├── Playbook      → PlaybookScreen  ├── ChooseTeamScreen   (step 2 of 3)
│   └── Tabs: Playing/Certs/Team/…  └── LeagueJoinedScreen (success → Go to League)
├── Performance   → PerformanceScreen
│   ├── QoScoreHeader + CardProgress (758/1000, "242 to Yellow")
│   ├── QoJourneyChart (This Season)
│   ├── RecentMatches (Won, +63 Qo Points, MOM)
│   └── RankingCard (#14 / 280, Top 5%)
└── Profile       → ProfileScreen
    ├── AcademyExperience (timeline)
    ├── Recommendations (coach quotes)
    └── ActionBar (Follow · Message · Share)
```

The **Join League** journey is a 3-step stack (`Code Entered → Select Team → Joined`) that
matches the stepper in the "League Joined" mockup, then returns to Home or routes to the league.

---

## Quick start

```bash
cd app
cp .env.example .env             # set EXPO_PUBLIC_API_URL
npm install
npm run start                    # Expo dev server (press i = iOS, a = Android)
```

Requirements: Node 20+, the Expo Go app on your device (or an iOS Simulator / Android
Emulator). Point `EXPO_PUBLIC_API_URL` at the running backend (`http://localhost:8000/api/v1`
via your machine's LAN IP when testing on a physical device).

---

## Configuration

Public, build-time config via Expo env vars (prefixed `EXPO_PUBLIC_`):

```dotenv
EXPO_PUBLIC_API_URL=http://localhost:8000/api/v1
EXPO_PUBLIC_ENV=local
EXPO_PUBLIC_SENTRY_DSN=
```

Secrets (JWTs) are **never** in env — they live in `expo-secure-store` after login.

---

## Data & state

Two clearly separated kinds of state keep the app predictable:

- **Server state → TanStack Query.** Every backend read (Home dashboard, Dugout feed, Qo Score,
  Playbook media) is a query with caching, background refetch, and loading/error states handled
  centrally. Mutations (join league, add media, follow) invalidate the relevant queries so the
  UI stays in sync.
- **Client/session state → Zustand.** Auth tokens, the current user, and ephemeral UI state.
  On launch the app reads the refresh token from secure storage and silently re-authenticates.

The API client (`src/api/client.ts`) attaches the Bearer token, refreshes on 401, and maps the
backend's RFC 9457 problem+json bodies into typed errors the UI can render consistently.

---

## Design system

The look is dark, high-contrast, with **card-tier accents** that the backend drives:

| Card tier | Accent | Used by |
|-----------|--------|---------|
| Purple | `#6D5DF6`-ish | Home Qo Score badge |
| Green | green | Performance "Elite Performer" |
| Yellow | amber | next-tier target |

All colors, spacing, radii, and typography live in `src/theme/` as tokens — components never
hard-code hex values, so re-theming or matching exact brand colors is a one-file change.
Reusable building blocks (`QoScoreCard`, `CardTierBadge`, `MatchRow`, `StatPill`,
`VerifiedBadge`) ensure the Home, Dugout, Performance, and Profile screens stay visually
consistent.

---

## Debugging

- **React Native DevTools / Flipper** — inspect network calls, React Query cache, and component
  tree.
- **React Query Devtools** — see every server query's status, making "why is this stale/loading"
  obvious.
- **Typed errors** — the API client surfaces the backend `request_id`; log it so a UI bug can be
  traced straight into backend logs (same correlation ID).
- **Sentry** — set `EXPO_PUBLIC_SENTRY_DSN` to capture crashes with source maps.
- **Fast refresh** — edits hot-reload instantly; component state is preserved where possible.

---

## Testing

```bash
npm test                 # Jest unit + component tests
npm run test:watch
npm run e2e              # Maestro end-to-end flows
npm run lint            # ESLint
npm run typecheck       # tsc --noEmit
```

- **Unit/component** (Jest + RNTL) — render screens with mocked queries, assert the Qo Score,
  card tier, and match rows display correctly; test the join-league stepper transitions.
- **E2E** (Maestro) — scripted flows: log in → join a league with a code → see "League Joined".

---

## Building & releasing

Uses **EAS Build** (Expo Application Services):

```bash
eas build --profile preview --platform ios       # internal test build
eas build --profile production --platform all     # store builds
eas submit --platform ios                         # upload to App Store / Play
```

Over-the-air JS updates ship via `eas update` for quick fixes without a store review. Build
profiles (`eas.json`) carry the per-environment API URLs and signing config.

---

## Relationship to the backend

This app is a pure consumer of the SportyQo API. It contains **no** scoring logic, ranking
math, or league rules — those are owned by the backend's Qo Score engine and services. See
[`../ARCHITECTURE.md`](../ARCHITECTURE.md) for the full system design and
[`../backend/README.md`](../backend/README.md) for the API.
