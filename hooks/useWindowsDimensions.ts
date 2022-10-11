import { useState, useEffect } from 'react';

interface Dimensions { width: number, height: number };

function getWindowDimensions(): Dimensions {
  if (typeof window !== 'undefined') {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

  return {
    width: 0,
    height: 0
  };
}

export default function useWindowDimensions(): Dimensions {
  const [windowDimensions, setWindowDimensions] = useState<Dimensions>(getWindowDimensions());

  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
