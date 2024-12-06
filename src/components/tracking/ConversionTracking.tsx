import { useEffect } from 'react';
import { useRegistrationModal } from '../../hooks/useRegistrationModal';
import { useAnalyticsContext } from './AnalyticsProvider';

declare global {
  interface Window {
    fbq: any;
  }
}

export const ConversionTracking = () => {
  const isOpen = useRegistrationModal(state => state.isOpen);
  const analytics = useAnalyticsContext();

  useEffect(() => {
    if (isOpen) {
      analytics.trackCheckoutStep('initiate', {
        source: window.location.pathname,
        buttonLocation: document.activeElement?.closest('section')?.id || 'unknown',
        timestamp: new Date().toISOString()
      });

      // Add iframe load listener
      const iframe = document.querySelector('iframe[src*="mailingr.co"]');
      if (iframe) {
        iframe.addEventListener('load', () => {
          analytics.trackCheckoutStep('form_start', {
            timestamp: new Date().toISOString()
          });

          // Track PayU redirect
          try {
            iframe.contentWindow?.addEventListener('beforeunload', (event) => {
              const currentUrl = iframe.contentWindow?.location.href;
              if (currentUrl?.includes('secure.payu.com')) {
                analytics.trackCheckoutStep('payment_start', {
                  timestamp: new Date().toISOString(),
                  paymentProvider: 'PayU'
                });
              }
            });
          } catch (e) {
            analytics.trackError('Checkout', e as Error, {
              context: 'PayU redirect tracking',
              iframeSrc: iframe.src
            });
          }
        });
      }
    }
  }, [isOpen, analytics]);

  // Track scroll depth
  useEffect(() => {
    let maxScroll = 0;
    let lastTrackedDepth = 0;
    
    const trackScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100
      );
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        const currentDepthBracket = Math.floor(maxScroll / 25) * 25;
        
        if (currentDepthBracket > lastTrackedDepth) {
          lastTrackedDepth = currentDepthBracket;
          analytics.track({
            event: 'ScrollDepth',
            category: 'Page Interaction',
            action: 'Scroll',
            label: `${currentDepthBracket}%`,
            value: currentDepthBracket,
            nonInteraction: true
          });
        }
      }
    };

    const throttledTrackScroll = throttle(trackScroll, 500);
    window.addEventListener('scroll', throttledTrackScroll);
    
    return () => window.removeEventListener('scroll', throttledTrackScroll);
  }, [analytics]);

  return null;
};

// Utility function for throttling
function throttle(func: Function, limit: number) {
  let inThrottle: boolean;
  return function(...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}