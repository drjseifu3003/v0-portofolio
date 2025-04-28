import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Gaming-inspired colors
        neon: {
          blue: "#00f3ff",
          purple: "#9000ff",
          pink: "#ff00e5",
          green: "#00ff8f",
          yellow: "#ffde00",
        },
        cyber: {
          dark: "#0f1923",
          darker: "#080e14",
          light: "#f1f5f9",
          accent: "#00f3ff",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 5px rgba(0, 243, 255, 0.5), 0 0 20px rgba(0, 243, 255, 0.2)",
          },
          "50%": {
            boxShadow: "0 0 15px rgba(0, 243, 255, 0.8), 0 0 30px rgba(0, 243, 255, 0.4)",
          },
        },
        "text-glow": {
          "0%, 100%": {
            textShadow: "0 0 5px rgba(0, 243, 255, 0.5), 0 0 10px rgba(0, 243, 255, 0.2)",
          },
          "50%": {
            textShadow: "0 0 10px rgba(0, 243, 255, 0.8), 0 0 20px rgba(0, 243, 255, 0.4)",
          },
        },
        "border-flow": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 3s infinite",
        "text-glow": "text-glow 3s infinite",
        "border-flow": "border-flow 5s ease infinite",
        float: "float 6s ease-in-out infinite",
      },
      backgroundImage: {
        "cyber-grid":
          "linear-gradient(rgba(0, 243, 255, 0.1) 1px, transparent 1px), linear-gradient(to right, rgba(0, 243, 255, 0.1) 1px, transparent 1px)",
        "gradient-flow": "linear-gradient(90deg, #00f3ff, #9000ff, #ff00e5, #00f3ff)",
      },
      backgroundSize: {
        "cyber-grid": "30px 30px",
        "gradient-flow": "300% 100%",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "65ch",
            color: "inherit",
            a: {
              color: "hsl(var(--primary))",
              textDecoration: "none",
              fontWeight: "500",
            },
            "h1, h2, h3, h4": {
              color: "inherit",
              fontWeight: "700",
            },
            code: {
              color: "hsl(var(--primary))",
              backgroundColor: "hsl(var(--muted))",
              borderRadius: "0.25rem",
              paddingLeft: "0.25rem",
              paddingRight: "0.25rem",
              paddingTop: "0.125rem",
              paddingBottom: "0.125rem",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            pre: {
              backgroundColor: "hsl(var(--muted))",
              borderRadius: "0.5rem",
              padding: "1rem",
              overflowX: "auto",
            },
            "pre code": {
              backgroundColor: "transparent",
              padding: "0",
            },
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config

export default config
