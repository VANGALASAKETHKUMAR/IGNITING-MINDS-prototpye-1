import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AppShell from "@/components/layout/AppShell";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import ClaimTimeline from "@/components/tracker/ClaimTimeline";
import { useApp } from "@/context/AppContext";
import { getTimelineForClaim } from "@/lib/mock/claims";
import type { StageExplanation } from "@/lib/ai/types";
import { getStageFallback } from "@/lib/ai/fallbacks";

export default function ClaimTrackPage() {
  const { id } = useParams<{ id: string }>();
  const { getClaim, language } = useApp();
  const claim = id ? getClaim(id) : undefined;
  const [stageExplanation, setStageExplanation] = useState<StageExplanation | null>(
    null,
  );
  const [loadingStage, setLoadingStage] = useState(false);

  const fetchStageExplanation = async () => {
    if (!claim) return;
    setLoadingStage(true);
    try {
      const res = await fetch("/api/ai/explain-stage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          claimId: claim.id,
          status: claim.status,
          stage: claim.stage,
          language,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        setStageExplanation(data);
      } else {
        setStageExplanation(getStageFallback(language));
      }
    } catch {
      setStageExplanation(getStageFallback(language));
    } finally {
      setLoadingStage(false);
    }
  };

  useEffect(() => {
    if (claim?.status === "UNDER_PROCESS") {
      fetchStageExplanation();
    }
  }, [claim?.id, claim?.status, language]);

  if (!claim) {
    return (
      <AppShell>
        <Card>This demo claim could not be found.</Card>
      </AppShell>
    );
  }

  const steps = getTimelineForClaim(claim);
  const currentStep = steps.find((s) => s.current) ?? steps.find((s) => !s.completed);

  return (
    <AppShell>
      <div className="space-y-6 max-w-lg mx-auto">
        <div>
          <Link
            to={`/claims/${claim.id}`}
            className="text-sm font-medium text-primary"
          >
            ← Back to claim
          </Link>
          <h1 className="mt-2 text-2xl font-bold text-ink">Claim journey</h1>
        </div>

        <Card>
          <dl className="space-y-2 mb-6">
            <div className="flex justify-between">
              <dt className="text-ink-muted">Claim</dt>
              <dd className="font-semibold">{claim.id}</dd>
            </div>
            {claim.amount && (
              <div className="flex justify-between">
                <dt className="text-ink-muted">Amount</dt>
                <dd className="font-semibold">
                  ₹{claim.amount.toLocaleString("en-IN")}
                </dd>
              </div>
            )}
          </dl>

          <ClaimTimeline
            steps={steps}
            currentStageLabel={currentStep?.label ?? claim.stage}
            statusExplanation={
              claim.status === "UNDER_PROCESS"
                ? "Your corrected claim has entered the processing stage in this simulated journey."
                : "This timeline reflects the demo claim status."
            }
          />
        </Card>

        {claim.status === "UNDER_PROCESS" && (
          <Card>
            <Button
              fullWidth
              variant="secondary"
              onClick={fetchStageExplanation}
              disabled={loadingStage}
            >
              {loadingStage ? "Loading…" : "What happens next?"}
            </Button>

            {stageExplanation && (
              <div className="mt-4 space-y-3">
                <p className="text-ink-muted">{stageExplanation.summary}</p>
                <p className="text-ink-muted">{stageExplanation.whatItMeans}</p>
                <div className="rounded-xl bg-primary-light p-4">
                  <p className="font-semibold text-ink">Your next action</p>
                  <p className="mt-1 text-sm text-ink-muted">
                    {stageExplanation.nextAction}
                  </p>
                </div>
              </div>
            )}
          </Card>
        )}
      </div>
    </AppShell>
  );
}
