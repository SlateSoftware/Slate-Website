import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      // ---- LIGHT MODE ----
      // Background
      "light-bg-floating-window":
        "linear-gradient(to bottom, rgba(237, 237, 237, 0.8),rgba(250, 254, 255, 0.75))",
      // Foreground
      fg: "linear-gradient(to bottom, rgba(255, 255, 255, 0.29), rgba(255, 255, 255, 0.24))",
      "fg-subtle":
        "linear-gradient(to bottom, rgba(255, 255, 255, 0.21), rgba(255, 255, 255, 0.17))",
      "fg-no-bg":
        "linear-gradient(to bottom, rgba(255, 255, 255, 0.58), rgba(255, 255, 255, 0.53))",
      // Coloured foreground
      "fg-selected":
        "linear-gradient(to bottom, rgba(220, 245, 255, 0.64), rgba(207, 242, 255, 0.49))",
      "fg-selected-2":
        "linear-gradient(to bottom, rgba(241, 251, 255, 0.58), rgba(236, 249, 255, 0.45))",
      "fg-danger":
        "linear-gradient(to bottom, rgba(227, 106, 128, 0.46), rgba(192, 0, 34, 0.42)",
      "fg-warning":
        "linear-gradient(to bottom, rgba(255, 237, 141, 0.35), rgba(255, 227, 84, 0.29))",
      "fg-success":
        "linear-gradient(to bottom, rgba(156, 224, 163, 0.56), rgba(33, 217, 51, 0.38))",
      "fg-accent-blue":
        "linear-gradient(to bottom, rgba(0, 178, 255, 0.45), rgba(0, 178, 255, 0.63))",
      "fg-accent-red":
        "linear-gradient(to bottom, rgba(225, 22, 58, 0.41), rgba(225, 22, 58, 0.49))",
      "fg-accent-yellow":
        "linear-gradient(to bottom, rgba(255, 216, 13, 0.38), rgba(255, 213, 0, 0.44))",
      "fg-accent-green":
        "linear-gradient(to bottom, rgba(33, 217, 51, 0.37), rgba(33, 217, 51, 0.53))",
      "fg-accent-purple":
        "linear-gradient(to bottom, rgba(33, 217, 51, 0.53), rgba(119, 25, 238, 0.46))",
      "fg-accent-gray":
        "linear-gradient(to bottom, rgba(200, 200, 200, 0.52), rgba(168, 168, 168, 0.38))",
    },
    colors: {
      // ---- LIGHT MODE ----
      // Flat Colours
      "light-red-flat": "rgba(225, 22, 58, 1)",
      "light-yellow-flat": "rgba(203, 171, 6, 1)",
      "light-green-flat": "rgba(22, 197, 40, 1)",
      "light-blue-flat": "rgba(0, 160, 228, 1)",
      "light-purple-flat": "rgba(96, 0, 218, 1)",
      "light-gray-flat": "rgba(160, 160, 160, 1)",
      // Background
      "light-bg-flat": "rgba(227, 227, 227, 1)",
      // Strokes (aka borders) (unfinished) (css sadly doesn't support gradient borders)
      "light-stroke-fg": "rgba(0, 0, 0, 0.15)",
      "light-stroke-fg-disabled": "rgba(0, 0, 0, 0.07)",
      "light-stroke-fg-2": "rgba(0, 0, 0, 0.10)",
      "light-stroke-fg-2-disabled": "rgba(0, 0, 0, 0.55)",
    },
    textColor: {
      // ---- LIGHT MODE ----
      "light-text-1": "rgba(28, 28, 28, 1)",
      "light-text-subtle": "rgba(11, 11, 11, 0.65)",
      "light-text-disabled": "rgba(28, 28, 28, 0.4)",
    },
    fontSize: {
      // Don't use normal tailwind fontsize or fontfamily in your classnames, use the @apply values found in globals.css
      sub: "10px",
      body: "13px",
      "body-strong": "13px",
      5: "17px",
      4: "22px",
      3: "28px",
      2: "36px",
      1: "60px",
      mono: "13px",
    },
    fontFamily: {
      // Don't use normal tailwind fontsize or fontfamily in your classnames, use the @apply values found in globals.css
      // THIS CODE IS FOR NEXT.JS, SEE README FOR INFO
      sans: ["var(--font-dm-sans)"],
      mono: ["var(--font-dm-mono)"],
    },
    borderRadius: {
      32: "32px",
      24: "24px",
      12: "12px",
      8: "8px",
    },
    spacing: {
      0: "0px",
      4: "4px",
      6: "6px",
      8: "8px",
      10: "10px",
      12: "12px",
      14: "14px",
      16: "16px",
      18: "18px",
      20: "20px",
      24: "24px",
      28: "28px",
      32: "32px",
      36: "36px",
      40: "40px",
      48: "48px",
      64: "64px",
      72: "72px",
      80: "80px",
      96: "96px",
      128: "128px",
      192: "192px",
      256: "256px",
      512: "512px",
    },
    boxShadow: {
      "light-fg":
        "0px -14px 30px 0px rgba(0, 0, 0, 0.02) inset, 0px 1px 30px 3px rgba(0, 0, 0, 0.03)",
      "light-fg-subtle":
        "0px -14px 12px 0px rgba(0, 0, 0, 0.01) inset, 0px 1px 20px 2px rgba(0, 0, 0, 0.01)",
      "light-bg-floating-window": "0px 0px 72px 0px rgba(0, 0, 0, 0.12)",
    },
    backdropBlur: {
      "bg-floating-window": "36px",
      fg: "12px",
    },
  },
  plugins: [],
};
export default config;
