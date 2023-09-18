import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        '15': '3.75rem',
        '18': '4.5rem',
        '26': '6.5rem',
        '34': '8.5rem',
        '2.1': '.525rem',
      },
      minHeight: {
        '8': '2rem',
        '14': '3.5rem',
        '20': '5rem',
        '48': '12rem',
        '120': '30rem',
      },
      height: {
        '22': '5.5rem',
        '46': '11.5rem',
        '100': '25rem',
      },
      minWidth: {
        '80': '20rem',
        '36': '9rem',
      },
      maxWidth: {
        '80': '20rem',
        '96': '24rem',
      },
      zIndex: {
        '100': '100',
      },
      borderWidth: {
        '1': '1px',
        'xl': '.75rem',
        'inherit': 'inherit',
      },
      borderRadius: {
        'inherit' : 'inherit',
      },
    },
    container: {
      // you can configure the container to be centered
      center: true,

      // default breakpoints but with 40px removed
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
}
export default config