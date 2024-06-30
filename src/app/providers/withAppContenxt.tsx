import { ProviderComponent } from './types';
import { AppContextProvider } from '@/hooks/useAppContext';

export const withAppContent = (Component: ProviderComponent) => () =>
  (
    <AppContextProvider>
      <Component />
    </AppContextProvider>
  );
