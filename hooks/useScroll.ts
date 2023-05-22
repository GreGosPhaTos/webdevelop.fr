import { useEffect } from 'react';

export const useScroll = (callBack: (scrollPosition: number) => void): void => {
  useEffect(() => {
    const handleScroll = (): void => {
      const scrollPosition = window.scrollY;
      callBack(scrollPosition);
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [callBack]);
};
