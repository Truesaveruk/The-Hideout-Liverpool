import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ember: "#0A0A0A",     // near-black background
        smoke: "#141414",     // raised surfaces
        hearth: "#1E1E1E",    // cards / borders base
        bone: "#F2ECE0",      // primary text (warm white)
        steam: "#9A9488",     // secondary text
        cedar: "#B8863B",     // deep gold
        brass: "#D4AF5A",     // gold accent
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
