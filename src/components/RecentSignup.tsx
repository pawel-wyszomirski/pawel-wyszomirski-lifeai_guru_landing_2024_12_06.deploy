import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type RecentSignupProps = {
  name: string;
  city: string;
  index: number;
};

export const RecentSignup = ({ name, city, index }: RecentSignupProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`${name}-${city}`}
        initial={{ opacity: 0, x: 50, y: 0 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: -50, y: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: index * 0.2 
        }}
        className="bg-gray-800/50 backdrop-blur-lg p-3 rounded-xl border border-gray-700/50 flex items-center gap-3"
      >
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2 text-white">
          🎉
        </div>
        <p className="text-sm text-gray-300">
          <span className="font-medium text-white">{name}</span> z miasta{' '}
          <span className="font-medium text-white">{city}</span> właśnie dołączył/a!
        </p>
      </motion.div>
    </AnimatePresence>
  );
};