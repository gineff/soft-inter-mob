import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import type { ProviderComponent } from './types';
import { theme } from '@/theme/theme';



export const withTheme = (Component: ProviderComponent) => () =>
  (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component />
    </ThemeProvider>
  );
