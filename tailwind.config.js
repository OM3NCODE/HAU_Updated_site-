/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: '#080313', // Gorgeous deep cosmic violet-black
          purple: '#7C3AED', // Brand primary purple
          light: '#EDE9FE',
          dark: '#120b24',
        },
        token: {
          hau: '#2fff37', // Brand Neon Green
          ubp: '#ff00fc', // Brand Neon Pink
        },
        nft: {
          orange: '#f2a900', // Brand Neon Gold
        },
        accent: {
          gold: '#f2a900', // Brand Neon Gold
        },
        semantic: {
          success: '#2fff37', // Neon Green
          info: '#3b82f6',
          warning: '#ef4444',
          muted: '#9ca3af',
        },
        tint: {
          hau: '#d1fae5',
          ubp: '#fce7f3',
          nft: '#fef3c7',
          neutral: '#f3f4f6',
        }
      },
      fontFamily: {
        sans: ['"Russo One"', '"DM Sans"', 'sans-serif'],
        display: ['"Sugar Bomb"', 'SugarBomb', '"Luckiest Guy"', '"Cabinet Grotesk"', 'sans-serif'],
        body: ['"Russo One"', '"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
