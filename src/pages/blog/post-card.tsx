import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardHeader,
} from '@mui/material';
import { FC } from 'react';
import { PostCardProps } from './types';

export const PostCard: FC<PostCardProps> = ({ post }) => {
  if (!post) {
    return null;
  }

  const { title, image, content } = post;
  return (
    <Box sx={{ width: { lg: '781px', md: '781px' } }}>
      <Card
        sx={{
          padding: '70px 60px',
          borderRadius: '40px',
        }}
      >
        <CardHeader title={title} sx={{ px: 0 }} />
        <CardMedia
          component="img"
          src={`/${image}`}
          alt={title}
          sx={{ height: 'auto' }}
        />
        <CardContent sx={{ px: 0 }}>
          <Typography
            variant="font16"
            component="div"
            sx={{
              mt: '10px',
              display: '-webkit-box',
              overflow: 'hidden',
            }}
          >
            {content}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
