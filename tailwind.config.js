/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design System Colors - Brand Palette Only (No Black or Brown)
        'brand-orange': '#f15e1c',
        'brand-green': '#2e936f',
        'brand-yellow-light': '#ffec69',
        'brand-yellow': '#fab60a',
        'brand-peach': '#f7d7b0',
        
        // High-contrast warm espresso typography (Strict Brand Palette)
        'espresso': '#2a1a14',        // Deep roasted espresso text
        'terracotta': '#3d261e',      // Dark terracotta body text
        'terracotta-muted': '#4a332a',// Earthen espresso muted text
        
        // Light warm surfaces
        'surface-base': '#ffffff',
        'surface-ambient': '#fffaf5',
        'surface-tier1': '#fef5ee',
        'surface-tier2': '#fdf8f4',
        'surface-container': '#ffe9e2',
        'surface-container-high': '#fadcd2',
        
        'primary': '#f15e1c',
        'primary-hover': '#d94e10',
        'secondary': '#2e936f',
        'tertiary': '#fab60a',
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
        'warm-sm': '0 2px 8px rgba(241, 94, 28, 0.05)',
        'warm-md': '0 8px 24px -4px rgba(241, 94, 28, 0.08), 0 2px 6px -1px rgba(46, 147, 111, 0.04)',
        'warm-lg': '0 16px 36px -6px rgba(241, 94, 28, 0.1), 0 4px 12px -2px rgba(241, 94, 28, 0.08)',
        'warm-xl': '0 24px 48px -8px rgba(241, 94, 28, 0.14), 0 0 1px 1px rgba(247, 215, 176, 0.5)',
        'glow-orange': '0 8px 28px rgba(241, 94, 28, 0.28)',
        'glow-green': '0 8px 28px rgba(46, 147, 111, 0.25)',
      }
    },
  },
  plugins: [],
}
