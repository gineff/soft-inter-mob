import { Anchor } from '@/components/anchor';
import { SectionTitle } from '@/components/section-title/section-title';
import { routes } from '@/router/routes';
import { Box, Button, Container } from '@mui/material';
import vacationsMap from '@/assets/json/vacationsMap.json';
import { Link } from 'react-router-dom';

/** ToDo разобраться со шрифтами  HighlightedText*/

const Departments = () => {
  const departments = Array.from(
    new Set(vacationsMap.map(([, department]) => department))
  );

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
        sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', gap: '20px' }}
      >
        {departments.map((department, index) => (
          <Button
            component={Link}
            to={`/${routes.vacations.path}?department=${department}`}
            key={index}
            variant="gradient"
          >
            {department}
          </Button>
        ))}
      </Box>
    </Container>
  );
};

export default Departments;
