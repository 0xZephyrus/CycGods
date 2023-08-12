import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        liquidglass: {
          "0%, 100%": { transform: "scale(1)", opacity: " 0.6" },
          "50%": { transform: "scale(1.2)", opacity: " 0.2" },
        },
        dayToNights: {
          "0%": { Backgrounds: "bg-white" },
          "50%": { Backgrounds: "bg-black" },
          "100%": { Backgrounds: "bg-white" },
        },
      },
      animation: {
        dayToNight: "dayToNights 10s infinite 1.5s",
      },
    },
  },
  plugins: [],
};
export default config;
