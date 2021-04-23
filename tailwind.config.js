module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        dark: {
          css: {
            color: theme("colors.gray.400"),
            h3: {
              color: "white",
            },
            h4: {
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
