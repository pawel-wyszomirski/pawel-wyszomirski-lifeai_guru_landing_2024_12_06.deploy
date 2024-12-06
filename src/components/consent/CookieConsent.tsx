import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie, ChevronDown, ChevronUp, Shield } from 'lucide-react';
import { useCookieConsent } from '../../hooks/useCookieConsent';

const ConsentToggle = ({ 
  label, 
  description, 
  checked, 
  onChange, 
  disabled = false 
}: {
  label: string;
  description: string;
  checked: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
}) => (
  <div className="flex items-start space-x-3 p-4 rounded-lg bg-gray-800/50">
    <div className="flex-1">
      <label className="flex items-center cursor-pointer">
        <div className="ml-3">
          <span className="text-sm font-medium text-white">{label}</span>
          <p className="text-sm text-gray-400 mt-1">{description}</p>
        </div>
      </label>
    </div>
    <div className="flex items-center">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
        />
        <div className={`w-11 h-6 rounded-full peer ${
          disabled 
            ? 'bg-blue-600 opacity-50' 
            : 'bg-gray-700 peer-checked:bg-blue-600'
        } peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full`}></div>
      </label>
    </div>
  </div>
);

export const CookieConsent = () => {
  const { 
    marketing, 
    analytics, 
    necessary, 
    preferences,
    hasInteracted,
    setConsent, 
    acceptAll, 
    rejectAll,
    setHasInteracted
  } = useCookieConsent();

  const [showDetails, setShowDetails] = useState(false);

  if (hasInteracted) return null;

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      exit={{ y: 100 }}
      className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gray-900 border-t border-gray-800"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="relative">
          {/* Close button */}
          <button
            onClick={() => setHasInteracted(true)}
            className="absolute -top-2 -right-2 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>

          {/* Main content */}
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-blue-500/10 rounded-xl">
              <Cookie className="w-6 h-6 text-blue-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2 text-white">Szanujemy Twoją prywatność</h3>
              <p className="text-gray-400 text-sm mb-4">
                Używamy plików cookie i podobnych technologii, aby poprawić Twoje doświadczenia na naszej stronie. 
                Niektóre są niezbędne do działania strony, inne pomagają nam zrozumieć, jak z niej korzystasz.
              </p>

              {/* Toggles section */}
              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="space-y-3 mb-4"
                  >
                    <ConsentToggle
                      label="Niezbędne"
                      description="Wymagane do działania strony. Nie można ich wyłączyć."
                      checked={necessary}
                      onChange={() => {}}
                      disabled={true}
                    />
                    <ConsentToggle
                      label="Analityczne"
                      description="Pomagają nam zrozumieć, jak użytkownicy korzystają z naszej strony."
                      checked={analytics}
                      onChange={(value) => setConsent('analytics', value)}
                    />
                    <ConsentToggle
                      label="Marketingowe"
                      description="Używane do personalizacji reklam i mierzenia ich skuteczności."
                      checked={marketing}
                      onChange={(value) => setConsent('marketing', value)}
                    />
                    <ConsentToggle
                      label="Preferencje"
                      description="Zapamiętują Twoje ustawienia i personalizują wyświetlanie treści."
                      checked={preferences}
                      onChange={(value) => setConsent('preferences', value)}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {showDetails ? (
                    <>
                      <ChevronUp className="w-4 h-4 mr-1" />
                      Ukryj szczegóły
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4 mr-1" />
                      Pokaż szczegóły
                    </>
                  )}
                </button>
                <div className="flex-1 flex justify-end gap-3">
                  <button
                    onClick={rejectAll}
                    className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    Odrzuć wszystkie
                  </button>
                  <button
                    onClick={acceptAll}
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center"
                  >
                    <Shield className="w-4 h-4 mr-2" />
                    Akceptuj wszystkie
                  </button>
                </div>
              </div>

              {/* Privacy links */}
              <div className="mt-4 text-sm text-gray-400">
                Więcej informacji znajdziesz w naszej{' '}
                <a 
                  href="https://docs.google.com/document/d/e/2PACX-1vRr9ZEV6YU4uEsEYCFDj4QaDuJUCkHYc9k410SdWtTrtIjcl9THjzQ7mQwVjty7HeSVxM420XHkGMwQ/pub"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Polityce Prywatności
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};