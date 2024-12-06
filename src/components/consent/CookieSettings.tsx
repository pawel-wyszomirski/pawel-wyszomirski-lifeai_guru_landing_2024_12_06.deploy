import React from 'react';
import { Cookie } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCookieConsent } from '../../hooks/useCookieConsent';

export const CookieSettings = () => {
  const { hasInteracted, setHasInteracted } = useCookieConsent();

  if (!hasInteracted) return null;

  const handleClick = () => {
    setHasInteracted(false);
  };

  return (
    <motion.button
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.05 }}
      onClick={handleClick}
      className="fixed bottom-4 right-4 z-40 bg-gray-800/90 backdrop-blur-lg border border-gray-700/50 rounded-full p-3 text-gray-300 hover:text-white hover:bg-gray-700/90 transition-colors group shadow-lg"
      aria-label="Ustawienia prywatności"
    >
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Ustawienia prywatności
      </div>
      <Cookie className="w-5 h-5" />
    </motion.button>
  );
};