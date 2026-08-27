import { Link, useParams } from "react-router-dom";
import AppShell from "@/components/layout/AppShell";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import ClaimStatusBadge from "@/components/claims/ClaimStatusBadge";
import { useApp } from "@/context/AppContext";

export default function ClaimSuccessPage() {
  const { id } = useParams<{ id: string }>();
  const { getClaim } = useApp();
  const claim = id ? getClaim(id) : undefined;

  if (!claim) {
    return (
      <AppShell>
        <Card>This demo claim could not be found.</Card>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <div className="max-w-lg mx-auto text-center space-y-4">
        <Card padding="lg" className="border-success/30 bg-success-light">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success text-white text-3xl font-bold">
            ✓
          </div>
          <h1 className="mt-4 text-2xl font-bold text-ink">Claim resubmitted</h1>
          <p className="mt-2 text-ink-muted">
            Your corrected claim has been submitted in this prototype.
          </p>
        </Card>

        <Card>
          <dl className="space-y-3 text-left">
            <div className="flex justify-between">
              <dt className="text-ink-muted">Claim ID</dt>
              <dd className="font-semibold">{claim.id}</dd>
            </div>
            <div className="flex justify-between items-center">
              <dt className="text-ink-muted">New status</dt>
              <dd><ClaimStatusBadge status="UNDER_PROCESS" /></dd>
            </div>
          </dl>
        </Card>

        <Button to={`/claims/${claim.id}/track`} fullWidth>
          Track my claim
        </Button>
      </div>
    </AppShell>
  );
}
