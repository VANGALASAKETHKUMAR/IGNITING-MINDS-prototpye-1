import { Link } from "react-router-dom";
import Card from "@/components/ui/Card";
import ClaimStatusBadge from "@/components/claims/ClaimStatusBadge";
import type { Claim } from "@/lib/mock/claims";

interface ClaimCardProps {
  claim: Claim;
  highlight?: boolean;
}

export default function ClaimCard({ claim, highlight }: ClaimCardProps) {
  return (
    <Card
      className={highlight ? "border-warning/40 bg-warning-light/30" : ""}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-ink">{claim.type}</h3>
          <p className="text-sm text-ink-muted mt-1">Claim ID: {claim.id}</p>
        </div>
        <ClaimStatusBadge status={claim.status} />
      </div>

      {claim.amount && (
        <p className="mt-3 text-2xl font-bold text-ink">
          ₹{claim.amount.toLocaleString("en-IN")}
        </p>
      )}

      <p className="mt-2 text-sm text-ink-muted">Stage: {claim.stage}</p>

      <Link
        to={`/claims/${claim.id}`}
        className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-primary text-white py-3 font-semibold min-h-[52px] hover:bg-primary-hover transition-colors"
      >
        {claim.status === "REJECTED" ? "Understand this rejection" : "View claim"}
      </Link>
    </Card>
  );
}
