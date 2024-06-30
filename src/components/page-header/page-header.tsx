import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Logo } from '@components/logo';
import { useNavigate } from 'react-router-dom';

export const PageHeader = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          width: '100%',
          height: 'auto',
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
          <Logo sx={{ width: '155px', height: '34px' }} />

          <IconButton
            sx={{
              color: '#fff',
              '& .MuiSvgIcon-root': {
                width: 40,
                height: 40,
              },
            }}
            edge="start"
            onClick={handleBack}
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
