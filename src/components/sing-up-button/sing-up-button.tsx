import { Button } from '@mui/material';
import { FC } from 'react';
import { HashLink } from 'react-router-hash-link';
import { SignUpButtonProps } from './types';

export const SignUpButton: FC<SignUpButtonProps> = () => (
  <Button
    variant="contained"
    component={HashLink}
    to="/#Sign-Up"
    sx={{ display: { lg: 'block', xs: 'none' } }}
  >
    Присоединиться
  </Button>
);
