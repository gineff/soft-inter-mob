import {
  Container,
  Box,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
} from '@mui/material';
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll';
import { PostPreview } from './post-preview';
import { posts } from './posts.data';
import { Anchor } from '@/components/anchor';
import { useState } from 'react';
import { PostType } from './types';
import CloseIcon from '@mui/icons-material/Close';
import { PostCard } from './post-card';

export const Blog = () => {
  const scrollRef = useHorizontalScroll();
  const [open, setOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<null | PostType>(null);

  const handleSelectPost = (post: PostType) => {
    setSelectedPost(post);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Container
        sx={{
          padding: '0 50px!important',
        }}
      >
        <Anchor id="Blog" />

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
        open={open}
        PaperProps={{
          style: {
            backgroundColor: 'unset',
            maxWidth: '741px',
            overflow: 'unset',
          },
        }}
        BackdropProps={{
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
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
              position: 'absolute',
              right: '60px',
              top: '40px',
              color: '#FFF',
              opacity: 0.4,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <PostCard post={selectedPost} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Blog;
