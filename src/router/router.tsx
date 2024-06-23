import type { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Main } from '@/pages/main';
import { routes } from './routes';
import { BaseLayout } from '@/components/base-layout';
import { Landing } from '@/pages/landing';



export const Router: FC = () => (
  <Routes>

    <Route element={<BaseLayout />}>
    <Route path={routes.main.path} element={<Landing />} />
    </Route>
    <Route path="*" element={<Main />} />
  </Routes>
);
