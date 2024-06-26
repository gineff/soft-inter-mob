import { Button } from '@mui/material';
import { FC } from 'react';
import { HashLink } from 'react-router-hash-link';
import { SignUpButtonProps } from './types';

export const SignUpButton: FC<SignUpButtonProps> = ({ sx }) => (
  <Button
    sx={{ ...sx }}
    variant="contained"
    smooth
    component={HashLink}
    to="/#Sign-Up"
  >
    Присоединиться
  </Button>
);
