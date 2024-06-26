import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { VacationPreviewProps } from './types';

export const VacationPreview: FC<VacationPreviewProps> = ({ title }) => {
  return (
    <Card
      sx={{
        padding: '36px 54px',
        borderRadius: '30px',
      }}
    >
      <CardContent sx={{ p: 0, mb: 2 }}>
        <Typography variant="font32" component="h2">
          {title}
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 0 }}>
        <Button
          to={{ search: `?vacation=${title}` }}
          component={RouterLink}
          variant="contained"
          sx={{
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
