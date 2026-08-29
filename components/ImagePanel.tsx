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
  // sound room (purple light, crystal bowls, candles) — the hero shot
  "sound room, instruments, low light": "/photos/sound-room.jpg",
  "sound bath set up in a yoga studio": "/photos/sound-room.jpg",
  "the Hideout entrance, warm light": "/photos/sound-room-wide.jpg",
  "the founder in the sound room": "/photos/sound-room.jpg",
  "Andrew with instruments in the sound room": "/photos/sound-room.jpg",
  "Andrew in the sound room": "/photos/sound-room.jpg",
  // sauna
  "sauna interior, warm light": "/photos/sauna-interior.jpg",
  "sauna stove, glowing": "/photos/sauna-interior.jpg",
  // cold plunge with sauna glow behind
  "two chairs, two teas, low light": "/photos/cold-plunge.jpg",
  "the full Hideout space": "/photos/sound-bath-candles.jpg",
  "guest resting, soft blankets": "/photos/sound-room-wide.jpg",
  "voucher with dried botanicals, wood surface": "/photos/sound-bath-candles.jpg",

  // detail tiles
  "instruments detail": "/photos/bowls-detail.jpg",
  "bowls & gong detail": "/photos/bowls-detail.jpg",
  "steam rising": "/photos/sound-room-wide.jpg",
  "tea by the fire": "/photos/bowls-detail.jpg"
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
