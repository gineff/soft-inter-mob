import React from 'react';
import { IconProps } from './type';
import { icons } from './icons';
import { FC } from 'react';

export const Icon: FC<IconProps> = ({ type, sx }) => {
  if (!type) {
    return null;
  }
  return React.cloneElement(icons[type], {
    sx: { ...icons[type].props.sx, ...sx },
  });
};
