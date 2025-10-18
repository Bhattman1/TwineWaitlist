import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // New color scheme
        'twine-primary': '#006B61',    // Main color (dark teal)
        'twine-text': '#FDD64E',       // Text color (golden yellow)
        'twine-primary-light': '#008B7F', // Lighter variant of primary
        'twine-primary-dark': '#004D47',  // Darker variant of primary
        'twine-text-dark': '#E6C142',    // Darker variant of text color
        'twine-bg': '#001A17',          // Dark background
        'twine-surface': '#002B26',      // Surface color
        'twine-border': '#003D37',       // Border color
        'twine-button': '#6FC588',      // Button background (green)
        'twine-button-text': '#761718', // Button text (dark red)
      },
      fontFamily: {
        'serif': ['Georgia', 'Times New Roman', 'serif'],
        'inter': ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
