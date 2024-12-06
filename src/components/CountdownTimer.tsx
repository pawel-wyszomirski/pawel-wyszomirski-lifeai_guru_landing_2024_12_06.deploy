import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

type TimeLeft = {
  hours: number;
  minutes: number;
  seconds: number;
};

type CountdownTimerProps = {
  variant?: 'hero' | 'value';
};

export const CountdownTimer = ({ variant = 'hero' }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);
      
      const difference = midnight.getTime() - now.getTime();
      
      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (variant === 'hero') {
    return (
      <div className="bg-gray-800/50 backdrop-blur-lg p-4 rounded-2xl border border-gray-700">
        <p className="text-sm mb-2 text-gray-300">Promocja kończy się za:</p>
        <div className="flex gap-4 text-center">
          {[
            { value: timeLeft.hours, label: 'Godzin' },
            { value: timeLeft.minutes, label: 'Minut' },
            { value: timeLeft.seconds, label: 'Sekund' },
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
  }

  return (
    <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-6 max-w-2xl mx-auto text-center backdrop-blur-lg">
      <div className="flex items-center justify-center space-x-2 text-orange-400 mb-4">
        <Timer className="w-5 h-5" />
        <span className="font-medium">Promocja kończy się za:</span>
      </div>
      <div className="flex justify-center space-x-6">
        <div className="bg-gray-800/50 rounded-xl p-4 min-w-[80px]">
          <div className="text-3xl font-bold text-white">
            {timeLeft.hours.toString().padStart(2, '0')}
          </div>
          <div className="text-xs text-gray-400 mt-1">GODZ</div>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-4 min-w-[80px]">
          <div className="text-3xl font-bold text-white">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <div className="text-xs text-gray-400 mt-1">MIN</div>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-4 min-w-[80px]">
          <div className="text-3xl font-bold text-white">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
          <div className="text-xs text-gray-400 mt-1">SEK</div>
        </div>
      </div>
    </div>
  );
};