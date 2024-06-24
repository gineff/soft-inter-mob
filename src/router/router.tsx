import type { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { BaseLayout } from '@/components/base-layout';
import { Landing } from '@/pages/landing';

export const Router: FC = () => (
  <Routes>
    <Route path="/" element={<BaseLayout />}>
      <Route index element={<Landing />} />
    </Route>
    <Route path="*" element={<h1>Page not found</h1>} />
  </Routes>
);
