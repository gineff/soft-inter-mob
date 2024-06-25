import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import { FC } from 'react';
import { VacationPreviewProps } from './types';

export const VacationPreview: FC<VacationPreviewProps> = ({ title }) => {
  return (
    <Card
      sx={{
        backgroundColor: '#1B1B1B',
        padding: '36px 54px',
        borderRadius: '30px',
      }}
    >
      <CardContent sx={{ p: 0, mb: 2 }}>
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: 600,
            fontSize: '32px',
            lineHeight: '38.73px',
          }}
        >
          {title}
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 0 }}>
        <Button
          variant="contained"
          sx={{
            fontWeight: 600,
            fontSize: '21px',
            lineHeight: '25.41px',
            borderRadius: '8px',
            padding: '20px 24px',
          }}
        >
          Подробнее
        </Button>
      </CardActions>
    </Card>
  );
};
