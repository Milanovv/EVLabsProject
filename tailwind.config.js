/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0B1020',
          secondary: '#111827',
          tertiary: '#161B2E',
          elevated: '#1C2236',
        },
        border: {
          DEFAULT: '#2A314A',
          divider: '#232A40',
        },
        text: {
          primary: '#F8FAFC',
          secondary: '#AAB1C3',
          muted: '#7B8196',
          highlight: '#EADBC8',
        },
        accent: {
          indigo: '#6366F1',
          cyan: '#22D3EE',
          purple: '#A855F7',
          gold: '#FBBF24',
          orange: '#F97316',
          green: '#10B981',
          pink: '#F43F5E',
        },
        category: {
          programming: '#22D3EE',
          design: '#A855F7',
          marketing: '#F97316',
          product: '#6366F1',
          business: '#10B981',
          sales: '#F43F5E',
          events: '#FBBF24',
        },
        type: {
          tutorial: '#22D3EE',
          tool: '#34D399',
          faq: '#A855F7',
          error: '#F87171',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '16px',
        xl: '24px',
      },
      boxShadow: {
        card: '0 4px 12px rgba(0, 0, 0, 0.4)',
        glow: '0 0 40px rgba(99, 102, 241, 0.2)',
        'glow-cyan': '0 0 40px rgba(34, 211, 238, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease forwards',
        'slide-in': 'slideIn 0.4s ease forwards',
        'scale-in': 'scaleIn 0.3s ease forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateX(-10px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}