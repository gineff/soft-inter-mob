import { Anchor } from '@/components/anchor';
import {
  Container,
  Box,
  Typography,
  CardContent,
  CardMedia,
  Card,
  useMediaQuery,
  useTheme,
} from '@mui/material';

const technologiesList = [
  { title: 'IOS (Swift)', icon: 'swift.png' },
  { title: 'Android (Kotlin)', icon: 'kotlin.png' },
  { title: 'Unity C#', icon: 'c.png' },
  { title: 'PHP', icon: 'php.png' },
  { title: 'Symfony', icon: 'symphony.png' },
];

export const Technologies = () => {
  const theme = useTheme();
  /** ToDo сделать мобильную версию */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '51px',
        padding: '0 50px!important',
      }}
    >
      <Anchor id="Technologies" />

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
        Технологии
      </Typography>

      <Box
        sx={{
          display: 'flex',
          gap: '45px',
        }}
      >
        {technologiesList.map(({ title, icon }) => (
          <Card sx={{ backgroundColor: 'inherit' }}>
            <CardMedia
              component="img"
              src={`/src/assets/${icon}`}
              alt={title}
              height="200"
              width="200"
              sx={{
                backgroundColor: '#1B1B1B',
                borderRadius: '24px',
                border: '1px solid rgb(255 255 255 / 20%)',
              }}
            />
            <CardContent sx={{ padding: '12px 0' }}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: '20px',
                  lineHeight: '24.2px',
                  textAlign: 'center',
                }}
              >
                {title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default Technologies;
