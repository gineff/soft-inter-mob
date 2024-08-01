import {
  Container,
  Box,
  CardMedia,
  Card,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Anchor } from '@/components/anchor';
import { SectionTitle } from '@/components/section-title/section-title';
//import google from '@/assets/video/google.lottie';
//import vs from '@/assets/video/google.json';
//import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const technologiesList = [
  { title: 'google', icon: 'google.svg' },
  { title: 'yandex', icon: 'yandex.svg' },
  { title: 'praktikum', icon: 'praktikum.svg' },
  { title: 'adjust', icon: 'adjust.svg' },
  { title: 'pooshwoosh', icon: 'pooshwoosh.svg' },
];

export const Partners = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: { xs: '20px!important', lg: '0 50px!important' },
      }}
    >
      <Anchor id="Partners" />
      <SectionTitle>Партнеры</SectionTitle>
      <Box
        sx={{
          display: 'flex',
          gap: '79px',
          flexWrap: isDesktop ? 'nowrap' : 'wrap',
          justifyContent: 'center',
        }}
      >
        {technologiesList.map(({ title, icon }, index) => (
          <Box key={title}>
            <Card
              sx={{
                backgroundColor: 'inherit',
                overflow: 'visible',
              }}
            >
              <CardMedia
                component="img"
                src={`/${icon}`}
                alt={title}
                sx={{
                  '@keyframes scaleAnimation': {
                    '0%': {
                      transform: 'scale(1)',
                    },
                    '10%': {
                      transform: 'scale(1.4)',
                    },
                    '20%, 100%': {
                      transform: 'scale(1)',
                    },
                  },
                  animation: `scaleAnimation 10s ${index * 2}s infinite`,
                }}
              />
            </Card>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Partners;
