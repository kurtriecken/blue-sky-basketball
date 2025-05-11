// postcss.config.cjs
module.exports = {
  plugins: [
    require('@tailwindcss/postcss'), // Updated line
    require('autoprefixer'),
  ],
};
