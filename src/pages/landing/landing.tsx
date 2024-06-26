import { Box } from '@mui/material';
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

const Landing = () => (
  <>
    <Main />
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
          gap: '150px',
          p: 0,
          pb: '150px',
        }}
      >
        <Portfolio />
        <About />
        <Vacations itemCount={4} />
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

export default Landing;
