import { Box, Grid, IconButton, Stack, Typography } from '@mui/material';
import { Anchor } from '@components/anchor';

export const Footer = () => {
  return (
    <Box
      sx={{
        height: '286px',
        padding: '100px',
        pt: '50px',
        backgroundColor: '#1B1B1B',
        borderRadius: '40px 40px 0 0',
        color: '#fff',
        py: 4,
      }}
      component="footer"
    >
      <Grid container justifyContent="space-between" alignItems="flex-start">
        {/* Левая колонка */}
        <Grid item xs={6} sx={{}}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <img src="/src/assets/logo.svg" alt="logo" width="280" />
          </IconButton>
          <Stack direction="row" spacing={5}>
            <img src="/src/assets/telegram.svg" alt="telegram" width="40" />
            <img src="/src/assets/vk.svg" alt="vkontakte" width="40" />
            <img src="/src/assets/instagram.svg" alt="instagram" width="40" />
            <img src="/src/assets/twitter.svg" alt="twitterX" width="40" />
          </Stack>
        </Grid>

        {/* Правая колонка */}
        <Grid item xs={6} textAlign="right">
          <Anchor id="Contacts" />
          <Stack direction="column" spacing={3} sx={{ display: 'inline-flex' }}>
            <Box
              sx={{ display: 'inline-flex', gap: '20px', alignItems: 'center' }}
            >
              <img src="/src/assets/email.png" alt="email" width="32" />
              <Typography>SOFTINTERMOB@techspaceapp.com</Typography>
            </Box>
            <Box
              sx={{ display: 'inline-flex', gap: '20px', alignItems: 'center' }}
            >
              <img src="/src/assets/phone.png" alt="phone" width="32" />
              <Typography>+7 (999) 999-77-77</Typography>
            </Box>
            <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
              <img src="/src/assets/geo.png" alt="location" width="32" />
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
