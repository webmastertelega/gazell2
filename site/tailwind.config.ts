import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#4F46E5",
          light: "#6366F1",
          dark: "#4338CA",
        },
        accent: {
          orange: "#F97316",
          red: "#EF4444",
          purple: "#8B5CF6",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          alt: "#F8F9FC",
        },
        text: {
          DEFAULT: "#1A1A2E",
          secondary: "#64748B",
          light: "#94A3B8",
        },
      },
      fontFamily: {
        unbounded: ["var(--font-unbounded)", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backdropBlur: {
        glass: "20px",
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
      },
    },
  },
  plugins: [],
};
export default config;
