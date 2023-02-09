/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      boxShadow: {
        innerUp: "inset 5px 5px 5px 0 rgb(0 0 0 / 0.2)",
        innerDown: "inset -5px -5px 5px 0 rgb(0 0 0 / 0.2)",
      },
    },
  },
  plugins: [require('tailwind-scrollbar'),],
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
};
