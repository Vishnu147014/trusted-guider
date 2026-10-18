/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        travel: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b', // vibrant golden amber / coins
          600: '#d97706',
          700: '#b45309',
        },
        explorer: {
          500: '#0284c7', // sky blue
          600: '#0369a1',
          700: '#075985',
        },
        badge: {
          verified: '#10b981',
          gold: '#f59e0b',
          silver: '#94a3b8',
          bronze: '#d97706'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        coin: '0 0 20px -3px rgba(245, 158, 11, 0.35)',
        verified: '0 0 20px -3px rgba(16, 185, 129, 0.35)',
      }
    },
  },
  plugins: [],
}
