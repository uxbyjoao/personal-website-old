module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./helpers/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.500"),
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.400"),
            strong: {
              color: "white",
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ["dark"],
      grayscale: ["hover"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
