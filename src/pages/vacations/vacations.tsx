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
import { Link, useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { VacationCard } from './vacation-card';
import CloseIcon from '@mui/icons-material/Close';
import { SectionTitle } from '@/components/section-title/section-title';
import { fetchVacations } from '@/api/staticAPI';
import vacationsMap from '@/assets/json/vacationsMap.json';
import { Loader } from '@/components/loader';
import { routes } from '@/router/routes';

const Vacations: FC<VacationPageProps> = ({
  isCategoriesVisible = false,
  itemCount,
}) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const [activeDepartment, setActiveDepartment] = useState('Все');
  const [vacations, setVacations] = useState<VacationType[]>([]);
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
    navigate({ search: params.toString() });
  };

  const loadVacations = async () => {
    const fetchedVacations = await fetchVacations();
    setVacations(fetchedVacations);
  };

  useEffect(() => {
    const positionSearch = searchParams.get('position');
    if (!positionSearch) {
      setSelectedVacation(null);
      return;
    }

    setOpen(true);

    if (vacations.length === 0) {
      loadVacations();
      return;
    }

    const foundVacation =
      vacations.find(({ position }) => position === positionSearch) || null;
    setSelectedVacation(foundVacation);
  }, [searchParams, vacations]);

  console.log(location.pathname, routes.vacations);
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
          {selectedVacation ? (
            <VacationCard vacation={selectedVacation} />
          ) : (
            <Card
              sx={{
                padding: '70px 60px',
                borderRadius: '40px',
                minWidth: '741px',
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
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Vacations;
