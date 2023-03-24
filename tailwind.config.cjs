/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        secondary: "#555",
        danger: "#bb0808",
        active: "#0A3CDE",
      },
      fontFamily: ["Inter", "sans-serif"],
    },
    screens: {
      xs: "480px",
      sm:'680px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
};
