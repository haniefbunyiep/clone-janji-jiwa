/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",

    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        fungreen: "#036041",
        pampas: "#F4F2EF",
        burnorange: "#FF6A39",
        concrete: "#F3F3F3",
        alabaster: "#F8F8F8",
        mineshaft: "#222222",
        shuttlegray: "#595F69",
        tangerine: "#FF9978",
        cumin: "#973F22",
        pomegranate: "#E24513",
        apricot: "#F0926B",
        manatee: "#919BAB",
        nevada: "#6A7172",
        pistachio: "#98B700",
      },
      backgroundImage: {
        "bg-main": "url('/public/gradient-wallpaper.png')",
      },
    },
    screens: {
      mobile: { max: "639px" },
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],

};
