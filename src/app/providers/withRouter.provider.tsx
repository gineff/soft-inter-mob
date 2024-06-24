import { Suspense } from 'react';
import { HashRouter } from 'react-router-dom';
import { Loader } from '@components/loader';
import type { ProviderComponent } from './types';

/**
 * Провайдер оборачивает приложение в BrowserRouter с Suspense.
 * Во время ленивой подгрузки чанка может появиться лоадер.
 * */

export const withRouter = (Component: ProviderComponent) => () =>
  (
    <HashRouter>
      <Suspense fallback={<Loader />}>
        <Component />
      </Suspense>
    </HashRouter>
  );
