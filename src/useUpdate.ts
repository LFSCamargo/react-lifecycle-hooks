import { useEffect } from 'react';
import { isEqual } from 'lodash';
import { usePrevious } from './usePrevious';

type UpdateFN<Props extends Record<string, any>> = (
  prevProps: Props,
  nextProps: Props,
) => Promise<void> | void;

export const useUpdate = <Props extends Record<string, any>>(
  fn: UpdateFN<Props>,
  props: Props,
): void => {
  const prevProps = usePrevious(props);

  useEffect(() => {
    if (prevProps !== undefined && !isEqual(prevProps, props)) {
      fn(prevProps, props);
    }
  }, [props]);
};
