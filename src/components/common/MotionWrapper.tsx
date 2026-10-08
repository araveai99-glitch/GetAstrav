import React from 'react';
import { motion } from 'framer-motion';

interface MotionWrapperProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

export const MotionWrapper: React.FC<MotionWrapperProps> = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}) => {
  const getVariants = () => {
    let x = 0;
    let y = 0;
    if (direction === 'up') y = 20;
    if (direction === 'down') y = -20;
    if (direction === 'left') x = 20;
    if (direction === 'right') x = -20;

    return {
      hidden: { opacity: 0, x, y, scale: 0.98 },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.45,
          delay,
          ease: [0.16, 1, 0.3, 1],
        },
      },
    };
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
};
