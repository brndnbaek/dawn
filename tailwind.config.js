module.exports = {
  corePlugins: {
    preflight: false,
  },
    content: [
      './layout/*.liquid',
      './templates/*.liquid',
      './sections/*.liquid',
      './snippets/*.liquid',
    ],
    
  theme: {
    extend: {
      colors: {
        'lt-yellow': '#EFBC61',
        'lt-white': '#f7f7f5',
        'lt-apricot': '#f09174',
      },
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '3/4': '75%',
        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  future: {
    purgeLayersByDefault: true,
  },
}