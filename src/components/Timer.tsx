import React from 'react';

type TimerProps = {
  hours: number;
  minutes: number;
  seconds: number;
};

export const Timer = ({ hours, minutes, seconds }: TimerProps) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-lg p-4 rounded-2xl border border-gray-700">
      <p className="text-sm mb-2 text-gray-300">Promocja kończy się za:</p>
      <div className="flex gap-4 text-center">
        {[
          { value: hours, label: 'Godzin' },
          { value: minutes, label: 'Minut' },
          { value: seconds, label: 'Sekund' },
        ].map(({ value, label }) => (
          <div key={label} className="bg-gray-800 p-3 rounded-xl min-w-[80px]">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              {value.toString().padStart(2, '0')}
            </div>
            <div className="text-xs text-gray-400">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};