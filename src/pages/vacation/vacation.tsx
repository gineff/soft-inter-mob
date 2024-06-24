import {
  useTheme,
  Container,
  Box,
  Typography,
  useMediaQuery,
  Button,
} from '@mui/material';
import { vacationsList } from './vacations.data';
import { VacationPreview } from './vacation-preview';
import { Anchor } from '@/components/anchor';

const Vacation = () => {
  const theme = useTheme();
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
      <Anchor id="Vacations" />

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
        Вакансии
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '50px',
          height: isDesktop ? '435px' : 'auto',
          alignContent: isDesktop ? 'flex-start' : 'stretch',
        }}
      >
        {Object.keys(vacationsList)
          .slice(0, 4)
          .map((title) => (
            <Box
              key={title}
              sx={{ flex: isDesktop ? '1 1 calc(50% - 50px)' : '1 1 100%' }}
            >
              <VacationPreview key={title} title={title} />
            </Box>
          ))}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="outlined"
          sx={{
            fontWeight: 600,
            fontSize: '25px',
            lineHeight: '30.26px',
            padding: '20px 24px',
            borderWidth: '2px',
            color: '#976EEF',
            '&:hover': {
              borderWidth: '2px',
            },
          }}
        >
          Смотреть все
        </Button>
      </Box>
    </Container>
  );
};

export default Vacation;
