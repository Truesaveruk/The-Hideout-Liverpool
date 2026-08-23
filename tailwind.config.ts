import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ember: "#1A1512",     // warm near-black background
        smoke: "#241E19",     // raised surfaces
        hearth: "#2E2620",    // cards / borders base
        bone: "#EDE6DB",      // primary text
        steam: "#9C9184",     // secondary text
        cedar: "#9C6B43",     // warm wood
        brass: "#D2A45C",     // bronze accent — use sparingly
        plunge: "#6E8B94"     // cold accent, used only in the journey thread
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      letterSpacing: { eyebrow: "0.22em" },
      maxWidth: { site: "72rem" }
    }
  },
  plugins: []
};
export default config;
