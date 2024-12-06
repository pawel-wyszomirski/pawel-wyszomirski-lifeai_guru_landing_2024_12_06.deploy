import React from 'react';
import { CheckCircle, XCircle, ArrowRight, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRegistrationModal } from '../../hooks/useRegistrationModal';

type PathCardProps = {
  type: 'positive' | 'negative';
  icon: LucideIcon;
  title: string;
  description: string;
  outcomes: string[];
  buttonText: string;
  buttonVariant: 'primary' | 'secondary';
};

export const PathCard = ({ 
  type, 
  title, 
  description, 
  outcomes, 
  buttonText, 
  buttonVariant,
  icon: Icon 
}: PathCardProps) => {
  const openModal = useRegistrationModal(state => state.open);

  return (
    <div className={`rounded-2xl p-8 h-full transform transition-all duration-300 ${
      type === 'positive' 
        ? 'bg-blue-600/10 border-2 border-blue-500/30 backdrop-blur-lg' 
        : 'bg-gray-800/50 border border-gray-700/50 backdrop-blur-lg'
    }`}>
      <div className="flex items-center space-x-4 mb-6">
        <div className={`p-4 rounded-xl ${
          type === 'positive' ? 'bg-blue-500/20 border border-blue-500/20' : 'bg-gray-700/50 border border-gray-600/20'
        }`}>
          <Icon className={`w-6 h-6 ${
            type === 'positive' ? 'text-blue-400' : 'text-gray-400'
          }`} />
        </div>
        <h3 className={`text-xl font-bold ${
          type === 'positive' ? 'text-white' : 'text-gray-300'
        }`}>
          {title}
        </h3>
      </div>

      <p className={`mb-8 leading-relaxed ${
        type === 'positive' ? 'text-gray-200' : 'text-gray-400'
      }`}>
        {description}
      </p>

      <div className="space-y-4 mb-8">
        {outcomes.map((outcome, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-start"
          >
            {type === 'positive' ? (
              <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-green-500 flex-shrink-0" />
            ) : (
              <XCircle className="w-5 h-5 mr-3 mt-0.5 text-red-500 flex-shrink-0" />
            )}
            <span className={
              type === 'positive' ? 'text-gray-200' : 'text-gray-400'
            }>
              {outcome}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.button 
        onClick={buttonVariant === 'primary' ? openModal : undefined}
        whileHover={{ scale: buttonVariant === 'primary' ? 1.02 : 1 }}
        whileTap={{ scale: buttonVariant === 'primary' ? 0.98 : 1 }}
        className={`w-full py-4 px-6 rounded-xl font-bold transition-all flex items-center justify-center ${
          buttonVariant === 'primary'
            ? 'bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white shadow-lg shadow-green-500/25 group'
            : 'bg-gray-700/50 hover:bg-gray-700 text-gray-400 border border-gray-600/50'
        }`}
      >
        {buttonText}
        {buttonVariant === 'primary' && (
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        )}
      </motion.button>
    </div>
  );
};