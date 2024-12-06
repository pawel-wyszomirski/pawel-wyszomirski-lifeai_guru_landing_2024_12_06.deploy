import React from 'react';
import { useCloudinaryImage } from '../utils/imageLoader';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  publicId: string;
  sizes?: number[];
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  publicId,
  sizes,
  alt,
  className = '',
  loading = 'lazy',
  ...props
}) => {
  const imageProps = useCloudinaryImage(publicId, sizes);

  return (
    <img
      {...imageProps}
      {...props}
      alt={alt}
      className={className}
      loading={loading}
    />
  );
};