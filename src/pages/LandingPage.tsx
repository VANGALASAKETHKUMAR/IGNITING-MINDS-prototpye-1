import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import PrototypeDisclosure from "@/components/disclosure/PrototypeDisclosure";
import { ArrowDown, Compass, ListChecks, Route } from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Understand",
    description: "Turn confusing claim statuses into plain language.",
  },
  {
    icon: ListChecks,
    title: "Fix",
    description: "Get a personalised checklist of what to do next.",
  },
  {
    icon: Route,
    title: "Track",
    description: "See where your claim is and what happens next.",
  },
];

const flowSteps = ["Status", "Understand", "Fix", "Track"];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-canvas">
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <span className="text-xl font-bold text-primary">Nidhi Guide</span>
          <Link
            to="/login"
            className="text-sm font-semibold text-primary hover:text-primary-hover min-h-[44px] px-3 flex items-center"
          >
            Try the demo
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8 pb-16">
        <section className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Citizen PF assistance prototype
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-ink leading-tight">
            Your PF status shouldn&apos;t be a mystery.
          </h1>
          <p className="mt-4 text-lg text-ink-muted max-w-2xl mx-auto leading-relaxed">
            Understand what happened, know what to do next, and keep track of your
            claim — in simple language.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button to="/login" fullWidth className="sm:w-auto sm:min-w-[200px]">
              Try the demo
            </Button>
            <Button
              href="#how-it-works"
              variant="secondary"
              fullWidth
              className="sm:w-auto sm:min-w-[200px]"
            >
              See how it works
            </Button>
          </div>
        </section>

        <section className="mt-12" id="how-it-works" aria-label="How it works">
          <Card className="bg-primary-light border-primary/20">
            <h2 className="text-center text-lg font-bold text-ink mb-6">
              From confusion to clarity
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              {flowSteps.map((step, i) => (
                <div key={step} className="flex items-center gap-2 sm:gap-4">
                  <span className="rounded-xl bg-surface border border-border px-4 py-2 font-semibold text-ink min-w-[100px] text-center">
                    {step}
                  </span>
                  {i < flowSteps.length - 1 && (
                    <ArrowDown className="h-5 w-5 text-primary sm:hidden" aria-hidden />
                  )}
                  {i < flowSteps.length - 1 && (
                    <span className="hidden sm:block text-primary font-bold" aria-hidden>
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </section>

        <section className="mt-10 grid gap-4 sm:grid-cols-3" aria-label="Features">
          {features.map((feature) => (
            <Card key={feature.title} padding="lg">
              <feature.icon className="h-8 w-8 text-primary" aria-hidden />
              <h3 className="mt-3 text-xl font-bold text-ink">{feature.title}</h3>
              <p className="mt-2 text-ink-muted">{feature.description}</p>
            </Card>
          ))}
        </section>

        <section className="mt-10">
          <Card className="bg-canvas-muted">
            <PrototypeDisclosure />
          </Card>
        </section>
      </main>
    </div>
  );
}
