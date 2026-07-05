/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        // Cool-neutral "paper" scale — the single grayscale used across the whole page.
        ink: {
          25: '#fcfcfb',
          50: '#f7f7f5',
          100: '#eeeeeb',
          200: '#e1e0da',
          300: '#c8c6bc',
          400: '#a3a096',
          500: '#7d7a70',
          600: '#5c594f',
          700: '#433f36',
          800: '#2b2823',
          900: '#1a1815',
          950: '#100f0d',
        },
        // Single site accent — deep rose. Used for links, CTAs, active states only.
        accent: {
          DEFAULT: '#9f123c',
          soft: '#fbdce6',
          ink: '#7a0e2e',
        },
        success: '#15803d',
        // Real-world brand colors for technology badges (informational, not UI accents).
        kubernetes: '#326ce5',
        aws: '#c9720a',
        github: '#238636',
        terraform: '#7b42bc',
        docker: '#2496ed',
        argocd: '#d15a2e',
        backstage: '#0d9488',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M0 0h60v60H0z' fill='none' stroke='%2312111008' stroke-width='1'/%3E%3C/svg%3E")`,
        'dots-pattern': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Ccircle cx='1' cy='1' r='1' fill='%2312111010'/%3E%3C/svg%3E")`,
        'noise': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E")`,
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient': 'gradient 8s ease infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px var(--tw-shadow-color)',
        'glow-md': '0 0 25px -5px var(--tw-shadow-color)',
        'glow-lg': '0 0 50px -10px var(--tw-shadow-color)',
        'inner-glow': 'inset 0 0 30px -10px var(--tw-shadow-color)',
        'soft': '0 1px 2px rgba(18,17,16,0.04), 0 12px 32px -12px rgba(18,17,16,0.10)',
        'soft-lg': '0 2px 4px rgba(18,17,16,0.04), 0 24px 48px -16px rgba(18,17,16,0.14)',
        'soft-xl': '0 4px 8px rgba(18,17,16,0.04), 0 40px 80px -24px rgba(18,17,16,0.18)',
      },
    },
  },
  plugins: [],
};
