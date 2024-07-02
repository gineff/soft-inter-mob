export type NavMenuProps = {
  handleClose?: () => void;
  component?: 'stack' | 'box';
};

export type NavTogglerProps = {
  open: boolean;
  handleToggleNav: VoidFunction;
};
