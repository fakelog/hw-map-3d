const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    // },
    extend: {
      colors: {
        accent: colors.amber['100'],
        background: colors.neutral['600']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}