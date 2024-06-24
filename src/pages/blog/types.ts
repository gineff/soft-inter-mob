export type PostType = {
  id: number;
  title: string;
  image: string;
  content: string;
};

export type PostPreviewProps = {
  post: PostType;
};

export type PostCardProps = {
  post: PostType;
};
