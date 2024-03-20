/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark Mode Elements
        darkBlue: {
          DEFAULT: 'hsl(209, 23%, 22%)',
        },
        // Dark Mode Background
        veryDarkBlue: {
          DEFAULT: 'hsl(207, 26%, 17%)',
        },
        // Light Mode Text
        veryLightGray: {
          DEFAULT: 'hsl(200, 15%, 8%)',
        },
        // Light Mode Input
        darkGray: {
          DEFAULT: 'hsl(0, 0%, 52%)',
        },
        // Light Mode Background
        lightGray: {
          DEFAULT: 'hsl(0, 0%, 98%)',
        },
        // Dark Mode Text & Light Mode Elements
        white: {
          DEFAULT: 'hsl(0, 0%, 100%)',
        },
      },

      },
    },
    plugins: [],
  };
