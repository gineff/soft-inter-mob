import { Box, useTheme } from '@mui/material';
import { useEffect, useState, useRef, type FC } from 'react';
import { SignUpButton } from '../sing-up-button/sing-up-button';

export const StickedButton: FC = () => {
  const theme = useTheme();

  const [isVisible, setIsVisible] = useState(true);
  const footerRef = useRef<HTMLElement | null>(null);

  const handleScroll = () => {
    if (footerRef.current) {
      const rect = footerRef.current.getBoundingClientRect();
      const isTop = window.scrollY < 100;
      const isSignUpFormVisible =
        rect.top < window.innerHeight && rect.bottom >= 0;
      setIsVisible(!isSignUpFormVisible && !isTop);
    } else {
      footerRef.current = document.querySelector('#sign-up');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (isVisible) {
    return (
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          height: '104px',
          width: '100%',
          zIndex: 1100,
          backgroundColor: 'background.paper',
          borderRadius: '40px 40px 0 0',
          ...theme.mixins.centredCol,
          display: { xs: 'flex', lg: 'none' },
        }}
      >
        <SignUpButton sx={{ minWidth: '347px', width: '347px' }} />
      </Box>
    );
  }
  return null;
};

export default StickedButton;
