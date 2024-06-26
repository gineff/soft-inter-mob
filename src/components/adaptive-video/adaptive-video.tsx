import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { AdaptiveVideoProps } from './type';

export const AdaptiveVideo: React.FC<AdaptiveVideoProps> = ({
  src,
  isHovered,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      if (videoRef.current) {
        hls.loadSource(src);
        hls.attachMedia(videoRef.current);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          //videoRef.current?.play();
        });
      }
    } else if (videoRef.current?.canPlayType('application/vnd.apple.mpegurl')) {
      videoRef.current.src = src;
      videoRef.current.addEventListener('loadedmetadata', () => {
        //videoRef.current?.play();
      });
    }
  }, [src]);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current?.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsPlaying(!videoRef.current.paused);
    }
  };

  return (
    <Box
      onClick={handlePlayPause}
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
        autoPlay
        muted
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '168px',
          height: '168px',
          cursor: 'pointer',
          backgroundImage: `url(${
            isPlaying ? '/images/pause-video.svg' : '/images/play-video.svg'
          })`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: {
            lg: isHovered ? 1 : isPlaying ? 0 : 1,
            xs: isPlaying ? 0 : 1,
          },
          transition: 'opacity 0.4s ease-in-out',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, calc(-50% - 150px))',
          width: '636px',
          height: '97px',
          textAlign: 'center',
          opacity: {
            lg: isHovered ? 1 : isPlaying ? 0 : 1,
            xs: isPlaying ? 0 : 1,
          },
          transition: 'opacity 0.4s ease-in-out',
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: '80px',
            lineHeight: '96.82px',
          }}
        >
          SOFTINTERMOB
        </Typography>
      </Box>
    </Box>
  );
};

export default AdaptiveVideo;
