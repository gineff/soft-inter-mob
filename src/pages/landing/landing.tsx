import { Container } from '@mui/material';
import { Main } from '@/pages/main';
import { Portfolio } from '@/pages/portfolio';
import { About } from '@/pages/about';

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
  </Container>
);

export default Landing;
