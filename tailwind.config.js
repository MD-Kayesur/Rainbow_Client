/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sfProRounded: ['"SF Pro Rounded Black"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  