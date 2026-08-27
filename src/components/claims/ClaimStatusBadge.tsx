import type { ClaimStatus } from "@/lib/mock/claims";

interface ClaimStatusBadgeProps {
  status: ClaimStatus;
  className?: string;
}

const config: Record<
  ClaimStatus,
  { label: string; className: string }
> = {
  REJECTED: {
    label: "Rejected",
    className: "bg-error-light text-error border-error/20",
  },
  UNDER_PROCESS: {
    label: "Under process",
    className: "bg-info-light text-info border-info/20",
  },
  COMPLETED: {
    label: "Completed",
    className: "bg-success-light text-success border-success/20",
  },
  PENDING: {
    label: "Pending",
    className: "bg-warning-light text-warning border-warning/20",
  },
};

export default function ClaimStatusBadge({
  status,
  className = "",
}: ClaimStatusBadgeProps) {
  const { label, className: statusClass } = config[status];
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-semibold ${statusClass} ${className}`}
      role="status"
      aria-label={`Status: ${label}`}
    >
      {label}
    </span>
  );
}
