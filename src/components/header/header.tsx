import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { useMediaQuery, useTheme } from '@mui/material';
import Logo from '../logo/logo';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Suspense, useState } from 'react';
import { SignUpButton } from '../sing-up-button/sing-up-button';
import { NavMenu } from '../nav-menu';
export const Header = () => {
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          width: '100%',
          height: { lg: '113px', xs: 'auto' },
          backgroundColor: 'background.paper',
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
            justifyContent: 'space-between',
            height: '100%',
            minHeight: '64px',
            px: '50px',
          }}
        >
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Logo />
          </IconButton>

          {isDesktop ? (
            <>
              <NavMenu component="stack" />
              <SignUpButton />
            </>
          ) : (
            <IconButton
              sx={{
                color: '#fff',
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
          )}
        </Toolbar>
        <Suspense fallback={<></>}>
          {open && (
            <NavMenu component="box" handleClose={() => setOpen(false)} />
          )}
        </Suspense>
      </AppBar>
    </Box>
  );
};
