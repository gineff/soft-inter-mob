import { Anchor } from '@/components/anchor';
import { SectionTitle } from '@/components/section-title/section-title';
import { Box, Container, Typography, Stack, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import ScrollVideo from '@/components/scroll-video/scroll-video';

const HighlightedText = styled('span')(() => ({
  fontWeight: 700, // Вес шрифта для выделенного слова
}));

/** ToDo разобраться со шрифтами  HighlightedText*/

export const About = () => {
  const theme = useTheme();
  return (
    <Container
      component="section"
      sx={{
        padding: { xs: '20px!important', lg: '0 50px!important' },
        borderRadius: '40px',
      }}
    >
      <Anchor id="About" />

      <Box sx={{ width: '100%' }}>
        <Stack
          direction={{ md: 'column', lg: 'row' }}
          alignItems="flex-start"
          sx={{ gap: { lg: 0, xs: '120px' } }}
        >
          <Box sx={{ flex: 1, order: { lg: 1, xs: 2 } }}>
            <SectionTitle sx={{ mb: '33px' }}>О нас</SectionTitle>
            <Box
              sx={{
                pr: '50px',
                maxHeight: { lg: '305px', xs: 'auto' },
                overflowY: { lg: 'scroll', xs: 'auto' },
                '&::-webkit-scrollbar': {
                  height: '14px',
                },
                '&::-webkit-scrollbar-track': {
                  backgroundColor: '#000',
                  borderRadius: '5px',
                },
                '&::-webkit-scrollbar-thumb': {
                  height: '168px',
                  background:
                    'linear-gradient(0deg, #3C1C81 2.86%, #6B32E7 51.43%, #84113E 99.99%, #84103B 100%)',
                  borderRadius: '5px',
                  outline: '1px solid rgb(255,255,255, 0.2)',
                },
              }}
            >
              <Typography
                variant="font16"
                component="p"
                sx={{ textAlign: 'justify' }}
              >
                <HighlightedText>SOFTINTERMOB</HighlightedText> специализируется
                на разработке мобильных приложений для различных сегментов
                AppStore и Google Play, включая игры и утилиты: здоровье,
                фитнес, путешествия и навигацию, фото и видео редакторы,
                образовательные приложения, а также многое другое. В нашем
                портфолио более{' '}
                <HighlightedText>300 выпущенных проектов</HighlightedText> и
                каждый день наши приложения{' '}
                <strong>скачивают более 200 000 человек по всему миру.</strong>
              </Typography>
              <br />
              <Typography
                variant="font16"
                component="p"
                sx={{ textAlign: 'justify' }}
              >
                GameDev в SOFTINTERMOB — это креативная команда,
                специализирующаяся на разработке Midcore проектов. Мы создаем
                увлекательные игры с разнообразными механиками, чтобы предложить
                нашим пользователям захватывающий игровой опыт.
              </Typography>
              <br />
              <Typography
                variant="font16"
                component="p"
                sx={{ textAlign: 'justify' }}
              >
                В GameDev мы специализируемся на Midcore играх, объединяющих
                различные жанры и механики. Наши проекты включают в себя
                сити-билдинг, ММО стратегии, войны альянсов, комбат механики, а
                также элементы жанров "Автобаттлер", "Раннер", "Симулятор" и
                "Слешер". Мы создаем проекты в казуальной визуальной стилистике,
                чтобы привлечь широкую аудиторию игроков.
              </Typography>
              <br />
              <Typography
                variant="font16"
                component="p"
                sx={{ textAlign: 'justify' }}
              >
                <HighlightedText>Наша команда</HighlightedText> состоит более
                чем из{' '}
                <HighlightedText>500 талантливых специалистов</HighlightedText>,
                которые объединены общей целью создания уникальных мобильных
                приложений. Помимо этого, наш холдинг включает в себя более{' '}
                <HighlightedText>700 профессионалов</HighlightedText>, что
                позволяет нам реализовывать крупные и амбициозные проекты в
                сфере разработки приложений.
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              flex: 1,
              order: { lg: 2, xs: 1 },
              position: 'relative',
              minHeight: '560px',
              width: '100%',
            }}
          >
            <ScrollVideo
              sx={{
                [theme.breakpoints.up('lg')]: {
                  position: 'absolute',
                  top: '-47px',
                  left: '83px',
                  width: '478px',
                  height: '554px',
                },
                width: '100%',
                maxWidth: '478px',
                height: '554px',
                margin: '0 auto',
              }}
            />
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default About;
