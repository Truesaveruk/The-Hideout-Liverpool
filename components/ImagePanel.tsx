import Image from "next/image";

/**
 * Site imagery.
 *
 * HOW TO ADD/SWAP A PHOTO (no code beyond two lines):
 * 1. Drop the optimised .jpg into /public/photos/
 * 2. Map its label to the filename in PHOTOS below.
 * Any label NOT in the map shows a labelled placeholder telling you which
 * shot is still needed. Never use stock resort imagery.
 */
const PHOTOS: Record<string, string> = {
  // sound room (mats, candles, warm light)
  "sound room, instruments, low light": "/photos/sound-room.jpg",
  "sound bath set up in a yoga studio": "/photos/sound-room.jpg",
  // sound-bath stills (crystal bowls & gong, low blue light)
  "the full Hideout space": "/photos/sound-bath-bowls.jpg",
  "Andrew with instruments in the sound room": "/photos/sound-bath-bowls.jpg",
  "instruments detail": "/photos/bowls-detail.jpg",
  "bowls & gong detail": "/photos/bowls-detail.jpg"
};

export default function ImagePanel({
  label,
  className = "",
  ratio = "aspect-[4/3]"
}: {
  label: string;
  className?: string;
  ratio?: string;
}) {
  const src = PHOTOS[label];

  if (src) {
    return (
      <div className={`relative overflow-hidden rounded-2xl border border-bone/10 ${ratio} ${className}`}>
        <Image
          src={src}
          alt={`The Hideout Liverpool — ${label}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div className={`img-panel ${ratio} ${className}`} role="img" aria-label={label}>
      <span className="img-panel-label">Photo: {label}</span>
    </div>
  );
}
