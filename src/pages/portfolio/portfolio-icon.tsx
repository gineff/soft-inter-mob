import { IconButton } from '@mui/material';
import { PortfolioIconProps } from './types';
import { FC } from 'react';

export const PortfolioIcon: FC<PortfolioIconProps> = ({ portfolio, index }) => {
  const { icon, title, content } = portfolio;
  const isSecondEl = index % 3 === 1;

  return (
    <IconButton
      sx={{ padding: 0, marginLeft: isSecondEl ? '-180px' : 0 }}
      key={title}
      onClick={() => console.log(content)}
    >
      <img src={`/src/assets/${icon}`} width="180" />
    </IconButton>
  );
};
