import { type FC } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { NavTogglerProps } from './type';

export const NavToggler: FC<NavTogglerProps> = ({ open, handleToggleNav }) => {
  return (
    <IconButton
      sx={{
        color: '#fff',
        '& .MuiSvgIcon-root': {
          width: 40,
          height: 40,
        },
      }}
      edge="start"
      onClick={handleToggleNav}
    >
      {open ? <CloseIcon /> : <MenuIcon />}
    </IconButton>
  );
};
