export type PostType = {
  id: number;
  title: string;
  image: string;
  content: string;
};

export type PostPreviewProps = {
  post: PostType;
  handleSelectPost: (post: PostType) => void;
};

export type PostCardProps = {
  post?: Nullable<PostType>;
};
