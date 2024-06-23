import { ProviderComponent, ProviderReturnType } from './types';

const compose = (
  ...funcs: ((Component: ProviderComponent) => ProviderReturnType)[]
) => {
  return (Component: ProviderComponent): ProviderReturnType => {
    return funcs.reduceRight((wrapped, f) => f(wrapped), Component);
  };
};

export default compose;
