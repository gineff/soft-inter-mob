import { Box, useMediaQuery, useTheme } from '@mui/material';
import { Main } from '@/pages/main';
import { Portfolio } from '@/pages/portfolio';
import { About } from '@/pages/about';
import { Vacations } from '@/pages/vacations';
import { Technologies } from '@/pages/technologies';
import { Partners } from '@/pages/partners';
import { Blog } from '@/pages/blog';
import { Faq } from '@/pages/faq';
import { SignUp } from '@/pages/sign-up';
import { Footer } from '@/components/footer';
import { StickedButton } from '@/components/sticked-button';

const Landing = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <>
      <Main />
      <StickedButton />
      <Box
        component="main"
        sx={{
          maxWidth: 'lg',
          minWidth: 'sm',
          width: '100%',
          margin: '0 auto',
          mt: '113px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { lg: '150px', xs: '120px' },
            p: 0,
            pb: { lg: '150px', xs: '120px' },
          }}
        >
          <Portfolio />
          <About />
          <Vacations itemCount={isDesktop ? 4 : 2} />
          <Technologies />
          <Blog />
          <Partners />
          <Faq />
          <SignUp />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Landing;
