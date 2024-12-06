import React from 'react';
import { 
  ArrowRight, 
  Shield, 
  Clock, 
  MessageCircle,
  Mail,
  CreditCard,
  Heart,
  Linkedin,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';
import { CountdownTimer } from '../CountdownTimer';
import { PaymentMethods } from './PaymentMethods';
import { SecurePaymentBadge } from './SecurePaymentBadge';
import { QuickContact } from './QuickContact';
import { CompanyInfo } from './CompanyInfo';
import { useRegistrationModal } from '../../hooks/useRegistrationModal';

const TrustBadge = ({ icon: Icon, text }: { icon: any, text: string }) => (
  <div className="flex-1 flex items-center justify-center bg-gray-800/50 backdrop-blur-lg px-6 py-3 rounded-xl border border-gray-700/50">
    <Icon className="w-5 h-5 mr-2 text-green-400" />
    <span className="text-gray-300 whitespace-nowrap">{text}</span>
  </div>
);

const FooterSection = () => {
  const openModal = useRegistrationModal(state => state.open);

  return (
    <footer className="relative overflow-hidden bg-gray-900 text-white pt-32 pb-8">
      <div className="container mx-auto px-4">
        {/* Final CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="mb-12">
            <CountdownTimer variant="value" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Ostatnia szansa na dołączenie w promocyjnej cenie
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            Dołącz do 127 osób, które już zmieniły swoje życie z pomocą AI
          </p>

          {/* Price Display */}
          <div className="mb-12">
            <div className="text-gray-400 line-through text-lg">
              Regularna cena: 215 zł
            </div>
            <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent flex items-center justify-center mt-2">
              29 zł
              <span className="ml-3 text-sm bg-red-500/20 text-red-400 px-3 py-1 rounded-full border border-red-500/20">
                -86%
              </span>
            </div>
          </div>

          {/* Main CTA Button */}
          <motion.button 
            onClick={openModal}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all inline-flex items-center mb-12 shadow-lg shadow-green-500/25 group"
          >
            <Heart className="w-5 h-5 mr-2" />
            Dołączam do kursu za 29 zł
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          {/* Trust Badges */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <TrustBadge icon={Shield} text="30 dni gwarancji" />
            <TrustBadge icon={Clock} text="Dostęp od razu" />
            <TrustBadge icon={CreditCard} text="Bezpieczna płatność" />
          </div>

          {/* Payment Methods & Security */}
          <div className="space-y-6">
            <PaymentMethods />
            <SecurePaymentBadge />
          </div>
        </motion.div>

        {/* Footer Links & Info */}
        <div className="border-t border-gray-800 pt-12">
          <div className="mb-12">
            <QuickContact />
          </div>

          {/* Bottom Links */}
          <div className="grid md:grid-cols-3 items-center gap-8 text-sm text-gray-400 border-t border-gray-800 pt-8">
            <CompanyInfo />
            
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="https://docs.google.com/document/d/e/2PACX-1vQwRoSXuC_mv-zqfh2YoU6136dUFlGFppNiMPUU5I8gmrRDfaFXmND9nFK24UYCNgBP85wz_zrdPQtD/pub" 
                className="hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Regulamin
              </a>
              <a 
                href="https://docs.google.com/document/d/e/2PACX-1vRr9ZEV6YU4uEsEYCFDj4QaDuJUCkHYc9k410SdWtTrtIjcl9THjzQ7mQwVjty7HeSVxM420XHkGMwQ/pub" 
                className="hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Polityka prywatności
              </a>
            </div>

            <div className="flex items-center justify-end text-gray-400">
              <Sparkles className="w-4 h-4 mr-2 text-blue-400" />
              Stworzono dla szczęścia z Claude i Bolt
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;