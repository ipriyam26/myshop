/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark_color: {
          500: "#2C3333",
        },
        medium_color: {
          500: "#395B64",
        },
        light_color: {
          500: "#A5C9CA",
        },
        very_light_color: {
          500: "#E7F6F2",
        }
      },
    },
  },
  plugins: [],
}
