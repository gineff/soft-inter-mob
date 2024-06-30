import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  useTheme,
} from '@mui/material';
import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { VacationPreviewProps } from './types';

export const VacationPreview: FC<VacationPreviewProps> = ({ position }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        padding: '36px 54px',
        borderRadius: '30px',
      }}
    >
      <CardContent sx={{ p: 0 }}>
        <Typography
          variant="font32"
          component="h2"
          sx={{
            whiteSpace: 'nowrap',
            [theme.breakpoints.down('lg')]: {
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '24.2px',
            },
          }}
        >
          {position}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ p: 0, mt: 2, [theme.breakpoints.down('lg')]: { mt: '40px' } }}
      >
        <Button
          to={{ search: `?position=${position}` }}
          component={RouterLink}
          variant="contained"
          sx={{
            width: { xs: '100%', md: 'auto' },
            fontWeight: 600,
            fontSize: '21px',
            lineHeight: '25.41px',
          }}
        >
          Подробнее
        </Button>
      </CardActions>
    </Card>
  );
};
