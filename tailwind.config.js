/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-open-sans)"],
      },
      fontWeight: {
        light: "300", // Use 300 for light
        normal: "400", // Use 400 for normal
        medium: "500", // Use 500 for medium
        semibold: "600", // Use 600 for semibold
        bold: "700", // Use 700 for bold
        extrabold: "800", // Use 800 for extrabold
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
