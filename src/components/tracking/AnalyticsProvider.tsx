import React, { createContext, useContext, useEffect } from 'react';
import { useAnalytics } from '../../hooks/useAnalytics';

const AnalyticsContext = createContext<ReturnType<typeof useAnalytics> | null>(null);

export const useAnalyticsContext = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalyticsContext must be used within an AnalyticsProvider');
  }
  return context;
};

type Props = {
  children: React.ReactNode;
};

export const AnalyticsProvider: React.FC<Props> = ({ children }) => {
  const analytics = useAnalytics();

  // Setup global error tracking
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      analytics.trackError('JavaScript', event.error, {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno
      });
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      analytics.trackError('Promise', event.reason, {
        type: 'unhandled_rejection'
      });
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [analytics]);

  return (
    <AnalyticsContext.Provider value={analytics}>
      {children}
    </AnalyticsContext.Provider>
  );
};