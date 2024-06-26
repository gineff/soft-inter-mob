import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import { Box, useMediaQuery, useTheme } from '@mui/material';

interface AdaptiveVideoProps {
  src: string;
}

const AdaptiveVideo: React.FC<AdaptiveVideoProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  
  useEffect(() => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      if (videoRef.current) {
        hls.loadSource(src);
        hls.attachMedia(videoRef.current);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          videoRef.current?.play();
        });
      }
    } else if (videoRef.current?.canPlayType('application/vnd.apple.mpegurl')) {
      videoRef.current.src = src;
      videoRef.current.addEventListener('loadedmetadata', () => {
        videoRef.current?.play();
      });
    }
  }, [src]);

  return (
    <Box
      sx={{
        marginTop: { lg: '56px', md: '28px', sm: '28px' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: isDesktop ? 'calc(100vh - 56px)' : 'calc(100vh - 28px)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <video
        ref={videoRef}
        controls
        muted
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </Box>
  );
};

export default AdaptiveVideo;
