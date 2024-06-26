import { TextField, Button, Box, Typography } from '@mui/material';

export const SignUpForm = () => {
  return (
    <Box component="form" sx={{ display: 'grid', gap: '20px' }}>
      <TextField type="text" label="Фамилия" variant="filled"></TextField>
      <TextField type="text" label="Имя" variant="filled"></TextField>
      <TextField type="text" label="Telegram" variant="filled"></TextField>
      <TextField type="text" label="e-mail" variant="filled"></TextField>
      <Button variant="contained" sx={{ height: '64px' }}>
        <Typography variant="font20">Присоединиться</Typography>
      </Button>
    </Box>
  );
};
