import type { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { BaseLayout } from '@/components/base-layout';
import { Landing } from '@/pages/landing';
import { Vacations } from '@/pages/vacations';
import { PageLayout } from '@/components/page-layout';

export const Router: FC = () => (
  <Routes>
    <Route path="/" element={<BaseLayout />}>
      <Route index element={<Landing />} />
      <Route path="/posts" element={<h1>Posts</h1>} />
      <Route path="/vacations" element={<Vacations isCategoriesVisible />} />

    </Route>
    <Route path="/" element={<PageLayout />}>
      <Route path="/post/:id" element={<h1>Posts</h1>} />

    </Route>
    <Route path="*" element={<h1>Page not found</h1>} />
  </Routes>
);
