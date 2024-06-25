import { Dispatch, SetStateAction } from 'react';

export type Portfolio = {
  icon: string;
  video: string;
  title: string;
  content: string;
};

export type PortfolioIconProps = {
  portfolio: Portfolio;
  index: number;
  setSelectedPortfolio: Dispatch<SetStateAction<Portfolio | null>>;
};

export type PortfolioCardProps = {
  portfolio: Portfolio | null;
};
