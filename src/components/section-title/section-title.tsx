import { Typography } from '@mui/material';
import { SectionTitleProps } from './type';
import { FC } from 'react';

export const SectionTitle: FC<SectionTitleProps> = ({ children, sx }) => (
  <Typography
    variant="font40"
    component="h1"
    sx={{ ...sx, textTransform: 'uppercase' }}
  >
    {children}
  </Typography>
);
