/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design System Colors from DESIGN.md
        'brand-orange': '#f15e1c',
        'brand-green': '#2e936f',
        'brand-yellow-light': '#ffec69',
        'brand-yellow': '#fab60a',
        'brand-peach': '#f7d7b0',
        
        'espresso': '#2a1a14',
        'terracotta': '#3d261e',
        'terracotta-muted': '#4a332a',
        
        'surface-base': '#ffffff',
        'surface-ambient': '#fffaf5',
        'surface-tier1': '#fef5ee',
        'surface-tier2': '#fdf8f4',
        'surface-container': '#ffe9e2',
        'surface-container-high': '#fadcd2',
        
        'primary': '#f15e1c',
        'primary-hover': '#d94e10',
        'secondary': '#2e936f',
        'tertiary': '#795600',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'warm-sm': '0 2px 8px rgba(42, 26, 20, 0.04)',
        'warm-md': '0 8px 24px -4px rgba(42, 26, 20, 0.06), 0 2px 6px -1px rgba(74, 51, 42, 0.04)',
        'warm-lg': '0 16px 36px -6px rgba(42, 26, 20, 0.08), 0 4px 12px -2px rgba(241, 94, 28, 0.06)',
        'warm-xl': '0 24px 48px -8px rgba(42, 26, 20, 0.12), 0 0 1px 1px rgba(241, 94, 28, 0.1)',
        'glow-orange': '0 8px 28px rgba(241, 94, 28, 0.25)',
        'glow-green': '0 8px 28px rgba(46, 147, 111, 0.22)',
      }
    },
  },
  plugins: [],
}
