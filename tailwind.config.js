/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dbf: {
          navy: {
            DEFAULT: '#102A43',
            dark: '#0A1A28',
            deep: '#061019',
            light: '#1E3A5F',
            soft: '#244973'
          },
          ivory: {
            DEFAULT: '#FFFDF8',
            pure: '#FFFFFF',
            dark: '#F4EFE6'
          },
          cream: {
            DEFAULT: '#FFF7EA',
            soft: '#FAF6ED',
            dark: '#EBDDC5'
          },
          pastel: {
            blue: '#EAF4FA',
            yellow: '#FFF3C4',
            peach: '#FFF0E8',
            pink: '#FDE8EE',
            mint: '#EAF8F2',
            purple: '#F3E8FF'
          },
          gold: {
            DEFAULT: '#C99A2E',
            light: '#E2B857',
            deep: '#9E771B',
            glow: '#F5D77F'
          },
          charcoal: {
            DEFAULT: '#1F2933',
            muted: '#486581',
            soft: '#334E68',
            light: '#627D98'
          },
          accent: {
            burgundy: '#800020',
            teal: '#008080',
            purple: '#5C2D91',
            emerald: '#0F5257',
            orange: '#D96B27'
          }
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 4px 20px rgba(201, 154, 46, 0.25)',
        'light-card': '0 10px 30px -5px rgba(16, 42, 67, 0.06), 0 4px 12px rgba(16, 42, 67, 0.03)',
        'premium-hover': '0 20px 40px -10px rgba(16, 42, 67, 0.12)',
        'ribbon': '0 8px 25px -4px rgba(201, 154, 46, 0.3)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-6px) rotate(0.5deg)' },
        },
        ribbonFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        ribbonFloat: 'ribbonFloat 4s ease-in-out infinite',
        marquee: 'marquee 35s linear infinite',
      }
    },
  },
  plugins: [],
}
