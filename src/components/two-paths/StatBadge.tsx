import React from 'react';
import { LucideIcon } from 'lucide-react';

type StatBadgeProps = {
  icon: LucideIcon;
  text: string;
  variant: 'success' | 'danger';
};

export const StatBadge = ({ icon: Icon, text, variant }: StatBadgeProps) => (
  <div className={`flex items-center bg-gray-800/50 backdrop-blur-lg px-6 py-3 rounded-xl border ${
    variant === 'success' 
      ? 'border-green-500/20 text-green-400' 
      : 'border-red-500/20 text-red-400'
  }`}>
    <Icon className="w-5 h-5 mr-2" />
    <span>{text}</span>
  </div>
);