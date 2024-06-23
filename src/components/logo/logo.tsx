import { FC, memo } from 'react';
import { Link as MuiLink, Icon } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import logo from '@/assets/logo.svg';

const Logo: FC = memo(() => {
  return (
    <MuiLink
      component={RouterLink}
      to={'/'}
      underline="none"
      alignItems="end"
      display="flex"
    >
      <Icon
        sx={{
          width: 'auto',
          height: 34,
        }}
      >
        <img src={logo} alt="logo" style={{ width: '100%' }} />
      </Icon>
    </MuiLink>
  );
});

export default Logo;
