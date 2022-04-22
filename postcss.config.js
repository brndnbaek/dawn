//const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const postcssImport = require('postcss-import')

// module.exports = {
//     plugins: [
//       require('postcss-import'),
//       require('tailwindcss'),
//       require('autoprefixer'),
//       process.env.NODE_ENV === 'production' ? cssnano({preset: 'default'}) :null,
//     ]
//   }

const plugins = process.env.NODE_ENV === 'production' ? [tailwindcss,autoprefixer,postcssImport,cssnano] : [tailwindcss,autoprefixer,postcssImport]

module.exports = { plugins }