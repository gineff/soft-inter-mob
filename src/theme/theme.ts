import { createTheme, Theme } from '@mui/material/styles';

export const majesticPurple = '#6B32E7';
export const vividBurgundy = '#84103B';
export const deepIndigo = '#3C1C81';
const backgroundColor = '#010101';

const mixinFont16 = {
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '19.36px',
};

export const theme: Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // Extra-small devices (portrait phones, less than 600px)
      sm: 600, // Small devices (landscape phones, 600px and up)
      md: 900, // Medium devices (tablets, 900px and up)
      lg: 1295, // 1280 + 15 scrollbar Large devices (desktops, 1200px and up)
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
    background: {
      paper: '#100E17',
      default: '#010101',
    },
  },
  mixins: {
    centredCol: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  components: {
    MuiDialog: {
      styleOverrides: {
        root: {
          '.MuiDialog-scrollBody': {
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          },
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
          ...mixinFont16,
          backgroundColor: '#FFF',
          borderRadius: '50px',
          '& label': {
            paddingLeft: '28px',
          },
          "& .MuiFilledInput-underline:after": {
            borderBottomColor: 'transparent'
          },
          '& .MuiFilledInput-root': {
            '&:before': {
              borderBottomColor: 'transparent',
            },
            '&:hover:not(.Mui-disabled)::before': {
              borderBottomColor: 'transparent',
            },
            '& .Mui-focused': {
              borderBottomColor: 'transparent',
            },
          },
          '& .MuiFilledInput-input': {
            color: '#000',
            paddingLeft: '28px',
          },
        },
      },
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'font16' },
          style: {
            ...mixinFont16,
          },
        },
        {
          props: { variant: 'font20' },
          style: {
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '24.2px',
          },
        },
        {
          props: { variant: 'font32' },
          style: {
            fontWeight: 600,
            fontSize: '32px',
            lineHeight: '38.73px',
          },
        },
        {
          props: { variant: 'font40' },
          style: {
            fontWeight: 600,
            fontSize: '40px',
            lineHeight: '60px',
          },
        },
      ],
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
        {
          props: { variant: 'gradient' },
          style: {
            fontSize: '20px',
            lineHeight: '24px',
            textTransform: 'none',
            border: '3px solid transparent',
            background: `linear-gradient(#100E17, #100E17), linear-gradient( 135deg, ${vividBurgundy}, ${majesticPurple}, ${deepIndigo})`,
            backgroundClip: 'padding-box, border-box',
            backgroundOrigin: 'padding-box, border-box',
            borderRadius: '50px',
            padding: '14px 24px',
            color: '#FFFFFF',
          },
        },
        {
          props: { variant: 'gradientWithShadow' },
          style: {
            fontSize: '20px',
            lineHeight: '24px',
            textTransform: 'none',
            border: '3px solid transparent',
            background: `linear-gradient(#100E17, #100E17), linear-gradient( 135deg, ${vividBurgundy}, ${majesticPurple}, ${deepIndigo})`,
            backgroundClip: 'padding-box, border-box',
            backgroundOrigin: 'padding-box, border-box',
            borderRadius: '50px',
            padding: '14px 24px',
            color: '#FFFFFF',
            position: 'relative',
            '&:before': {
              content: '""',
              position: 'absolute',
              background: `linear-gradient( 135deg, ${vividBurgundy}, ${majesticPurple}, ${deepIndigo})`,
              filter: 'blur(5px)',
              inset: '-5px',
              borderRadius: '50px',
              zIndex: -1,
            },
          },
        },
      ],
      styleOverrides: {
        root: ({ ownerState: ovnerState }) => ({
          ...(ovnerState.className?.includes('MuiButton-active') && {
            '&:hover': {
              backgroundColor: '#F0F0FF',
              color: `${backgroundColor}!important`,
            },
          }),
          '&.MuiButton-active': {
            '&:hover': {
              backgroundColor: '#F0F0FF',
              color: `${backgroundColor}!important`,
            },
          },
          ...mixinFont16,
          borderRadius: '8px',
          padding: '20px 24px',
        }),
      },
    },
  },
});
