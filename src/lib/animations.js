import { useAnimation } from 'framer-motion';

export const useMyAnimation = () => {
  const animation = useAnimation();

  const startAnimation = () => {
    animation.start({
      width: '100%',
      transition: { duration: 0.5 },
    });
    animation.start({
      width: '50%',
      transition: { duration: 0.5 },
    });
  };

  return { animation, startAnimation };
};
