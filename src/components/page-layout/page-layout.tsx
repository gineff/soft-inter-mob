import type { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/use-scroll-to-top';
import { PageHeader } from '../page-header';


export const PageLayout: FC = () => {
  const { pathname } = useLocation();
  useScrollToTop(pathname);

  return (
    <>
      <PageHeader />
      <Outlet />
    </>
  );
};
