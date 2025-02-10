import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      margin: {
        normal: "var(--background)",
        top: "60px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        knowledge: "#444E8D",
        inspirations: "#FFBF42",
        interpretations: "#D94F4F",
        accessible: "#82E49A",
      },
      maxWidth: {
        custom: "42rem", // 672px
        container: "1630px",
        half: "50%",
      },
      borderRadius: {
        "custom-small": "6px",
        "custom-large": "24px",
        "super-rounded": "50px",
      },
    },
  },
  plugins: [],
} satisfies Config;
