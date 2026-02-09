import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f5ff",
          100: "#dfe8ff",
          200: "#bfd0ff",
          300: "#9eb8ff",
          400: "#7b9fff",
          500: "#5b86f7",
          600: "#3c6de0",
          700: "#2f57b4",
          800: "#25448c",
          900: "#1d356e"
        },
        sand: {
          50: "#f7f5f0",
          100: "#efe9dc",
          200: "#e3d7b8",
          300: "#d1bf8f",
          400: "#bea56b",
          500: "#a9894c",
          600: "#8b6f3c",
          700: "#6e5630",
          800: "#524024",
          900: "#3b2f1c"
        }
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(17, 24, 39, 0.08)",
        card: "0 6px 18px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
