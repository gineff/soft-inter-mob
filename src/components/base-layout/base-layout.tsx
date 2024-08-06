import type { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/use-scroll-to-top';
import { Header } from '../header';
import { Footer } from '../footer';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { headerHeightLg, headerHeightXs } from '@/theme/theme';

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
            lg: headerHeightLg,
            xs: headerHeightXs,
          },
          minHeight: isDesktop ? `calc(100vh - ${headerHeightLg})` : `calc(100vh - ${headerHeightXs})`,
          ...theme.mixins.centredCol,
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
