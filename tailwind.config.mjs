import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Inter Variable", "ui-sans-serif", "system-ui", "sans-serif"],
      serif: ["Times New Roman", "ui-serif", "serif"],
    },
    colors: {
      transparent: "transparent",
      treehouse: {
        DEFAULT: "#36291e",
        50: "#f2ede8",
        100: "#eae1d9",
        200: "#dac9bc",
        300: "#c9b29e",
        400: "#b99a81",
        500: "#a88363",
        600: "#8f6c4f",
        700: "#71563f",
        800: "#543f2e",
        900: "#36291e",
        950: "#241b14",
      },
      tapa: {
        DEFAULT: "#797572",
        50: "#d3d1d0",
        100: "#c9c7c5",
        200: "#b5b2b0",
        300: "#a19e9b",
        400: "#8d8986",
        500: "#797572",
        600: "#615e5c",
        700: "#4a4745",
        800: "#32302f",
        900: "#1a1a19",
      },
    },
    extend: {
      order: {
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
        18: "18",
        19: "19",
        20: "20",
        21: "21",
        22: "22",
        23: "23",
        24: "24",
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("screen", "@media screen");
      addVariant("script", "@media (scripting: enabled)");
      addVariant("-script", "@media (scripting: none)");
    }),
  ],
};
