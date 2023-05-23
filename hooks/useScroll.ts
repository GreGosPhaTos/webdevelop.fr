import { useCallback, useEffect } from 'react';

export const useScroll = (callback: (scrollPosition: number) => void): void => {
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    callback(scrollPosition);
  }, [callback]);

  useEffect(() => {
    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
};
