import { Box, Grid, IconButton, Stack, Typography } from '@mui/material';
import { Anchor } from '@components/anchor';
import Logo from '@/assets/logo.svg';
import Telegram from '@/assets/telegram.svg';
import Vk from '@/assets/vk.svg';
import Instagram from '@/assets/instagram.svg';
import Twitter from '@/assets/twitter.svg';
import Geo from '@/assets/geo.png';
import Phone from '@/assets/phone.png';
import Email from '@/assets/email.png';

export const Footer = () => {
  return (
    <Box
      sx={{
        height: '286px',
        padding: '100px',
        pt: '50px',
        backgroundColor: 'background.paper',
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
            <img src={Logo} alt="logo" width="280" />
          </IconButton>
          <Stack direction="row" spacing={5}>
            <img src={Telegram} alt="telegram" width="40" />
            <img src={Vk} alt="vkontakte" width="40" />
            <img src={Instagram} alt="instagram" width="40" />
            <img src={Twitter} alt="twitterX" width="40" />
          </Stack>
        </Grid>

        {/* Правая колонка */}
        <Grid item xs={6} textAlign="right">
          <Anchor id="Contacts" />
          <Stack direction="column" spacing={3} sx={{ display: 'inline-flex' }}>
            <Box
              sx={{ display: 'inline-flex', gap: '20px', alignItems: 'center' }}
            >
              <img src={Email} alt="email" width="32" />
              <Typography sx={{ wordBreak: 'break-word' }}>
                SOFTINTERMOB@techspaceapp.com
              </Typography>
            </Box>
            <Box
              sx={{ display: 'inline-flex', gap: '20px', alignItems: 'center' }}
            >
              <img src={Phone} alt="phone" width="32" />
              <Typography>+7 (999) 999-77-77</Typography>
            </Box>
            <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
              <img src={Geo} alt="location" width="32" />
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
