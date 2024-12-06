import { useEffect } from 'react';

export const TimeTracking = () => {
  useEffect(() => {
    let startTime = Date.now();
    let timeoutId: NodeJS.Timeout;

    const trackTime = () => {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      
      // Track every 30 seconds
      if (timeSpent % 30 === 0) {
        if (window.fbq) {
          window.fbq('trackCustom', 'TimeOnPage', { seconds: timeSpent });
        }
      }

      timeoutId = setTimeout(trackTime, 1000);
    };

    trackTime();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return null;
};