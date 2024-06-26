import AdaptiveVideo from '@/components/adaptive-video/adaptive-video';
import { InfoPanel } from '@/components/info-panel';
import { Box, useTheme } from '@mui/material';

export const Main = () => {
  const theme = useTheme();

  return (
    <Box
      sx={(theme) => ({
        position: 'relative',
        ...theme.mixins.centredCol,
      })}
    >
      <AdaptiveVideo src="/video/master.m3u8" />
      <InfoPanel
        sx={{
          position: 'absolute',
          bottom: '50px',
          px: '50px',
          [theme.breakpoints.down('lg')]: { mt: '50px', position: 'relative' },
        }}
      />
    </Box>
  );
};

export default Main;
