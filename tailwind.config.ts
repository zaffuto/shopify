import plugin from 'tailwindcss/plugin';
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [ 
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => ({
            "animation-delay": value
          })
        },
        {
          values: theme('spacing'), // Usa un tema, como spacing, para valores comunes
        }
      );
    })
  ],
} satisfies Config;
