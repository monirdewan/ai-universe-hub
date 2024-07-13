/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          
          "primary": "#00b89b",
                    
          "secondary": "#fe8f00",
                    
          "accent": "#61dd6b",
                    
          "neutral": "#1e1213",
                    
          "base-100": "#1b273a",
                    
          "info": "#00b8ff",
                    
          "success": "#51ff0c",
                    
          "warning": "#c63c00",
                    
          "error": "#ff807f",
          },
        },
      ],
    },
  plugins: [
    daisyui,
  ],
}
