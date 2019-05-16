var plugins = [
  require("postcss-import"),
  require("tailwindcss"),
  require("autoprefixer")
];

if (process.env.JEKYLL_ENV === "production") {
  plugins.push(require("cssnano"));
}

module.exports = { plugins: plugins };