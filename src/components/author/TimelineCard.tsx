import React from 'react';
import { motion } from 'framer-motion';

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

type TimelineCardProps = {
  data: TimelineItem;
  isActive: boolean;
};

export const TimelineCard = ({ data, isActive }: TimelineCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl border border-blue-500/20"
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="bg-blue-500/10 px-4 py-2 rounded-xl border border-blue-500/20">
        <span className="text-blue-400 font-semibold">{data.year}</span>
      </div>
      <h4 className="text-2xl font-bold text-white">{data.title}</h4>
    </div>
    <p className="text-gray-300 leading-relaxed text-lg">{data.description}</p>
  </motion.div>
);