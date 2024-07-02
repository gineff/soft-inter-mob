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
        padding: '0 50px!important',
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
        {technologiesList.map(({ title, icon }) => (
          <Box
            key={title}
            sx={{
              width: isDesktop ? 'auto' : 'calc(33% - 79px)',
            }}
          >
            <Card
              sx={{
                backgroundColor: 'inherit',
              }}
            >
              <CardMedia component="img" src={`/${icon}`} alt={title} sx={{}} />
            </Card>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Partners;
