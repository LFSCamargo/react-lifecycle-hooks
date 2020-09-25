import { useEffect, useRef } from 'react';

export const usePrevious = <Value extends any>(
  value: Value,
): Value | undefined => {
  const ref = useRef<Value>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
