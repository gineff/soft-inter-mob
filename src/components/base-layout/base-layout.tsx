import type { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/use-scroll-to-top';
import { Header } from '../header';
import { Footer } from '../footer';

export const BaseLayout: FC = () => {
  const { pathname } = useLocation();
  useScrollToTop(pathname);

  return (
    <>
      <Header />
      <Outlet />
      <Footer sx={{ mt: { xs: ' 120px', lg: '150px' } }} />
    </>
  );
};
