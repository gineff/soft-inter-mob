import React, { useState, useRef, useEffect } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { Box } from '@mui/material';
//import animationData from '@/assets/2.json';
import { ScrollVideoProps } from './type';
import { Image } from '@components/icon/image';

export const ScrollVideo: React.FC<ScrollVideoProps> = ({ sx }) => {
  const [animationData, setAnimationData] = useState<unknown>(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loadAnimationData = async () => {
      try {
        const response = await fetch('/public/video/2.json');
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error('Ошибка загрузки анимационных данных:', error);
      }
    };
    loadAnimationData();
  }, []);
  /*
  useEffect(() => {
    const handleScroll = () => {
      if (!lottieRef.current || !containerRef.current || !animationData) return;

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
  }, [animationData]);
*/

  return (
    <Box sx={sx} ref={containerRef}>
      {animationData ? (
        <Lottie
          animationData={animationData}
          autoplay
          loop={true}
          lottieRef={lottieRef}
        />
      ) : (
        <Image
          src="/images/iphone15_group.png"
          sx={{
            marginTop: '15px',
            width: '478px',
            height: '615px',
          }}
        />
      )}
    </Box>
  );
};

export default ScrollVideo;
