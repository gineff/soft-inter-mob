import { FC, memo } from 'react';
import { Link as MuiLink, LinkProps } from '@mui/material';
import { HashLink } from 'react-router-hash-link';
import { Icon } from '@components/icon';

export const Logo: FC<LinkProps> = memo(({ sx }) => {
  return (
    <MuiLink
      component={HashLink}
      to={'/'}
      sx={{ ...sx }}
      onClick={() => {
        window.scrollTo({ top: 0 });
      }}
    >
      <Icon type="logo" />
    </MuiLink>
  );
});

export default Logo;
