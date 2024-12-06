import React from 'react';

type ProgressBarProps = {
  currentDay: number;
  totalDays: number;
};

export const ProgressBar = ({ currentDay, totalDays }: ProgressBarProps) => (
  <div className="max-w-3xl mx-auto mb-16">
    <div className="flex justify-between mb-2">
      <span className="text-sm text-gray-400">Start</span>
      <span className="text-sm text-gray-400">Finisz</span>
    </div>
    <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-500"
        style={{ width: `${(currentDay / totalDays) * 100}%` }}
      />
    </div>
    <div className="flex justify-between mt-2">
      <span className="text-sm text-blue-400 font-medium">Dzień {currentDay}/{totalDays}</span>
      <span className="text-sm text-gray-400">{totalDays} dni</span>
    </div>
  </div>
);