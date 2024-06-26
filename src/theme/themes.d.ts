// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ButtonPropsVariantOverrides } from '@mui/material/Button';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    active: true;
  }
  interface Mixins {
    centredCol: true;
  }
}

declare module '@mui/material/styles' {
  interface Mixins {
    centredCol: {
      display: string;
      flexDirection: string;
      justifyContent: string;
      alignItems: string;
    };
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    font16?: React.CSSProperties;
    font20?: React.CSSProperties;
    font32?: React.CSSProperties;
    font40?: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    font16?: React.CSSProperties;
    font20?: React.CSSProperties;
    font32?: React.CSSProperties;
    font40?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    font16: true;
    font20: true;
    font32: true;
    font40: true;
  }
}
