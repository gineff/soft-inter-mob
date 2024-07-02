import type { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/use-scroll-to-top';
import { PageHeader } from '../page-header';
import { Container } from '@mui/material';
import { Footer } from '../footer';

export const PageLayout: FC = () => {
  const { pathname } = useLocation();
  useScrollToTop(pathname);

  return (
    <>
      <PageHeader />
      <Container sx={{ height: '64px' }} />
      <Outlet />
      <Footer />
    </>
  );
};
