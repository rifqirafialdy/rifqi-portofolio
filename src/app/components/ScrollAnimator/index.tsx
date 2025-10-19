'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollAnimatorProps {
  children: ReactNode;
  className?: string;
  delay?: number; // Delay in seconds (e.g., 0.2)
}

const ScrollAnimator = ({
  children,
  className = '',
  delay = 0,
}: ScrollAnimatorProps) => {
  // Define animation variants
  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Animate once when 20% of it is visible
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimator;