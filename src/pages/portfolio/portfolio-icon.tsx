import { IconButton } from '@mui/material';
import { PortfolioIconProps } from './types';
import { FC } from 'react';

export const PortfolioIcon: FC<PortfolioIconProps> = ({
  portfolio,
  index,
  setSelectedPortfolio,
}) => {
  const { icon, title } = portfolio;
  const isSecondEl = index % 3 === 1;

  return (
    <IconButton
      sx={{ padding: 0, marginLeft: isSecondEl ? '-220px' : 0 }}
      key={title}
      onClick={() => setSelectedPortfolio(portfolio)}
    >
      <img src={`/${icon}`} width="180" />
    </IconButton>
  );
};
