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
        // dark: "#1b1b1b",
        // light: "#f5f5f5",
        // primary: "#B63E96", // 240,86,199
        // primaryDark: "#58E6D9",
        dark: "#013328",
        light: "#E3DCD2",
        primary: "#CC8B65",
        primaryDark: "#748B6F",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,rgba(255,255,255,0) 5px,rgba(255,255,255,0) 100px)",
        circularDark:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,rgba(255,255,255,0) 8px,rgba(255,255,255,0) 100px)",
        circularLightLg:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,rgba(255,255,255,0) 5px,rgba(255,255,255,0) 80px)",
        circularDarkLg:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,rgba(255,255,255,0) 8px,rgba(255,255,255,0) 80px)",
        circularLightMd:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,rgba(255,255,255,0) 5px,rgba(255,255,255,0) 60px)",
        circularDarkMd:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,rgba(255,255,255,0) 8px,rgba(255,255,255,0) 60px)",
        circularLightSm:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,rgba(255,255,255,0) 5px,rgba(255,255,255,0) 40px)",
        circularDarkSm:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,rgba(255,255,255,0) 8px,rgba(255,255,255,0) 40px)",
        gradientLightLayout:
          "radial-gradient(circle, rgba(204,139,101,1) 0%, rgba(227,220,210,1) 100%)",
        gradientDarkLayout:
          "radial-gradient(circle, rgba(116,139,111,1) 0%, rgba(1,51,40,1) 75%)",
      },
      boxShadow: {
        "3xl": "0 15px 15px 1px rgba(80,230,217, 0.4)",
      },
      backgroundColor: [
        "#121212",
        "rgba(131,58,180,1)",
        "rgba(253,29,29,1)",
        "rgba(252,176,69,1)",
        "rgba(131,58,180,1)",
        "#121212",
      ],
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
