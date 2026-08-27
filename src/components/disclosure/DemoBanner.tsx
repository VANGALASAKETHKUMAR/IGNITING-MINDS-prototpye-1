import PrototypeDisclosure from "./PrototypeDisclosure";

export default function DemoBanner() {
  return (
    <div className="border-b border-warning/30 bg-warning-light px-4 py-2.5">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold text-warning">Prototype demo</p>
        <PrototypeDisclosure compact />
      </div>
    </div>
  );
}
