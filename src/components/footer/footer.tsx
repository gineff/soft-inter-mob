import {
  Box,
  Container,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Anchor } from '@components/anchor';

import { Logo } from '@components/logo';
import { Icon } from '@components/icon';
import { FooterProps } from './type';
import { FC } from 'react';

export const Footer: FC<FooterProps> = ({ sx }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <>
      <Container
        disableGutters
        component="footer"
        sx={{
          ...sx,
          //height: { lg: '286px', xs: '376px' },
          padding: { lg: '50px 100px', xs: '40px 20px' },
          backgroundColor: 'background.paper',
          borderRadius: '40px 40px 0 0',
          maxWidth: 'lg',
          width: '100%',
          margin: '0 auto',
        }}
      >
        <Stack
          direction={isDesktop ? 'row' : 'column'}
          sx={{
            flexWrap: 'wrap',
            maxHeight: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '15px',
            [theme.breakpoints.down('lg')]: {
              width: '337px',
              margin: '0 auto',
            },
            [theme.breakpoints.down('sm')]: {
              width: 'unset',
              margin: '0',
            },
          }}
        >
          <Logo sx={{ order: 1, width: '228px', height: '50px' }} />
          {/*<Stack
            direction="row"
            spacing={5}
            sx={{
              order: { lg: 2, xs: 3 },
              [theme.breakpoints.down('lg')]: { mt: '40px!important' },
            }}
          >
            <Icon type="telegram" />
            <Icon type="vkontakte" />
            <Icon type="instagram" />
            <Icon type="twitterX" />
          </Stack>*/}
          <Stack
            direction="column"
            sx={{
              gap: '20px',
              m: '0!important',
              width: '337px',
              //alignSelf: { lg: 'flex-end', xs: 'unset' },
              order: { lg: 3, xs: 2 },
            }}
          >
            <Link
              href="mailto:it.recruiter@softintermobile.org"
              underline="none"
              sx={{
                color: '#fff',
                '&:visited': {
                  color: 'unset', // Цвет для посещенной ссылки
                },
              }}
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  gap: '20px',
                  alignItems: 'center',
                }}
              >
                <Icon type="email" />

                <Typography sx={{ wordBreak: 'break-word' }}>
                  it.recruiter@softintermobile.org
                </Typography>
              </Box>
            </Link>
            {/*<Box
              sx={{ display: 'inline-flex', gap: '20px', alignItems: 'center' }}
            >
              <Icon type="phone" />
              <Typography>+7 (999) 999-77-77</Typography>
            </Box>
            <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
              <Icon type="location" />
            </Box> */}
          </Stack>
        </Stack>
        <Anchor id="Contacts" />
      </Container>
    </>
  );
};

export default Footer;
