import { SxProps, Theme } from '@mui/material';

export interface LottieAnimationData {
  [key: string]: string | number;
}

export type LottieAnimationProps = {
  sx?: SxProps<Theme>;
  src?: string | LottieAnimationData;
  placeHolder?: string;
};
