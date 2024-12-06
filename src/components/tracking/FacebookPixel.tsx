import React, { useEffect } from 'react';
import { useCookieConsent } from '../../hooks/useCookieConsent';

declare global {
  interface Window {
    fbq: any;
  }
}

const FB_PIXEL_ID = '1205343097268939';

export const FacebookPixel = () => {
  const { marketing } = useCookieConsent();

  useEffect(() => {
    if (!marketing) {
      return;
    }

    const loadFbPixel = () => {
      if (process.env.NODE_ENV !== 'production') {
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://connect.facebook.net/en_US/fbevents.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        window.fbq('init', FB_PIXEL_ID);
        window.fbq('track', 'PageView');

        // Track additional standard events
        window.fbq('track', 'ViewContent', {
          content_name: 'Od chaosu do celu w 5 dni z AI',
          content_type: 'product',
          content_ids: ['ai5dni'],
          content_category: 'Online Course',
          value: 29.00,
          currency: 'PLN'
        });
      };
    };

    if (document.readyState === 'complete') {
      loadFbPixel();
    } else {
      window.addEventListener('load', loadFbPixel);
      return () => window.removeEventListener('load', loadFbPixel);
    }
  }, [marketing]);

  if (!marketing || process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <noscript>
      <img 
        height="1" 
        width="1" 
        style={{ display: 'none' }}
        src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  );
};