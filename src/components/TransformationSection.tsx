import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Compass, 
  Clock
} from 'lucide-react';
import { TransformationCard } from './TransformationCard';
import { useRegistrationModal } from '../hooks/useRegistrationModal';

const transformations = [
  {
    icon: Brain,
    beforeTitle: "Chaos myślowy",
    beforeDesc: "Ciągłe rozproszenie i trudności w podejmowaniu decyzji sprawiają, że ważne sprawy odkładasz na później, tracąc kontrolę nad swoim życiem.",
    afterTitle: "Krystaliczna jasność",
    afterDesc: "Podejmujesz decyzje szybko i pewnie, mając AI jako swojego osobistego doradcę, który pomoże Ci przeanalizować każdą sytuację."
  },
  {
    icon: Compass,
    beforeTitle: "Brak kierunku",
    beforeDesc: "Czujesz się zagubiony i niepewny swojej drogi, a każdy dzień przynosi więcej pytań niż odpowiedzi o Twoją przyszłość.",
    afterTitle: "Pewny cel",
    afterDesc: "Odkryjesz swoje ikigai - życiowy cel, który połączy Twoją pasję, misję, profesję i powołanie w spójną całość."
  },
  {
    icon: Clock,
    beforeTitle: "Stracony czas",
    beforeDesc: "Godziny przeciekają Ci przez palce na bezproduktywnym scrollowaniu social mediów i przypadkowych aktywnościach.",
    afterTitle: "Niezwykła wydajność",
    afterDesc: "Wykorzystujesz moc AI do automatyzacji rutynowych zadań, zyskując więcej czasu na realizację swoich prawdziwych celów."
  }
];

export const TransformationSection = () => {
  const openModal = useRegistrationModal(state => state.open);

  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Twoja transformacja z&nbsp;AI
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Zobacz, jak zmieni się Twoje życie w ciągu zaledwie 5 dni dzięki 
            wykorzystaniu sztucznej inteligencji w codziennych decyzjach
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {transformations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="h-full"
            >
              <TransformationCard {...item} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Dołącz do grona osób, które już przeszły tę transformację i odkryły 
            pełen potencjał swojego życia z pomocą AI
          </p>
          <motion.button 
            onClick={openModal}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-xl inline-flex items-center gap-3 transition-all duration-300 shadow-lg shadow-blue-500/25"
          >
            <span className="text-lg">Rozpocznij swoją transformację</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};