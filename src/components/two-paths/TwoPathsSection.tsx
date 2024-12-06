import React from 'react';
import { 
  Rocket,
  AlertTriangle,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';
import { motion } from 'framer-motion';
import { PathCard } from './PathCard';
import { CountdownTimer } from '../CountdownTimer';
import { StatBadge } from './StatBadge';

const TwoPathsSection = () => {
  const paths = {
    positive: {
      type: 'positive',
      icon: Rocket,
      title: "OPCJA #1: Dołącz do kursu",
      description: "Rozpocznij transformację swojego życia z pomocą AI i sprawdzonej metodologii.",
      outcomes: [
        "Odkryjesz swoje prawdziwe powołanie w 5 dni",
        "Nauczysz się podejmować lepsze decyzje z AI",
        "Dołączysz do społeczności podobnie myślących osób",
        "Otrzymasz wsparcie i sprawdzone narzędzia",
        "Zyskasz jasny plan działania na przyszłość",
        "30 dni gwarancji satysfakcji"
      ],
      buttonText: "Dołącz do kursu za 29 zł",
      buttonVariant: 'primary'
    },
    negative: {
      type: 'negative',
      icon: AlertTriangle,
      title: "OPCJA #2: Pozostań w tym samym miejscu",
      description: "Kontynuuj samodzielne poszukiwania lub odłóż zmianę na później.",
      outcomes: [
        "Dalsze poczucie zagubienia i braku kierunku",
        "Strata czasu na nieskutecznych metodach",
        "Odkładanie marzeń i celów na później",
        "Frustracja z powodu braku postępów",
        "Ryzyko wypalenia i demotywacji",
        "Missed opportunity cost"
      ],
      buttonText: "Zostaję tam gdzie jestem",
      buttonVariant: 'secondary'
    }
  };

  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800" />
      
      <div className="container mx-auto px-4 relative">
        {/* Timer */}
        <div className="mb-16">
          <CountdownTimer variant="value" />
        </div>

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Stoisz na rozdrożu. Wybierz mądrze.
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            Masz przed sobą dwie drogi. Jedna prowadzi do transformacji i odkrycia 
            swojego powołania, druga... to status quo. Wybór należy do Ciebie.
          </p>
        </motion.div>

        {/* Two Paths Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <PathCard {...paths.positive} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <PathCard {...paths.negative} />
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <div className="flex flex-wrap items-center justify-center gap-8">
            <StatBadge
              icon={ThumbsUp}
              text="127 osób już wybrało zmianę"
              variant="success"
            />
            <StatBadge
              icon={ThumbsDown}
              text="0 próśb o zwrot pieniędzy"
              variant="danger"
            />
          </div>
          
          <p className="text-sm text-gray-400">
            * Pamiętaj, że masz 30 dni na przetestowanie kursu. 
            Jeśli nie będziesz zadowolony/a, zwrócimy Ci pieniądze.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TwoPathsSection;