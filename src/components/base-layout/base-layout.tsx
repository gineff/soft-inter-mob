import type { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/use-scroll-to-top';
import { Header } from '../header';
//import { Container } from '@mui/material';
//import { useScrollToTop } from '@/hooks/use-scroll-to-top';

export const BaseLayout: FC = () => {
  const { pathname } = useLocation();
  useScrollToTop(pathname);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
