
export type Portfolio = {
  id: number,
  icon: string;
  video: string;
  title: string;
  content: string;
};

export type PortfolioIconProps = {
  portfolio: Portfolio;
  index: number;
};

export type PortfolioCardProps = {
  portfolio?: Portfolio | null;
};
