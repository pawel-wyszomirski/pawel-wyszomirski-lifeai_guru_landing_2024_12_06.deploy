import { useEffect, useRef, useState } from 'react';

export const useInView = (threshold = 0.5) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasBeenViewed, setHasBeenViewed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting && !hasBeenViewed) {
          setHasBeenViewed(true);
          // Track section view
          if (window.fbq) {
            window.fbq('trackCustom', 'SectionView', {
              section: ref.current?.getAttribute('data-section')
            });
          }
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasBeenViewed, threshold]);

  return { ref, isInView, hasBeenViewed };
};