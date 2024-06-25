import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import { FC } from 'react';
import { VacationCardProps } from './types';

export const VacationCard: FC<VacationCardProps> = ({ vacation }) => {
  const { title } = vacation;
  return (
    <Card
      sx={{
        backgroundColor: '#1B1B1B',
        padding: '24px',
        borderRadius: '30px',
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained">Подробнее</Button>
      </CardActions>
    </Card>
  );
};
