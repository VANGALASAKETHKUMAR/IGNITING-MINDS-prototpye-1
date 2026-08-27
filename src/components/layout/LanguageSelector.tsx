import { useApp } from "@/context/AppContext";
import type { Language } from "@/lib/ai/types";

const options: { value: Language; label: string }[] = [
  { value: "en", label: "English" },
  { value: "te", label: "తెలుగు" },
  { value: "hi", label: "हिन्दी" },
];

export default function LanguageSelector() {
  const { language, setLanguage } = useApp();

  return (
    <label className="flex items-center gap-2 text-sm text-ink-muted">
      <span className="sr-only">Select language</span>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as Language)}
        className="rounded-lg border border-border bg-surface px-3 py-2 text-sm font-medium text-ink min-h-[44px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        aria-label="Language"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  );
}
