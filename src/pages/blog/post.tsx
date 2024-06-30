import { Card } from '@mui/material';
import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//import { VacationCardProps } from './types';

export const VacationCard: FC = () => {
  const { id } = useParams();

  useEffect(() => {
    
  }, [id]);

  return <Card></Card>;
  id;
};
