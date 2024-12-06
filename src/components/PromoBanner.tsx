import React from 'react';
import { Sparkles, Clock, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { create } from 'zustand';

type BannerStore = {
  isVisible: boolean;
  hide: () => void;
};

export const useBannerStore = create<BannerStore>((set) => ({
  isVisible: true,
  hide: () => set({ isVisible: false }),
}));

export const PromoBanner = () => {
  const { isVisible, hide } = useBannerStore();

  if (!isVisible) return null;

  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      exit={{ y: -100 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg"
    >
      <div className="container mx-auto px-4 relative">
        <div className="py-3 text-center text-sm md:text-base font-medium text-white flex items-center justify-center gap-2">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Sparkles className="w-4 h-4" />
          </motion.div>
          <Clock className="w-4 h-4" />
          <span>Promocja kończy się dziś o 23:59! Zostało tylko 13 miejsc w cenie 29 zł!</span>
          <button 
            onClick={hide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Zamknij banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};