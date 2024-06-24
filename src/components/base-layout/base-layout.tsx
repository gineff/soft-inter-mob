import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../header';
//import { Container } from '@mui/material';
//import { useScrollToTop } from '@/hooks/use-scroll-to-top';

export const BaseLayout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
