import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx",
  ],
  theme: {extend:{
    colors :{
      primary:"#FCB72B",
      darkBlue:"#495567",
      grayBlue:"#939CAA"
    },
    fontFamily:{
      sans:['"Lexend Deca Regular"', "Monospace" ],
    },
  },
 },
  plugins: [],
});
