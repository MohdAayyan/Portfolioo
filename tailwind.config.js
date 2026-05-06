/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#030303",
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#8B5CF6",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#1E1E1E",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#3B82F6",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#262626",
          foreground: "#A3A3A3",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glow-purple': 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}