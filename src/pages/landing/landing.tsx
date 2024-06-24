import { Container } from '@mui/material';
import { Main } from '@/pages/main';
import { Portfolio } from '@/pages/portfolio';
import { About } from '@/pages/about';
import { Vacation } from '@/pages/vacation';
import { Technologies } from '@/pages/technologies';
import { Partners } from '@/pages/partners';
import { Blog } from '@/pages/blog';
import { Faq } from '@/pages/faq';
import { SignUp } from '@/pages/sign-up';
import { Footer } from '@/components/footer';

const Landing = () => (
  <>
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '150px',
        pb: '150px',
      }}
    >
      <Main />
      <Portfolio />
      <About />
      <Vacation />
      <Technologies />
      <Blog />
      <Partners />
      <Faq />
      <SignUp />
    </Container>
    <Footer />
  </>
);

export default Landing;
