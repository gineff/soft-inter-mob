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
  zIndex: -5,
}));

const SignUp = () => {
  return (
    <Container
      id="sign-up"
      sx={{ position: 'relative', padding: '0!important' }}
      component="section"
    >
      <Anchor id="Sign-Up" />
      <Box
        sx={{
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: { lg: '100px 150px', sm: '50px 20px', xs: '30px 12px' },
          maxWidth: '780px',
          backgroundColor: 'background.paper',
          borderRadius: '40px',
          position: 'relative',
        }}
      >
        <Typography
          variant="font32"
          component="h2"
          sx={{
            width: '100%',
            mb: '50px',
            textAlign: 'center',
            wordWrap: 'break-word',
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
