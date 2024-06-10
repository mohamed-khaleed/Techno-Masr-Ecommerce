/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
         mainColor:"#1B6392",
         lightBlue:"#DDE8EF",
         lightGrey:"#E8E8E9",
         darkGrey:"#929FA5",
         orange:"#FA8232",
         darkYellow:"#EFD33D",
         darkRed:"#EE5858",
         darkGreen:"#2DB224",
         darkBlue:"#2DA5F3",
         darkBlack:"#191C1F",
          lightBlack:"#5F6C72",
      },
    },
  },
  plugins: [],
}

