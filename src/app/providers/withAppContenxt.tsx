import { ProviderComponent } from './types';
import { AppContextProvider } from '@/hooks/useAppContext';

export const withAppContext = (Component: ProviderComponent) => () =>
  (
    <AppContextProvider>
      <Component />
    </AppContextProvider>
  );
