import React, { useRef, useEffect } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { Box } from '@mui/material';
import animationData from '@/assets/2.json';
import { ScrollVideoProps } from './type';

export const ScrollVideo: React.FC<ScrollVideoProps> = ({ sx }) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!lottieRef.current || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const topOffset = windowHeight - rect.top - 100;

      if (topOffset < 0 || topOffset > windowHeight) return;

      const scrollPercentage = topOffset / windowHeight;

      const duration = lottieRef.current.getDuration(true);
      if (duration !== undefined) {
        const frame = scrollPercentage * (duration - 1);
        lottieRef.current.goToAndStop(frame, true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box sx={sx} ref={containerRef}>
      <Lottie
        animationData={animationData}
        autoplay
        loop={false}
        lottieRef={lottieRef}
        style={{ width: '100%', height: 'auto' }}
      />
    </Box>
  );
};

export default ScrollVideo;
