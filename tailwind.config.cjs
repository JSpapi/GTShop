/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // primary: "#bb0808",
        // secondary: "#555",
        secondary: "#555",
        danger: "#bb0808",
      },
      fontFamily: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
