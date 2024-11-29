import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#6DB33F',
      contrastText: '#fff',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#F4F7FA',
      paper: '#FFFFFF',
    },
  },
  typography: {
    h2: {
      fontSize: '32px',
      fontWeight: 600,
      lineHeight: '40px',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': { boxSizing: 'border-box' },
        html: {
          width: '100%',
          height: '100%',
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
        },
        body: {
          height: '100%',
          fontFamily: "'Poppins', Helvetica, Arial, sans-serif",
        },
        '#root': { height: '100%' },
        a: { color: 'inherit', textDecoration: 'none' },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'medium',
        margin: 'normal',
        fullWidth: true,
        FormHelperTextProps: {
          style: { margin: 0 },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          fontWeight: '400',
          textTransform: 'none',
          padding: '8px 12px',
          minWidth: '100px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          boxShadow:
            '0px 3px 3px -2px rgb(0 0 0 / 6%), 0px 3px 4px 0px rgb(0 0 0 / 4%), 0px 1px 8px 0px rgb(0 0 0 / 4%) !important',
        },
      },
    },
  },
});

export default theme;
