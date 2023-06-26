/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--font-bioRhyme_Expanded)"],
        secondary: ["var(--font-bioRhyme)"],
        third: ["var(--font-fahkwang)"],
      },
      keyframes: {
        infinityText: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        infinityText: 'infinityText 20s linear infinite',
      }
    },
  },
  plugins: [],
}
