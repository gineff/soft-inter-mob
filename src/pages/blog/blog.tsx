import {
  Container,
  Box,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  useTheme,
} from '@mui/material';
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll';
import { PostPreview } from './post-preview';
import { Anchor } from '@/components/anchor';
import { useEffect } from 'react';
import { PostType } from './types';
import CloseIcon from '@mui/icons-material/Close';
import { PostCard } from './post-card';
import { SectionTitle } from '@/components/section-title/section-title';
import { fetchPosts } from '@/api/staticAPI';
import { useAppContext } from '@/hooks/useAppContext';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Footer } from '@/components/footer';

export const Blog = () => {
  const { value, setValue } = useAppContext();
  const theme = useTheme();
  const scrollRef = useHorizontalScroll({ speed: 1.2 });
  const { posts } = value;
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const postId = searchParams.get('postId');
  const selectedPost = postId
    ? posts.find((post) => post.id === +postId)
    : null;

  const handleSelectPost = (post: PostType) => {
    navigate(`?postId=${post.id}`);
  };

  const handleClose = () => {
    //setOpen(false);
    const params = new URLSearchParams(searchParams);
    params.delete('postId');
    setSearchParams(params);
  };

  const loadPosts = async () => {
    const fetchedPosts = await fetchPosts();
    setValue({ ...value, posts: fetchedPosts });
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <>
      <Container
        sx={{
          padding: { xs: '20px!important', lg: '0 50px!important' },
          overflow: 'hidden',
        }}
      >
        <Anchor id="Blog" />

        <SectionTitle sx={{ mb: '33px' }}>Блог</SectionTitle>

        <Box
          ref={scrollRef}
          sx={{
            display: 'flex',
            flexFlow: 'column  wrap',
            gap: '20px',
            width: '100%',
            pb: '20px',

            [theme.breakpoints.up('md')]: {
              overflowX: 'scroll',
              flexFlow: 'row  nowrap',
              alignContent: 'flex-start',
              justifyContent: 'flex-start',

              '&::-webkit-scrollbar': {
                display: 'none',
              },
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            },
          }}
        >
          {posts.map((post) => (
            <PostPreview
              key={post.id}
              post={post}
              handleSelectPost={handleSelectPost}
            />
          ))}
        </Box>
      </Container>

      <Dialog
        onClose={handleClose}
        scroll="body"
        open={!!postId}
        PaperProps={{
          style: {
            backgroundColor: 'unset',
            maxWidth: '741px',
            overflow: 'unset',
          },
        }}
        BackdropProps={{
          sx: {
            backgroundColor: {
              xs: 'background.default',
              lg: 'rgba(0, 0, 0, 0.6)',
            },
            backdropFilter: 'blur(10px)',
          },
        }}
        sx={{
          '& .MuiDialog-container': {
            overflowY: 'auto',
            '& .MuiDialogContent-root': {
              p: 0,
              overflow: 'unset',
            },
          },
        }}
      >
        <DialogTitle sx={{ p: 0, m: 0 }}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              display: { xs: 'none', lg: 'block' },
              position: 'absolute',
              right: '60px',
              top: '40px',
              color: '#FFF',
              opacity: 0.4,
              zIndex: 1400,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ position: 'relative' }}>
          <PostCard post={selectedPost} />
          <Footer
            sx={{
              display: { xs: 'inherit', lg: 'none' },
              position: 'absolute',
              minWidth: '100vw',
              left: 'calc((100% - 100vw) / 2)',
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Blog;
