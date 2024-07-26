import type { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/use-scroll-to-top';
import { Header } from '../header';
import { Footer } from '../footer';
import { Box, useMediaQuery, useTheme } from '@mui/material';

export const BaseLayout: FC = () => {
  const { pathname } = useLocation();
  useScrollToTop(pathname);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <>
      <Header />
      <Box
        component="main"
        sx={{
          marginTop: {
            lg: '113px',
            xs: '64px',
            minHeight: isDesktop ? 'calc(100vh - 113px)' : 'calc(100vh - 64px)',
            ...theme.mixins.centredCol,
          },
        }}
      >
        <Box sx={{ flexGrow: 1, width: '100%' }}>
          <Outlet />
        </Box>
        <Footer sx={{ mt: { xs: ' 120px', lg: '150px' }, width: '100%' }} />
      </Box>
    </>
  );
};
