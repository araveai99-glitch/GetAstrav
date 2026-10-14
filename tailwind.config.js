/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '380px',
      },
      colors: {
        // Standard Colours (Colour palette strictly defined)
        'brand-orange': '#f15e1c',        // Primary Orange (CTAs, Highlights)
        'brand-orange-hover': '#d94e10',  // Primary Orange hover
        'brand-orange-light': '#fef2eb',  // Soft orange tint
        'brand-green': '#2e936f',         // Green (Secondary, Badges, Success)
        'brand-green-hover': '#25795b',   // Secondary hover
        'brand-green-light': '#edf7f3',   // Soft green tint
        'brand-white': '#ffffff',         // White (Background, Text)
        'brand-yellow-light': '#ffec69',  // Light Yellow (Accent, Highlights)
        'brand-yellow': '#fab60a',        // Golden Yellow (Warm accent, ratings)
        'brand-peach': '#f7d7b0',         // Peach (Soft warm background, borders)
        'brand-peach-light': '#fdf8f2',   // Subtle peach background

        // Semantic bindings
        'primary': '#f15e1c',
        'primary-hover': '#d94e10',
        'secondary': '#2e936f',
        'secondary-hover': '#25795b',
        'tertiary': '#fab60a',

        // High-contrast Warm Editorial Foundation
        'espresso': '#2a1a14',        // High-contrast primary text
        'terracotta': '#3d261e',      // Body text
        'terracotta-muted': '#6b544b',// Muted text

        // Light Warm Surfaces
        'ivory': '#fdfbf7',
        'champagne': '#f7eee3',
        'surface-base': '#ffffff',
        'surface-ambient': '#fffaf6',
        'surface-tier1': '#fef7f2',
        'surface-tier2': '#fbf3ec',
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['"Roboto"', 'sans-serif'],
        body: ['"Roboto"', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif'],
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
