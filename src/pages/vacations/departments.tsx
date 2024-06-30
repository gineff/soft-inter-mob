import { FC } from 'react';
import { DepartmentsProps } from './types';
import vacationsMap from '@/assets/json/vacationsMap.json';
import { Box, Button } from '@mui/material';

export const Departments: FC<DepartmentsProps> = ({ active, setActive }) => {
  const departments = new Set(vacationsMap.map(([, department]) => department));
  const allDepartments = ['Все', ...departments];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
        flexWrap: 'wrap',
      }}
    >
      {allDepartments.map((department, index) => (
        <Button
          onClick={() => setActive(department)}
          variant={active === department ? 'active' : 'outlined'}
          key={index}
          sx={{
            color: '#fff',
            border: '2px solid #fff',
            borderRadius: '40px',
            padding: '20px 32px',
            fontWeight: 600,
            '&:hover': {
              borderWidth: '2px',
            },
            '&.Mui-active:hover': {
              backgroundColor: '#fff',
            },
          }}
        >
          {department}
        </Button>
      ))}
    </Box>
  );
};
