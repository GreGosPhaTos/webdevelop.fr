import { useEffect, useState } from 'react';

interface UseLink {
  href: (link: string) => void
};

export const useLink = (): UseLink => {
  const [windowLocationState, setWindowLocationState] = useState<Location | null>(null);
  useEffect(() => {
    setWindowLocationState(window.location);
  }, []);

  return {
    href: (link: string) => {
      if (windowLocationState != null) {
        windowLocationState.href = link;
      }
    }
  };
};
