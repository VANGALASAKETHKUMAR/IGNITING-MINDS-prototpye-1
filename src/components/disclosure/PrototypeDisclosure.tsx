export default function PrototypeDisclosure({ compact = false }: { compact?: boolean }) {
  return (
    <p
      className={`text-ink-muted leading-relaxed ${compact ? "text-xs" : "text-sm"}`}
      role="note"
    >
      Nidhi Guide is an independent prototype and is not affiliated with or endorsed by
      EPFO or the Government of India. All accounts, claims and information shown are
      synthetic demo data.
    </p>
  );
}
