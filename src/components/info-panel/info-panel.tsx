import { FC } from 'react';
import { Box, Grid } from '@mui/material';

import { InfoBlock } from '@/components/info-block';
import { InfoPanelProps } from './type';

const info: string[] = [
  'Выпущено более 300 проектов',
  'Команда более 400+ профессионалов',
  '90% проектов занимают в чартах позиции ТОП 50',
];

export const InfoPanel: FC<InfoPanelProps> = ({ sx }) => {
  return (
    <Box sx={{ ...sx }}>
      <Grid container spacing={3}>
        {info.map((text) => (
          <Grid key={text} item xs={12} lg={4}>
            <InfoBlock>{text}</InfoBlock>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default InfoPanel;
