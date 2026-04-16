import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        coal:    '#0A0A0A',
        navy:    '#060D1F',
        'navy-mid': '#0E1B35',
        'navy-light': '#162444',
        gold:    '#C9A84C',
        'gold-light': '#E4C97A',
        'gold-dark':  '#9E7A2A',
        emerald: '#1A6B3C',
        'emerald-light': '#22A05A',
        cream:   '#F5F0E8',
        'cream-dark': '#E8E0D0',
        muted:   '#8A95A8',
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        heading: ['var(--font-dm-serif)', 'serif'],
        body:    ['var(--font-outfit)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-shimmer': 'linear-gradient(135deg, #C9A84C 0%, #E4C97A 50%, #9E7A2A 100%)',
        'navy-gradient': 'linear-gradient(180deg, #060D1F 0%, #0A0A0A 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(201, 168, 76, 0.4)' },
          '50%': { boxShadow: '0 0 0 20px rgba(201, 168, 76, 0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}
export default config
