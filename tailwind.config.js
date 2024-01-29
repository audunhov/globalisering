const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./storyblok/**/*.{html,js,ts,vue}",
    "./pages/**/*.{html,js,ts,vue}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      green: {
        dark: "#093d24",
        default: "#1ba560",
        light: "#baffdc",
      },
      pink: {
        dark: "#fc7ed0",
        default: "#ffc4e7",
        light: "#fce6f4",
      },
      vanilla: "#fffaef",
      black: "#000",
      white: "#FFF"
    },
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans]
      },
      padding: {
        responsive: "clamp(1rem, 5%, 3rem)",
      },
    },
  },
};
