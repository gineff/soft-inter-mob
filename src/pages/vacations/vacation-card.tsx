import { Box, Card, CardContent, Typography } from '@mui/material';
import { FC } from 'react';
import { BlockProps, BlockContentProps, VacationCardProps } from './types';
import { SignUpForm } from '@/components/sign-up-form';

const BlockContent: FC<BlockContentProps> = ({ content, component }) => (
  <Typography
    variant="body2"
    component={component}
    sx={{
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '24.73px',
    }}
  >
    {content}
  </Typography>
);

const Block: FC<BlockProps> = ({ title, content }) => {
  const isContentArray = Array.isArray(content);
  return (
    <Box>
      {title && (
        <Typography
          variant="h3"
          component="h3"
          sx={{
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '24.73px',
          }}
        >
          {title}
        </Typography>
      )}
      {!isContentArray && <BlockContent component="div" content={content} />}
      {isContentArray && (
        <ul>
          {content.map((item) => (
            <BlockContent component="li" content={item} />
          ))}
        </ul>
      )}
    </Box>
  );
};

export const VacationCard: FC<VacationCardProps> = ({
  vacation: { title, description, duty, requirements, optional, offer },
}) => {
  //const { title, details, description, duty  } = vacation;
  return (
    <Box>
      <Card
        sx={{
          backgroundColor: '#1B1B1B',
          padding: '70px 60px',
          borderRadius: '40px',
        }}
      >
        <CardContent sx={{ p: 0 }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontWeight: 600,
              fontSize: '32px',
              lineHeight: '38.73px',
              mb: 3,
            }}
          >
            {title}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Block content={description} />
            <Block title="Обязанности" content={duty} />
            <Block title="Требования" content={requirements} />
            <Block title="Будет плюсом" content={optional} />
            <Block title="Что мы предлагаем" content={offer} />
          </Box>
          <SignUpForm />
        </CardContent>
      </Card>
    </Box>
  );
};
