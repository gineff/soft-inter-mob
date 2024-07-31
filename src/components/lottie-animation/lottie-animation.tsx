import React, { useState, useRef, useEffect } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { Box } from '@mui/material';
import { LottieAnimationProps, LottieAnimationData } from './type';

export const LottieAnimation: React.FC<LottieAnimationProps> = ({
  sx,
  src,
  placeHolder,
}) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [animationJson, setAnimationJson] = useState<LottieAnimationData | null | undefined>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      if (typeof src === 'string') {
        try {
          const response = await fetch(src);
          if (!response.ok) throw new Error('Network response was not ok');
          const data = await response.json();
          setAnimationJson(data);
        } catch (error) {
          console.error('Error loading animation data:', error);
        } finally {
          setLoading(false);
        }
      } else {
        setAnimationJson(src);
        setLoading(false);
      }
    };

    load();
  }, [src]);

  return (
    <Box sx={sx}>
      {loading && placeHolder && placeHolder}

      {animationJson && !loading && (
        <Lottie
        animationData={animationJson}
        autoplay
        loop
          lottieRef={lottieRef}
        />
      )}
    </Box>
  );
};
