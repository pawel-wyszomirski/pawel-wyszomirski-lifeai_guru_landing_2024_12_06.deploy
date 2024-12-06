import React from 'react';
import { LucideIcon } from 'lucide-react';

type StatCardProps = {
  icon: LucideIcon;
  value: string;
  label: string;
};

export const StatCard = ({ icon: Icon, value, label }: StatCardProps) => (
  <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl text-center border border-gray-700/50">
    <div className="inline-flex justify-center items-center mb-4 bg-blue-500/10 p-4 rounded-xl border border-blue-500/20">
      <Icon className="w-8 h-8 text-blue-400" />
    </div>
    <div className="text-3xl font-bold text-white mb-2">{value}</div>
    <div className="text-gray-400">{label}</div>
  </div>
);