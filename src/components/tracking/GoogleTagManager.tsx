import React, { useEffect } from 'react';
import { useCookieConsent } from '../../hooks/useCookieConsent';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const GTM_ID = 'GTM-PMQLFSKP';

export const GoogleTagManager = () => {
  const { analytics } = useCookieConsent();

  useEffect(() => {
    // Only load if analytics cookies are accepted
    if (!analytics) {
      return;
    }

    // Opóźnione ładowanie GTM
    const loadGTM = () => {
      if (process.env.NODE_ENV !== 'production') {
        return;
      }

      const script = document.createElement('script');
      script.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `;
      document.head.appendChild(script);
    };

    // Załaduj GTM po załadowaniu strony
    if (document.readyState === 'complete') {
      loadGTM();
    } else {
      window.addEventListener('load', loadGTM);
      return () => window.removeEventListener('load', loadGTM);
    }
  }, [analytics]);

  if (!analytics || process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
        title="GTM"
      />
    </noscript>
  );
};