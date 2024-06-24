import {
  Container,
  Box,
  Typography,
  CardMedia,
  Card,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Anchor } from '@/components/anchor';

const technologiesList = [
  { title: 'google', icon: 'google.svg' },
  { title: 'yandex', icon: 'yandex.svg' },
  { title: 'praktikum', icon: 'praktikum.svg' },
  { title: 'adjust', icon: 'adjust.svg' },
  { title: 'pooshwoosh', icon: 'pooshwoosh.svg' },
];

export const Partners = () => {
  const theme = useTheme();
  /** ToDo сделать мобильную версию */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  /**Todo выделить Title в отдельный компонент*/

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '51px',
        padding: '0 50px!important',
      }}
    >
      <Anchor id="Partners" />

      <Typography
        variant="h2"
        component="h2"
        sx={{
          textTransform: 'uppercase',
          fontWeight: 600,
          fontSize: '40px',
          lineHeight: '60px',
        }}
      >
        Партнеры
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: '79px',
          flexWrap: isDesktop ? 'nowrap' : 'wrap',
          justifyContent: 'center',
        }}
      >
        {technologiesList.map(({ title, icon }) => (
          <Box
            sx={{
              width: isDesktop ? 'auto' : 'calc(33% - 79px)',
            }}
          >
            <Card
              sx={{
                backgroundColor: 'inherit',
              }}
            >
              <CardMedia
                component="img"
                src={`/src/assets/${icon}`}
                alt={title}
                sx={{}}
              />
            </Card>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Partners;
