const customColors = {
  cusOrange: {
    100: "#fff5e1",
    200: "#ffebcc",
    300: "#ffd49b",
    400: "#ffbc64",
    500: "#ffa838",
    600: "#ff9b1b",
    DEFAULT: "#ff9509",
    800: "#e38100",
    900: "#ca7200",
    1000: "#b06100",
  },
  cusViolet: {
    100: "#f5edfc",
    200: "#e6d7f5",
    300: "#ccabec",
    400: "#b17be3",
    500: "#9a55dc",
    600: "#8c3cd9",
    700: "#842fd8",
    800: "#7224bf",
    900: "#661eaa",
    DEFAULT: "#581796",
  },
  cusBlue: {
    100: "#e7f0ff",
    200: "#cedbff",
    300: "#9bb4ff",
    400: "#638bff",
    DEFAULT: "#2A5FFF",
    600: "#1851ff",
    700: "#0246ff",
    800: "#0038e5",
    900: "#0031cd",
    1000: "#002ab5",
  },
  cusGreen: {
    100: "#ebfff3",
    200: "#d5fee5",
    300: "#a5fdc9",
    400: "#72fdaa",
    500: "#4ffd90",
    600: "#3efd80",
    700: "#35fe76",
    800: "#2be265",
    900: "#1ec858",
    DEFAULT: "#009940",
  },
};

module.exports = config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "0px",
      // => @media (min-width: 0px) { ... }

      xxsm: "320px",
      // => @media (min-width: 320px) { ... }

      xsm: "440px",
      // => @media (min-width: 440px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      mxl: "1380px",
      // => @media (min-width: 1380px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1750px",
      // => @media (min-width: 1750px) { ... }
    },
    extend: {
      colors: {
        ...customColors,
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        daysOne: ["var(--font-daysOne)"],
      },
      fontSize: {
        "2xs": "0.625rem",
        "3xs": "0.5rem",
        "4xs": "0.4rem",
      },
    },
  },
  plugins: [],
};
