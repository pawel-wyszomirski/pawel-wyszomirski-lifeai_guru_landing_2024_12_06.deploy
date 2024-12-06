import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useBannerStore } from './PromoBanner';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const isBannerVisible = useBannerStore(state => state.isVisible);

  return (
    <motion.div
      className={`fixed left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left z-50 transition-all duration-300 ${
        isBannerVisible ? 'top-12' : 'top-0'
      }`}
      style={{ scaleX }}
    />
  );
};