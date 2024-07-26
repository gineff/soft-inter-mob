import { Anchor } from '@/components/anchor';
import { SectionTitle } from '@/components/section-title/section-title';
import { routes } from '@/router/routes';
import { Box, Button, Container } from '@mui/material';
import vacationsMap from '@/assets/json/vacationsMap.json';
import { Link } from 'react-router-dom';
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll';
import { useEffect } from 'react';

/** ToDo разобраться со шрифтами  HighlightedText*/

const Departments = () => {
  const departments = Array.from(
    new Set(vacationsMap.map(([, department]) => department))
  );
  const scrollRef = useHorizontalScroll({ speed: 0.8 });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 127;
    }
  }, []);

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
            display: 'none',
          },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
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
            marginLeft: '127px',
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
                marginLeft: index % 2 ? '-127px' : 0,
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
