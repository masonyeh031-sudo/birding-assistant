import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        moss: {
          50: "#f5f8f2",
          100: "#eaf1e2",
          200: "#d1dfbf",
          300: "#b0c792",
          400: "#8dac68",
          500: "#6f8d4c",
          600: "#56703a",
          700: "#42572f",
          800: "#374729",
          900: "#2f3c24",
        },
        sand: "#f6f0e3",
        sky: "#dcecf2",
        pine: "#1f372b",
      },
      boxShadow: {
        card: "0 16px 40px rgba(55, 71, 41, 0.10)",
      },
      fontFamily: {
        sans: [
          "\"Hiragino Maru Gothic ProN\"",
          "\"Arial Rounded MT Bold\"",
          "\"SF Pro Rounded\"",
          "\"Noto Sans TC\"",
          "\"PingFang TC\"",
          "\"Microsoft JhengHei\"",
          "system-ui",
          "sans-serif",
        ],
        serif: [
          "\"Hiragino Maru Gothic ProN\"",
          "\"Arial Rounded MT Bold\"",
          "\"SF Pro Rounded\"",
          "\"Noto Sans TC\"",
          "\"PingFang TC\"",
          "\"Microsoft JhengHei\"",
          "system-ui",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top, rgba(220,236,242,0.95), rgba(245,248,242,0.3) 42%, transparent 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
