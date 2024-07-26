import { Suspense, useState } from 'react';
import { AdaptiveVideo } from '@/components/adaptive-video';
import { InfoPanel } from '@/components/info-panel';
import { Box } from '@mui/material';

export const Main = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
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
          <AdaptiveVideo isHovered={isHovered} />
        </Suspense>
      </Box>
      <InfoPanel
        sx={{
          px: '50px',
          mt: '150px',
        }}
      />
    </>
  );
};

export default Main;
