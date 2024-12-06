import React from 'react';
import { 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Mail,
  Clock,
  RefreshCcw,
  ThumbsUp
} from 'lucide-react';
import { motion } from 'framer-motion';
import { GuaranteeStep } from './GuaranteeStep';
import { GuaranteeTestimonial } from './GuaranteeTestimonial';
import { GuaranteeBadge } from './GuaranteeBadge';
import { useRegistrationModal } from '../../hooks/useRegistrationModal';

const GuaranteeSection = () => {
  const openModal = useRegistrationModal(state => state.open);
  
  const steps = [
    {
      number: "1",
      title: "Dołącz do kursu",
      description: "Wykup dostęp i zacznij swoją transformację z AI już dziś.",
      icon: CheckCircle
    },
    {
      number: "2",
      title: "Testuj przez 30 dni",
      description: "Masz pełne 30 dni na sprawdzenie czy kurs spełnia Twoje oczekiwania.",
      icon: Clock
    },
    {
      number: "3",
      title: "Pełny zwrot jeśli trzeba",
      description: "Jeśli nie będziesz zadowolony/a, po prostu napisz maila, a zwrócimy Ci pieniądze.",
      icon: RefreshCcw
    }
  ];

  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800" />
      
      <div className="container mx-auto px-4 relative">
        {/* Main Guarantee Badge */}
        <GuaranteeBadge />

        {/* Two Columns Layout */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left Column - Steps */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              <ThumbsUp className="w-6 h-6 mr-3 text-blue-400" />
              Jak działa nasza gwarancja?
            </h3>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <GuaranteeStep key={index} {...step} />
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl"
            >
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-medium text-white mb-2">Wystarczy jeden email</div>
                  <div className="text-gray-300">
                    Napisz na <span className="text-blue-400 font-medium">pawel@wyszomirski.biz</span> z prośbą o zwrot, 
                    a oddamy Ci pieniądze bez zbędnych pytań.
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Benefits & Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 mb-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Co gwarantujemy:
              </h3>
              <ul className="space-y-4">
                {[
                  "Praktyczną wiedzę o wykorzystaniu AI",
                  "Konkretne rezultaty w 5 dni",
                  "Wsparcie społeczności",
                  "Natychmiastowy dostęp do materiałów",
                  "Dożywotnie aktualizacje kursu",
                  "Pełny zwrot bez pytań"
                ].map((benefit, idx) => (
                  <motion.li 
                    key={idx} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-green-500 flex-shrink-0" />
                    <span className="text-white">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <GuaranteeTestimonial />
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button 
            onClick={openModal}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/25 group"
          >
            <Shield className="w-5 h-5 mr-2" />
            Dołącz z 30-dniową gwarancją
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <p className="text-sm text-gray-300 mt-4">
            Zero ryzyka - jeśli kurs nie spełni Twoich oczekiwań, zwrócimy Ci pieniądze
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;