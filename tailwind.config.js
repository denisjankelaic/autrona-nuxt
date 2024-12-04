const defaultTheme = {
  colors: {
    green: "#0a4229",
    red: "#EA0000",
  },
  shadows: {
    light: "0px 4px 50px rgba(23, 15, 70, 0.1);",
    heavy: "0px 4px 10px rgba(205, 205, 205, 0.5);",
  },
};

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      lineHeight: {
        base: "1.2",
      },
      maxWidth: {
        "2xlg": "1824px",
        xlg: "1560px",
        lg: "992px",
        md: "768px",
        sm: "480px",
      },
      minHeight: {
        md: "768px",
      },
      screens: {
        xxl: "1400px",
        xlg: "1560px",
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        xxl: "1.375rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "4.5rem",
        h1: "clamp(2.25rem, 4vw, 4rem)",
        h2: "clamp(1.5rem, 4vw, 4rem)",
        h3: "clamp(1.5rem, 4vw, 3rem)",
        h4: "clamp(1.375rem, 4vw, 2.25rem)",
        h5: "clamp(1.25rem, 4vw, 1.5rem)",
        h6: "clamp(1.125rem, 4vw, 1.25rem)",
      },
      shadows: defaultTheme.shadows,
      colors: {
        ...defaultTheme.colors,
      },
      fontFamily: {
        primary: ["Roboto", "sans-serif"],
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
      },
      vars: {
        fontAwesome: "'Font Awesome 6 Free'",
        boxShadow: "0px 4px 50px rgba(23, 15, 70, 0.1);",
      },
    },
  },
};
