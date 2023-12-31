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
      fontFamily: {
        sans: "serif",
      },
      colors: {
        "yd-orange": "#FC9E11",
        "yd-white": "#FAFAFA",
        "yd-dark-blue": "#050533",
        "yd-grey": "#D9D9D9",
        "yd-light-grey": "#F6F6F6",
      },
    },
    fontSize: {
      xs: "0.64rem",
      sm: "0.8rem",
      base: "1rem",
      lg: "1.25rem",
      xl: "1.562rem",
      "2xl": "1.953rem",
      "3xl": "2.441rem",
      "4xl": "3.052rem",
      "5xl": "3.815rem",
    },
    boxShadow: {
      "yd-default": "0px 0px 20px 1px rgba(0, 0, 0, 0.05)",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
