import { Suspense, useState } from 'react';
import { AdaptiveVideo } from '@/components/adaptive-video';
import { InfoPanel } from '@/components/info-panel';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { headerHeightLg, headerHeightXs } from '@/theme/theme';

export const Main = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const theme = useTheme();
  const isUpTablet = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      <Box
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          position: 'relative',
          ...theme.mixins.centredCol,
          width: '100%',
          [theme.breakpoints.down('md')]: {
            height: `calc(100vh - ${headerHeightXs})`,
          },
          [theme.breakpoints.up('md')]: {
            height: 'auto',
            aspectRatio: '1920 / 1080',
            maxHeight: `calc(100vh - ${headerHeightXs})`,
          },
          [theme.breakpoints.up('lg')]: {
            height: 'auto',
            aspectRatio: '1920 / 1080',
            maxHeight: `calc(100vh - ${headerHeightLg})`,
          },
          paddingTop: '10px',
        }}
      >
        <Suspense
          fallback={
            <img
              src="/images/poster.png"
              style={{
                width: '100%',
                height: '100%',
                objectFit: isUpTablet ? 'contain' : 'cover',
              }}
            />
          }
        >
          <AdaptiveVideo isHovered={isHovered} />
        </Suspense>
      </Box>
      <InfoPanel
        sx={{
          px: { md: '50px', xs: '20px' },
          mt: '150px',
        }}
      />
    </>
  );
};

export default Main;
