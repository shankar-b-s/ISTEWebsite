/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation:{
        'infinite-scroll':'infinite-scroll 25s linear infinite',
      },
      keyframes:{
        'infinite-scroll' : {
          from:{transform: 'translateX(0)'},
          to:{transform: 'translateX(40%)'},
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    function({addUtilities}){
      addUtilities({
        '.bg-pos-x-400':{
          'background-position-x':'-540px',
        },
        '.bg-pos-x-800':{
          'background-position-x':'-1080px',
        },
      })
    }
  ],
};
