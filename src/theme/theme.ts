import { createTheme, Theme } from '@mui/material/styles';

export const majesticPurple = '#6B32E7';
export const vividBurgundy = '#84103B';
export const deepIndigo = '#3C1C81';
const backgroundColor = '#010101';

export const theme: Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // Extra-small devices (portrait phones, less than 600px)
      sm: 600, // Small devices (landscape phones, 600px and up)
      md: 900, // Medium devices (tablets, 900px and up)
      lg: 1280, // Large devices (desktops, 1200px and up)
      xl: 1536, // Extra-large devices (large desktops, 1536px and up)
    },
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    text: {
      primary: '#fff',
    },
    primary: { main: majesticPurple },
    secondary: { main: vividBurgundy },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor,
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFF',
          borderRadius: '8px',
          //border: '1px solid rgba(255, 255, 255, 0.2)',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '19.36px',
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'active' },
          style: {
            backgroundColor: '#F0F0FF',
            color: `${backgroundColor}!important`,
          },
        },
      ],
      styleOverrides: {
        root: {
          '&.MuiButton-active': {
            '&:hover': {
              backgroundColor: '#F0F0FF',
              color: `${backgroundColor}!important`,
            },
          },
        },
      },
    
    },
  },
});
