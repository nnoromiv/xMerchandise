import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "loginGradient": "linear-gradient(-45deg, #3e5801, #adf802)"

      },
      boxShadow : {
        "shadow" : "0px 5px 10px rgba(0, 0, 0, .2)",
        "below": "0px 3px 5px rgba(0, 0, 0, .2)"

      },
      colors: {
        "error":"#ff0000",
        "success": "#87ceeb",
        "primary": "#adf802",
        "primaryDarker":"#3e5801",
        "grey": "rgb(238, 238, 238)",
        "greyDarker": "#5a5a5a",
        "general": "#ffffff",        
        "purple": "#663399",  
        "deepBlue": "#00bfff",
        "orangeRed": "#ff4500",
      },
      padding: {
        "sidebar": "calc(var(68px) + 1rem)"
      },
    },
  },
  plugins: [],
};
export default config;
