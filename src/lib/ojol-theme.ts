// OJOL Design System - Premium Blue Theme
// Inspired by Tesla UI, Web3 aesthetics, and modern fintech

export const ojolTheme = {
  // Primary Blue Colors
  colors: {
    // Deep Blue (Primary)
    primary: {
      50: '#eef2ff',
      100: '#e0e7ff',
      200: '#c7d2fe',
      300: '#a5b4fc',
      400: '#818cf8',
      500: '#6366f1',
      600: '#4f46e5',
      700: '#4338ca',
      800: '#1E3A8A', // Deep Blue
      900: '#1e1b4b',
    },

    // Electric Blue (Glow accents)
    electric: {
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      glow: 'rgba(59, 130, 246, 0.5)',
    },

    // Background colors
    background: {
      dark: '#0a0e27', // Deep navy/black
      darker: '#050714',
      card: 'rgba(15, 23, 42, 0.6)',
      cardHover: 'rgba(15, 23, 42, 0.8)',
    },

    // Text colors
    text: {
      primary: '#ffffff',
      secondary: '#94a3b8',
      muted: '#64748b',
    },

    // Accent colors
    accent: {
      blue: '#38bdf8',
      cyan: '#06b6d4',
      purple: '#8b5cf6',
    },
  },

  // Gradients
  gradients: {
    primary: 'linear-gradient(135deg, #1E3A8A 0%, #3b82f6 50%, #60a5fa 100%)',
    dark: 'linear-gradient(180deg, #0a0e27 0%, #050714 100%)',
    card: 'linear-gradient(135deg, rgba(30, 58, 138, 0.3) 0%, rgba(15, 23, 42, 0.6) 100%)',
    glow: 'linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, rgba(96, 165, 250, 0.4) 100%)',
  },

  // Glow effects
  glow: {
    blue: '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)',
    blueStrong: '0 0 30px rgba(59, 130, 246, 0.7), 0 0 60px rgba(59, 130, 246, 0.4)',
    card: '0 0 15px rgba(59, 130, 246, 0.1)',
    cardHover: '0 0 25px rgba(59, 130, 246, 0.2), 0 0 40px rgba(59, 130, 246, 0.1)',
  },

  // Spacing scale
  spacing: {
    xs: '0.5rem',  // 8px
    sm: '0.75rem', // 12px
    md: '1rem',    // 16px
    lg: '1.5rem',  // 24px
    xl: '2rem',    // 32px
    '2xl': '3rem', // 48px
    '3xl': '4rem', // 64px
  },

  // Typography scale
  typography: {
    // Heading sizes
    h1: 'clamp(2.5rem, 5vw, 4.5rem)',
    h2: 'clamp(2rem, 4vw, 3.5rem)',
    h3: 'clamp(1.5rem, 3vw, 2.5rem)',
    h4: '1.25rem',
    h5: '1.125rem',
    h6: '1rem',

    // Body sizes
    body: '1rem',
    bodyLarge: '1.125rem',
    bodySmall: '0.875rem',

    // Font weights
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',

    // Line heights
    tight: '1.1',
    normal: '1.5',
    relaxed: '1.75',
  },

  // Border radius
  radius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    full: '9999px',
  },

  // Shadows
  shadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    glow: '0 0 20px rgba(59, 130, 246, 0.5)',
  },

  // Transitions
  transition: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    normal: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
    smooth: '400ms cubic-bezier(0.4, 0, 0.2, 1)',
  },

  // Animation durations
  animation: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },

  // Z-index scale
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  },
} as const;

// Tailwind CSS custom classes generator
export const getOjolClasses = () => ({
  // Background classes
  bgGradientDark: 'bg-gradient-to-b from-[#0a0e27] to-[#050714]',
  bgGradientCard: 'bg-gradient-to-br from-blue-900/30 to-slate-900/60',
  bgGradientPrimary: 'bg-gradient-to-br from-blue-800 via-blue-600 to-blue-400',

  // Glow effects
  glowBlue: 'shadow-[0_0_20px_rgba(59,130,246,0.5),0_0_40px_rgba(59,130,246,0.3)]',
  glowBlueStrong: 'shadow-[0_0_30px_rgba(59,130,246,0.7),0_0_60px_rgba(59,130,246,0.4)]',
  glowCard: 'shadow-[0_0_15px_rgba(59,130,246,0.1)]',
  glowCardHover: 'shadow-[0_0_25px_rgba(59,130,246,0.2),0_0_40px_rgba(59,130,246,0.1)]',

  // Text gradients
  textGradient: 'bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent',

  // Glassmorphism
  glass: 'backdrop-blur-xl bg-slate-900/60 border border-blue-500/10',
  glassStrong: 'backdrop-blur-2xl bg-slate-900/80 border border-blue-500/20',

  // Button styles
  buttonPrimary: 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/30 hover:scale-105',

  // Card hover effects
  cardHover: 'transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20',
});
