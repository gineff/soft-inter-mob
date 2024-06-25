import { TextField, Button, Box } from '@mui/material';

export const SignUpForm = () => {
  return (
    <Box component="form" sx={{ display: 'grid', gap: '20px' }}>
      <TextField type="text" label="Фамилия" variant="filled"></TextField>
      <TextField type="text" label="Имя" variant="filled"></TextField>
      <TextField type="text" label="Telegram" variant="filled"></TextField>
      <TextField type="text" label="e-mail" variant="filled"></TextField>
      <Button
        variant="contained"
        sx={{
          height: '64px',
          fontWeight: 600,
          fontSize: '20px',
          lineHeight: '24.2px',
        }}
      >
        Присоединиться
      </Button>
    </Box>
  );
};
