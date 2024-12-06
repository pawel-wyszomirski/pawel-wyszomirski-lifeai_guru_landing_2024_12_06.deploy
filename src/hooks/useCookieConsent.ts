import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type ConsentState = {
  marketing: boolean;
  analytics: boolean;
  necessary: boolean;
  preferences: boolean;
  hasInteracted: boolean;
  setConsent: (type: keyof Omit<ConsentState, 'setConsent' | 'hasInteracted' | 'setHasInteracted' | 'acceptAll' | 'rejectAll'>, value: boolean) => void;
  acceptAll: () => void;
  rejectAll: () => void;
  setHasInteracted: (value: boolean) => void;
};

const initialState = {
  marketing: false,
  analytics: false,
  necessary: true,
  preferences: false,
  hasInteracted: false
};

export const useCookieConsent = create<ConsentState>()(
  persist(
    (set) => ({
      ...initialState,
      setConsent: (type, value) => set((state) => ({ ...state, [type]: value })),
      acceptAll: () => set({ 
        marketing: true, 
        analytics: true, 
        necessary: true, 
        preferences: true,
        hasInteracted: true 
      }),
      rejectAll: () => set({ 
        marketing: false, 
        analytics: false, 
        necessary: true, 
        preferences: false,
        hasInteracted: true 
      }),
      setHasInteracted: (value) => set({ hasInteracted: value }),
    }),
    {
      name: 'cookie-consent',
      storage: createJSONStorage(() => localStorage),
      version: 1,
      migrate: (persistedState: any, version: number) => {
        if (version === 0) {
          return {
            ...initialState,
            ...persistedState,
          };
        }
        return persistedState;
      },
    }
  )
);