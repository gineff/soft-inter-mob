import { Typography } from '@mui/material';
import { SectionTitleProps } from './type';
import { FC } from 'react';

export const SectionTitle: FC<SectionTitleProps> = ({ children, sx }) => (
  <Typography
    variant="font40"
    component="h1"
    sx={{ textTransform: 'uppercase', mb: { lg: '51px', xs: '30px' }, ...sx }}
    textAlign={{ lg: 'left', xs: 'center' }}
  >
    {children}
  </Typography>
);
