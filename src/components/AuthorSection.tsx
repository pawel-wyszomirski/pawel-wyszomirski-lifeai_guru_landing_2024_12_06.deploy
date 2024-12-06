import React, { useState } from 'react';
import { 
  Award, 
  Users, 
  Globe, 
  BookOpen,
  ArrowRight,
  Calendar,
  Building,
  ChevronRight,
  ChevronLeft,
  LucideIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type AchievementCardProps = {
  icon: LucideIcon;
  value: string;
  title: string;
};

const AchievementCard = ({ icon: Icon, value, title }: AchievementCardProps) => (
  <div className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-xl border border-gray-700/50 hover:bg-gray-800/70 transition-all duration-300">
    <div className="bg-blue-500/10 p-3 rounded-lg inline-flex mb-4 border border-blue-500/20">
      <Icon className="w-6 h-6 text-blue-400" />
    </div>
    <div>
      <div className="text-2xl font-bold mb-1 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
        {value}
      </div>
      <div className="text-gray-400 text-sm">{title}</div>
    </div>
  </div>
);

type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

const timeline: TimelineItem[] = [
  {
    year: "2019",
    title: "Punkt zwrotny",
    description: "Mimo sukcesów zawodowych, czułem pustkę i brak kierunku. Rozpocząłem poszukiwania swojego ikigai."
  },
  {
    year: "2020",
    title: "Odkrycie potencjału AI",
    description: "Rozpocząłem eksperymenty z AI w rozwoju osobistym, co doprowadziło do przełomu w moim życiu."
  },
  {
    year: "2021",
    title: "Pierwsze warsztaty AI",
    description: "Zacząłem dzielić się wiedzą o wykorzystaniu AI w samorozwoju z małymi grupami."
  },
  {
    year: "2022-2023",
    title: "Rozwój metodologii",
    description: "Dopracowanie metody łączącej AI z koncepcją ikigai, testowanie z setkami uczestników."
  },
  {
    year: "2024",
    title: "Stworzenie kursu online",
    description: "Przekształcenie sprawdzonej metodologii w dostępny format online dla szerszego grona odbiorców."
  }
];

const TimelineCard = ({ data, isActive }: { data: TimelineItem; isActive: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl border border-blue-500/20"
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="bg-blue-500/10 px-4 py-2 rounded-xl border border-blue-500/20">
        <span className="text-blue-400 font-semibold">{data.year}</span>
      </div>
      <h4 className="text-2xl font-bold text-white">{data.title}</h4>
    </div>
    <p className="text-gray-300 leading-relaxed text-lg">{data.description}</p>
  </motion.div>
);

const AuthorSection = () => {
  const [currentTimelineIndex, setCurrentTimelineIndex] = useState(0);
  
  const achievements = [
    {
      icon: Users,
      value: "12+",
      title: "Lat doświadczenia w organizacji TEDxKatowice"
    },
    {
      icon: Globe,
      value: "TOP 5",
      title: "Współpraca z University College London"
    },
    {
      icon: Award,
      value: "100+",
      title: "Wystąpień i warsztatów"
    },
    {
      icon: BookOpen,
      value: "1000+",
      title: "Przeanalizowanych case studies AI"
    }
  ];

  const nextTimeline = () => {
    setCurrentTimelineIndex((prev) => (prev + 1) % timeline.length);
  };

  const prevTimeline = () => {
    setCurrentTimelineIndex((prev) => (prev - 1 + timeline.length) % timeline.length);
  };

  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800" />
      
      <div className="container mx-auto px-4 relative">
        {/* Author intro */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left column - Photo & intro */}
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://img.wyszomirski.biz/author.jpg"
                alt="Prezentacja na konferencji"
                className="w-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="text-3xl font-bold mb-2 text-white drop-shadow-lg">
                  Paweł Wyszomirski
                </h2>
                <p className="text-white/90 drop-shadow-lg font-medium">
                  Ekspert AI | Kurator TEDxKatowice | Wykładowca
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Od wypalenia do spełnienia z&nbsp;AI
            </h3>
            
            <p className="text-gray-300">
              W 2019 roku, mimo sukcesów zawodowych i współpracy z prestiżowymi 
              instytucjami, czułem wewnętrzną pustkę. Moje życie wyglądało 
              idealnie na papierze, ale brakowało w nim głębszego sensu.
            </p>

            <p className="text-gray-300">
              Przełom nastąpił, gdy odkryłem potencjał AI w rozwoju osobistym. 
              Połączyłem japońską koncepcję ikigai z możliwościami sztucznej 
              inteligencji, tworząc unikalną metodę odkrywania swojego powołania.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center text-blue-400 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
                <Building className="w-4 h-4 mr-2" />
                <span>University College London</span>
              </div>
              <div className="flex items-center text-blue-400 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
                <Calendar className="w-4 h-4 mr-2" />
                <span>TEDxKatowice</span>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} />
          ))}
        </div>

        {/* Interactive Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Droga do stworzenia kursu
          </h3>
          
          <div className="relative">
            <AnimatePresence mode="wait">
              <TimelineCard 
                key={currentTimelineIndex} 
                data={timeline[currentTimelineIndex]} 
                isActive={true} 
              />
            </AnimatePresence>

            {/* Navigation buttons */}
            <button
              onClick={prevTimeline}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 p-3 rounded-full transition-all duration-300"
              aria-label="Poprzedni etap"
            >
              <ChevronLeft className="w-6 h-6 text-blue-400" />
            </button>
            <button
              onClick={nextTimeline}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 p-3 rounded-full transition-all duration-300"
              aria-label="Następny etap"
            >
              <ChevronRight className="w-6 h-6 text-blue-400" />
            </button>

            {/* Timeline progress */}
            <div className="flex justify-center gap-2 mt-8">
              {timeline.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTimelineIndex(index)}
                  className={`
                    h-2 rounded-full transition-all duration-300
                    ${index === currentTimelineIndex ? 'w-8 bg-blue-500' : 'w-2 bg-gray-600'}
                  `}
                  aria-label={`Przejdź do etapu ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#signup"
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/25 group"
          >
            Odkryj swoje powołanie z AI
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;