type RouteAdditions = {
  title: string;
  icon?: string;
};

type RouteMain = {
  path: string;
};

export type RouteType = RouteMain & RouteAdditions;

export type AuthorizationProps = {
  requireAuth?: boolean;
};
