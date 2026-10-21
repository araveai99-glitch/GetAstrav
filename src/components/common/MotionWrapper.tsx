import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface MotionWrapperProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  once?: boolean;
  amount?: number | 'some' | 'all';
}

export const MotionWrapper: React.FC<MotionWrapperProps> = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  once = true,
  amount = 'some',
}) => {
  const shouldReduceMotion = useReducedMotion();

  const getVariants = () => {
    let x = 0;
    let y = 0;
    if (!shouldReduceMotion) {
      if (direction === 'up') y = 18;
      if (direction === 'down') y = -18;
      if (direction === 'left') x = 18;
      if (direction === 'right') x = -18;
    }

    return {
      hidden: {
        opacity: 0,
        x,
        y,
        scale: shouldReduceMotion ? 1 : 0.99,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
          duration: shouldReduceMotion ? 0 : 0.45,
          delay: shouldReduceMotion ? 0 : delay,
          ease: [0.16, 1, 0.3, 1],
        },
      },
    };
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
};
