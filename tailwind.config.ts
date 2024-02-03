/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["var(--font-quicksand)"],
        jost: ["var(--font-jost)"],
      },
      colors: {
        dark: "#013328",
        light: "#E3DCD2",
        primary: "#CC8B65",
        primaryDark: "#748B6F",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      backgroundImage: {
        gradientLightLayout:
          "radial-gradient(circle, rgba(227,220,210,1) 0%, rgba(227,220,210,1) 25%, rgba(1,51,40,0.75) 100%)",
        gradientDarkLayout:
          "radial-gradient(circle, rgba(1,51,40,1) 0%, rgba(0,0,0,1) 100%)",
      },
      boxShadow: {
        "3xl": "0 15px 15px 1px rgba(80,230,217, 0.4)",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },
  },
  plugins: [],
};
