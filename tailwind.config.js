/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    screens: {
      'mobile': '475px',

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: { //s1, s2 and s3 denote primary, secomdary and tertiary colours respectively
        blue_s1: '',
        blue_s2: '',
        blue_s3: '',
        //S1, S2, S3 are secondary colours; S4 Primary; S5 is a nultra-dark shade of green

      }
    },
  },
  plugins: [],
}

