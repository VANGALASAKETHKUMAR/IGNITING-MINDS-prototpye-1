import { Link } from "react-router-dom";
import AppShell from "@/components/layout/AppShell";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import ClaimCard from "@/components/claims/ClaimCard";
import ClaimStatusBadge from "@/components/claims/ClaimStatusBadge";
import { useApp } from "@/context/AppContext";
import { PRIMARY_CLAIM_ID } from "@/lib/mock/claims";
import { AlertCircle, Building2, FileText, Shield, Wallet } from "lucide-react";

export default function DashboardPage() {
  const { user, claims, primaryClaim } = useApp();

  const journeyCards = [
    {
      icon: Shield,
      label: "KYC",
      status: "Verified",
      statusClass: "text-success",
    },
    {
      icon: Building2,
      label: "Bank",
      status: "Needs attention",
      statusClass: "text-warning",
    },
    {
      icon: FileText,
      label: "UAN",
      status: "Active",
      statusClass: "text-ink",
    },
    {
      icon: Wallet,
      label: "Claim history",
      status: `${claims.length} claims`,
      statusClass: "text-ink",
    },
  ];

  return (
    <AppShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-ink">
            Good morning, {user.name.split(" ")[0]} 👋
          </h1>
          <p className="mt-1 text-ink-muted">Here&apos;s what needs your attention.</p>
        </div>

        <Card padding="lg" className="bg-primary-light border-primary/20">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-ink-muted">PF Balance</p>
              <p className="text-3xl font-bold text-ink mt-1">
                ₹{user.pfBalance.toLocaleString("en-IN")}
              </p>
            </div>
            {primaryClaim && (
              <div className="text-right">
                <p className="text-sm text-ink-muted">Active claim</p>
                <p className="text-xl font-bold text-ink">
                  ₹{primaryClaim.amount?.toLocaleString("en-IN")}
                </p>
                <ClaimStatusBadge status={primaryClaim.status} className="mt-2" />
              </div>
            )}
          </div>
          <Button
            to={`/claims/${PRIMARY_CLAIM_ID}`}
            fullWidth
            className="mt-5"
          >
            Understand my claim
          </Button>
        </Card>

        <section aria-label="Your PF journey">
          <h2 className="text-lg font-bold text-ink mb-3">Your PF journey</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {journeyCards.map((item) => (
              <Card key={item.label} padding="sm">
                <item.icon className="h-5 w-5 text-primary" aria-hidden />
                <p className="mt-2 font-semibold text-ink">{item.label}</p>
                <p className={`text-sm font-medium ${item.statusClass}`}>{item.status}</p>
              </Card>
            ))}
          </div>
        </section>

        {primaryClaim?.status === "REJECTED" && (
          <Card className="border-warning/40 bg-warning-light/50">
            <div className="flex gap-3">
              <AlertCircle className="h-6 w-6 text-warning shrink-0" aria-hidden />
              <div>
                <h2 className="font-bold text-ink">One thing needs your attention</h2>
                <p className="mt-1 text-ink-muted">
                  Your withdrawal claim was rejected.
                </p>
                <p className="mt-2 text-sm text-ink-muted">
                  Let Nidhi Guide explain why and guide you through the next step.
                </p>
                <Button to={`/claims/${PRIMARY_CLAIM_ID}/fix`} fullWidth className="mt-4">
                  Fix my claim
                </Button>
              </div>
            </div>
          </Card>
        )}

        <section aria-label="All claims">
          <h2 className="text-lg font-bold text-ink mb-3">Your claims</h2>
          <div className="space-y-4">
            {claims.map((claim) => (
              <ClaimCard
                key={claim.id}
                claim={claim}
                highlight={claim.id === PRIMARY_CLAIM_ID && claim.status === "REJECTED"}
              />
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  );
}
