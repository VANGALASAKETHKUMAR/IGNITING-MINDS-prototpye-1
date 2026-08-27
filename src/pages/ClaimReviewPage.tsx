import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppShell from "@/components/layout/AppShell";
import Card from "@/components/ui/Card";
import ReviewCard from "@/components/forms/ReviewCard";
import { useApp } from "@/context/AppContext";

export default function ClaimReviewPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getClaim, bankCorrection, markResubmitted } = useApp();
  const claim = id ? getClaim(id) : undefined;
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");

  if (!claim) {
    return (
      <AppShell>
        <Card>This demo claim could not be found.</Card>
      </AppShell>
    );
  }

  if (!bankCorrection) {
    return (
      <AppShell>
        <Card>
          <p className="text-ink-muted">
            Please complete the bank correction form first.
          </p>
          <button
            type="button"
            className="mt-4 text-primary font-semibold"
            onClick={() => navigate(`/claims/${claim.id}/fix`)}
          >
            Go to fix my claim
          </button>
        </Card>
      </AppShell>
    );
  }

  const handleResubmit = async () => {
    setLoading(true);
    setLoadingMessage("Checking your correction…");

    await new Promise((r) => setTimeout(r, 900));
    setLoadingMessage("Preparing your claim…");

    try {
      await fetch(`/api/claims/${claim.id}/resubmit`, { method: "POST" });
    } catch {
      // proceed with local state update
    }

    await new Promise((r) => setTimeout(r, 700));
    markResubmitted();
    navigate(`/claims/${claim.id}/success`);
  };

  return (
    <AppShell>
      <div className="max-w-lg mx-auto">
        {loading && (
          <Card className="mb-4 text-center">
            <div
              className="mx-auto h-8 w-8 rounded-full border-4 border-primary border-t-transparent animate-spin"
              role="status"
            />
            <p className="mt-3 font-medium text-ink">{loadingMessage}</p>
          </Card>
        )}
        <ReviewCard
          claim={claim}
          onResubmit={handleResubmit}
          loading={loading}
        />
      </div>
    </AppShell>
  );
}
