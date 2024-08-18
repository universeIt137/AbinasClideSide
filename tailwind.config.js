module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '4px 6px 5px 2px #00000040',
      },
      screens: {
        'sm': { 'min': '300px' },
        'md': { 'min': '600px' },
        'lg': { 'min': '1000px' },
        'xl': { 'min': '1300px' },
        '2xl': { 'min': '1500px' },
      }
    },
  },
  daisyui: {
    themes: [{
      abinashTheme: {
        "primary": "#4AB9F2",
        "secondary": "#0081C3",
        "accent": "#23EAD2"
      }
    }, "light", "cupcake"],
  },
  plugins: [require("daisyui")],
}