import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { FC, useState } from 'react';
import { PostPreviewProps } from './types';

/**Todo * заменить WebkitLineClamp на height */

export const PostPreview: FC<PostPreviewProps> = ({
  post,
  handleSelectPost,
}) => {
  const { title, thumbnails, content } = post;
  const [mouseDownTime, setMouseDownTime] = useState(0);
  const [clickThreshold] = useState(350);
  const [startX, setStartX] = useState(0);
  const [moveThreshold] = useState(5);
  const [isDragClick, setIsDragClick] = useState(false);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setMouseDownTime(Date.now());
    setIsDragClick(false);
    setStartX(e.pageX);
  };

  const onMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    const clickTime = Date.now() - mouseDownTime;
    console.log(Math.abs(e.pageX - startX));
    if (
      clickTime > clickThreshold ||
      Math.abs(e.pageX - startX) > moveThreshold
    ) {
      setIsDragClick(true);
    }
  };

  return (
    <Card
      component="div"
      sx={{
        padding: '0',
        borderRadius: '40px',
        flex: '0 0 auto',
        width: { md: '370px', xs: '100%' },
        paddingBottom: '20px',
        cursor: 'pointer',
      }}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onClick={() => {
        !isDragClick && handleSelectPost(post);
      }}
    >
      <CardMedia
        component="img"
        src={`/${thumbnails}`}
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
            WebkitLineClamp: 4,
          }}
        >
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};
