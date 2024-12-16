/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Bao gồm tất cả file trong thư mục src
    "./node_modules/@headlessui/react/**/*.js", // Dành cho Headless UI
  ],
  theme: {
    extend: {}, // Dùng để mở rộng các theme mặc định của Tailwind
  },
  plugins: [],
};
