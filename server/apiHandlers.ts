import type { IncomingMessage, ServerResponse } from "http";
import {
  explainClaimWithAI,
  explainDocumentWithAI,
  explainStageWithAI,
} from "../src/lib/ai/pfAssistant";

type Handler = (
  req: IncomingMessage,
  res: ServerResponse,
  params: Record<string, string>,
) => Promise<void>;

async function readBody(req: IncomingMessage): Promise<unknown> {
  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(Buffer.from(chunk));
  }
  const text = Buffer.concat(chunks).toString("utf8");
  if (!text) return {};
  return JSON.parse(text);
}

function sendJson(res: ServerResponse, status: number, data: unknown) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
}

const routes: Record<string, Handler> = {
  "GET demo/user": async (_req, res) => {
    const { demoUser } = await import("../src/lib/mock/user");
    sendJson(res, 200, demoUser);
  },

  "GET claims": async (_req, res) => {
    const { initialClaims } = await import("../src/lib/mock/claims");
    sendJson(res, 200, initialClaims);
  },

  "GET claims/:id": async (_req, res, params) => {
    const { initialClaims } = await import("../src/lib/mock/claims");
    const claim = initialClaims.find((c) => c.id === params.id);
    if (!claim) {
      sendJson(res, 404, { error: "Claim not found" });
      return;
    }
    sendJson(res, 200, claim);
  },

  "POST claims/:id/resubmit": async (_req, res, params) => {
    const { initialClaims } = await import("../src/lib/mock/claims");
    const claim = initialClaims.find((c) => c.id === params.id);
    if (!claim) {
      sendJson(res, 404, { error: "Claim not found" });
      return;
    }
    sendJson(res, 200, {
      ...claim,
      status: "UNDER_PROCESS",
      stage: "EPFO Processing",
      reasonCode: null,
    });
  },

  "POST ai/explain-claim": async (req, res) => {
    try {
      const body = (await readBody(req)) as Record<string, unknown>;
      const result = await explainClaimWithAI({
        claimType: String(body.claimType ?? ""),
        status: String(body.status ?? ""),
        reasonCode: String(body.reasonCode ?? ""),
        amount: Number(body.amount ?? 0),
        language: (body.language as "en" | "hi" | "te") ?? "en",
      });
      sendJson(res, 200, result);
    } catch {
      sendJson(res, 500, { error: "AI explanation failed" });
    }
  },

  "POST ai/explain-stage": async (req, res) => {
    try {
      const body = (await readBody(req)) as Record<string, unknown>;
      const result = await explainStageWithAI({
        claimId: String(body.claimId ?? ""),
        status: String(body.status ?? ""),
        stage: String(body.stage ?? ""),
        language: (body.language as "en" | "hi" | "te") ?? "en",
      });
      sendJson(res, 200, result);
    } catch {
      sendJson(res, 500, { error: "AI explanation failed" });
    }
  },

  "POST ai/explain-document": async (req, res) => {
    try {
      const body = (await readBody(req)) as Record<string, unknown>;
      const result = await explainDocumentWithAI({
        language: (body.language as "en" | "hi" | "te") ?? "en",
        documentText: String(body.documentText ?? ""),
      });
      sendJson(res, 200, result);
    } catch {
      sendJson(res, 500, { error: "AI explanation failed" });
    }
  },
};

function matchRoute(
  method: string,
  pathname: string,
): { handler: Handler; params: Record<string, string> } | null {
  for (const [routeKey, handler] of Object.entries(routes)) {
    const [routeMethod, routePath] = routeKey.split(" ");
    if (routeMethod !== method) continue;

    const routeParts = routePath.split("/");
    const pathParts = pathname.split("/").filter(Boolean);

    if (routeParts.length !== pathParts.length) continue;

    const params: Record<string, string> = {};
    let matched = true;

    for (let i = 0; i < routeParts.length; i++) {
      const routePart = routeParts[i];
      const pathPart = pathParts[i];

      if (routePart.startsWith(":")) {
        params[routePart.slice(1)] = pathPart;
      } else if (routePart !== pathPart) {
        matched = false;
        break;
      }
    }

    if (matched) return { handler, params };
  }

  return null;
}

export async function apiMiddleware(
  req: IncomingMessage,
  res: ServerResponse,
  next: () => void,
) {
  const url = new URL(req.url ?? "/", "http://localhost");
  const pathname = url.pathname;

  if (!pathname.startsWith("/api")) {
    next();
    return;
  }

  const method = req.method ?? "GET";
  const apiPath = pathname.replace(/^\/api\/?/, "");
  const match = matchRoute(method, apiPath);

  if (!match) {
    sendJson(res, 404, { error: "Not found" });
    return;
  }

  try {
    await match.handler(req, res, match.params);
  } catch {
    sendJson(res, 500, { error: "Internal server error" });
  }
}
