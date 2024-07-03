import { Container, Box, Modal, IconButton } from '@mui/material';
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll';
import { PortfolioIcon } from './portfolio-icon';
import { Anchor } from '@/components/anchor';
import { useState, useEffect } from 'react';
import { PortfolioCard } from './portfolio-card';
import { Portfolio as PortfolioType } from './types';
import CloseIcon from '@mui/icons-material/Close';
import { SectionTitle } from '@/components/section-title/section-title';
import { portfolio } from './portfolio.data';
/**ToDO
 * API fetch("src/assets/portfolio.json")
 */

export const Portfolio = () => {
  const [open, setOpen] = useState(false);
  const [SelectedPortfolio, setSelectedPortfolio] =
    useState<null | PortfolioType>(null);

  useEffect(() => {
    if (SelectedPortfolio) {
      setOpen(true);
    }
  }, [SelectedPortfolio]);

  const scrollRef = useHorizontalScroll({speed: 0.8});

  const handleClose = () => {
    setOpen(false);
  };

  const portfolioList = portfolio.map((portfolio, index) => (
    <PortfolioIcon
      key={portfolio.title}
      portfolio={portfolio}
      index={index}
      setSelectedPortfolio={setSelectedPortfolio}
    />
  ));

  return (
    <>
      <Container
        sx={{
          backgroundColor: 'background.paper',
          padding: '50px 0!important',
          borderRadius: '40px',
        }}
      >
        <Anchor id="Portfolio" />
        <SectionTitle sx={{ mb: '33px', pl: '50px' }}>Портфолио</SectionTitle>
        <Box
          sx={{
            pb: '20px',
            overflowX: 'scroll',
            '&::-webkit-scrollbar': {
              height: '16px',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: 'background.paper',
              borderRadius: '5px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'background.default',
              borderRadius: '5px',
              outline: '1px solid rgb(255,255,255, 0.2)',
            },
          }}
          ref={scrollRef}
        >
          <Box
            sx={{
              height: { lg: '570px', xs: '450px' },
              overflow: 'none',
              display: 'flex',
              flexFlow: 'column wrap',
              alignContent: 'flex-start',
              rowGap: '15px',
              columnGap: '20px',
              pl: '50px',
            }}
          >
            {portfolioList}
          </Box>
        </Box>
      </Container>
      <Modal
        onClose={handleClose}
        open={open}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        BackdropProps={{
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(10px)',
          },
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: '60px',
              top: '40px',
              color: '#FFF',
              opacity: 0.4,
            }}
          >
            <CloseIcon />
          </IconButton>
          <PortfolioCard portfolio={SelectedPortfolio} />
        </Box>
      </Modal>
    </>
  );
};

export default Portfolio;
