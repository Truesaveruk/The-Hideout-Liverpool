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
  // --- Andrew at work (real sessions) ---
  "the founder in the sound room": "/photos/andrew-gong.jpg",
  "Andrew with instruments in the sound room": "/photos/andrew-gong.jpg",
  "Andrew in the sound room": "/photos/andrew-gong.jpg",
  "instruments detail": "/photos/andrew-drum.jpg",
  "bowls & gong detail": "/photos/andrew-gong.jpg",

  // --- group / shared sessions ---
  "group resting, studio setting": "/photos/sound-room-ai.jpg",
  "sound bath set up in a yoga studio": "/photos/sound-room-ai.jpg",
  "guest resting, soft blankets": "/photos/sound-bath-candles.jpg",
  "breathwork session, candlelit room": "/photos/sound-room-green.jpg",

  // --- the Hideout space itself ---
  "sound room, instruments, low light": "/photos/sound-room-ai.jpg",
  "the Hideout entrance, warm light": "/photos/sauna-exterior.jpg",
  "the full Hideout space": "/photos/sound-room-ai.jpg",
  "steam rising": "/photos/sauna-interior.jpg",
  "tea by the fire": "/photos/andrew-gong.jpg",

  // --- sauna & cold ---
  "sauna interior, warm light": "/photos/sauna-interior.jpg",
  "sauna stove, glowing": "/photos/sauna-exterior.jpg",
  "two chairs, two teas, low light": "/photos/cold-plunge.jpg",

  // --- couples / two-person ---
  "two mats, low light": "/photos/sound-room-purple.jpg",
  "couples session": "/photos/sound-room-green.jpg",

  // --- gift ---
  "voucher with dried botanicals, wood surface": "/photos/sound-room-purple-wide.jpg",
  "gift voucher flat-lay, natural textures": "/photos/sound-room-purple-wide.jpg",

  // --- outdoor / location ---
  "Crosby coastline, wide shot": "/photos/garden.jpg",
  "Another Place iron men, Crosby Beach": "/photos/garden.jpg",
  "Liverpool waterfront at dusk": "/photos/garden.jpg"
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
  // A label may be a direct path (e.g. "/photos/sauna-interior.jpg") or a
  // named slot from the PHOTOS map above.
  const src = label.startsWith("/photos/") ? label : PHOTOS[label];

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
