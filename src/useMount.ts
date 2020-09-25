import { useEffect } from 'react';

type PromisedFn = () => Promise<void> | void;

export const useMount = (fn: PromisedFn): void => {
  useEffect(() => {
    fn();
  }, []);
};
