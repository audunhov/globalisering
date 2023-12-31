module.exports = {
  content: [
    "./storyblok/**/*.{html,js,ts,vue}",
    "./pages/**/*.{html,js,ts,vue}",
  ],
  theme: {
    extend: {
      padding: {
        responsive: "clamp(1rem, 5%, 3rem)",
      },
      colors: {
        primary: "#0097aa",
        secondary: "#e6fefe",
        text: "",
      },
    },
  },
};
