/** @type {import('tailwindcss').Config} */
module.exports = {
  important:true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow:{
        "headerShadow":"0px 4px 4px 0px rgba(0,0,0,0.5)",
      },
      translate:{
        "minus":"200%"
      },
      colors:{
        brown:{
          500:"#f59e0b",
          600:"#d97706",
          700:"#b45309",
          800:"#92400e",
          900:"#78350f",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
