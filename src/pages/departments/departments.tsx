import { Anchor } from '@/components/anchor';
import { SectionTitle } from '@/components/section-title/section-title';
import { routes } from '@/router/routes';
import { Box, Button, Container } from '@mui/material';
import vacationsMap from '@/assets/json/vacationsMap.json';
import { Link } from 'react-router-dom';
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll';

/** ToDo разобраться со шрифтами  HighlightedText*/

const Departments = () => {
  const departments = Array.from(
    new Set(vacationsMap.map(([, department]) => department))
  );
  const scrollRef = useHorizontalScroll({ speed: 0.8 });
  
  return (
    <Container
      component="section"
      sx={{
        padding: '0 50px!important',
        borderRadius: '40px',
      }}
    >
      <Anchor id={routes.departments.path} />
      <SectionTitle sx={{ mb: '33px' }}>
        {routes.departments.title}
      </SectionTitle>

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
            height: { lg: '130px', xs: '130px' },
            overflow: 'none',
            display: 'flex',
            flexFlow: 'column wrap',
            alignContent: 'flex-start',
            rowGap: '10px',
            columnGap: '10px',
          }}
        >
          {departments.map((department, index) => (
            <Button
              component={Link}
              to={`/${routes.vacations.path}?department=${department}`}
              key={index}
              variant="gradient"
              sx={{ 
                width: '244px',
                marginLeft: index % 2 ? '-127px' : 0 ,
              }}
            >
              {department}
            </Button>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Departments;
