import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { IconButton, useMediaQuery, useTheme } from '@mui/material';
import { Suspense, useState } from 'react';
import { Logo } from '@components/logo';
import { SignUpButton } from '../sing-up-button/sing-up-button';
import { NavMenu, NavToggler } from '../nav-menu';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Icon } from '../icon';
import { headerHeightLg, headerHeightXs } from '@/theme/theme';
export const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  //const location = useLocation();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  //const [searchParams] = useSearchParams
  const hasRelevantSearchParam =
    searchParams.has('postId') ||
    searchParams.has('position') ||
    searchParams.has('portfolioId');

  const handleToggleNav = () => {
    setOpen(!open);
  };

  return (
      <AppBar
        position="fixed"
        sx={{
          width: '100%',
          height: { lg: headerHeightLg, xs: 'auto' },
          backgroundColor: 'background.paper',
          borderRadius: '0 0 40px 40px',
          transition: 'height 0.3s ease',
          zIndex: !isDesktop && hasRelevantSearchParam ? 1400 : 1100,
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
            minHeight: headerHeightXs,
            px: '50px',
          }}
        >
          <Logo
            sx={{
              width: { lg: '281px', xs: '155px' },
              height: { lg: '61px', xs: '34' },
            }}
          />
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
  );
};
