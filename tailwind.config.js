/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/Guns/classic.tsx","./src/Guns/bucky.tsx", "./src/Guns/Layout.tsx" ],
  theme: {
    
    extend: {
      visibility: ["group-hover"]
    },
  },
  plugins: [],
}

