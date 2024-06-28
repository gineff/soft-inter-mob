import { FC } from 'react';
import { routes } from '@/router/routes';
import { Box, Button, Stack } from '@mui/material';
import { HashLink } from 'react-router-hash-link';
import { NavMenuProps } from './type';

export const NavMenu: FC<NavMenuProps> = ({
  handleClose,
  component = 'stack',
}) => {
  const links = Object.entries(routes).map(([key, { title, path }]) => (
    <Button
      component={HashLink}
      to={`/#${path}`}
      smooth
      key={key}
      sx={{
        margin: 0,
        padding: 0,
        color: 'text.primary',
        display: 'block',
        minWidth: 'auto',
        whiteSpace: 'nowrap',
        xs: {
          fontSize: '18px',
          fontWeight: 500,
          lineHeight: '21.78px',
        },
      }}
    >
      {title}
    </Button>
  ));

  if (component === 'stack') {
    return (
      <Stack
        direction="row"
        sx={{
          display: 'flex',
          flexGrow: 1,
          ml: 4,
          gap: '20px',
        }}
      >
        {links}
      </Stack>
    );
  }

  return (
    <Box
      sx={{
        width: 'lg',
        backgroundColor: 'background.paper',
        margin: '20px',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignSelf: 'flex-start',
        height: '243px',
        rowGap: '28px',
        columnGap: '83px',
      }}
      onClick={handleClose}
    >
      {links}
    </Box>
  );
};
