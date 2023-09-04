/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}' /* Flowbite*/
  ],
  theme: {
    extend: {},
    colors:{
      'primaryBlue': '#005598',
      'primary-black': '#3D4047',
      'gray-900': '#101828',
      'gray-500': '#667085',
      'secondary': '#FFFFFF',
      'secondary-light': '#F5F5F5'
    }
  },
  plugins: [require('flowbite/plugin')],
}

