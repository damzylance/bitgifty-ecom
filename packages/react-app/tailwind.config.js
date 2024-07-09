/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "shop-bg": "url('/shop-bg.png')",
        "auth-bg": "url('/auth-bg.png')",
      },
      colors: {
        "grey-1": "#E8E9EE",
        "grey-2": "#D7DBF4",
        "grey-3": "#595959",
        "grey-4": "#F9F9FB",
        "grey-6": "#F5F5F5",
        "blue-1": "#182055",
        "blue-2": "#AFB7E9",
        "blue-3": "#103D96",
        "black-1": "#000000",
        "black-2": "#262626",
        "black-3": "#272727",
        "brown-1": "#5C4356",
      },
      boxShadow: {
        "shadow-1": "box-shadow: 0px 4px 4px 0px #0000001A",
      },
      fontFamily: {
        inter: "var(--font-inter)",
        roboto: "var(--font-roboto)",
        work_sans: "var(--font-work_sans)",
      },
    },
    screens: {
      md: "500px",
    },
  },
  plugins: [],
};
