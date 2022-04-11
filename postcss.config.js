//const purgecss = require('@fullhuman/postcss-purgecss')


module.exports = {
    plugins: [
      require('postcss-import'),
      require('tailwindcss'),
      require('autoprefixer')
      // purgecss({
      //   content: [
      //     './layout/*.liquid',
      //     './templates/*.liquid',
      //     './sections/*.liquid',
      //     './snippets/*.liquid',
      //   ],
      //   defaultExtractor: content => content.match(/[\w-:/]+(?<!:)/g) || [],
      // })
    ]
  }