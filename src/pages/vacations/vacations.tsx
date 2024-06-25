import {
  useTheme,
  Container,
  Box,
  Typography,
  useMediaQuery,
  Button,
  IconButton,
  DialogContent,
  Dialog,
  DialogTitle,
} from '@mui/material';
import { vacationsList, vacations } from './vacations.data';
import { VacationPreview } from './vacation-preview';
import { Anchor } from '@/components/anchor';
import { VacationPageProps, VacationType } from './types';
import { FC, useState, Suspense, useEffect } from 'react';
import { Categories } from './categories';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { VacationCard } from './vacation-card';
import CloseIcon from '@mui/icons-material/Close';

const Vacations: FC<VacationPageProps> = ({
  isCategoriesVisible = false,
  itemCount,
}) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const [activeCategory, setActiveCategory] = useState('Все');
  const [selectedVacation, setSelectedVacation] =
    React.useState<VacationType | null>(null);
  const [searchParams] = useSearchParams();

  const slicedVacationsListTitles = Object.entries(vacationsList)
    .slice(0, itemCount || undefined)
    .filter(([, values]) =>
      activeCategory === 'Все' ? true : values.includes(activeCategory)
    );

  const handleClose = () => {
    const params = new URLSearchParams(searchParams);
    params.delete('vacation');
    navigate({ search: params.toString() });
  };

  useEffect(() => {
    const vacationSearch = searchParams.get('vacation');
    const foundVacation =
      vacations.find((vacation) => vacation.title === vacationSearch) || null;
    setSelectedVacation(foundVacation);
  }, [searchParams]);

  return (
    <>
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
      <Suspense fallback={<></>}>
        <Dialog
          onClose={handleClose}
          open={!!selectedVacation}
          PaperProps={{
            style: {
              backgroundColor: 'unset',
              maxWidth: '741px',
              overflow: 'unset',
            },
          }}
          BackdropProps={{
            sx: {
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(10px)',
            },
          }}
          sx={{
            '& .MuiDialog-container': {
              overflowY: 'auto',
              '& .MuiDialogContent-root': {
                p: 0,
                overflow: 'unset',
              },
            },
          }}
        >
          <DialogTitle sx={{ p: 0, m: 0 }}>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: '60px',
                top: '40px',
                color: '#FFF',
                opacity: 0.4,
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            {selectedVacation && <VacationCard vacation={selectedVacation} />}
          </DialogContent>
        </Dialog>
      </Suspense>
    </>
  );
};

export default Vacations;
