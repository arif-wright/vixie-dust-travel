/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FCEEDC',
        orange: '#F4A261',
        'orange-soft': '#E88E48',
        plum: '#4A2C3A',
        'plum-soft': '#69485A',
        blush: '#F6C1CC',
        hotpink: '#F6C1CC',
        'hotpink-deep': '#DFA4B2',
        lavender: '#D8C3E2',
        gold: '#F4D35E',
        charcoal: '#2E2E2E',
        lightgray: '#F5F5F5',
        ink: '#2E2E2E',
        mist: '#FFF9F2',
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'serif'],
        body: ['"Poppins"', 'sans-serif'],
        accent: ['"Great Vibes"', 'cursive'],
      },
      boxShadow: {
        card: '0 20px 46px -24px rgba(28, 18, 33, 0.45)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        floaty: 'floaty 4.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
