import { FC } from 'react';
import { Container, Grid } from '@mui/material';

import { InfoBlock } from '@/components/info-block';
import { InfoPanelProps } from './type';

const info: string[] = [
  'Выпущено более <span style="font-weight:900">300</span></br> проектов',
  'Команда более <span style="font-weight:900">500</span></br> профессионалов',
  '<span style="font-weight:900">90%</span> проектов занимают в</br> чартах позиции ТОП 50',
];

export const InfoPanel: FC<InfoPanelProps> = ({ sx }) => {
  return (
    <Container sx={{ ...sx }}>
      <Grid container spacing={3}>
        {info.map((text, i) => (
          <Grid key={i} item xs={12} lg={4}>
            <InfoBlock>{text}</InfoBlock>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default InfoPanel;
