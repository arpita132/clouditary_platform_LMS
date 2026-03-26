// hooks/useScrollReveal.js
// ─── Reusable scroll-reveal hook ───────────────────────────────────────────────
// Usage:
//   const ref = useScrollReveal();
//   <motion.div ref={ref} variants={fadeUpVariants} initial="hidden" animate={control}>

import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

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

/**
 * Returns [ref, controls].
 * Attach ref to a DOM element; pass controls to motion.div animate prop.
 * Triggers once when the element enters the viewport.
 */
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