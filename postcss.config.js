module.exports = {
  plugins: {
    "tailwindcss/nesting": "postcss-nesting",
    'autoprefixer': {},
    'cssnano': {
      preset: 'default',
    },
    // 'postcss-mixins': {},
    'postcss-nested': {},
    'tailwindcss': {},
    'postcss-reporter': {},
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-xs': '36em',
        'mantine-breakpoint-sm': '48em',
        'mantine-breakpoint-md': '62em',
        'mantine-breakpoint-lg': '75em',
        'mantine-breakpoint-xl': '88em',
      },
    },
  },
}
