/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "500px",
        md: '640px',
        lg: '1000px'
      },
    },
  },
  plugins: [],
};
