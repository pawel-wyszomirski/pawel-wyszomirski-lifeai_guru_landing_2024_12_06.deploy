import React from 'react';
import { Quote, Star } from 'lucide-react';

type TestimonialProps = {
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
  daysToTransform: number;
};

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();
};

const getColorFromName = (name: string) => {
  const colors = [
    'from-blue-500 to-purple-500',
    'from-emerald-500 to-teal-500',
    'from-orange-500 to-red-500',
    'from-pink-500 to-rose-500'
  ];
  
  const index = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colors[index % colors.length];
};

export const TestimonialCard = ({ name, role, image, quote, rating, daysToTransform }: TestimonialProps) => {
  const [imageError, setImageError] = React.useState(false);
  const initials = getInitials(name);
  const gradientColors = getColorFromName(name);

  return (
    <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl h-full flex flex-col border border-gray-700/50">
      <div className="flex items-start gap-4 mb-6">
        {!imageError ? (
          <img
            src={image}
            alt={name}
            className="w-16 h-16 rounded-full object-cover shrink-0"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className={`w-16 h-16 rounded-full shrink-0 bg-gradient-to-br ${gradientColors} flex items-center justify-center text-white font-bold text-xl`}>
            {initials}
          </div>
        )}
        <div>
          <h4 className="font-bold text-white">{name}</h4>
          <p className="text-gray-400 text-sm mb-2">{role}</p>
          <div className="flex items-center gap-1">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>
      </div>
      <div className="flex-grow">
        <Quote className="w-8 h-8 text-blue-400 opacity-30 mb-3" />
        <p className="text-gray-300 leading-relaxed italic">{quote}</p>
      </div>
      <div className="mt-6 pt-4 border-t border-gray-700/50">
        <p className="text-emerald-400 text-sm font-medium">
          Znalazł/a swoje powołanie w {daysToTransform} dni
        </p>
      </div>
    </div>
  );
};