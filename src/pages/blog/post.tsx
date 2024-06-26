import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import { FC } from 'react';
//import { VacationCardProps } from './types';

export const VacationCard: FC = () => {
  //const { title } = vacation;
  const title = 'title';
  return (
    <Card
      sx={{
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
