/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        conicorn: {
          dark: "#1A1B1E",
          glass: "rgba(255, 255, 255, 0.7)",
          glassDark: "rgba(30, 30, 30, 0.6)",
          border: "rgba(0, 0, 0, 0.05)",
          borderDark: "rgba(255, 255, 255, 0.1)",
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'pastel-gradient': 'linear-gradient(to right, #A5B4FC, #C4B5FD, #FBCFE8)',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      }
    },
  },
  plugins: [],
};
