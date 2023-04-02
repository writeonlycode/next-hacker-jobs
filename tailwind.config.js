/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inria-sans)", "ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        heading: ["var(--font-bebas-neue)", "ui-sans-serif", "system-ui"],
      },
      colors: {
        "yellow-light": "#FFDCA8",
        "orange-light": "#F1A430",
        "pink": "#EE008F"
      },
      boxShadow: {
        md: "0.5rem 0.5rem 0 0 #000000",
      },
    },
  },
  plugins: [],
};
