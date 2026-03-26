import { useEffect, useRef } from 'react';
import { useAnimation, useInView } from 'framer-motion';

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer = (stagger = 0.12, delayStart = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delayStart },
  },
});

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, amount: threshold });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  return [ref, controls];
}

export default useScrollReveal;
