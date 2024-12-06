import { useEffect } from 'react';
import { useCookieConsent } from '../../hooks/useCookieConsent';

declare global {
  interface Window {
    sitebehaviourTrackingSecret: string;
  }
}

const SB_SITE_SECRET = '4d82509c-aa81-45dc-a3dc-9723b0804f36';

export const SiteBehaviour = () => {
  const { analytics } = useCookieConsent();

  useEffect(() => {
    // Only load if analytics cookies are accepted
    if (!analytics) {
      return;
    }

    // Load SiteBehaviour tracking script
    const loadSiteBehaviour = () => {
      if (process.env.NODE_ENV !== 'production') {
        return;
      }

      window.sitebehaviourTrackingSecret = SB_SITE_SECRET;
      
      const script = document.createElement('script');
      script.async = true;
      script.id = 'site-behaviour-script-v2';
      script.src = `https://sitebehaviour-cdn.fra1.cdn.digitaloceanspaces.com/index.min.js?sitebehaviour-secret=${SB_SITE_SECRET}`;
      document.head.appendChild(script);
    };

    // Load script after page load
    if (document.readyState === 'complete') {
      loadSiteBehaviour();
    } else {
      window.addEventListener('load', loadSiteBehaviour);
      return () => window.removeEventListener('load', loadSiteBehaviour);
    }
  }, [analytics]);

  return null;
};