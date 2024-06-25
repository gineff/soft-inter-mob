import type { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { BaseLayout } from '@/components/base-layout';
import { Landing } from '@/pages/landing';
import { Vacation } from '@/pages/vacation';

export const Router: FC = () => (
  <Routes>
    <Route path="/" element={<BaseLayout />}>
      <Route index element={<Landing />} />
      <Route path="/posts" element={<h1>Posts</h1>} />
      <Route path="/vacations" element={<Vacation />} />
    </Route>
    <Route path="*" element={<h1>Page not found</h1>} />
  </Routes>
);
