import { IconType } from './icons';
import { SxProps, Theme } from '@mui/material';

export type IconProps = {
  /** Тип иконки. Должен совпадать по ключу с объектом icons. */
  type: IconType;
  sx?: SxProps<Theme>;
};

export type ImageProps = {
  src: string;
  sx?: SxProps<Theme>;
};
