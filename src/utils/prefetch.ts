import { throttle } from './performance';

const CHECKOUT_URL = 'https://www.mailingr.co/c/ai40plus';
let hasPrefetched = false;

const prefetchCheckout = () => {
  if (hasPrefetched) return;
  
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = CHECKOUT_URL;
  document.head.appendChild(link);
  
  hasPrefetched = true;
};

export const initPrefetch = () => {
  // Prefetch after 15 seconds
  setTimeout(prefetchCheckout, 15000);

  // Prefetch on scroll past 10%
  const handleScroll = throttle(() => {
    const scrollPercent = (window.scrollY / document.documentElement.scrollHeight) * 100;
    if (scrollPercent > 10) {
      prefetchCheckout();
    }
  }, 100);

  window.addEventListener('scroll', handleScroll);

  // Prefetch on CTA hover
  const handleHover = throttle((event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.closest('[data-checkout-trigger]')) {
      setTimeout(prefetchCheckout, 200);
    }
  }, 200);

  document.addEventListener('mouseover', handleHover);

  return () => {
    window.removeEventListener('scroll', handleScroll);
    document.removeEventListener('mouseover', handleHover);
  };
};