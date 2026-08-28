# Nidhi Guide

**From "What happened to my PF?" to "Here's exactly what to do next."**

Nidhi Guide is an independent citizen-assistance prototype that simplifies confusing EPFO/PF claim journeys. It is **not** affiliated with or endorsed by EPFO or the Government of India. All accounts, claims, and information shown are synthetic demo data.

## Demo journey

1. Landing page → **Try the demo**
2. **Continue with Demo Account** (or use `9876543210` / `demo123`)
3. Dashboard → **Understand my claim**
4. **Why was this rejected?** → AI explanation
5. **Fix my claim** → bank correction → review → resubmit
6. **Track my claim** → **What happens next?**

## Tech stack

- React 19 + Vite 8 + TypeScript
- Tailwind CSS v4
- React Router
- Vite dev API middleware for server-side AI endpoints

## Development

```bash
pnpm install
pnpm dev
```

Open the preview URL (default port `8443` in Figma Make, or `5173` locally).

### Optional: OpenAI

Set `OPENAI_API_KEY` in your environment for live AI explanations. Without it, the app uses high-quality deterministic fallbacks.

## Project structure

- `src/pages/` — route screens (landing, login, dashboard, claim flow)
- `src/lib/mock/` — synthetic demo data (replaceable with a real DB later)
- `src/lib/ai/` — server-side AI service + fallbacks
- `server/apiHandlers.ts` — Vite dev `/api/*` routes

## Safety

- No real Aadhaar, PAN, UAN, bank accounts, passwords, OTPs, or payments
- No EPFO logo or government endorsement
- No live EPFO scraping or integrations
