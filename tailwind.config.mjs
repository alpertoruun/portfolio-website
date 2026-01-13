/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sora', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        // Custom color palette - inspired by Linear/Vercel dark themes
        surface: {
          50: '#fafafa',
          100: '#18181b',
          200: '#1c1c21',
          300: '#242429',
          400: '#2d2d35',
          500: '#3f3f46',
          600: '#52525b',
          700: '#71717a',
          800: '#a1a1aa',
          900: '#d4d4d8',
          950: '#f4f4f5',
        },
        accent: {
          primary: '#6366f1',    // Indigo
          secondary: '#8b5cf6',  // Violet
          success: '#10b981',    // Emerald
          warning: '#f59e0b',    // Amber
          info: '#3b82f6',       // Blue
          glow: '#818cf8',       // Light indigo for glows
        },
        kubernetes: '#326ce5',
        aws: '#ff9900',
        github: '#238636',
        terraform: '#7b42bc',
        docker: '#2496ed',
        argocd: '#ef7b4d',
        backstage: '#9bf0e1',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M0 0h60v60H0z' fill='none' stroke='%23ffffff08' stroke-width='1'/%3E%3C/svg%3E")`,
        'dots-pattern': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23ffffff08'/%3E%3C/svg%3E")`,
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
      },
    },
  },
  plugins: [],
};
