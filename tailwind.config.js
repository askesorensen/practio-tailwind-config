module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // SPACING
    // Our spacing scale is based on a 8-pixel grid, but in some cases it can be subdivided into smaller sizes.
    spacing: {
      none: '0rem',
      xxsmall: '0.25rem', // 4px
      xsmall: '0.5rem', // 8px
      small: '0.75rem', // 12px
      medium: '1rem', // 16px
      large: '1.5rem', // 24px
      xlarge: '2rem', // 32px
      xxlarge: '3rem', // 48px
      xxxlarge: '4rem', // 64px
      huge: '6rem', // 96px
      xhuge: '8rem', // 128px
    },

    // COLORS
    colors: {
      //utility
      transparent: 'transparent',
      current: 'currentColor',

      // Practio DS colors
      sky: {
        lighter: '#F9FAFB',
        light: '#F4F6F8',
        DEFAULT: '#DFE3E8',
        dark: '#C4CDD5',
      },
      ink: {
        lightest: '#919EAB',
        lighter: '#637381',
        light: '#3D4754',
        DEFAULT: '#192029',
      },
      blue: {
        lighter: '#E5EEFF',
        light: '#B2CDFF',
        DEFAULT: '#1161FB',
        dark: '#0439CC',
        darker: '#001640',
      },
      // Interaction colors
      success: '#27CC6A',
      warning: '#FDBA2C',
      alert: '#EF3136',

      // etc
      white: '#FFFFFF',
    },

    // FONT FAMILY
    fontFamily: {
      sans: ['Inter var', 'ui-sans-serif', 'system-ui'],
      mono: ['ui-monospace', 'SFMono-Regular'],
    },

    // BORDER RADIUS
    borderRadius: {
      none: '0',
      xsmall: '0.125rem', // 2px
      small: '0.25rem', // 4px
      DEFAULT: '0.375rem', // 6px
      large: '0.5rem', // 8px
      xlarge: '0.75rem', // 12px
      xxlarge: '1.75rem', // 20px
      full: '9999px',
    },

    // BOX SHADOWS
    boxShadows: {
      small: '0px 1px 2px rgba(25, 32, 41, 0.15)',
      DEFAULT:
        '0px 1px 3px rgba(25, 32, 41, 0.15), 0px 1px 2px rgba(25, 32, 41, 0.05)',
      md: '0px 2px 16px rgba(25, 32, 41, 0.08), 0px 1px 3px rgba(25, 32, 41, 0.1)',
      lg: '0px 31px 41px rgba(25, 32, 41, 0.1), 0px 2px 16px rgba(25, 32, 41, 0.08)',
      none: 'none',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
