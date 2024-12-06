import React, { useState } from 'react';
import { 
  Award, 
  Users, 
  Globe, 
  BookOpen,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { AchievementCard } from './AchievementCard';
import { TimelineCard } from './TimelineCard';
import { timeline } from './timelineData';
import { AuthorHero } from './AuthorHero';
import { useRegistrationModal } from '../../hooks/useRegistrationModal';

const AuthorSection = () => {
  const [currentTimelineIndex, setCurrentTimelineIndex] = useState(0);
  const openModal = useRegistrationModal(state => state.open);
  
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
        <AuthorHero />

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
          <button
            onClick={openModal}
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/25 group"
          >
            Odkryj swoje powołanie z AI
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;