import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { FC } from 'react';
import { PostPreviewProps } from './types';

export const PostPreview: FC<PostPreviewProps> = ({
  post: { title, image, content },
}) => {
  return (
    <Card
      sx={{
        backgroundColor: '#1B1B1B',
        padding: '0',
        borderRadius: '40px',
        flex: '0 0 auto',
        width: '379px',
        height: '407px',
      }}
    >
      <CardMedia
        component="img"
        src={`/src/assets/${image}`}
        alt={title}
        sx={{ height: '191px' }}
      />
      <CardContent sx={{ p: 0, mb: 0 }}>
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '24.2px',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '19.36px',
            display: '-webkit-box',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 5,
          }}
        >
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};
