// tailwind.config.js
export default {
  content: [
    "./index.html", // Ensures Tailwind scans the root HTML file
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Scans all Vue, JavaScript, and TypeScript files in src directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
