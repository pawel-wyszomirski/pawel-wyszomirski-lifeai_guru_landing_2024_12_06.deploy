import React from 'react';
import { 
  Users, 
  Bot, 
  BookOpen, 
  CheckCircle, 
  MessageCircle,
  ArrowRight,
  Zap,
  Crown
} from 'lucide-react';
import { useRegistrationModal } from '../hooks/useRegistrationModal';
import { OptimizedImage } from './OptimizedImage';

const bonuses = [
  {
    id: 1,
    title: "Grupa Discord",
    icon: Users,
    value: "99 zł",
    description: "Dołącz do grupy uczestników, gdzie otrzymasz wsparcie.",
    features: [
      "Codzienna motywacja i wsparcie",
      "Pytania i odpowiedzi na bieżąco",
      "Networking z uczestnikami",
      "Cotygodniowe sesje Q&A"
    ],
    publicId: "bonus-discord_shkfxp",
    color: "blue",
    tag: "DOŻYWOTNI DOSTĘP"
  },
  {
    id: 2,
    title: "Asystent AI",
    icon: Bot,
    value: "99 zł",
    description: "Twój osobisty asystent AI zawierający całą wiedzę z kursu",
    features: [
      "Natychmiastowe odpowiedzi 24/7",
      "Dostęp do całej wiedzy z kursu",
      "Spersonalizowane porady",
      "Pomoc w ćwiczeniach"
    ],
    publicId: "bonus-ai-assistant_jhtovl",
    color: "purple",
    tag: "EKSKLUZYWNY DOSTĘP"
  },
  {
    id: 3,
    title: "Poradnik PDF",
    icon: BookOpen,
    value: "17 zł",
    description: "Kompletny przewodnik 'Jak rozpocząć pracę z AI?' w formacie PDF",
    features: [
      "Krok po kroku konfiguracja AI",
      "Najlepsze praktyki i wskazówki",
      "Gotowe prompty do użycia",
      "Checklisty i szablony"
    ],
    publicId: "bonus-pdf-guide_jsamh0",
    color: "green",
    tag: "NATYCHMIASTOWY DOSTĘP"
  }
];

const BonusCard = ({ bonus }) => {
  const IconComponent = bonus.icon;
  const colorVariants = {
    blue: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    purple: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    green: "bg-green-500/10 text-green-500 border-green-500/20"
  };

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 transform transition-all duration-300 hover:scale-[1.02] hover:border-gray-600">
      {/* Bonus Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-lg ${colorVariants[bonus.color]}`}>
            <IconComponent className="w-6 h-6" />
          </div>
          <div className="text-right">
            <div className="text-gray-400 line-through text-sm">
              Wartość: {bonus.value}
            </div>
            <div className="text-green-400 font-bold">
              GRATIS
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2">{bonus.title}</h3>
        <p className="text-gray-400 text-sm mb-4">
          {bonus.description}
        </p>
      </div>

      {/* Preview Image */}
      <div className="relative">
        <OptimizedImage 
          publicId={bonus.publicId}
          alt={bonus.title}
          className="w-full h-48 object-cover"
          sizes={[320, 640, 768]}
          loading="lazy"
        />
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${colorVariants[bonus.color]}`}>
          {bonus.tag}
        </div>
      </div>

      {/* Features List */}
      <div className="p-6 pt-4">
        <h4 className="font-semibold mb-3 flex items-center">
          <Crown className="w-4 h-4 mr-2 text-yellow-500" />
          Co otrzymujesz:
        </h4>
        <ul className="space-y-2">
          {bonus.features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-sm">
              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const BonusSection = () => {
  const openModal = useRegistrationModal(state => state.open);

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            BONUSY SPECJALNE
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Dołączając DZISIAJ otrzymasz dodatkowo:
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Trzy ekskluzywne bonusy, które przyspieszą Twoją transformację
            i zapewnią dodatkowe wsparcie
          </p>
        </div>

        {/* Bonus Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {bonuses.map(bonus => (
            <BonusCard key={bonus.id} bonus={bonus} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <button 
            onClick={openModal}
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all group"
          >
            <Zap className="w-5 h-5 mr-2" />
            Odbierz wszystkie bonusy
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-sm text-gray-400 mt-4">
            * Bonusy dostępne od razu po dołączeniu do kursu
          </p>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;