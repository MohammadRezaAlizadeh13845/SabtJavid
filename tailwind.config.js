/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/**/*.{html,js}",
    "./test/**/*.{js,jsx,ts,tsx,html}",
  ],
  screens: {
    supsm: "320px",
    sm: "480px",
    md: "768px",
    lg: "976px",
    xl: "1440px",
  },
  theme: {
    extend: {
      fontFamily: {
        vazir: ["Vazirmatn", "sans-serif"],
        playpen: ["Playpen", "sans-serif"],
      },
      colors: {
        lightBlue: "hsl(220, 80%, 60%)",
        darkBlue: "rgb(33, 78, 174)",
        veryDarkGray: "hsl(222, 47%, 10%)",
        darkGray: "hsl(217, 33%, 17%)",
        lightGray: "hsl(214, 32%, 85%)",
      },
    },
  },
  plugins: [],
};
