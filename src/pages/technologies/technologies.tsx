import { Anchor } from '@/components/anchor';
import { SectionTitle } from '@/components/section-title/section-title';
import {
  Container,
  Box,
  Typography,
  CardContent,
  CardMedia,
  Card,
  //useMediaQuery,
  //useTheme,
} from '@mui/material';
import technologies from '@/assets/json/technologies.json';

export const Technologies = () => {
  //const theme = useTheme();
  /** ToDo сделать мобильную версию */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '0 50px!important',
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
          <Card sx={{ backgroundColor: 'inherit' }}>
            <CardMedia
              component="img"
              src={`/images/${icon}`}
              alt={title}
              sx={{
                width: { md: '200px', xs: '165px' },
                backgroundColor: 'background.paper',
                borderRadius: '24px',
                border: '1px solid rgb(255 255 255 / 20%)',
              }}
            />
            <CardContent sx={{ padding: '12px 0' }}>
              <Typography variant="font20" sx={{ textAlign: 'center' }}>
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
