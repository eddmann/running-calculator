import { useCallback, useLayoutEffect, useState } from 'react';

export const useBodyLock = () => {
  const [isLocked, setIsLocked] = useState(false);

  useLayoutEffect(() => {
    if (!isLocked) {
      return;
    }

    document.body.classList.add('lock');

    return () => {
      document.body.classList.remove('lock');
    };
  }, [isLocked]);

  const lock = useCallback(() => {
    setIsLocked(true);
  }, []);
  const unlock = useCallback(() => {
    setIsLocked(false);
  }, []);

  return { lock, unlock };
};
