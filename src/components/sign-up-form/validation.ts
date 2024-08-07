import { string, object } from 'yup';

export type FormUserData = {
  [UserDataFieldNames.Name]: string | null;
  [UserDataFieldNames.Surname]: string | null;
  [UserDataFieldNames.Telegram]: string | null;
  [UserDataFieldNames.Email]: string | null;
};


export enum UserDataFieldNames {
  Surname = 'surname',
  Name = 'name',
  Telegram = 'telegram',
  Email = 'email',
}

const values = {
  name: { min: 2 },
  surname: { min: 2 },
};

const messages = {
  required: 'Это поле обязательно',
  email: 'Введите действительный email адрес',
  min: (field: string, num: number) =>
    `Длина ${field} должна быть не менее ${num} символов`,
  max: (field: string, num: number) =>
    `Длина ${field} должна быть не более ${num} символов`,
};


export const validationSchema = object().shape({
  [UserDataFieldNames.Email]: string()
    .trim()
    .email(messages.email)
    .required(messages.required),
  [UserDataFieldNames.Telegram]: string().trim().required(messages.required),
  [UserDataFieldNames.Name]: string()
    .trim()
    .min(values.name.min, messages.min('имени', values.name.min))
    .required(messages.required),
  [UserDataFieldNames.Surname]: string()
    .trim()
    .min(values.name.min, messages.min('фамилии', values.name.min))
    .required(messages.required),
});
