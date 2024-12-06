import React from 'react';
import { 
  CheckCircle, 
  Clock, 
  Zap,
  ArrowRight,
  Shield,
  AlertCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import { CountdownTimer } from './CountdownTimer';
import { useRegistrationModal } from '../hooks/useRegistrationModal';

const ValueItem = ({ title, price, features = [], isHighlighted = false }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ scale: isHighlighted ? 1.02 : 1 }}
    className={`rounded-2xl p-8 h-full transform transition-all duration-300 ${
      isHighlighted 
        ? 'bg-gradient-to-br from-blue-600/90 to-purple-700/90 border-2 border-blue-400/50 backdrop-blur-lg' 
        : 'bg-gray-800/50 border border-gray-700/50 backdrop-blur-lg'
    }`}
  >
    <div className={`text-lg font-bold mb-2 ${isHighlighted ? 'text-blue-200' : 'text-white'}`}>
      {title}
    </div>
    <div className="flex items-baseline mb-6">
      <span className={`text-4xl font-bold ${isHighlighted ? 'text-white' : 'text-gray-200'}`}>
        {price}
      </span>
      <span className={`text-xl ml-2 ${isHighlighted ? 'text-blue-200' : 'text-gray-400'}`}>
        PLN
      </span>
    </div>
    <ul className="space-y-4">
      {features.map((feature, idx) => (
        <motion.li 
          key={idx} 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="flex items-start"
        >
          <CheckCircle className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
            isHighlighted ? 'text-blue-300' : 'text-green-500'
          }`} />
          <span className={isHighlighted ? 'text-gray-100' : 'text-gray-300'}>
            {feature}
          </span>
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

const SavingsCalculator = ({ regularPrice, promoPrice }) => {
  const savings = regularPrice - promoPrice;
  const percentage = Math.round((savings / regularPrice) * 100);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-green-900/20 to-blue-900/20 rounded-2xl p-8 text-center space-y-6 backdrop-blur-lg border border-green-500/20"
    >
      <h3 className="text-2xl font-bold text-green-400 flex items-center justify-center">
        <Zap className="w-6 h-6 mr-2" />
        Twoja dzisiejsza oszczędność
      </h3>
      
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-gray-800/50 rounded-xl p-4">
          <div className="text-gray-400 text-sm mb-1">Regularna cena</div>
          <div className="text-2xl font-bold text-gray-300">{regularPrice} zł</div>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-4">
          <div className="text-gray-400 text-sm mb-1">Oszczędzasz</div>
          <div className="text-2xl font-bold text-green-400">{savings} zł</div>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-4">
          <div className="text-gray-400 text-sm mb-1">Dzisiejsza cena</div>
          <div className="text-2xl font-bold text-blue-400">{promoPrice} zł</div>
        </div>
      </div>

      <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
        Oszczędzasz {percentage}%
      </div>
    </motion.div>
  );
};

const ValueSummarySection = () => {
  const openModal = useRegistrationModal(state => state.open);

  const regularFeatures = [
    "5-dniowy kurs video",
    "Ćwiczenia i materiały PDF",
    "Dostęp na zawsze",
    "Aktualizacje kursu"
  ];

  const promoFeatures = [
    "5-dniowy kurs video",
    "Ćwiczenia i materiały PDF",
    "Dostęp na zawsze",
    "Aktualizacje kursu",
    "Grupa Discord (wartość 99 zł)",
    "Asystent AI (wartość 99 zł)",
    "Poradnik PDF (wartość 17 zł)",
    "30 dni gwarancji satysfakcji"
  ];

  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800" />
      
      <div className="container mx-auto px-4 relative">
        {/* Timer */}
        <div className="mb-16">
          <CountdownTimer variant="value" />
        </div>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Podsumowanie wartości
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Zobacz, ile zyskujesz dołączając do kursu jeszcze dziś
          </p>
        </motion.div>

        {/* Value Comparison */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <ValueItem 
            title="Regularna cena" 
            price="215" 
            features={regularFeatures} 
          />
          <ValueItem 
            title="Promocja (-86%)" 
            price="29" 
            features={promoFeatures} 
            isHighlighted={true} 
          />
        </div>

        {/* Savings Calculator */}
        <div className="max-w-4xl mx-auto mb-16">
          <SavingsCalculator regularPrice={215} promoPrice={29} />
        </div>

        {/* Security Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center bg-gray-800/50 backdrop-blur-lg px-6 py-3 rounded-xl border border-gray-700/50">
              <Shield className="w-5 h-5 mr-2 text-green-400" />
              <span className="text-gray-300">Bezpieczna płatność</span>
            </div>
            <div className="flex items-center bg-gray-800/50 backdrop-blur-lg px-6 py-3 rounded-xl border border-gray-700/50">
              <Clock className="w-5 h-5 mr-2 text-green-400" />
              <span className="text-gray-300">Dostęp natychmiast</span>
            </div>
            <div className="flex items-center bg-gray-800/50 backdrop-blur-lg px-6 py-3 rounded-xl border border-gray-700/50">
              <AlertCircle className="w-5 h-5 mr-2 text-green-400" />
              <span className="text-gray-300">30 dni gwarancji</span>
            </div>
          </div>

          {/* CTA */}
          <motion.button 
            onClick={openModal}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-green-500/25 group"
          >
            <Zap className="w-5 h-5 mr-2" />
            Dołącz do kursu za 29 zł
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <p className="text-sm text-gray-400">
            * Oferta ograniczona czasowo. Cena wróci do 215 zł po zakończeniu promocji.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueSummarySection;