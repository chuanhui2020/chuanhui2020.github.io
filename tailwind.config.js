/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        tech: {
          bg: '#0F172A',
          card: '#1B2336',
          primary: '#1E293B',
          accent: '#22C55E',
          fg: '#F8FAFC',
          muted: '#272F42',
          'muted-fg': '#94A3B8',
          border: '#475569',
        }
      },
      fontFamily: {
        heading: ['Orbitron', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
