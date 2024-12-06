import React, { useState, useEffect } from 'react';
import { Users, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { CountdownTimer } from './CountdownTimer';
import { RecentSignup } from './RecentSignup';
import { useRegistrationModal } from '../hooks/useRegistrationModal';

// Lista polskich imion i miast
const POLISH_NAMES = [
  'Anna', 'Małgorzata', 'Katarzyna', 'Agnieszka', 'Krystyna',
  'Barbara', 'Ewa', 'Elżbieta', 'Zofia', 'Janina',
  'Maria', 'Teresa', 'Jadwiga', 'Danuta', 'Halina',
  'Irena', 'Helena', 'Grażyna', 'Bożena', 'Stanisława',
  'Piotr', 'Krzysztof', 'Andrzej', 'Tomasz', 'Jan',
  'Paweł', 'Michał', 'Marcin', 'Marek', 'Grzegorz',
  'Józef', 'Stanisław', 'Tadeusz', 'Jerzy', 'Zbigniew',
  'Ryszard', 'Dariusz', 'Henryk', 'Adam', 'Wojciech',
  'Robert', 'Mateusz', 'Łukasz', 'Mariusz', 'Rafał',
  'Jacek', 'Maciej', 'Sławomir', 'Sebastian', 'Kamil'
];

const POLISH_CITIES = [
  'Warszawa', 'Kraków', 'Łódź', 'Wrocław', 'Poznań',
  'Gdańsk', 'Szczecin', 'Bydgoszcz', 'Lublin', 'Białystok',
  'Katowice', 'Gdynia', 'Częstochowa', 'Radom', 'Sosnowiec',
  'Toruń', 'Kielce', 'Rzeszów', 'Gliwice', 'Zabrze',
  'Olsztyn', 'Bielsko-Biała', 'Bytom', 'Zielona Góra', 'Rybnik',
  'Ruda Śląska', 'Opole', 'Tychy', 'Gorzów Wielkopolski', 'Elbląg'
];

// Dodajemy animowany banner z liczbą pozostałych miejsc
const AvailableSpotsBanner = () => (
  <div className="absolute top-4 right-4 bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full">
    <motion.span 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-sm font-medium text-red-400"
    >
      Zostało tylko 13 miejsc!
    </motion.span>
  </div>
);

export const HeroSection = () => {
  const [recentSignup, setRecentSignup] = useState({ name: 'Anna', city: 'Warszawa' });
  const { open: openModal } = useRegistrationModal();

  useEffect(() => {
    const addNewSignup = () => {
      const randomName = POLISH_NAMES[Math.floor(Math.random() * POLISH_NAMES.length)];
      const randomCity = POLISH_CITIES[Math.floor(Math.random() * POLISH_CITIES.length)];
      setRecentSignup({ name: randomName, city: randomCity });
    };

    const signupInterval = setInterval(addNewSignup, 8000);
    return () => clearInterval(signupInterval);
  }, []);

  return (
    <section aria-labelledby="hero-heading" className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 text-white relative overflow-hidden">
      <h1 id="hero-heading" className="sr-only">Od chaosu do celu w 5 dni z AI - Kurs online</h1>
      
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dqsvgngfx/image/upload/v1733482120/photo-1451187580459-43490279c0fa_mom9bl.jpg')] opacity-10 bg-cover bg-center" 
           role="presentation" 
           aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/95" 
           role="presentation" 
           aria-hidden="true" />

      <div className="container mx-auto px-4 py-12 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center gap-12">
            {/* Dodajemy banner z pozostałymi miejscami */}
            <AvailableSpotsBanner />

            {/* Social proof */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap justify-center gap-6 text-sm"
            >
              <div className="flex items-center bg-gray-800/50 backdrop-blur-lg px-4 py-2 rounded-full border border-gray-700/50 min-h-[48px]">
                <Users className="w-4 h-4 mr-2 text-blue-400" aria-hidden="true" />
                <span>127 uczestników</span>
              </div>
              <div className="flex items-center bg-gray-800/50 backdrop-blur-lg px-4 py-2 rounded-full border border-gray-700/50 min-h-[48px]">
                <Star className="w-4 h-4 mr-2 text-yellow-400" aria-hidden="true" />
                <span>4.8/5 (94% poleca)</span>
              </div>
            </motion.div>

            {/* Timer */}
            <CountdownTimer variant="hero" />

            {/* Main heading */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Od chaosu do celu w 5 dni z&nbsp;AI
              </h2>
              <p className="text-xl text-gray-300">
                Odkryj swoje powołanie i podejmuj lepsze decyzje z pomocą sztucznej inteligencji
              </p>
            </motion.div>

            {/* Price and CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex items-baseline justify-center gap-3">
                <span className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  29 zł
                </span>
                <span className="text-gray-400 line-through">215 zł</span>
                <span className="bg-red-500/20 text-red-400 text-sm px-3 py-1 rounded-full border border-red-500/20">
                  -86%
                </span>
              </div>

              <motion.button 
                onClick={openModal}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="min-h-[48px] min-w-[48px] bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-blue-500/25 group relative overflow-hidden"
                aria-label="Zabezpiecz miejsce w promocji"
              >
                <CheckCircle className="w-5 h-5" aria-hidden="true" />
                <span>Zabezpiecz miejsce w promocji</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </motion.button>

              <p className="text-sm text-gray-400">
                30 dni gwarancji satysfakcji lub zwrot pieniędzy
              </p>
            </motion.div>

            {/* Trust badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap justify-center gap-6 text-sm text-gray-300"
            >
              {['30 dni gwarancji', 'Dostęp na zawsze', 'Wsparcie społeczności'].map((text) => (
                <div key={text} className="flex items-center min-h-[48px]">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" aria-hidden="true" />
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>

            {/* Recent signup and progress bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full max-w-md space-y-8"
            >
              <RecentSignup {...recentSignup} index={0} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};