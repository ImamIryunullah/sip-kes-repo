module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"], // Tidak ada `purge`
  theme: {
    extend: {},
  },
  darkMode: "class", // Gunakan 'class' agar bisa dikontrol secara manual
  plugins: [],
};
