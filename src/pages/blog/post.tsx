import { FC, useEffect } from 'react';
import { useAppContext } from '@/hooks/useAppContext';
import { useParams } from 'react-router-dom';
import { PostCard } from './post-card';
import { fetchPosts } from '@/api/staticAPI';
import { Loader } from '@/components/loader';

export const Post: FC = () => {
  const { id } = useParams();
  const { value, setValue } = useAppContext();
  const { posts } = value;

  const loadPosts = async () => {
    const fetchedPosts = await fetchPosts();
    setValue({ ...value, posts: fetchedPosts });
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const selectedPost = posts.find((post) => Number(id) === post.id);

  return selectedPost ? <PostCard post={selectedPost}></PostCard> : <Loader />;
};
