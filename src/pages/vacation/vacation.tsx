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
import { VacationPageProps } from './types';
import { FC, useState } from 'react';
import { Categories } from './categories';
import { Link } from 'react-router-dom';

const Vacation: FC<VacationPageProps> = ({
  isCategoriesVisible = true,
  itemCount,
}) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const [activeCategory, setActiveCategory] = useState('Все');

  const slicedVacationsListTitles = Object.entries(vacationsList)
    .slice(0, itemCount || undefined)
    .filter(([, values]) =>
      activeCategory === 'Все' ? true : values.includes(activeCategory)
    );

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

      {isCategoriesVisible && (
        <Categories active={activeCategory} setActive={setActiveCategory} />
      )}

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '50px',
          alignContent: isDesktop ? 'flex-start' : 'stretch',
        }}
      >
        {slicedVacationsListTitles.map(([title]) => (
          <Box
            key={title}
            sx={{
              flex: isDesktop ? '0 0 calc(50% - 50px)' : '1 1 100%',
              maxWidth: '700px',
            }}
          >
            <VacationPreview key={title} title={title} />
          </Box>
        ))}
      </Box>

      {itemCount && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="outlined"
            component={Link}
            to={`/vacations`}
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
      )}
    </Container>
  );
};

export default Vacation;
