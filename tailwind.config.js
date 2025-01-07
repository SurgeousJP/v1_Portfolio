/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    screens: {
      sm: "640px", // Small devices (min-width: 640px)
      md: "768px", // Medium devices (min-width: 768px)
      lg: "1024px", // Large devices (min-width: 1024px)
      xl: "1280px", // Extra large devices (min-width: 1280px)
      "2xl": "1536px", // 2X extra large devices (min-width: 1536px)
      // Custom breakpoints
    },
    extend: {
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(200px, 1fr))',
        'auto-fit': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
      },
      // that is actual animation
      keyframes: () => ({
        fadeOut: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      }),
      colors: {
        background: "#FFFFFF",
        primary: "#0057FF",
        secondary: "#3F4B59",
      },
      borderWidth: {
        1: "1px",
      },
      transitionProperty: {
        'height': 'height'
      },
      boxShadow: {
        'custom-lg': '0 0 15px rgba(0, 0, 0, 0.3)', // Custom shadow values
      },
    },
  },
};
