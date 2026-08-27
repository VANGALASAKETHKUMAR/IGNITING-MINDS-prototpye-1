import type { ClaimExplanation } from "@/lib/ai/types";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { AlertTriangle, Ban, CheckCircle2, HelpCircle } from "lucide-react";

interface AIExplanationCardProps {
  explanation: ClaimExplanation;
  onFix?: () => void;
  onShowBasic?: () => void;
  showFallbackNotice?: boolean;
}

export default function AIExplanationCard({
  explanation,
  onFix,
  onShowBasic,
  showFallbackNotice,
}: AIExplanationCardProps) {
  const urgencyLabel =
    explanation.urgency === "attention"
      ? "Yes — a correction is required before resubmission."
      : explanation.urgency === "urgent"
        ? "Yes — please act soon based on this demo information."
        : "No immediate action required based on demo information.";

  return (
    <div className="space-y-4">
      {showFallbackNotice && (
        <Card className="border-warning/30 bg-warning-light">
          <p className="text-sm text-warning font-medium">
            Nidhi Guide couldn&apos;t generate the explanation right now. Showing basic
            explanation.
          </p>
          {onShowBasic && (
            <Button variant="secondary" size="md" className="mt-3" onClick={onShowBasic}>
              Show basic explanation
            </Button>
          )}
        </Card>
      )}

      <Card>
        <div className="flex items-start gap-3">
          <HelpCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" aria-hidden />
          <div>
            <h2 className="text-lg font-bold text-ink">What happened?</h2>
            <p className="mt-2 text-ink-muted">{explanation.summary}</p>
          </div>
        </div>
      </Card>

      <Card>
        <h2 className="text-lg font-bold text-ink">Why can this happen?</h2>
        <p className="mt-2 text-ink-muted">{explanation.likelyCause}</p>
        <p className="mt-3 text-ink-muted">{explanation.whatItMeans}</p>
      </Card>

      <Card>
        <h2 className="text-lg font-bold text-ink">What should you do?</h2>
        <ol className="mt-3 space-y-2 list-decimal list-inside text-ink-muted">
          {explanation.actions.map((action, i) => (
            <li key={i}>{action}</li>
          ))}
        </ol>
      </Card>

      <Card>
        <div className="flex items-start gap-3">
          <AlertTriangle
            className="h-6 w-6 text-warning shrink-0 mt-0.5"
            aria-hidden
          />
          <div>
            <h2 className="text-lg font-bold text-ink">Do I need to act?</h2>
            <p className="mt-2 text-ink-muted flex items-center gap-2">
              {explanation.actionRequired && (
                <span className="text-warning font-semibold" aria-hidden>🟠</span>
              )}
              {urgencyLabel}
            </p>
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex items-start gap-3">
          <Ban className="h-6 w-6 text-error shrink-0 mt-0.5" aria-hidden />
          <div>
            <h2 className="text-lg font-bold text-ink">Avoid this</h2>
            <p className="mt-2 text-ink-muted">{explanation.whatNotToDo}</p>
          </div>
        </div>
      </Card>

      <Card className="bg-primary-light border-primary/20">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" aria-hidden />
          <div>
            <h2 className="text-lg font-bold text-ink">Your next step</h2>
            <p className="mt-2 text-ink-muted">{explanation.nextStep}</p>
          </div>
        </div>
        {onFix && (
          <Button fullWidth className="mt-4" onClick={onFix}>
            Fix my claim
          </Button>
        )}
      </Card>
    </div>
  );
}
