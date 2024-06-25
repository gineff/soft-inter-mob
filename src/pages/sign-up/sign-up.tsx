import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Anchor } from '@/components/anchor';
import { SignUpForm } from '@/components/sign-up-form';

const GradientEllipse = styled(Box)(() => ({
  maxWidth: '1280px',
  width: '90vw',
  height: '0',
  paddingBottom: '35%',
  position: 'absolute',
  top: '100px',
  left: '0px',
  background: 'linear-gradient(to right, #84103B, #6B32E7, #3C1C81)',
  borderRadius: '50%',
  transform: 'rotate(22deg)',
  filter: 'opacity(80%) blur(50px)',
  zIndex: -1,
}));

const SignUp = () => {
  return (
    <Container
      sx={{ position: 'relative', padding: '0!important' }}
      component="section"
    >
      <Anchor id="Sign-Up" />
      <Box
        sx={{
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: '100px 150px',
          maxWidth: '780px',
          backgroundColor: '#1B1B1B',
          borderRadius: '40px',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            width: '100%',
            mb: '50px',
            textAlign: 'center',
            fontWeight: 600,
            fontSize: '32px',
            lineHeight: '38.73px',
          }}
        >
          Присоединяйтесь к нашей команде
        </Typography>

        <SignUpForm />

      </Box>
      <GradientEllipse />
    </Container>
  );
};

export default SignUp;
