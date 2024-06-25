import type { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { BaseLayout } from '@/components/base-layout';
import { Landing } from '@/pages/landing';
import { Vacations } from '@/pages/vacations';

export const Router: FC = () => (
  <Routes>
    <Route path="/" element={<BaseLayout />}>
      <Route index element={<Landing />} />
      <Route path="/posts" element={<h1>Posts</h1>} />
      <Route path="/vacations" element={<Vacations isCategoriesVisible />} />
      <Route
        path="/vacation/:name"
        element={<Vacations isCategoriesVisible />}
      />
    </Route>
    <Route path="*" element={<h1>Page not found</h1>} />
  </Routes>
);
