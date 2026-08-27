interface TimelineStep {
  id: string;
  label: string;
  completed: boolean;
  current?: boolean;
}

interface ClaimTimelineProps {
  steps: TimelineStep[];
  currentStageLabel: string;
  statusExplanation: string;
}

export default function ClaimTimeline({
  steps,
  currentStageLabel,
  statusExplanation,
}: ClaimTimelineProps) {
  return (
    <div>
      <ol className="space-y-0" aria-label="Claim journey timeline">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;
          return (
            <li key={step.id} className="flex gap-4">
              <div className="flex flex-col items-center">
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold border-2 ${
                    step.completed
                      ? "bg-success text-white border-success"
                      : step.current
                        ? "bg-primary text-white border-primary"
                        : "bg-surface text-ink-subtle border-border"
                  }`}
                  aria-hidden
                >
                  {step.completed ? "✓" : step.current ? "●" : "○"}
                </span>
                {!isLast && (
                  <span
                    className={`w-0.5 flex-1 min-h-[32px] ${
                      step.completed ? "bg-success" : "bg-border"
                    }`}
                    aria-hidden
                  />
                )}
              </div>
              <div className={`pb-6 ${isLast ? "pb-0" : ""}`}>
                <p
                  className={`font-semibold ${
                    step.current ? "text-primary" : step.completed ? "text-ink" : "text-ink-subtle"
                  }`}
                >
                  {step.label}
                </p>
                {step.current && (
                  <p className="text-sm text-primary mt-0.5">Current stage</p>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-4 rounded-xl border border-border bg-canvas-muted p-4">
        <p className="text-sm font-semibold text-ink">Current stage: {currentStageLabel}</p>
        <p className="mt-2 text-sm text-ink-muted">{statusExplanation}</p>
        <p className="text-xs text-ink-subtle mt-2">
          Simulated demo status — not from EPFO.
        </p>
      </div>
    </div>
  );
}
