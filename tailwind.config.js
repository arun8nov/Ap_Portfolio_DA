/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: '#08121f',
        panel: '#0f1b2d',
        glow: '#47c5ff',
        accent: '#9d7cff',
        highlight: '#27e1ac',
      },
      boxShadow: {
        glow: '0 30px 80px rgba(71,197,255,0.14)',
      },
      backgroundImage: {
        'hero-grad': 'radial-gradient(circle at top right, rgba(71,197,255,0.14), transparent 25%), radial-gradient(circle at 20% 20%, rgba(157,124,255,0.1), transparent 18%)',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
