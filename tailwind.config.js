/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./assets/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8BAC3E",
        secondary: "#7A992E",
        drakGray: "#333333",
        lightGray: "#757575",
        lightGreen: "#F9FFF6",
        softGreen: "#F0FEEB",
        softBlue: "#E4F2F4",
        softPurple: "#EAEEFA",
        softPink: "#F9EEF3",
        softLime: "#F3F7D9",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      spacing: {
        4.5: "18px",
      },
    },
  },
  plugins: [],
};
