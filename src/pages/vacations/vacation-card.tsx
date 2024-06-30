import { Box, Card, CardContent, Divider, Typography } from '@mui/material';
import { FC } from 'react';
import { BlockProps, BlockContentProps, VacationCardProps } from './types';
import { SignUpForm } from '@/components/sign-up-form';

const BlockContent: FC<BlockContentProps> = ({ content, component }) => (
  <Typography variant="font16" component={component}>
    {content}
  </Typography>
);

const Block: FC<BlockProps> = ({ title, content }) => {
  if (!content) return null;
  const isContentArray = Array.isArray(content);
  return (
    <Box>
      {title && (
        <Typography variant="font16" component="h5">
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
  vacation: {
    position,
    description,
    responsibilities,
    requirements: { mandatory, preferred },
    offer,
  },
}) => {
  //const { title, details, description, duty  } = vacation;
  return (
    <Box>
      <Card
        sx={{
          padding: '70px 60px',
          borderRadius: '40px',
        }}
      >
        <CardContent sx={{ p: 0 }}>
          <Typography variant="font32" component="h2" sx={{ mb: 3 }}>
            {position}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              mb: '40px',
            }}
          >
            <Block content={description} />
            <Block title="Обязанности" content={responsibilities} />
            <Block title="Требования" content={mandatory} />
            <Block title="Будет плюсом" content={preferred} />
            <Block title="Что мы предлагаем" content={offer} />
          </Box>
          <Divider
            flexItem
            orientation="vertical"
            sx={{
              height: '1px',
              backgroundColor: '#fff',
              opacity: 0.2,
              mb: '40px',
            }}
          />
          <Typography
            variant="font32"
            component="h2"
            sx={{
              width: '100%',
              mb: '60px',
              textAlign: 'center',
              wordWrap: 'break-word',
            }}
          >
            Присоединяйтесь к нашей команде
          </Typography>
          <SignUpForm />
        </CardContent>
      </Card>
    </Box>
  );
};
