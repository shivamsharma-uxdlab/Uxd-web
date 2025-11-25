import { useEffect } from 'react';

const useScroll = (callback) => {
  useEffect(() => {
    const handleScroll = () => {
      if (callback) callback();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [callback]);
};

export default useScroll;