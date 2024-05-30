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
        darkBlue: "#2D314D",
        limeGreen: "#31D35C",
        brightCyan: "#2BB7DA",
        grayishBlue: "#9698A6",
        lightGrayishBlue: "#F0F1F6",
        veryLightGray: "#FAFAFA",
      },
      backgroundColor: {
        grayishBlue: "#9698A6",
        lightGrayishBlue: "#F0F1F6",
        veryLightGray: "#FAFAFA",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
