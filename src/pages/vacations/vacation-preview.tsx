import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardHeader,
} from '@mui/material';
import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { VacationPreviewProps } from './types';

export const VacationPreview: FC<VacationPreviewProps> = ({
  vacation: { position, id, tags },
}) => {
  return (
    <Card
      sx={{
        position: 'relative',
        padding: '35px 29px',
        borderRadius: '30px',
        border: '1px solid rgb(255,255,255, 0.2)',
        height: '225px',
      }}
    >
      <CardHeader
        sx={{ padding: 0 }}
        title={<Typography variant="font20">{position}</Typography>}
      />

      <CardContent sx={{ p: 0, m: '20px 0' }}>
        <Box sx={{ display: 'flex', gap: '7px' }}>
          {tags &&
            tags.map((tag) => (
              <Typography
                component="span"
                sx={{
                  backgroundColor: '#5627BC',
                  padding: '10px 16px',
                  borderRadius: '50px',
                  whiteSpace: 'nowrap',
                }}
              >
                {tag}
              </Typography>
            ))}
        </Box>
      </CardContent>
      <CardActions sx={{ p: 0 }}>
        <Button
          to={{ search: `?position=${id}` }}
          component={RouterLink}
          variant="outlined"
          sx={{
            position: 'absolute',
            right: '29px',
            bottom: '36px',
            color: '#fff',
            border: '2px solid #fff',
            borderRadius: '50px',
            padding: '13px 24px',
            fontWeight: '600px',
          }}
        >
          <Typography variant="font16">Подробнее</Typography>
        </Button>
      </CardActions>
    </Card>
  );
};
