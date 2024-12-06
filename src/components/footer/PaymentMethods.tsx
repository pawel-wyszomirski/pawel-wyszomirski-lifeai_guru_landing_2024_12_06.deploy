import React from 'react';
import { OptimizedImage } from '../OptimizedImage';

export const PaymentMethods = () => (
  <div className="mb-6">
    <OptimizedImage 
      publicId="pay_vd94zm"
      alt="Dostępne metody płatności" 
      className="h-8 object-contain mx-auto"
      loading="lazy"
      sizes={[320, 640]}
    />
  </div>
);