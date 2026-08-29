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
  // sound room — two mats, fire lit (hero)
  "sound room, instruments, low light": "/photos/sound-room.jpg",
  "sound bath set up in a yoga studio": "/photos/sound-room.jpg",
  "the founder in the sound room": "/photos/sound-room.jpg",
  "Andrew with instruments in the sound room": "/photos/sound-room.jpg",
  "Andrew in the sound room": "/photos/sound-room.jpg",
  // wider meditation room (6 mats)
  "the Hideout entrance, warm light": "/photos/sound-room-wide.jpg",
  "steam rising": "/photos/sound-room-wide.jpg",
  // candles + bowls + mats
  "the full Hideout space": "/photos/sound-bath-candles.jpg",
  "two chairs, two teas, low light": "/photos/sound-bath-candles.jpg",
  // sauna
  "sauna interior, warm light": "/photos/sauna-interior.jpg",
  "sauna stove, glowing": "/photos/sauna-interior.jpg",
  // cold plunge
  "cold plunge": "/photos/cold-plunge.jpg",
  // detail tiles
  "instruments detail": "/photos/bowls-detail.jpg",
  "bowls & gong detail": "/photos/bowls-detail.jpg",
  "tea by the fire": "/photos/bowls-detail.jpg",
  // courtyard
  "Crosby coastline, wide shot": "/photos/garden.jpg"
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
