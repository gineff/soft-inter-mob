type StyleProperties = {
  [key: string]: string | number | StyleProperties;
};

export type AnimationStyles = {
  [key: string]: StyleProperties;
};
