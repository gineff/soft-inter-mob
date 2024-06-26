import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { FC } from 'react';
import { PostPreviewProps } from './types';

/**Todo * заменить WebkitLineClamp на height */

export const PostPreview: FC<PostPreviewProps> = ({
  post,
  handleSelectPost,
}) => {
  const { title, image, content } = post;
  return (
    <Card
      sx={{
        padding: '0',
        borderRadius: '40px',
        flex: '0 0 auto',
        width: '379px',
        height: '407px',
        cursor: 'pointer',
      }}
      onClick={() => handleSelectPost(post)}
    >
      <CardMedia
        component="img"
        src={`/${image}`}
        alt={title}
        sx={{ height: '191px' }}
      />
      <CardContent sx={{ p: '20px 29.5px' }}>
        <Typography variant="font20" component="h3">
          {title}
        </Typography>
        <Typography
          variant="font16"
          component="div"
          sx={{
            mt: '10px',
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
