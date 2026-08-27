import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppShell from "@/components/layout/AppShell";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import AIExplanationCard from "@/components/ai/AIExplanationCard";
import { useApp } from "@/context/AppContext";
import type { ClaimExplanation } from "@/lib/ai/types";
import { getClaimFallback } from "@/lib/ai/fallbacks";

const LOADING_MESSAGES = [
  "Reading your claim…",
  "Preparing a simple explanation…",
  "Here's what happened.",
];

export default function ClaimExplainPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getClaim, language } = useApp();
  const claim = id ? getClaim(id) : undefined;

  const [loading, setLoading] = useState(true);
  const [loadingStep, setLoadingStep] = useState(0);
  const [explanation, setExplanation] = useState<ClaimExplanation | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!claim) return;

    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      if (step < LOADING_MESSAGES.length) {
        setLoadingStep(step);
      }
    }, 800);

    const fetchExplanation = async () => {
      try {
        const res = await fetch("/api/ai/explain-claim", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            claimType: claim.type,
            status: claim.status,
            reasonCode: claim.reasonCode ?? "BANK_KYC_MISMATCH",
            amount: claim.amount ?? 0,
            language,
          }),
        });

        if (!res.ok) throw new Error("Failed");

        const data = await res.json();
        setExplanation(data);
        setError(false);
      } catch {
        setError(true);
        setExplanation(getClaimFallback(language));
      } finally {
        clearInterval(interval);
        setLoading(false);
      }
    };

    fetchExplanation();

    return () => clearInterval(interval);
  }, [claim, language]);

  if (!claim) {
    return (
      <AppShell>
        <Card>
          <p>This demo claim could not be found.</p>
        </Card>
      </AppShell>
    );
  }

  if (loading) {
    return (
      <AppShell>
        <Card className="text-center py-10">
          <div
            className="mx-auto h-10 w-10 rounded-full border-4 border-primary border-t-transparent animate-spin"
            role="status"
            aria-label="Loading"
          />
          <p className="mt-4 text-lg font-medium text-ink">
            {LOADING_MESSAGES[loadingStep]}
          </p>
        </Card>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <div className="space-y-4">
        <div>
          <button
            type="button"
            onClick={() => navigate(`/claims/${claim.id}`)}
            className="text-sm font-medium text-primary"
          >
            ← Back to claim
          </button>
          <h1 className="mt-2 text-2xl font-bold text-ink">AI explanation</h1>
          <p className="text-ink-muted text-sm mt-1">
            Plain-language help for claim {claim.id}
          </p>
        </div>

        {explanation && (
          <AIExplanationCard
            explanation={explanation}
            showFallbackNotice={error}
            onFix={() => navigate(`/claims/${claim.id}/fix`)}
            onShowBasic={() => setExplanation(getClaimFallback(language))}
          />
        )}

        <Button
          variant="secondary"
          fullWidth
          onClick={() => navigate(`/claims/${claim.id}/fix`)}
        >
          Fix my claim
        </Button>
      </div>
    </AppShell>
  );
}
