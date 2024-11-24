/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4caf50',
        secondary: '#3b82f6',
        accent: '#ff5722',
      },
    },
  },
  plugins: [],
};

