module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // Our spacing scale is based on a 8-pixel grid, but 
    // in some cases it can be subdivided into smaller sizes.
    spacing: {
      'none': '0px',
      'xxsmall':'4px',
      'xsmall': '8px',
      'small': '12px',
      'medium' : '16px',
      'large': '24px',
      'xlarge': '32px',
      'xxlarge': '48px',
      'xxxlarge': '64px',
      'huge': '96px',
      'xhuge': '128px'
    },
    colors: {
      //utility
      transparent: 'transparent',
      current: 'currentColor',

      // Practio DS colors
      sky: {
        lighter: '#F9FAFB',
        light: '#F4F6F8',
        DEFAULT: '#DFE3E8',
        dark: '#C4CDD5'
      },
      ink: {
        lightest: '#919EAB',
        lighter: '#637381',
        light: '#3D4754',
        DEFAULT: '#192029'
      },
      blue: {
        lighter: '#E5EEFF',
        light: '#B2CDFF',
        DEFAULT: '#1161FB',
        dark: '#0439CC',
        darker: '#001640'
      },
      // Interaction colors
      success: '#27CC6A',
      warning: '#FDBA2C',
      alert: '#EF3136',

      // etc
      white: '#FFFFFF',
      }
    },
  variants: {
    extend: {},
  },
  plugins: [],
};
