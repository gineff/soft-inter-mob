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
        flex: 1,
        maxWidth: { lg: '980px' },
        borderRadius: '40px',
        padding: '70px 60px',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        border: { xs: 'none', lg: '1px solid rgb(255,255,255, 0.2)' },
        backgroundColor: { xs: 'background.default', lg: 'background.paper' },
      }}
      key={title}
    >
      <CardContent>
        <Stack
          spacing={4}
          sx={{ flexDirection: { xs: 'column', lg: 'row' }, gap: '24px' }}
        >
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
