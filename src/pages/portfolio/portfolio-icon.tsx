import { IconButton, useMediaQuery, useTheme } from '@mui/material';
import { PortfolioIconProps } from './types';
import { FC } from 'react';

export const PortfolioIcon: FC<PortfolioIconProps> = ({
  portfolio,
  index,
  setSelectedPortfolio,
}) => {
  const { icon, title } = portfolio;
  const isSecondEl = index % 3 === 1;
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <IconButton
      sx={{
        padding: 0,
        marginLeft: isSecondEl ? `-${isDesktop ? 220 : 180}px` : 0,
      }}
      key={title}
      onClick={() => setSelectedPortfolio(portfolio)}
    >
      <img src={`/${icon}`} width={`${isDesktop ? 180 : 140}px`} />
    </IconButton>
  );
};
