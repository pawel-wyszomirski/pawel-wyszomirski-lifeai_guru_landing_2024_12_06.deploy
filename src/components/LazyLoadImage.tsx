import React from 'react';
import { motion } from 'framer-motion';

interface LazyLoadImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  placeholderColor?: string;
}

export const LazyLoadImage: React.FC<LazyLoadImageProps> = ({
  src,
  alt,
  className = '',
  placeholderColor = '#1F2937',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);

  return (
    <motion.div
      className="relative overflow-hidden"
      animate={{ backgroundColor: isLoaded ? 'transparent' : placeholderColor }}
    >
      {!isLoaded && !error && (
        <div className="absolute inset-0 animate-pulse" style={{ backgroundColor: placeholderColor }} />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        {...props}
      />
    </motion.div>
  );
};