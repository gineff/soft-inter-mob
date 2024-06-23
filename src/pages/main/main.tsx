import {
  Card,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Box,
  Grid,
} from '@mui/material';
import { useRef } from 'react';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { InfoBlock } from '@/components/info-block';

export const Main = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const info: string[] = [
    'Выпущено более 300 проектов',
    'Команда более 400+ профессионалов',
    '90% проектов занимают в чартах позиции ТОП 50',
  ];

  return (
    <Container id="main">
      <Card
        sx={{
          position: 'relative',
          width: '100%',
        }}
      >
        <CardMedia
          component="video"
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          controls
          ref={videoRef}
          sx={{
            '&::-webkit-media-controls': {
              display: 'none',
            },
            '&::-webkit-media-controls-enclosure': {
              display: 'none',
            },
          }}
        />
        <IconButton
          onClick={handlePlay}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: 64,
            zIndex: 1,
          }}
        >
          <PlayCircleOutlineIcon fontSize="inherit" />
        </IconButton>
        <CardContent sx={{ position: 'absolute', bottom: 0 }}>
          <Box>
            <Grid container spacing={2}>
              {info.map((text) => (
                <Grid key={text} item xs={12} md={4}>
                  <InfoBlock>{text}</InfoBlock>
                </Grid>
              ))}
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Main;
