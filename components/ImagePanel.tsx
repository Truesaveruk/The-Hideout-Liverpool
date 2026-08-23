/**
 * Labelled placeholder for real photography.
 * Swap for <Image> with authentic shots of The Hideout, Crosby Beach,
 * Another Place, steam, fire, instruments and tea. Never use stock
 * resort/pool imagery — the space is small and private by design.
 */
export default function ImagePanel({
  label,
  className = "",
  ratio = "aspect-[4/3]"
}: {
  label: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div className={`img-panel ${ratio} ${className}`} role="img" aria-label={label}>
      <span className="img-panel-label">Photo: {label}</span>
    </div>
  );
}
