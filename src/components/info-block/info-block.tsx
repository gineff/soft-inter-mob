import { FC, memo } from 'react';
import { Box, Typography } from '@mui/material';
import { InfoBlockProps } from './types';
import { vividBurgundy, majesticPurple, deepIndigo } from '@/theme/theme';

export const InfoBlock: FC<InfoBlockProps> = memo(({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '112px',
        padding: '32px 38px',
        border: '3px solid transparent',
        background: `linear-gradient(#010101, #010101), linear-gradient( 135deg, ${vividBurgundy}, ${majesticPurple}, ${deepIndigo})`,
        backgroundClip: 'padding-box, border-box',
        backgroundOrigin: 'padding-box, border-box',
        borderRadius: '45px',
      }}
    >
      <Typography
        variant="font20"
        sx={{
          textTransform: 'none',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <Box
          component="span"
          dangerouslySetInnerHTML={{ __html: children as string }}
        ></Box>
      </Typography>
    </Box>
  );
});
