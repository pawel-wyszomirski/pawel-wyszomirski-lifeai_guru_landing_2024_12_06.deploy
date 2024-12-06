import React from 'react';
import { ArrowRight, LucideIcon } from 'lucide-react';

type TransformationCardProps = {
  beforeTitle: string;
  afterTitle: string;
  beforeDesc: string;
  afterDesc: string;
  icon: LucideIcon;
};

export const TransformationCard = ({ 
  beforeTitle, 
  afterTitle, 
  beforeDesc, 
  afterDesc, 
  icon: Icon 
}: TransformationCardProps) => (
  <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 transform transition-all duration-300 hover:scale-[1.02] border border-gray-700/50 h-full flex flex-col">
    <div className="flex flex-col space-y-8 flex-1">
      {/* Before section */}
      <div className="space-y-4 flex-1">
        <div className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20">
          <span className="text-red-400 font-semibold text-sm tracking-wide">PRZED</span>
        </div>
        <div>
          <div className="flex items-center gap-4 mb-3">
            <div className="bg-red-500/10 p-3 rounded-xl border border-red-500/20 shrink-0">
              <Icon className="w-6 h-6 text-red-400" />
            </div>
            <h3 className="font-bold text-xl text-white">{beforeTitle}</h3>
          </div>
          <p className="text-gray-400 leading-relaxed min-h-[80px]">{beforeDesc}</p>
        </div>
      </div>

      {/* Arrow divider */}
      <div className="flex justify-center py-2">
        <div className="bg-blue-500/10 p-2 rounded-full border border-blue-500/20">
          <ArrowRight className="w-5 h-5 text-blue-400 transform rotate-90" />
        </div>
      </div>

      {/* After section */}
      <div className="space-y-4 flex-1">
        <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <span className="text-emerald-400 font-semibold text-sm tracking-wide">PO AI</span>
        </div>
        <div>
          <div className="flex items-center gap-4 mb-3">
            <div className="bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20 shrink-0">
              <Icon className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="font-bold text-xl text-white">{afterTitle}</h3>
          </div>
          <p className="text-gray-400 leading-relaxed min-h-[80px]">{afterDesc}</p>
        </div>
      </div>
    </div>
  </div>
);