import { Container, Box, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import { faq } from './faq.data';

const CustomExpandMoreIcon = () => <ExpandMoreIcon sx={{ color: '#ffffff' }} />;

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

export const About = () => {
  return (
    <Container
      id="about"
      sx={{
        backgroundColor: '#1B1B1B',
        padding: '50px!important',
        borderRadius: '40px',
      }}
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
        FAQ
      </Typography>

      <Box sx={{ width: '100%' }}>
        {faq.map(({ title, content }) => (
          <>
            <GradientDivider />
            <Accordion
              defaultExpanded
              sx={{
                'box-shadow': 'none',
              }}
            >
              <AccordionSummary
                expandIcon={<CustomExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: '32px',
                    lineHeight: '38.73px',
                  }}
                >
                  {title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '19.36px',
                  }}
                >
                  {content}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </>
        ))}
      </Box>
    </Container>
  );
};

export default About;
