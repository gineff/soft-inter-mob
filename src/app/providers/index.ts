import { withRouter } from './withRouter.provider';
import { withTheme } from './withTheme.provider';
import compose from './compose';
import { withAppContext } from './withAppContenxt';

export const withProviders = compose(
  withRouter,
  withTheme,
  withAppContext
);
