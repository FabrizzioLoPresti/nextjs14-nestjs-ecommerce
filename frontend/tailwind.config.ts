import type { Config } from 'tailwindcss'
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      brightness: {
        40: '.40',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        layout: {}, // light theme layout tokens
        colors: {
          background: '#2b3d4f',
          foreground: '#f5f5f5',
          overlay: '#667c99'
        }, // light theme colors
      },
      dark: {
        layout: {}, // dark theme layout tokens
        colors: {
          background: '#0d1b2a',
          foreground: '#e0e1dd',
          overlay: '#415a77',
        }, // dark theme colors
      },
    }
  })]
}
export default config
