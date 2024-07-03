import {
  Container,
  Box,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll';
import { PortfolioIcon } from './portfolio-icon';
import { Anchor } from '@/components/anchor';
import { PortfolioCard } from './portfolio-card';
import CloseIcon from '@mui/icons-material/Close';
import { SectionTitle } from '@/components/section-title/section-title';
import { portfolio } from './portfolio.data';
import { Footer } from '@/components/footer';
import { useSearchParams } from 'react-router-dom';

/**ToDO
 * API fetch("src/assets/portfolio.json")
 */

export const Portfolio = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const portfolioId = searchParams.get('portfolioId');
  const selectedPortfolio = portfolioId
    ? portfolio.find((portfolio) => portfolio.id === +portfolioId)
    : null;

  const scrollRef = useHorizontalScroll({ speed: 0.8 });

  const handleClose = () => {
    const params = new URLSearchParams(searchParams);
    params.delete('portfolioId');
    setSearchParams(params);
  };

  const portfolioList = portfolio.map((portfolio, index) => (
    <PortfolioIcon key={portfolio.id} portfolio={portfolio} index={index} />
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

      <Dialog
        onClose={handleClose}
        open={!!selectedPortfolio}
        scroll="paper"
        PaperProps={{
          style: {
            display: 'block',
            backgroundColor: 'unset',
            overflow: 'unset',
            maxWidth: '989px',
            margin: '0 auto',
            
          },
        }}
        BackdropProps={{
          sx: {
            backgroundColor: {
              xs: 'background.default',
              lg: 'rgba(0, 0, 0, 0.6)',
            },
            backdropFilter: 'blur(10px)',
          },
        }}
        sx={{
          '& .MuiDialog-container': {
            overflowY: 'auto',
            alignItems: { xs: 'flex-start', lg: 'center' },
            '& .MuiDialogContent-root': {
              p: 0,
              overflow: 'unset',
            },
          },
          '& .MuiPaper-root': {
            m: 0,
            maxHeight: '100%',
          },
        }}
      >
        <DialogTitle sx={{ p: 0, m: 0 }}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              display: { xs: 'none', lg: 'block' },
              position: 'absolute',
              right: '60px',
              top: '40px',
              color: '#FFF',
              opacity: 0.4,
              zIndex: 1400,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent
          sx={{
            minHeight: { xs: '100vh', lg: 'auto' },
          }}
        >
          <Box sx={{ minHeight: { xs: 'calc(100vh - 177px)', lg: 'auto' } }}>
            <PortfolioCard portfolio={selectedPortfolio} />
          </Box>
          <Footer
            sx={{
              position: 'absolute',
              display: { xs: 'inherit', lg: 'none' },
              minWidth: '100vw',
              left: 'calc((100% - 100vw) / 2)',
              height: '177px',
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Portfolio;
