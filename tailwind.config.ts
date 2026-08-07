import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      colors: {
        'bg-dark': '#080B10',
        'bg-light': '#F8F8F7',
        primary: '#1F8FFF',
        border: '#E5E5E5',
        'text-muted': '#A0A0A0',
      },
      borderRadius: {
        card: '20px',
      },
    },
  },
  plugins: [],
}

export default config