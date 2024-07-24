import { Suspense, useState } from 'react';
import { AdaptiveVideo } from '@/components/adaptive-video';
import { InfoPanel } from '@/components/info-panel';
import { Box, useTheme } from '@mui/material';

export const Main = () => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={(theme) => ({
        position: 'relative',
        ...theme.mixins.centredCol,
      })}
    >
      <Suspense
        fallback={
          <Box
            sx={{
              width: '100vw',
              height: '100vh',
              backgroundColor: 'background.default',
            }}
          />
        }
      >
        <AdaptiveVideo src="/video/master.m3u8" isHovered={isHovered} />
      </Suspense>
      <InfoPanel
        sx={{
          position: 'absolute',
          px: '50px',
          [theme.breakpoints.down('lg')]: { mt: '50px', position: 'relative' },
          [theme.breakpoints.up('lg')]: {
            opacity: isHovered ? 1 : 0,
            bottom: '50px',
          },
          transition: 'opacity 0.4s ease-in-out',
        }}
      />
    </Box>
  );
};

export default Main;
