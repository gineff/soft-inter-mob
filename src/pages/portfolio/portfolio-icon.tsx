import { IconButton, useMediaQuery, useTheme } from '@mui/material';
import { PortfolioIconProps } from './types';
import { FC } from 'react';
import { Link } from 'react-router-dom';


export const PortfolioIcon: FC<PortfolioIconProps> = ({
  portfolio,
  index,
}) => {
  const { icon, title, id } = portfolio;
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
      to={{ search: `?portfolioId=${id}` }}
      component={Link}
    >
      <img src={`/${icon}`} width={`${isDesktop ? 180 : 140}px`} />
    </IconButton>
  );
};
