import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnalyticsContext } from './AnalyticsProvider';

type Props = {
  sectionId: string;
  sectionName: string;
  children: React.ReactNode;
};

export const SectionTracker: React.FC<Props> = ({
  sectionId,
  sectionName,
  children
}) => {
  const analytics = useAnalyticsContext();
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false
  });
  const hasTrackedView = useRef(false);

  useEffect(() => {
    if (inView && !hasTrackedView.current) {
      analytics.trackSectionView(sectionId, sectionName);
      hasTrackedView.current = true;
    } else if (!inView && hasTrackedView.current) {
      analytics.trackSectionExit(sectionId, sectionName);
      hasTrackedView.current = false;
    }
  }, [inView, sectionId, sectionName, analytics]);

  return (
    <div ref={ref}>
      {children}
    </div>
  );
};