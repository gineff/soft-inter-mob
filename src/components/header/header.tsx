import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { IconButton, useMediaQuery, useTheme } from '@mui/material';
import { Suspense, useState } from 'react';
import { Logo } from '@components/logo';
import { SignUpButton } from '../sing-up-button/sing-up-button';
import { NavMenu, NavToggler } from '../nav-menu';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Icon } from '../icon';
export const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  //const location = useLocation();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  //const [searchParams] = useSearchParams
  const hasRelevantSearchParam =
    searchParams.has('postId') || searchParams.has('position');

  const handleToggleNav = () => {
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
          zIndex: { xs: 1400, lg: 1100 },
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
          <Logo sx={{ width: '155px', height: '34px' }} />
          {isDesktop ? (
            <>
              <NavMenu component="stack" />
              <SignUpButton />
            </>
          ) : hasRelevantSearchParam ? (
            <IconButton onClick={() => navigate(-1)}>
              <Icon type="close" sx={{ color: '#fff' }} />
            </IconButton>
          ) : (
            <NavToggler open={open} handleToggleNav={handleToggleNav} />
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
