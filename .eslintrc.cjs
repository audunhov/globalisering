require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: "@typescript-eslint/parser",
  },
  plugins: ["prettier"],
  extends: ["eslint:recommended", "@nuxt/eslint-config", "plugin:vue/vue3-recommended",  "plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": "error",
    "vue/multi-word-component-names": "off",
    "vue/no-v-html": "off",
  },
};
