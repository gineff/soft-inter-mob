import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  Container,
  useTheme,
} from '@mui/material';
import { FC } from 'react';
import { PostCardProps } from './types';

export const PostCard: FC<PostCardProps> = ({ post }) => {
  const theme = useTheme();
  if (!post) {
    return null;
  }
  const { title, image, content } = post;

  return (
    <Container sx={{ width: { lg: '781px', md: '781px' } }}>
      <Card
        sx={{
          padding: { lg: '70px 60px', xs: '70px 0' },
          borderRadius: '40px',
          backgroundColor: { xs: 'background.default', lg: 'background.paper' },
        }}
      >
        <CardHeader title={title} sx={{ px: 0 }} />
        <CardMedia
          component="img"
          src={`${image}`}
          alt={title}
          sx={{ height: 'auto' }}
        />
        <CardContent sx={{ px: 0 }}>
          <Box
            component="div"
            dangerouslySetInnerHTML={{ __html: content }}
            sx={{
              mt: '10px',
              overflow: 'hidden',
              ...theme.mixins.centredCol,
            }}
          ></Box>
        </CardContent>
      </Card>
    </Container>
  );
};
