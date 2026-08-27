import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { useApp } from "@/context/AppContext";
import type { Claim } from "@/lib/mock/claims";

interface ReviewCardProps {
  claim: Claim;
  onResubmit: () => void;
  loading?: boolean;
}

export default function ReviewCard({ claim, onResubmit, loading }: ReviewCardProps) {
  const { bankCorrection } = useApp();

  return (
    <div className="space-y-4">
      <Card>
        <h1 className="text-2xl font-bold text-ink">Review before resubmitting</h1>

        <dl className="mt-5 space-y-4">
          <div className="flex justify-between gap-4 border-b border-border pb-3">
            <dt className="text-ink-muted">Bank information</dt>
            <dd className="font-semibold text-success">Updated ✓</dd>
          </div>
          <div className="flex justify-between gap-4 border-b border-border pb-3">
            <dt className="text-ink-muted">KYC</dt>
            <dd className="font-semibold text-success">Verified ✓</dd>
          </div>
          <div className="flex justify-between gap-4 border-b border-border pb-3">
            <dt className="text-ink-muted">Claim</dt>
            <dd className="font-semibold text-ink">{claim.id}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-ink-muted">Amount</dt>
            <dd className="font-semibold text-ink">
              ₹{claim.amount?.toLocaleString("en-IN")}
            </dd>
          </div>
        </dl>

        {bankCorrection && (
          <div className="mt-4 rounded-xl bg-canvas-muted p-4 text-sm text-ink-muted">
            <p>Demo account: {bankCorrection.accountNumber}</p>
            <p>IFSC: {bankCorrection.ifsc}</p>
          </div>
        )}
      </Card>

      <Card className="border-info/30 bg-info-light">
        <p className="text-sm text-ink-muted">
          This is a simulated submission. No real government request will be sent.
        </p>
      </Card>

      <Button fullWidth onClick={onResubmit} disabled={loading}>
        {loading ? "Preparing your claim…" : "Resubmit claim"}
      </Button>
    </div>
  );
}
