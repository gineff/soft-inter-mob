import { Box } from "@mui/material";
import { FC } from "react";
import { ImageProps } from "./type";

export const Image: FC<ImageProps> = ({ sx, src }) => (
  <Box
    sx={{
      ...sx,
      background: `url(${src}) center/cover no-repeat`,
    }}
  />
);
