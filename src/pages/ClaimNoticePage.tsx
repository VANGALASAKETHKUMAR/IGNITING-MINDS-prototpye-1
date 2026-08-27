import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import AppShell from "@/components/layout/AppShell";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { useApp } from "@/context/AppContext";
import type { DocumentExplanation } from "@/lib/ai/types";
import { getDocumentFallback } from "@/lib/ai/fallbacks";

const DEMO_NOTICE = `PF CLAIM PROCESSING NOTICE

Claim ID: PF2026-1042
Status: Rejected
Reason Code: KYC-07
Reason: Bank account information does not match the verified member information.`;

export default function ClaimNoticePage() {
  const { id } = useParams<{ id: string }>();
  const { getClaim, language } = useApp();
  const claim = id ? getClaim(id) : undefined;
  const [loading, setLoading] = useState(false);
  const [explanation, setExplanation] = useState<DocumentExplanation | null>(null);

  const explainNotice = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/ai/explain-document", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ language, documentText: DEMO_NOTICE }),
      });
      if (res.ok) {
        setExplanation(await res.json());
      } else {
        setExplanation(getDocumentFallback(language));
      }
    } catch {
      setExplanation(getDocumentFallback(language));
    } finally {
      setLoading(false);
    }
  };

  if (!claim) {
    return (
      <AppShell>
        <Card>This demo claim could not be found.</Card>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <div className="max-w-lg mx-auto space-y-4">
        <div>
          <Link to={`/claims/${claim.id}`} className="text-sm font-medium text-primary">
            ← Back to claim
          </Link>
          <h1 className="mt-2 text-2xl font-bold text-ink">Explain my rejection notice</h1>
          <p className="text-ink-muted mt-1">Synthetic demo document only</p>
        </div>

        <Card className="font-mono text-sm bg-canvas-muted whitespace-pre-wrap text-ink-muted">
          {DEMO_NOTICE}
        </Card>

        <Button fullWidth onClick={explainNotice} disabled={loading}>
          {loading ? "Analyzing notice…" : "Explain this notice"}
        </Button>

        {explanation && (
          <Card>
            <p className="font-bold text-ink">
              We found {explanation.issuesFound} issue
            </p>
            <p className="mt-2 text-lg font-semibold text-warning">
              {explanation.issueTitle}
            </p>
            <p className="mt-3 text-ink-muted">{explanation.simpleExplanation}</p>
            <h2 className="mt-4 font-bold text-ink">What you can do</h2>
            <ol className="mt-2 list-decimal list-inside space-y-1 text-ink-muted">
              {explanation.actions.map((action, i) => (
                <li key={i}>{action}</li>
              ))}
            </ol>
            <Button to={`/claims/${claim.id}/fix`} fullWidth className="mt-4">
              Fix my claim
            </Button>
          </Card>
        )}
      </div>
    </AppShell>
  );
}
