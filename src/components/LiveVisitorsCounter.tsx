import React, { useState, useEffect } from 'react';
import { Users, Eye, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { create } from 'zustand';

type CounterStore = {
  isVisible: boolean;
  hide: () => void;
};

const useCounterStore = create<CounterStore>((set) => ({
  isVisible: true,
  hide: () => set({ isVisible: false }),
}));

export const LiveVisitorsCounter = () => {
  const [visitors, setVisitors] = useState(0);
  const [isWatching, setIsWatching] = useState(false);
  const { isVisible, hide } = useCounterStore();

  useEffect(() => {
    const baseVisitors = Math.floor(Math.random() * (15 - 8 + 1)) + 8;
    setVisitors(baseVisitors);

    const interval = setInterval(() => {
      const change = Math.random() < 0.5 ? -1 : 1;
      setVisitors(prev => {
        const newValue = prev + change;
        return newValue >= 8 && newValue <= 15 ? newValue : prev;
      });
      setIsWatching(Math.random() > 0.7);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        className="fixed bottom-4 left-4 z-50 space-y-2"
      >
        <div className="bg-gray-800/90 backdrop-blur-lg border border-gray-700/50 rounded-full px-4 py-2 flex items-center gap-2 relative group">
          <Users className="w-4 h-4 text-green-400" />
          <span className="text-sm text-white">
            <span className="text-green-400 font-medium">{visitors}</span> osób przegląda teraz
          </span>
          <button 
            onClick={hide}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-700 rounded-full transition-colors opacity-0 group-hover:opacity-100"
            aria-label="Zamknij licznik"
          >
            <X className="w-3 h-3 text-gray-400" />
          </button>
        </div>
        
        <AnimatePresence>
          {isWatching && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-blue-500/20 backdrop-blur-lg border border-blue-500/20 rounded-full px-4 py-2 flex items-center gap-2"
            >
              <Eye className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-100">
                3 osoby przeglądają tę sekcję
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};