import { TextField, Button, Box, Typography } from '@mui/material';
import {
  UserDataFieldNames,
  validationSchema,
  FormUserData,
} from './validation';
import { useFormik, FormikProps } from 'formik';
import { authAPI } from '@/api/authAPI';

const isFieldValid = <T extends object>(
  formik: FormikProps<T>,
  fieldName: keyof T
): boolean => {
  return !!formik.touched[fieldName] && !!formik.errors[fieldName];
};

export const SignUpForm = () => {
  const initialValues: FormUserData = {
    [UserDataFieldNames.Name]: '',
    [UserDataFieldNames.Surname]: '',
    [UserDataFieldNames.Telegram]: '',
    [UserDataFieldNames.Email]: '',
  };

  const handleSubmit = async (values: FormUserData) => {
    await authAPI.fetchSignUp(values);
  };

  const formik = useFormik<FormUserData>({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  console.log('formik.isSubmitting', formik.isSubmitting);

  return (
    <Box
      component="form"
      sx={{ display: 'grid', gap: '20px', color: '#000' }}
      onSubmit={formik.handleSubmit}
    >
      <TextField
        type="text"
        label="Фамилия"
        variant="filled"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name={UserDataFieldNames.Surname}
        value={formik.values[UserDataFieldNames.Surname]}
        error={isFieldValid(formik, UserDataFieldNames.Surname)}
        helperText={
          isFieldValid(formik, UserDataFieldNames.Surname) &&
          formik.errors[UserDataFieldNames.Surname]
        }
      ></TextField>
      <TextField
        type="text"
        label="Имя"
        variant="filled"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name={UserDataFieldNames.Name}
        value={formik.values[UserDataFieldNames.Name]}
        error={isFieldValid(formik, UserDataFieldNames.Name)}
        helperText={
          isFieldValid(formik, UserDataFieldNames.Name) &&
          formik.errors[UserDataFieldNames.Name]
        }
      ></TextField>
      <TextField
        type="text"
        label="Telegram"
        variant="filled"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name={UserDataFieldNames.Telegram}
        value={formik.values[UserDataFieldNames.Telegram]}
        error={isFieldValid(formik, UserDataFieldNames.Telegram)}
        helperText={
          isFieldValid(formik, UserDataFieldNames.Telegram) &&
          formik.errors[UserDataFieldNames.Telegram]
        }
      ></TextField>
      <TextField
        type="text"
        label="e-mail"
        variant="filled"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name={UserDataFieldNames.Email}
        value={formik.values[UserDataFieldNames.Email]}
        error={isFieldValid(formik, UserDataFieldNames.Email)}
        helperText={
          isFieldValid(formik, UserDataFieldNames.Email) &&
          formik.errors[UserDataFieldNames.Email]
        }
      ></TextField>
      <Box sx={{ position: 'relative', minHeight: '58px', zIndex: 1100 }}>
        <Button
          type="submit"
          variant="gradientWithShadow"
          sx={{ position: 'absolute', width: '100%' }}
          disabled={!!formik.isSubmitting || !formik.isValid}
        >
          <Typography variant="font20">
            {formik.isSubmitting ? 'Идет обработка данных' : 'Присоединиться'}
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};
