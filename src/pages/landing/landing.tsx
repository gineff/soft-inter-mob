import { Container } from '@mui/material';
import { Main } from '@/pages/main';
import { Portfolio } from '@/pages/portfolio';
import { About } from '@/pages/about';
import { Vacation } from '@/pages/vacation';
import { Technologies } from '@/pages/technologies';
import { Partners } from '../partners';

const Landing = () => (
  <Container
    sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '150px',
    }}
  >
    <Main />
    <Portfolio />
    <About />
    <Vacation />
    <Technologies />
    <Partners />
  </Container>
);

export default Landing;
