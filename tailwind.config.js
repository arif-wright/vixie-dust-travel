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
        display: ['"DM Serif Display"', 'serif'],
        body: ['"Sora"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 18px 44px -24px rgba(32, 20, 38, 0.35)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at 10% 10%, rgba(231, 197, 110, 0.18), transparent 32%), radial-gradient(circle at 85% 20%, rgba(233, 140, 74, 0.22), transparent 24%)',
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
