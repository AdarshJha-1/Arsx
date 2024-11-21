const gruvboxColors = {
  dark0: "#282828",
  dark1: "#3c3836",
  dark2: "#504945",
  dark3: "#665c54",
  dark4: "#7c6f64",
  light0: "#fbf1c7",
  light1: "#ebdbb2",
  light2: "#d5c4a1",
  light3: "#bdae93",
  light4: "#a89984",
  neutralRed: "#cc241d",
  neutralGreen: "#98971a",
  neutralYellow: "#d79921",
  neutralBlue: "#458588",
  neutralPurple: "#b16286",
  neutralAqua: "#689d6a",
  neutralOrange: "#d65d0e",
};

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Update paths based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        gruvbox: gruvboxColors,
      },
    },
  },
  plugins: [],
};


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gruvbox: gruvboxColors,
      },
    },
  },
  plugins: [],
}

