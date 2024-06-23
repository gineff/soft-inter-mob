import { Container } from '@mui/material';
import { Main } from '../main';
import { Portfolio } from '../portfolio';

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
  </Container>
);

export default Landing;
