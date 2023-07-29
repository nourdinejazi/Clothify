/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors : {
        'gre' : '#C1F377',
        'whi' : '#FFFFFF',
        'bla' : '#222222'
      }
    },screens : {
      'sm': {'max' : '650px'},

      'md': {'min':'650px'},

      'lg': {'min' : '961px'},
    }
  },
  plugins: [
    require('@headlessui/tailwindcss')
  ],
}
