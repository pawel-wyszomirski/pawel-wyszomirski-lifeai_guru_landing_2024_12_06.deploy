import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  gradient = false
}) => {
  const baseStyles = "backdrop-blur-lg rounded-2xl p-8 border";
  const hoverStyles = hover ? "transform transition-all duration-300 hover:scale-[1.02]" : "";
  const gradientStyles = gradient 
    ? "bg-gradient-to-br from-blue-600/90 to-purple-700/90 border-blue-400/50" 
    : "bg-gray-800/50 border-gray-700/50";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`${baseStyles} ${hoverStyles} ${gradientStyles} ${className}`}
    >
      {children}
    </motion.div>
  );
};