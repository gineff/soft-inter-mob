import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';

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

export default function AccordionExpandDefault() {
  return (
    <>
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
          <Typography>Expanded by default</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <GradientDivider />
      <Accordion
        sx={{
          'box-shadow': 'none',
        }}
      >
        <AccordionSummary
          expandIcon={<CustomExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Header</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
