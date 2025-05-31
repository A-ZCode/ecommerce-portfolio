module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        'primary-dark': '#2563EB',
        secondary: '#10B981',
        dark: '#1F2937',
        light: '#F9FAFB',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}