/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#0B6BE3', dark: '#0955B8', light: '#6FAEFF', tint: '#E8F1FD' },
        ink: { DEFAULT: '#030810', 900: '#0A1322', 800: '#101C31', 700: '#1B2A45' },
        steel: { DEFAULT: '#4A5A72', light: '#5B6A82' },
        line: '#DCE3EC',
        mist: '#F3F6FA',
      },
      fontFamily: { sans: ['"IBM Plex Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'] },
      borderRadius: { DEFAULT: '2px', md: '3px', lg: '4px' },
      maxWidth: { site: '80rem' },
      fontSize: {
        display: ['clamp(2.25rem, 1.6rem + 3vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        h1: ['clamp(2rem, 1.5rem + 2.2vw, 3.25rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        h2: ['clamp(1.625rem, 1.3rem + 1.4vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        h3: ['clamp(1.125rem, 1.05rem + 0.4vw, 1.375rem)', { lineHeight: '1.3' }],
      },
    },
  },
  plugins: [],
};
