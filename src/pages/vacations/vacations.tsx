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
  Grid,
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
  const [selectedVacation, setSelectedVacation] =
    React.useState<VacationType | null>(null);
  const isVacationRoute = location.pathname.slice(1) === routes.vacations.path;
  const activeDepartment = searchParams.get('department') ?? 'Все';

  const handleActiveDepartment = (department: string) => {
    searchParams.set('department', department);
    setSearchParams(searchParams);
  };

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
      //return;
    }

    if (vacations.length === 0) {
      loadVacations();
      return;
    }

    const foundVacation =
      vacations.find(({ id }) => id === Number(positionSearch)) || null;
    setSelectedVacation(foundVacation);
  }, [searchParams, value]);

  return (
    <>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '0 50px!important',
          //mt: isVacationRoute ? { lg: '187px', xs: '94px' } : 0,
        }}
      >
        <Anchor id="vacations" />
        <SectionTitle
          sx={isVacationRoute ? { mb: { lg: '41px', xs: '30px' } } : {}}
        >
          Вакансии
        </SectionTitle>

        {isCategoriesVisible && (
          <Box sx={{ mb: { lg: '41px', xs: '30px' } }}>
            <Departments
              active={activeDepartment}
              setActive={handleActiveDepartment}
            />
          </Box>
        )}

        {!vacations.length && <Loader />}

        <Grid container spacing={{ lg: 6, xs: 2 }}>
          {vacations
            .slice(0, itemCount || undefined)
            .filter(
              ({ department }) =>
                activeDepartment === 'Все' || activeDepartment === department
            )
            .map((vacation, index) => (
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
                key={index}
                sx={{
                  ':nth-child(n+3)': {
                    display: { xs: itemCount ? 'none' : 'block', lg: 'block' },
                  },
                }}
              >
                <VacationPreview vacation={vacation} />
              </Grid>
            ))}
        </Grid>

        {itemCount && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: { lg: '50px', xs: '30px' },
            }}
          >
            <Button
              variant="gradientWithShadow"
              component={Link}
              to={`/vacations`}
              sx={{
                cursor: 'pointer',
                padding: '20px 34px',
              }}
            >
              <Typography variant="font20">Смотреть все</Typography>
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
              display: { xs: 'none', lg: 'block' },
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
