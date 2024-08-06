import React, { useRef, useState } from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { AdaptiveVideoProps } from './type';

const ControlOpacity = '0.4';

export const AdaptiveVideo: React.FC<AdaptiveVideoProps> = ({ isHovered }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isUpTablet = useMediaQuery(theme.breakpoints.up('md'));
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.muted) {
        videoRef.current.muted = false;
        setIsMuted(false);
      } else {
        if (videoRef.current.paused) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
        setIsPlaying(!videoRef.current.paused);
      }
    }
  };

  return (
    <Box
      onClick={handlePlayPause}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <video
        ref={videoRef}
        poster="/images/poster.png"
        autoPlay
        muted
        loop
        style={{
          width: '100%',
          height: '100%',
          objectFit: isUpTablet ? 'contain' : 'cover',
        }}
      >
        <source src="/video/1080.web.mp4" type="video/mp4" />
      </video>
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
            isMuted
              ? '/images/mute.svg'
              : isPlaying
              ? '/images/pause-video.svg'
              : '/images/play-video.svg'
          })`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: {
            lg: isMuted
              ? ControlOpacity
              : isHovered
              ? ControlOpacity
              : isPlaying
              ? 0
              : ControlOpacity,
            xs: isMuted ? ControlOpacity : isPlaying ? 0 : ControlOpacity,
          },
          transition: 'opacity 0.4s ease-in-out',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: { lg: '79px', xs: '120px' },
          //top: '50%',
          //left: '50%',
          //transform: 'translate(-50%, calc(-50% - 250px))',
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
          sx={
            isDesktop
              ? {
                  fontWeight: 600,
                  fontSize: '80px',
                  lineHeight: '96.82px',
                }
              : { fontWeight: 600, fontSize: '44px', lineHeight: '53.25px' }
          }
        >
          SOFTINTERMOB
        </Typography>
      </Box>
    </Box>
  );
};

export default AdaptiveVideo;
