# Image Update for The Hideout — Experience Cards

## What Changed

Replaced the 5 repeating placeholder experience card images with distinct photos:

| Experience | Old Image | New Image |
|---|---|---|
| Private Sound Immersion (1-2-1) | sound-room.jpg (purple) | sound-room-bowls.jpg (Image 5) |
| Couples Sound Journey | sound-room.jpg (purple) | sound-room-bowls.jpg (Image 5) |
| Private 4 Person Sound Bath | sound-room.jpg (purple) | breathwork-room.jpg (Image 2) |
| Private Breathwork | sound-bath-candles.jpg | breathwork-room.jpg (Image 2) |
| Private Sauna Hire | (none — new card) | sauna-interior.jpg (Image 4) |

## Files to Replace

**Replace:** `components/ExperienceCard.tsx`  
**With:** The `ExperienceCard.tsx` file in this folder

## Upload Your Photos

Add these files to `/public/photos/`:

1. **sauna-interior.jpg** — Image 4 (wooden sauna, benches)
2. **breathwork-room.jpg** — Image 2 (mats, green wall, fireplace)
3. **sound-room-bowls.jpg** — Image 5 (bowls, mats, low light)
4. **cold-plunge.jpg** — Image 3 (LUMI pool, LED lights)

(Cold plunge is already referenced in home page; just make sure the filename matches if you re-export it.)

## Steps

1. Download `ExperienceCard.tsx` from this folder
2. Drag it into `components/` in your Hideout repo (replace the old one)
3. Upload the 4 photos to `/public/photos/` (create the folder if it doesn't exist)
4. Commit:
   ```
   git add components/ExperienceCard.tsx public/photos/*
   git commit -m "Fix: replace repeating experience card images with distinct photography"
   git push
   ```

Done. The experience cards will now show distinct images instead of the same purple sound room photo three times.
