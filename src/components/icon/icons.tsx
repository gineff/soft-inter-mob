import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Image } from './image';
import LogoIcon from '@/assets/icons/logo.svg?react';

const defaultProps40 = { sx: { width: '40px', height: '40px' } };
const defaultProps32 = { sx: { width: '32px', height: '32px' } };

export const icons = {
  twitterX: <XIcon {...defaultProps40} />,
  instagram: <InstagramIcon {...defaultProps40} />,
  vkontakte: <Image src="/images/vk.png" {...defaultProps40} />,
  telegram: <Image src="/images/telegram.png" {...defaultProps40} />,
  email: <Image src="/images/email.png" {...defaultProps32} />,
  phone: <Image src="/images/phone.png" {...defaultProps32} />,
  location: <Image src="/images/location.png" {...defaultProps32} />,
  logo: <LogoIcon />,
};

export type IconType = Nullable<keyof typeof icons>;
