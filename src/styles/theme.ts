const theme = {
  color: {
    background: '#f5f5f5',
    text: {
      text: '#1D1D1B',
      gray: '#555555',
      grayDark: '#111111',
      grayLight: '#888888',
      tannat: '#B6116E'
    },
    structure: {
      white: '#ffffff',
      black: '#000000',
      transparent: '#00000000'
    },
    gray: {
      default: '#555555',
      dark: '#111111',
      light: '#888888'
    },
    functional: {
      success: {
        default: '#7EBC43',
        hover: '#5d8931',
        disabled: '#94ba6f'
      },
      tannat: {
        default: '#B6116E',
        disabled: '#b55188',
        hover: '#990f5b'
      },
      white: {
        default: '#FFFFFF',
        disabled: '#FFFFFF1A'
      }
    },
    branding: {
      tannat: { default: '#B6116E' },
      tavel: {
        default: '#F79552',
        light: '#F9B950',
        chenin: '#F26649'
      }
    }
  },
  button: {
    size: {
      mini: {
        width: '24px',
        height: '24px'
      },
      smart: {
        width: '38px',
        height: '38px'
      },
      medium: {
        width: '73px',
        height: '38px'
      },
      mobile: {
        width: '180px',
        height: '48px'
      },
      product: {
        width: '163px',
        height: 'inherit'
      },
      large: {
        width: '256px',
        height: '39.36px'
      }
    }
  },
  font: {
    size: {
      mini: '10px',
      xxxSmall: '11px',
      xxSmall: '12px',
      xSmall: '14px',
      small: '16px',
      medium: '18px',
      large: '20px',
      xLarge: '24px',
      xxLarge: '28px',
      xxxLarge: '30px',
      giant: '32px'
    },
    family: {
      lato: 'lato',
      sansSerif: 'sans-serif',
      saira: 'saira',
      openSans: 'open-sans',
      neoSans: 'Neo Sans Std Regular'
    },
    weight: {
      light: 300,
      regular: 400,
      semiBold: 600,
      bold: 700,
      black: 900
    }
  },
  breakpoint: {
    mobile: '428px',
    tablet: '834px',
    laptop: '1024px',
    desktop: '1440px'
  }
};

export default theme;
