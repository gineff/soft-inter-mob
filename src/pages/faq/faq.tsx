import { Container, Box, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import { faq } from './faq.data';
import arrow from '@/assets/arrow.svg';
import { Anchor } from '@/components/anchor';
import { SectionTitle } from '@/components/section-title/section-title';

const Arrow = () => <img src={arrow} />;

const GradientDivider = styled(Divider)(() => ({
  position: 'relative',
  height: '10px',
  backgroundColor: 'transparent',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundImage: 'linear-gradient(to right, #84103B, #6B32E7, #3C1C81)',
  },
}));

export const Faq = () => {
  return (
    <Container
      sx={{
        padding: { xs: '20px!important', lg: '0 50px!important' },
      }}
    >
      <Anchor id="Faq" />
      <SectionTitle sx={{ mb: '33px' }}>FAQ</SectionTitle>

      <Box sx={{ width: '100%' }}>
        {faq.map(({ title, content }) => (
          <Box key={title}>
            <GradientDivider />
            <Accordion
              sx={{
                boxShadow: 'none',
              }}
            >
              <AccordionSummary
                expandIcon={<Arrow />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography variant="font32">{title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="font16" component="p">
                  {content}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Faq;
