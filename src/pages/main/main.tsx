import { AdaptiveVideo } from '@/components/adaptive-video';
import { InfoPanel } from '@/components/info-panel';
import { Box, Typography, useTheme } from '@mui/material';
import { useState } from 'react';

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
      <AdaptiveVideo src="/video/master.m3u8" isHovered={isHovered} />
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
