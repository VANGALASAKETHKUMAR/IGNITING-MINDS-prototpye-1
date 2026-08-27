import { Link, useNavigate, useParams } from "react-router-dom";
import AppShell from "@/components/layout/AppShell";
import Card from "@/components/ui/Card";
import CorrectionForm from "@/components/forms/CorrectionForm";
import { useApp } from "@/context/AppContext";

export default function ClaimFixPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
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
      <div className="max-w-lg mx-auto space-y-4">
        <div>
          <Link
            to={`/claims/${claim.id}`}
            className="text-sm font-medium text-primary"
          >
            ← Back to claim
          </Link>
          <h1 className="mt-2 text-2xl font-bold text-ink">Fix my claim</h1>
          <p className="text-ink-muted mt-1">
            Correct demo bank details for {claim.id}
          </p>
        </div>

        <CorrectionForm
          onSuccess={() => navigate(`/claims/${claim.id}/review`)}
        />
      </div>
    </AppShell>
  );
}
