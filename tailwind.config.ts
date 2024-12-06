import type { Config } from "tailwindcss";

export default {
  darkMode:'class' ,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bavit:'#082f49',
        primary: '#1F509A', 
        secondary: '#2563EB',
        btnbg:'#0D9488',
        primBg:'#f5f5f5',
        formBg:'#f1f5f9',

        'dark':{
          bavit:'#E5E7EB',
          primary: '#1F509A', 
          secondary: '#2563EB',
          formBg:'#1E293B',
          formText:'#6B7280',
          btnbg:'#0D9488',
          primBg:'#020617',
        }
      },
      fontFamily:{
        bavit:"anta"
      }
    },
  },
  plugins: [],
} satisfies Config;
