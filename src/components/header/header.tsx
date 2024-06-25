import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Button, Stack, useTheme } from '@mui/material';
import { routes } from '@/router/routes';
import { HashLink } from 'react-router-hash-link';
import Logo from '../logo/logo';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Suspense, useState } from 'react';

export const Header = () => {
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const isMobile = theme.breakpoints.down('lg');
  const isDesktop = theme.breakpoints.up('lg');

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  const navMenu = Object.entries(routes).map(([key, { title, path }]) => (
    <Button
      onClick={() => {
        setOpen(false);
      }}
      component={HashLink}
      to={`/#${path}`}
      smooth
      key={key}
      sx={{
        margin: 0,
        padding: 0,
        color: 'white',
        display: 'block',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '19px',
        minWidth: 'auto',
        whiteSpace: 'nowrap',
        [isMobile]: {
          fontSize: '18px',
          fontWeight: 500,
          lineHeight: '21.78px',
        },
      }}
    >
      {title}
    </Button>
  ));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          width: '100%',
          height: '113px',
          [isMobile]: { height: 'auto', minHeight: '64px' },
          backgroundColor: '#1B1B1B',
          borderRadius: '0 0 40px 40px',
          transition: 'height 0.3s ease',
        }}
      >
        <Toolbar
          variant="dense"
          disableGutters
          sx={{
            display: 'flex',
            alignItems: 'center',
            [isMobile]: { justifyContent: 'space-between' },
            height: '100%',
            px: '50px',
          }}
        >
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Logo />
          </IconButton>

          <Stack
            direction="row"
            sx={{
              display: 'flex',
              [isMobile]: { display: 'none' },
              flexGrow: 1,
              ml: 4,
              gap: '20px',
            }}
          >
            {navMenu}
          </Stack>
          <Button
            variant="contained"
            sx={{
              [isMobile]: { display: 'none' },
              px: 3,
              py: '20px',
              color: 'white',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '19px',
              minWidth: 'auto',
              whiteSpace: 'nowrap',
            }}
            component={HashLink}
            to="/#Sign-Up"
          >
            Присоединиться
          </Button>
          <IconButton
            sx={{
              color: '#fff',
              [isDesktop]: { display: 'none' },
              '& .MuiSvgIcon-root': {
                width: 40,
                height: 40,
              },
            }}
            edge="start"
            onClick={handleToggleMenu}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
        <Suspense fallback={<></>}>
          {open && (
            <Box
              sx={{
                margin: '20px',
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignSelf: 'flex-start',
                height: '243px',
                rowGap: '28px',
                columnGap: '83px',
              }}
            >
              {navMenu}
            </Box>
          )}
        </Suspense>
      </AppBar>
    </Box>
  );
};
