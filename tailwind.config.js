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
        helfont: ["helfont"], // Add your custom font family here
      },
      fontWeight: {
        100: "100", // Extra Light
        200: "200", // Thin
        300: "300", // Light
        400: "400", // Regular
        500: "500", // Medium
        700: "700", // Bold
        800: "800", // Extra Bold
        900: "900", // Black
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
