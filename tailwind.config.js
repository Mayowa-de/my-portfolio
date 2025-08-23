/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  darkMode:'class',
  content: ["./App.jsx",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
       sans: ['Inter', 'sans-serif'],
       serif: ['Merriweather', 'serif'],
       mono: ['Menlo', 'monospace'],
      },
      screens:{
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
      }
    },
  },
  plugins: [daisyui],
}

