import {
  Box,
  Card,
  Stack,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';
import { PortfolioCardProps } from './types';
import { FC } from 'react';

export const PortfolioCard: FC<PortfolioCardProps> = ({ portfolio }) => {
  if (!portfolio) {
    return null;
  }

  const { icon, title, content, video } = portfolio;

  return (
    <Card
      sx={{
        maxWidth: { lg: '980px' },
        borderRadius: '40px',
        padding: '70px 60px',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        border: '1px solid rgb(255,255,255, 0.2)',
      }}
      key={title}
      onClick={() => console.log(content)}
    >
      <CardContent>
        <Stack direction="row" spacing={4}>
          <Box
            component="img"
            sx={{
              width: '180px',
              height: 'auto',
              borderRadius: '24px',
              boxShadow: 3,
            }}
            alt="example"
            src={`/${icon}`}
          />
          <Box>
            <Typography
              variant="font32"
              component="h4"
              sx={{
                pb: '12px',
              }}
            >
              {title}
            </Typography>
            <Typography variant="font16">{content}</Typography>
          </Box>
        </Stack>
      </CardContent>
      <CardMedia component="video" src={video} controls />
    </Card>
  );
};
