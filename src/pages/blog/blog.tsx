import { Container, Box, Typography } from '@mui/material';
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll';
import { PostPreview } from './post-preview';
import { posts } from './posts.data';

export const Blog = () => {
  const scrollRef = useHorizontalScroll();

  return (
    <Container
      id="portfolio"
      sx={{
        padding: '50px 0!important',
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{
          mb: '33px',
          textTransform: 'uppercase',
          fontWeight: 600,
          fontSize: '40px',
          lineHeight: '60px',
        }}
      >
        Блог
      </Typography>

      <Box
        ref={scrollRef}
        sx={{
          width: '100%',
          overflow: 'auto',
          display: 'flex',
          flexFlow: 'row  nowrap',
          alignContent: 'flex-start',
          justifyContent: 'flex-start',
          gap: '20px',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
      >
        {posts.map((post) => (
          <PostPreview key={post.id} post={post} />
        ))}
      </Box>
    </Container>
  );
};

export default Blog;
