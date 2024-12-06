import React from 'react';
import { Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export const GuaranteeBadge = () => (
  <motion.div 
    initial={{ scale: 0.9, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true }}
    className="max-w-sm mx-auto mb-12 text-center"
  >
    <div className="relative">
      <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-20" />
      <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-full p-8 border-2 border-blue-400">
        <Shield className="w-16 h-16 mx-auto mb-4 text-blue-200" />
        <h2 className="text-2xl font-bold mb-2">
          30 dni gwarancji
        </h2>
        <p className="text-blue-200">
          100% satysfakcji lub zwrot pieniędzy
        </p>
      </div>
    </div>
  </motion.div>
);