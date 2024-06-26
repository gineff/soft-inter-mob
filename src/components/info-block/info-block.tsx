import { FC, memo } from 'react';
import { Box, Typography } from '@mui/material';
import { InfoBlockProps } from './types';
import { vividBurgundy, majesticPurple, deepIndigo } from '@/theme/theme';

export const InfoBlock: FC<InfoBlockProps> = memo(({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: '112px',
        padding: '32px 38px',
        background: `linear-gradient(135deg, ${vividBurgundy}, ${majesticPurple}, ${deepIndigo})`,
        borderRadius: '24px',
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
        {children}
      </Typography>
    </Box>
  );
});
