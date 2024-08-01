import { Anchor } from '@/components/anchor';
import { SectionTitle } from '@/components/section-title/section-title';
import { Container, Box, Typography } from '@mui/material';
import technologies from '@/assets/json/technologies.json';
import { LottieAnimation } from '@/components/lottie-animation';

export const Technologies = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: { xs: '20px!important', lg: '0 50px!important' },
        overflow: 'hidden',
      }}
    >
      <Anchor id="Technologies" />
      <SectionTitle>Технологии</SectionTitle>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          margin: '0 auto',
          gap: { md: '45px', xs: '20px' },
          width: { lg: '100%', md: '450px', xs: '350px' },
        }}
      >
        {technologies.map(({ title, icon }) => (
          <Box key={title}>
            <LottieAnimation
              src={icon}
              sx={{
                width: { md: '200px', xs: '165px' },
                height: { md: '200px', xs: '165px' },
                backgroundColor: 'background.paper',
                borderRadius: '24px',
                border: '1px solid rgb(255 255 255 / 20%)',
              }}
            />
            <Box sx={{ padding: '12px 0' }}>
              <Typography variant="font20" sx={{ textAlign: 'center' }}>
                {title}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Technologies;
