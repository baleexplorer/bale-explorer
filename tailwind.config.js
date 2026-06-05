/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        'bg-card': '#141414',
        'bg-hover': '#1a1a1a',
        text: '#f5f5f5',
        'text-muted': '#888888',
        accent: '#c4a35a',
        'accent-hover': '#d4b76a',
        border: '#2a2a2a',
      },
      fontFamily: {
        grotesk: ['var(--font-space-grotesk)'],
        inter: ['var(--font-inter)'],
      },
      backgroundImage: {
        'noise': "url('/images/noise.svg')",
      },
    },
  },
  plugins: [],
};
