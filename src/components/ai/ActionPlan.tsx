import Card from "@/components/ui/Card";
import { Check, Circle } from "lucide-react";

const TASKS = [
  { id: "bank", label: "Check bank details" },
  { id: "kyc", label: "Confirm KYC information" },
  { id: "resubmit", label: "Review and resubmit claim" },
];

interface ActionPlanProps {
  completed: string[];
  onToggle: (id: string) => void;
  onReady?: () => void;
}

export default function ActionPlan({
  completed,
  onToggle,
  onReady,
}: ActionPlanProps) {
  const total = TASKS.length;
  const done = completed.length;
  const allDone = done === total;

  return (
    <Card>
      <h2 className="text-xl font-bold text-ink">Your action plan</h2>
      <p className="mt-1 text-sm text-ink-muted">
        Progress: {done} of {total} completed
      </p>

      <ul className="mt-4 space-y-2" aria-label="Action plan tasks">
        {TASKS.map((task) => {
          const isDone = completed.includes(task.id);
          return (
            <li key={task.id}>
              <button
                type="button"
                onClick={() => onToggle(task.id)}
                className="flex w-full items-center gap-3 rounded-xl border border-border px-4 py-3 text-left hover:bg-canvas-muted transition-colors min-h-[52px]"
                aria-pressed={isDone}
              >
                {isDone ? (
                  <Check className="h-5 w-5 text-success shrink-0" aria-hidden />
                ) : (
                  <Circle className="h-5 w-5 text-ink-subtle shrink-0" aria-hidden />
                )}
                <span className={`font-medium ${isDone ? "text-success" : "text-ink"}`}>
                  {isDone ? `✓ ${task.label}` : task.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {allDone && (
        <div className="mt-5 rounded-xl bg-success-light border border-success/20 p-4">
          <p className="font-bold text-success">You&apos;re ready</p>
          <p className="mt-1 text-sm text-ink-muted">
            Your correction is complete.
          </p>
          {onReady && (
            <button
              type="button"
              onClick={onReady}
              className="mt-3 w-full rounded-xl bg-primary text-white py-3 font-semibold min-h-[52px] hover:bg-primary-hover"
            >
              Review and resubmit
            </button>
          )}
        </div>
      )}
    </Card>
  );
}
