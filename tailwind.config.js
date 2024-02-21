/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "gordita-medium": ["Gordita-Medium", "sans-serif"],
        "gordita-regular": ["Gordita-Regular", "sans-serif"],
        "gordita-light": ["Gordita-Light", "sans-serif"],
        "gordita-bold": ["Gordita-Bold", "sans-serif"],
        inter: ["Inter"],
        sans: ["Arimo"],
      },
      textColor: {
        darkgreen: "#006400",
      },
    },
    daisyui: {
      themes: ["light"], // Only use the 'light' theme
    },
  },
  plugins: [require("daisyui")],
};
