/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
        colors: {
            blue: "#2997FF",
            gray: {
                DEFAULT: "#86868b",
                100: "#94928d",
                200: "#afafaf",
                300: "#42424570"
            },
            zinc: "#101010",
            black: {
                DEFAULT: '#000',
                100: '#010103',
                200: '#0E0E10',
                300: '#1C1C21',
                500: '#3A3A49',
                600: '#1A1A1A',
            },
            white: {
                DEFAULT: '#FFFFFF',
                800: '#E4E4E6',
                700: '#D6D9E9',
                600: '#AFB0B6',
                500: '#62646C',
            },
        },
        fill: {
            transparent: 'transparent',
        },
        backgroundImage: {
            'background': 'linear-gradient(to bottom left, rgba(17, 16, 16, 0.582), rgba(12, 8, 24, 0.904))',
            'gradient1': 'linear-gradient(90deg, rgba(165, 150, 232, 0.42) 0%, rgba(165, 150, 232, 0) 100%)',
            'gradient2': 'linear-gradient(90deg, rgba(255, 127, 255, 0.20) 0%, rgba(255, 127, 255, 0) 100%)',
            'silver-gradient': 'linear-gradient(90deg, rgba(192, 192, 192, 0.8) 0%, rgba(169, 169, 169, 0.8) 100%)',
        },
        backgroundColor: {
            'black-transparent': 'rgba(60, 60, 80, 0.01)',
        },
        fontFamily: {
            mono: ['Monaco', 'Menlo', 'Consolas', '"Courier New"', 'monospace'],
            generalsans: ['General Sans', 'sans-serif'],
        },
    },
  },
  plugins: [],
}

