import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type RegistrationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const RegistrationModal = ({ isOpen, onClose }: RegistrationModalProps) => (
  <AnimatePresence>
    {isOpen && (
      <>
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          className="fixed top-0 right-0 h-full w-full md:w-[600px] bg-white z-50"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-gray-900 hover:bg-gray-800 text-white transition-colors group"
            aria-label="Zamknij"
          >
            <X className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>

          {/* Loading indicator */}
          <div className="absolute inset-0 flex items-center justify-center bg-white" id="loading">
            <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin" />
          </div>

          {/* Registration iframe */}
          <iframe
            src="https://www.mailingr.co/c/ai40plus"
            className="w-full h-full"
            title="Rejestracja"
            onLoad={() => {
              const loading = document.getElementById('loading');
              if (loading) loading.style.display = 'none';
            }}
          />
        </motion.div>
      </>
    )}
  </AnimatePresence>
);