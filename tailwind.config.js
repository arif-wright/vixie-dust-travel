/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F7EEE3',
        orange: '#C8652D',
        'orange-soft': '#E98C4A',
        plum: '#3E2348',
        'plum-soft': '#5B3B67',
        gold: '#E7C56E',
        ink: '#201426',
        mist: '#FDF8F2',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Outfit"', 'sans-serif'],
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
