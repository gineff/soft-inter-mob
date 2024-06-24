import { createTheme, Theme } from '@mui/material/styles';

export const majesticPurple = '#6B32E7';
export const vividBurgundy = '#84103B';
export const deepIndigo = '#3C1C81';

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
          backgroundColor: '#010101',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: '#1B1B1B',
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'gradient' },
          style: {
            fontSize: '20px',
            lineHeight: '24px',
            textTransform: 'none',
            background: `linear-gradient(135deg, ${vividBurgundy}, ${majesticPurple}, ${deepIndigo})`,
            borderRadius: 24,
            padding: '32px 38px',
            color: '#FFFFFF',
          },
        },
      ],
    },
  },
});
