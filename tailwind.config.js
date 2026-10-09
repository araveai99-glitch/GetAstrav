/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Trademark & Signature Brand Accents
        'brand-orange': '#f15e1c',
        'brand-orange-light': '#fff3ec',
        'brand-orange-hover': '#d94e10',
        'brand-green': '#2e936f',
        'brand-green-light': '#edf7f3',
        'brand-yellow-light': '#fff9d6',
        'brand-yellow': '#fab60a',
        'brand-peach': '#f7d7b0',

        // Refined Light Foundation & Architectural Palette
        'ivory': '#faf8f5',
        'ivory-warm': '#f6f2ec',
        'cream': '#fcf9f4',
        'champagne': '#f4ebe1',
        'champagne-gold': '#ebdccb',
        'sage-light': '#edf3ee',
        'sage': '#d7e5db',
        'sage-dark': '#2e936f',
        'linen': '#f5efea',
        'coral-soft': '#fcedea',
        'mint-soft': '#e8f6f1',

        // High-contrast Warm Typography
        'espresso': '#2a1a14',        // Primary text
        'terracotta': '#3d261e',      // Body text
        'terracotta-muted': '#5c4339',// Muted text

        // Light Warm Surfaces
        'surface-base': '#ffffff',
        'surface-ambient': '#fffaf5',
        'surface-tier1': '#fef7f2',
        'surface-tier2': '#fbf3ec',
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
        '4xl': '2rem',
      },
      boxShadow: {
        'warm-2xs': '0 1px 3px rgba(42, 26, 20, 0.04)',
        'warm-sm': '0 2px 8px rgba(241, 94, 28, 0.05)',
        'warm-md': '0 8px 24px -4px rgba(241, 94, 28, 0.08), 0 2px 6px -1px rgba(46, 147, 111, 0.04)',
        'warm-lg': '0 16px 36px -6px rgba(241, 94, 28, 0.1), 0 4px 12px -2px rgba(241, 94, 28, 0.08)',
        'warm-xl': '0 24px 48px -8px rgba(241, 94, 28, 0.14), 0 0 1px 1px rgba(247, 215, 176, 0.5)',
        'glow-orange': '0 8px 28px rgba(241, 94, 28, 0.28)',
        'glow-green': '0 8px 28px rgba(46, 147, 111, 0.25)',
        'architectural': '0 20px 50px -10px rgba(42, 26, 20, 0.08), 0 8px 16px -4px rgba(241, 94, 28, 0.06)',
        'satin-card': '0 10px 30px -5px rgba(241, 94, 28, 0.06), 0 0 0 1px rgba(247, 215, 176, 0.6)',
      }
    },
  },
  plugins: [],
}
