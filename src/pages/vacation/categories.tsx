import { FC } from 'react';
import { CategoriesProps } from './types';
import { categories } from './vacations.data';
import { Box, Button } from '@mui/material';

export const Categories: FC<CategoriesProps> = ({ active, setActive }) => {
  const allCategories = ['Все', ...categories];
  console.log('allCategories', allCategories);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
        flexWrap: 'wrap',
      }}
    >
      {allCategories.map((category, index) => (
        <Button
          onClick={() => setActive(category)}
          variant={active === category ? 'active' : 'outlined'}
          key={index}
          sx={{
            color: '#fff',
            border: '2px solid #fff',
            borderRadius: '40px',
            padding: '20px 32px',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '19.36px',
            '&:hover': {
              borderWidth: '2px',
            },
            '&.Mui-active:hover': {
              backgroundColor: '#fff',
            },
          }}
        >
          {category}
        </Button>
      ))}
    </Box>
  );
};
