import { withRouter } from './withRouter.provider';
import { withTheme } from './withTheme.provider';
import compose from './compose';

export const withProviders = compose(
  withRouter,
  withTheme
);
