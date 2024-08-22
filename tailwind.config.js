/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-green": "#004643",
        "bt-bg-color": "#f9bc60",
        "bt-disabled": "#abd1c6",
        "bt-text-color": "#001e1d",
      },
    },
  },
  plugins: [],
};
