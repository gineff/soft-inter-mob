import { Box, Stack, Typography } from '@mui/material';
import { Anchor } from '@components/anchor';

import { Logo } from '@components/logo';
import { Icon } from '@components/icon';

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
      <Anchor id="Contacts" />
      <Stack
        direction="column"
        spacing={2}
        sx={{ flexWrap: 'wrap', maxHeight: '100%' }}
      >
        <Logo sx={{ order: 1 }} />
        <Stack
          direction="row"
          spacing={5}
          sx={{
            order: { lg: 2, xs: 3 },
          }}
        >
          <Icon type="telegram" />
          <Icon type="vkontakte" />
          <Icon type="instagram" />
          <Icon type="twitterX" />
        </Stack>
        <Stack
          direction="column"
          spacing={3}
          sx={{ display: 'inline-flex', order: { lg: 3, xs: 2 } }}
        >
          <Box
            sx={{ display: 'inline-flex', gap: '20px', alignItems: 'center' }}
          >
            <Icon type="email" />
            <Typography sx={{ wordBreak: 'break-word' }}>
              SOFTINTERMOB@techspaceapp.com
            </Typography>
          </Box>
          <Box
            sx={{ display: 'inline-flex', gap: '20px', alignItems: 'center' }}
          >
            <Icon type="phone" />
            <Typography>+7 (999) 999-77-77</Typography>
          </Box>
          <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
            <Icon type="location" />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
