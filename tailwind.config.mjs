/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2C404C",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
      screens: {
       esm:{max:"570px"},
      }
    },
  },
  plugins: [],
};
