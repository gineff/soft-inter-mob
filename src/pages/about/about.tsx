import { Container, Box, Typography, Divider, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBlock = styled(Typography)(() => ({
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '19.36px',
}));

const HighlightedText = styled('span')(() => ({
  fontWeight: 700, // Вес шрифта для выделенного слова
}));

/** ToDo разобраться со шрифтами  HighlightedText*/

export const About = () => {
  return (
    <Container
      id="about"
      sx={{ backgroundColor: '#1B1B1B', padding: '50px!important', borderRadius: '40px' }}
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
        О нас
      </Typography>

      <Box sx={{ width: '100%' }}>
        <Stack
          divider={<Divider orientation="vertical" flexItem color="#fff" />}
          spacing={{ xs: 2, sm: 4, md: 6 }} // Разное расстояние между элементами на разных точках останова
          direction={{ md: 'column', lg: 'row' }} // Направление стека меняется с вертикального на горизонтальное
          alignItems="flex-start"
          sx={{
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '19.36px',
          }}
        >
          <Box>
            <StyledBlock>
              <HighlightedText>SOFTINTERMOB</HighlightedText> специализируется
              на разработке мобильных приложений для различных сегментов
              AppStore и Google Play, включая игры и утилиты: здоровье, фитнес,
              путешествия и навигацию, фото и видео редакторы, образовательные
              приложения, а также многое другое. В нашем портфолио более{' '}
              <HighlightedText>300 выпущенных проектов</HighlightedText> и
              каждый день наши приложения{' '}
              <strong>скачивают более 200 000 человек по всему миру.</strong>
            </StyledBlock>
            <br />
            <StyledBlock>
              GameDev в SOFTINTERMOB — это креативная команда,
              специализирующаяся на разработке Midcore проектов. Мы создаем
              увлекательные игры с разнообразными механиками, чтобы предложить
              нашим пользователям захватывающий игровой опыт.
            </StyledBlock>
          </Box>

          <Box>
            <StyledBlock>
              В GameDev мы специализируемся на Midcore играх, объединяющих
              различные жанры и механики. Наши проекты включают в себя
              сити-билдинг, ММО стратегии, войны альянсов, комбат механики, а
              также элементы жанров "Автобаттлер", "Раннер", "Симулятор" и
              "Слешер". Мы создаем проекты в казуальной визуальной стилистике,
              чтобы привлечь широкую аудиторию игроков.
            </StyledBlock>
            <br />
            <StyledBlock>
              <HighlightedText>Наша команда</HighlightedText> состоит более чем
              из 400 талантливых специалистов, которые объединены общей целью
              создания уникальных мобильных приложений. Помимо этого, наш
              холдинг включает в себя более 700 профессионалов, что позволяет
              нам реализовывать крупные и амбициозные проекты в сфере разработки
              приложений.
            </StyledBlock>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default About;
