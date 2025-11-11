/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}',
    './app/**/*.{js,jsx,ts,tsx,mdx}',
    './lib/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-montserrat)', 'var(--font-poppins)', 'sans-serif'],
        body: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#0059ff',
          dark: '#0041bf',
          light: '#eff4ff',
        },
      },
      boxShadow: {
        brand: '0 20px 40px rgba(15, 23, 42, 0.1)',
      },
      borderRadius: {
        sm: '6px',
        md: '12px',
        lg: '18px',
      },
    },
  },
  plugins: [],
};
