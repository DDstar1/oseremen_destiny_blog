/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        mobile: { max: "799px" },
        // => @media (max-width: 767px) { ... }

        desktop: { min: "800px" },
        // => @media (min-width: 768px) { ... }
      },
    },
  },
  plugins: [],
};
