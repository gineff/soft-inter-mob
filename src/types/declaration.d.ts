declare module '*.svg?react' {
  import React = require('react')
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}

declare type Nullable<T> = T | null;
declare type VoidFunction = (...args: unknown[]) => void;
declare type AnyFunction<T> = (...args: never) => T;
