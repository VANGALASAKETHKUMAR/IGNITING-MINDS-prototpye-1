import type {
  ClaimExplanation,
  DocumentExplanation,
  ExplainClaimPayload,
  ExplainStagePayload,
  Language,
  StageExplanation,
} from "./types";
import {
  getClaimFallback,
  getDocumentFallback,
  getStageFallback,
} from "./fallbacks";

const SYSTEM_PROMPT = `You are Nidhi Guide, a citizen assistance layer for PF claim journeys in India.
You simplify structured PF claim information for ordinary users.
You are NOT EPFO and must not claim to represent EPFO or the Government of India.
Never fabricate official policy, deadlines, guaranteed processing times, or legal conclusions.
Never ask for sensitive real credentials (Aadhaar, PAN, UAN, bank account, passwords, OTPs).
Explain only the information supplied in the request.
Use simple, calm language appropriate for low digital literacy users.
Give actionable steps based only on supplied data.
If uncertain, say: "This prototype does not have enough information to determine that."
Respond ONLY with valid JSON matching the requested schema. No markdown.`;

function languageInstruction(language: Language): string {
  if (language === "hi") {
    return "Write all user-facing text in simple Hindi. Keep claim IDs and technical codes in English.";
  }
  if (language === "te") {
    return "Write all user-facing text in simple Telugu. Keep claim IDs and technical codes in English.";
  }
  return "Write in simple Indian English.";
}

function isValidClaimExplanation(data: unknown): data is ClaimExplanation {
  if (!data || typeof data !== "object") return false;
  const d = data as Record<string, unknown>;
  return (
    typeof d.summary === "string" &&
    typeof d.whatItMeans === "string" &&
    typeof d.likelyCause === "string" &&
    typeof d.actionRequired === "boolean" &&
    Array.isArray(d.actions) &&
    typeof d.whatNotToDo === "string" &&
    typeof d.nextStep === "string"
  );
}

function isValidStageExplanation(data: unknown): data is StageExplanation {
  if (!data || typeof data !== "object") return false;
  const d = data as Record<string, unknown>;
  return (
    typeof d.summary === "string" &&
    typeof d.whatItMeans === "string" &&
    typeof d.nextAction === "string" &&
    typeof d.actionRequired === "boolean"
  );
}

function isValidDocumentExplanation(data: unknown): data is DocumentExplanation {
  if (!data || typeof data !== "object") return false;
  const d = data as Record<string, unknown>;
  return (
    typeof d.issuesFound === "number" &&
    typeof d.issueTitle === "string" &&
    typeof d.simpleExplanation === "string" &&
    Array.isArray(d.actions)
  );
}

async function callOpenAI<T>(
  userPrompt: string,
  validator: (data: unknown) => data is T,
): Promise<T | null> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      temperature: 0.3,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: userPrompt },
      ],
    }),
  });

  if (!response.ok) return null;

  const json = await response.json();
  const content = json.choices?.[0]?.message?.content;
  if (!content) return null;

  try {
    const parsed = JSON.parse(content);
    if (validator(parsed)) return parsed;
    return null;
  } catch {
    return null;
  }
}

export async function explainClaimWithAI(
  payload: ExplainClaimPayload,
): Promise<ClaimExplanation & { source: "ai" | "fallback" }> {
  const userPrompt = `${languageInstruction(payload.language)}

Explain this rejected PF claim for a citizen. Return JSON with fields:
summary, whatItMeans, likelyCause, actionRequired (boolean), actions (array of strings), urgency ("none"|"attention"|"urgent"), whatNotToDo, nextStep.

Claim data:
${JSON.stringify({
  claimType: payload.claimType,
  status: payload.status,
  reasonCode: payload.reasonCode,
  amount: payload.amount,
})}`;

  const result = await callOpenAI(userPrompt, isValidClaimExplanation);
  if (result) return { ...result, source: "ai" };

  return { ...getClaimFallback(payload.language), source: "fallback" };
}

export async function explainStageWithAI(payload: ExplainStagePayload): Promise<
  StageExplanation & { source: "ai" | "fallback" }
> {
  const userPrompt = `${languageInstruction(payload.language)}

Explain the current claim stage for a citizen. Return JSON with:
summary, whatItMeans, nextAction, actionRequired (boolean).

Do not promise real timelines.

Claim data:
${JSON.stringify({
  claimId: payload.claimId,
  status: payload.status,
  stage: payload.stage,
})}`;

  const result = await callOpenAI(userPrompt, isValidStageExplanation);
  if (result) return { ...result, source: "ai" };

  return { ...getStageFallback(payload.language), source: "fallback" };
}

export async function explainDocumentWithAI(payload: {
  language: Language;
  documentText: string;
}): Promise<DocumentExplanation & { source: "ai" | "fallback" }> {
  const userPrompt = `${languageInstruction(payload.language)}

Summarize this synthetic PF rejection notice. Return JSON with:
issuesFound (number), issueTitle, simpleExplanation, actions (array of strings).

Document:
${payload.documentText}`;

  const result = await callOpenAI(userPrompt, isValidDocumentExplanation);
  if (result) return { ...result, source: "ai" };

  return { ...getDocumentFallback(payload.language), source: "fallback" };
}
