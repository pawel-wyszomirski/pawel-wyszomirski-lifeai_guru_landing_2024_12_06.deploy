import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  gradient = true
}) => (
  <section className={`relative overflow-hidden py-32 ${className}`}>
    {gradient && (
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800" />
    )}
    <div className="container mx-auto px-4 relative">
      {children}
    </div>
  </section>
);