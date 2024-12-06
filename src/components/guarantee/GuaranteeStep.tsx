import React from 'react';
import { LucideIcon } from 'lucide-react';

type GuaranteeStepProps = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const GuaranteeStep = ({ number, title, description, icon: Icon }: GuaranteeStepProps) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold text-white">
      {number}
    </div>
    <div>
      <div className="flex items-center space-x-3 mb-2">
        <Icon className="w-5 h-5 text-blue-400" />
        <h3 className="font-bold text-xl text-white">{title}</h3>
      </div>
      <p className="text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);