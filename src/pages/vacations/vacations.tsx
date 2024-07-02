import {
  Container,
  Box,
  Button,
  IconButton,
  DialogContent,
  Dialog,
  DialogTitle,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import { VacationPreview } from './vacation-preview';
import { Anchor } from '@/components/anchor';
import { VacationPageProps, VacationType } from './types';
import { FC, useState, useEffect } from 'react';
import { Departments } from './departments';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import React from 'react';
import { VacationCard } from './vacation-card';
import CloseIcon from '@mui/icons-material/Close';
import { SectionTitle } from '@/components/section-title/section-title';
import { fetchVacations } from '@/api/staticAPI';
import vacationsMap from '@/assets/json/vacationsMap.json';
import { Loader } from '@/components/loader';
import { routes } from '@/router/routes';
import { useAppContext } from '@/hooks/useAppContext';
import { Footer } from '@/components/footer';

const Vacations: FC<VacationPageProps> = ({
  isCategoriesVisible = false,
  itemCount,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const { value, setValue } = useAppContext();
  const { vacations } = value;
  const [open, setOpen] = useState(false);
  const [activeDepartment, setActiveDepartment] = useState('Все');
  const [selectedVacation, setSelectedVacation] =
    React.useState<VacationType | null>(null);

  const slicedPositionsMap = vacationsMap
    .slice(0, itemCount || undefined)
    .filter(
      ([, department]) =>
        activeDepartment === 'Все' || activeDepartment === department
    );

  const handleClose = () => {
    setOpen(false);
    const params = new URLSearchParams(searchParams);
    params.delete('position');
    setSearchParams(params);
  };

  const loadVacations = async () => {
    const fetchedVacations = await fetchVacations();
    setValue({ ...value, vacations: fetchedVacations });
  };

  useEffect(() => {
    const positionSearch = searchParams.get('position');

    setOpen(!!positionSearch);

    if (!positionSearch) {
      setSelectedVacation(null);
      return;
    }

    if (vacations.length === 0) {
      loadVacations();
      return;
    }

    const foundVacation =
      vacations.find(({ position }) => position === positionSearch) || null;
    setSelectedVacation(foundVacation);
  }, [searchParams, vacations]);

  return (
    <>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '0 50px!important',
          mt:
            location.pathname.slice(1) === routes.vacations.path
              ? { lg: '187px', xs: '94px' }
              : 0,
        }}
      >
        <Anchor id="vacations" />
        <SectionTitle>Вакансии</SectionTitle>

        {isCategoriesVisible && (
          <Box sx={{ mb: { lg: '41px', xs: '30px' } }}>
            <Departments
              active={activeDepartment}
              setActive={setActiveDepartment}
            />
          </Box>
        )}

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: { lg: '50px', xs: '30px' },
            alignContent: 'stretch',
          }}
        >
          {slicedPositionsMap.map(([position], i) => (
            <Box
              key={`${i}:${position}`}
              sx={{
                flex: {
                  lg: '0 0 calc(50% - 25px)',
                  md: '0 0 calc(50% - 15px)',
                  xs: '1 1 100%',
                },
                maxWidth: {
                  lg: 'calc(50% - 25px)',
                  md: 'calc(50% - 15px)',
                },
                ':nth-child(n+3)': {
                  display: { xs: itemCount ? 'none' : 'block', md: 'block' },
                },
              }}
            >
              <VacationPreview position={position} />
            </Box>
          ))}
        </Box>

        {itemCount && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: { lg: '50px', xs: '30px' },
            }}
          >
            <Button
              variant="outlined"
              component={Link}
              to={`/vacations`}
              sx={{
                fontWeight: 600,
                fontSize: '25px',
                lineHeight: '30.26px',
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
      <Dialog
        onClose={handleClose}
        open={open}
        transitionDuration={{ exit: 0 }}
        PaperProps={{
          style: {
            backgroundColor: 'unset',
            maxWidth: '741px',
            overflow: 'unset',
          },
        }}
        BackdropProps={{
          sx: {
            backgroundColor: {
              xs: 'background.default',
              lg: 'rgba(0, 0, 0, 0.6)',
            },
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
              display: { xs: 'none', lg: 'inherit' },
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
          {selectedVacation ? (
            <VacationCard vacation={selectedVacation} />
          ) : (
            <Card
              sx={{
                padding: '70px 60px',
                borderRadius: '40px',
                minWidth: '741px',
                backgroundColor: {
                  xs: 'background.default',
                  lg: 'background.paper',
                },
              }}
            >
              <CardContent sx={{ p: 0 }}>
                <Typography variant="font32" component="h2" sx={{ mb: 3 }}>
                  {searchParams.get('position')}
                </Typography>
                <Loader />
              </CardContent>
            </Card>
          )}
          <Footer
            sx={{
              display: { xs: 'inherit', lg: 'none' },
              position: 'absolute',
              minWidth: '100vw',
              left: 'calc((100% - 100vw) / 2)',
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Vacations;
