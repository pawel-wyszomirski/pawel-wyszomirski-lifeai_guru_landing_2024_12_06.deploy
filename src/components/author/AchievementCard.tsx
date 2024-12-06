import React from 'react';
import { LucideIcon } from 'lucide-react';

type AchievementCardProps = {
  icon: LucideIcon;
  value: string;
  title: string;
};

export const AchievementCard = ({ icon: Icon, value, title }: AchievementCardProps) => (
  <div className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-xl border border-gray-700/50 hover:bg-gray-800/70 transition-all duration-300">
    <div className="bg-blue-500/10 p-3 rounded-lg inline-flex mb-4 border border-blue-500/20">
      <Icon className="w-6 h-6 text-blue-400" />
    </div>
    <div>
      <div className="text-2xl font-bold mb-1 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
        {value}
      </div>
      <div className="text-gray-400 text-sm">{title}</div>
    </div>
  </div>
);