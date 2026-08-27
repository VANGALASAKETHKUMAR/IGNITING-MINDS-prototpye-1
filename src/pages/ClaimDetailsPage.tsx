import { Link, useNavigate, useParams } from "react-router-dom";
import AppShell from "@/components/layout/AppShell";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import ClaimStatusBadge from "@/components/claims/ClaimStatusBadge";
import ActionPlan from "@/components/ai/ActionPlan";
import { useApp } from "@/context/AppContext";
import { formatDate } from "@/lib/utils";

export default function ClaimDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getClaim, actionPlanCompleted, toggleActionTask } = useApp();
  const claim = id ? getClaim(id) : undefined;

  if (!claim) {
    return (
      <AppShell>
        <Card>
          <h1 className="text-xl font-bold text-ink">This demo claim could not be found.</h1>
          <Link to="/dashboard" className="mt-4 inline-block text-primary font-semibold">
            Back to dashboard
          </Link>
        </Card>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <div className="space-y-6 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
        <div className="space-y-4">
          <div>
            <Link to="/dashboard" className="text-sm font-medium text-primary hover:underline">
              ← Dashboard
            </Link>
            <h1 className="mt-2 text-2xl font-bold text-ink">{claim.type}</h1>
          </div>

          <Card>
            <dl className="space-y-3">
              <div className="flex justify-between gap-4">
                <dt className="text-ink-muted">Claim ID</dt>
                <dd className="font-semibold text-ink">{claim.id}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ink-muted">Amount</dt>
                <dd className="font-semibold text-ink">
                  ₹{claim.amount?.toLocaleString("en-IN")}
                </dd>
              </div>
              {claim.submittedAt && (
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-muted">Submitted</dt>
                  <dd className="font-semibold text-ink">{formatDate(claim.submittedAt)}</dd>
                </div>
              )}
              <div className="flex justify-between gap-4 items-center">
                <dt className="text-ink-muted">Status</dt>
                <dd><ClaimStatusBadge status={claim.status} /></dd>
              </div>
            </dl>
          </Card>

          <Card>
            <h2 className="text-lg font-bold text-ink">What happened?</h2>
            <p className="mt-2 text-ink-muted leading-relaxed">
              {claim.rejectionSummary ??
                "Your claim is being processed in this demo journey."}
            </p>
          </Card>

          <div className="flex flex-col gap-3">
            {claim.status === "REJECTED" && (
              <>
                <Button
                  fullWidth
                  onClick={() => navigate(`/claims/${claim.id}/explain`)}
                >
                  Why was this rejected?
                </Button>
                <Button
                  variant="secondary"
                  fullWidth
                  onClick={() => navigate(`/claims/${claim.id}/explain`)}
                >
                  What should I do?
                </Button>
              </>
            )}
            <Button
              variant="ghost"
              fullWidth
              onClick={() => navigate(`/claims/${claim.id}/track`)}
            >
              View claim timeline
            </Button>
            <Link
              to={`/claims/${claim.id}/notice`}
              className="text-center text-sm font-medium text-primary py-2"
            >
              Explain my rejection notice
            </Link>
          </div>
        </div>

        <div>
          <ActionPlan
            completed={actionPlanCompleted}
            onToggle={toggleActionTask}
            onReady={() => navigate(`/claims/${claim.id}/review`)}
          />
        </div>
      </div>
    </AppShell>
  );
}
