import { useEffect } from 'react';
import { initPrefetch } from '../utils/prefetch';

export const useCheckoutPrefetch = () => {
  useEffect(() => {
    const cleanup = initPrefetch();
    return cleanup;
  }, []);
};