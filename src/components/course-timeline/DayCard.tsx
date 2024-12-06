import React from 'react';
import { CheckCircle, Zap, LucideIcon, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

type DayData = {
  day: number;
  title: string;
  icon: LucideIcon;
  description: string;
  outcomes: string[];
  tools: string[];
  quickWin: string;
};

type DayCardProps = {
  data: DayData;
  isActive: boolean;
  onClick: () => void;
};

export const DayCard = ({ data, isActive, onClick }: DayCardProps) => {
  const IconComponent = data.icon;
  
  return (
    <motion.div 
      className={`${
        isActive 
          ? 'bg-gray-800/50 border-blue-500/50' 
          : 'bg-gray-800/30 border-gray-700/50 hover:bg-gray-800/40'
      } backdrop-blur-lg border rounded-2xl p-8 cursor-pointer transition-all duration-300 group`}
      onClick={onClick}
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-start gap-4">
          <div className={`
            p-3 rounded-xl shrink-0
            ${isActive ? 'bg-blue-500/10 border border-blue-500/20' : 'bg-gray-700/50 border border-gray-600/20'}
          `}>
            <IconComponent className={`w-6 h-6 ${isActive ? 'text-blue-400' : 'text-gray-400'}`} />
          </div>
          <div>
            <div className="text-sm text-gray-400 mb-1">Dzień {data.day}</div>
            <h3 className="font-bold text-xl text-white">{data.title}</h3>
          </div>
        </div>
        
        <motion.div
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`
            p-2 rounded-full 
            ${isActive ? 'bg-blue-500/10' : 'bg-gray-700/50'} 
            ${!isActive && 'group-hover:bg-blue-500/10'}
            transition-colors duration-300
          `}
        >
          <ChevronDown className={`
            w-5 h-5 
            ${isActive ? 'text-blue-400' : 'text-gray-400'} 
            ${!isActive && 'group-hover:text-blue-400'}
            transition-colors duration-300
          `} />
        </motion.div>
      </div>
      
      <p className="text-gray-300 leading-relaxed mb-6">
        {data.description}
      </p>

      {isActive && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-8"
        >
          <div>
            <h4 className="font-semibold mb-4 text-blue-300">Co osiągniesz:</h4>
            <ul className="space-y-3">
              {data.outcomes.map((outcome, idx) => (
                <motion.li 
                  key={idx} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 mt-0.5 text-emerald-400 flex-shrink-0" />
                  <span className="text-gray-300 leading-relaxed">{outcome}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4 text-blue-300">Narzędzia:</h4>
            <div className="flex flex-wrap gap-2">
              {data.tools.map((tool, idx) => (
                <motion.span 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gray-700/50 border border-gray-600/50 px-4 py-2 rounded-full text-sm text-gray-300"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-emerald-500/5 border border-emerald-500/10 p-6 rounded-xl"
          >
            <h4 className="font-semibold mb-3 text-emerald-400 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Quick Win:
            </h4>
            <p className="text-emerald-300 leading-relaxed">{data.quickWin}</p>
          </motion.div>
        </motion.div>
      )}

      {!isActive && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-blue-400/70 mt-4 flex items-center gap-2 group-hover:text-blue-400 transition-colors duration-300"
        >
          <span>Kliknij, aby zobaczyć szczegóły</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      )}
    </motion.div>
  );
};