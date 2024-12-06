import { useMemo } from 'react';

type ImageFormat = 'webp' | 'avif' | 'auto';
type ImageQuality = 'low' | 'medium' | 'high' | 'auto';

interface CloudinaryConfig {
  cloudName: string;
  transformations?: string[];
  format?: ImageFormat;
  quality?: ImageQuality;
}

const CLOUDINARY_BASE = 'https://res.cloudinary.com';

const qualityMap = {
  low: 60,
  medium: 75,
  high: 90,
  auto: 'auto'
};

export const getCloudinaryUrl = (
  publicId: string,
  {
    cloudName = 'dqsvgngfx',
    transformations = [],
    format = 'auto',
    quality = 'auto'
  }: CloudinaryConfig
) => {
  const transform = [
    'f_auto',
    `q_${qualityMap[quality]}`,
    ...transformations
  ].join(',');

  return `${CLOUDINARY_BASE}/${cloudName}/image/upload/${transform}/${publicId}`;
};

export const getResponsiveImage = (publicId: string, sizes: number[]) => {
  return sizes.map(size => ({
    src: getCloudinaryUrl(publicId, {
      transformations: [`w_${size}`]
    }),
    width: size
  }));
};

export const useCloudinaryImage = (
  publicId: string,
  sizes: number[] = [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  config: Partial<CloudinaryConfig> = {}
) => {
  return useMemo(() => {
    const images = getResponsiveImage(publicId, sizes);
    const defaultImage = getCloudinaryUrl(publicId, config);
    const srcSet = images
      .map(({ src, width }) => `${src} ${width}w`)
      .join(', ');

    return {
      src: defaultImage,
      srcSet,
      sizes: '(max-width: 768px) 100vw, 50vw'
    };
  }, [publicId, sizes, config]);
};