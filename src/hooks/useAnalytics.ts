import { useEffect, useRef } from 'react';
import { create } from 'zustand';

type AnalyticsStore = {
  debugMode: boolean;
  setDebugMode: (enabled: boolean) => void;
};

export const useAnalyticsStore = create<AnalyticsStore>((set) => ({
  debugMode: false,
  setDebugMode: (enabled) => set({ debugMode: enabled }),
}));

type TrackingEvent = {
  event: string;
  category?: string;
  action?: string;
  label?: string;
  value?: number;
  nonInteraction?: boolean;
  [key: string]: any;
};

export const useAnalytics = () => {
  const debugMode = useAnalyticsStore((state) => state.debugMode);
  const sectionTimers = useRef<{ [key: string]: number }>({});
  const formInteractionStarted = useRef<boolean>(false);

  const track = (event: TrackingEvent) => {
    if (debugMode) {
      console.log('Analytics Event:', event);
    }

    // Facebook Pixel tracking
    if (window.fbq) {
      window.fbq('trackCustom', event.event, {
        ...event,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        referrer: document.referrer,
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight
        },
        device: {
          userAgent: navigator.userAgent,
          platform: navigator.platform
        }
      });
    }
  };

  const trackSectionView = (sectionId: string, sectionName: string) => {
    const now = Date.now();
    sectionTimers.current[sectionId] = now;

    track({
      event: 'SectionView',
      category: 'Section Interaction',
      action: 'View',
      label: sectionName,
      sectionId,
      startTime: now
    });
  };

  const trackSectionExit = (sectionId: string, sectionName: string) => {
    const startTime = sectionTimers.current[sectionId];
    if (startTime) {
      const timeSpent = Date.now() - startTime;
      delete sectionTimers.current[sectionId];

      track({
        event: 'SectionExit',
        category: 'Section Interaction',
        action: 'Exit',
        label: sectionName,
        sectionId,
        timeSpent
      });
    }
  };

  const trackTestimonialInteraction = (testimonialId: string, action: 'view' | 'click') => {
    track({
      event: 'TestimonialInteraction',
      category: 'Social Proof',
      action,
      label: testimonialId
    });
  };

  const trackFormInteraction = (
    action: 'start' | 'complete' | 'abandon' | 'error',
    details?: { field?: string; error?: string }
  ) => {
    if (action === 'start' && !formInteractionStarted.current) {
      formInteractionStarted.current = true;
    }

    track({
      event: 'FormInteraction',
      category: 'Form',
      action,
      ...details
    });
  };

  const trackCTAClick = (
    ctaId: string,
    sectionName: string,
    buttonText: string
  ) => {
    track({
      event: 'CTAClick',
      category: 'Conversion',
      action: 'Click',
      label: buttonText,
      ctaId,
      sectionName
    });
  };

  const trackFAQInteraction = (
    questionId: string,
    question: string,
    action: 'open' | 'close'
  ) => {
    track({
      event: 'FAQInteraction',
      category: 'FAQ',
      action,
      label: question,
      questionId
    });
  };

  const trackCheckoutStep = (
    step: 'initiate' | 'form_start' | 'form_complete' | 'payment_start' | 'payment_complete',
    details?: object
  ) => {
    track({
      event: 'CheckoutStep',
      category: 'Checkout',
      action: step,
      ...details
    });

    // Special handling for PayU redirect
    if (step === 'payment_start') {
      track({
        event: 'PayURedirect',
        category: 'Checkout',
        action: 'redirect_to_payu'
      });
    }
  };

  const trackError = (
    category: string,
    error: Error | string,
    context?: object
  ) => {
    track({
      event: 'Error',
      category,
      action: 'error',
      label: typeof error === 'string' ? error : error.message,
      error: typeof error === 'string' ? error : {
        message: error.message,
        stack: error.stack
      },
      ...context
    });
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      Object.keys(sectionTimers.current).forEach((sectionId) => {
        trackSectionExit(sectionId, 'Unknown (Component Unmounted)');
      });
    };
  }, []);

  return {
    track,
    trackSectionView,
    trackSectionExit,
    trackTestimonialInteraction,
    trackFormInteraction,
    trackCTAClick,
    trackFAQInteraction,
    trackCheckoutStep,
    trackError
  };
};