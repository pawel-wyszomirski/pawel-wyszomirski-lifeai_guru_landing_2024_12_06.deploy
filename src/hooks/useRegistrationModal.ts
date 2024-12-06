import { create } from 'zustand';

type RegistrationModalStore = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const useRegistrationModal = create<RegistrationModalStore>((set) => ({
  isOpen: false,
  open: () => {
    // Track button click that opens registration
    if (window.fbq) {
      window.fbq('trackCustom', 'OpenRegistration', {
        location: window.location.pathname,
        buttonLocation: document.activeElement?.closest('section')?.id || 'unknown',
        timestamp: new Date().toISOString()
      });
    }
    set({ isOpen: true });
  },
  close: () => {
    if (window.fbq) {
      window.fbq('trackCustom', 'CloseRegistration', {
        timestamp: new Date().toISOString()
      });
    }
    set({ isOpen: false });
  },
}));