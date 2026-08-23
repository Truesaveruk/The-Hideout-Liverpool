import { journey } from "@/lib/experiences";

/**
 * The signature element: one vertical thread that shifts from ember heat,
 * through cold, into brass stillness — the Full Hideout journey.
 */
export default function JourneyThread() {
  return (
    <ol className="relative mx-auto max-w-xs">
      <div aria-hidden className="thread absolute left-[4px] top-2 bottom-2" />
      {journey.map((step) => (
        <li key={step.stage} className="reveal relative flex items-center gap-5 py-4 pl-0">
          <span aria-hidden className="thread-dot relative z-10" data-phase={step.phase} />
          <span className="font-display text-2xl md:text-3xl">{step.stage}</span>
        </li>
      ))}
    </ol>
  );
}
