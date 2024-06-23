import { Container, Box, Typography } from '@mui/material';
import { portfolio } from './portfolio.data';
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll';
import { PortfolioIcon } from './portfolio-icon';

/**ToDO
 * API fetch("src/assets/portfolio.json")
 */

const portfolioList = portfolio.map((portfolio, index) => (
  <PortfolioIcon key={portfolio.title} portfolio={portfolio} index={index} />
));

export const Portfolio = () => {
  const scrollRef = useHorizontalScroll();

  return (
    <Container
      id="portfolio"
      sx={{ backgroundColor: '#1B1B1B', padding: '50px', borderRadius: '40px' }}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{
          mb: '33px',
          textTransform: 'uppercase',
          fontWeight: 600,
          fontSize: '40px',
          lineHeight: '60px',
        }}
      >
        Портфолио
      </Typography>

      <Box
        ref={scrollRef}
        sx={{
          height: '570px',
          overflow: 'auto',
          display: 'flex',
          flexFlow: 'column wrap',
          alignContent: 'flex-start',
          rowGap: '15px',
          columnGap: '20px',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
      >
        {portfolioList}
      </Box>
    </Container>
  );
};

export default Portfolio;
