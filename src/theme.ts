export type Theme = typeof theme;

export const theme = {
  colors: {
    text: '#000000',
    background: '#F6F8FA',
    headerText: '#FFFFFF',
    headerBackground: '#104547',
    navigationText: '#818589',
    navigationTextDark: '#36454F',
    navigationBackground: '#FFFFFF',
    navigationBackgroundDark: 'rgba(0 0 0 / 4%)',
    navigationBackgroundDarker: 'rgba(0 0 0 / 8%)',
    sectionText: '#000000',
    sectionTextLight: '#CCCCCC',
    sectionBackground: '#FFFFFF',
    inputText: '#000000',
    inputBorder: '#DDDDDD',
    inputBorderDark: '#CCCCCC',
    inputBackground: '#FFFFFF',
    inputBackgroundDark: 'rgba(0, 0, 0, 3%)',
  },
  spacing: {
    padding: {
      xs: '0.25rem',
      s: '0.5rem',
      m: '1rem',
      l: '1.5rem',
      xl: '2rem',
    },
    borderRadius: {
      l: '1rem',
      m: '0.25rem',
    },
  },
  typography: {
    type: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
    weight: {
      regular: '400',
      bold: '600',
      extrabold: '700',
    },
    size: {
      s: '0.9rem',
      m: '1rem',
      l: '1.2rem',
    },
  },
};
