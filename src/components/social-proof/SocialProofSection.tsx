import React, { useState, useEffect } from 'react';
import { Users, ThumbsUp, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { StatCard } from './StatCard';
import { TestimonialCarousel } from './TestimonialCarousel';
import { useRegistrationModal } from '../../hooks/useRegistrationModal';

const testimonials = [
  {
    id: 1,
    name: "Tomasz Jaworski",
    role: "Były dyrektor sprzedaży",
    image: "/images/persona1.jpg",
    quote: "Mimo 6-cyfrowej pensji czułem pustkę. Ten kurs pomógł mi wreszcie znaleźć balans między karierą a życiem osobistym. Po 5 dniach miałem jasny plan działania.",
    rating: 5,
    daysToTransform: 5
  },
  {
    id: 2,
    name: "Karolina Bala",
    role: "Szefowa szkoły kreatywności",
    image: "/images/persona2.jpg",
    quote: "Skakałam od warsztatu do warsztatu, wydając tysiące na rozwój osobisty bez efektu. Ten kurs jako pierwszy dał mi konkretne narzędzia do odkrycia swojej drogi.",
    rating: 5,
    daysToTransform: 4
  },
  {
    id: 3,
    name: "Michał Kita",
    role: "Twórca startupu",
    image: "/images/persona3.jpg",
    quote: "Jako programista szukałem sposobu na wykorzystanie AI do czegoś więcej niż kolejna aplikacja. Po kursie wykorzystuję technologię do realnej zmiany społecznej.",
    rating: 5,
    daysToTransform: 5
  },
  {
    id: 4,
    name: "Marek Kowalski",
    role: "Senior Developer",
    image: "/images/persona4.jpg",
    quote: "Po 12 latach w IT czułem się wypalony. Dzięki kursowi odkryłem, jak wykorzystać AI nie tylko w pracy, ale też do osobistego rozwoju. Teraz znów czuję pasję do tego, co robię!",
    rating: 5,
    daysToTransform: 4
  },
  {
    id: 5,
    name: "Anna Nowak",
    role: "Manager ds. Marketingu",
    image: "/images/persona5.jpg",
    quote: "Szukałam swojej drogi przez lata. Ten kurs pomógł mi połączyć kropki i zrozumieć moje prawdziwe powołanie. AI okazało się świetnym narzędziem do samopoznania.",
    rating: 5,
    daysToTransform: 5
  },
  {
    id: 6,
    name: "Piotr Wiśniewski",
    role: "Przedsiębiorca",
    image: "/images/persona6.jpg",
    quote: "Skeptycznie podchodziłem do AI, ale ten kurs pokazał mi praktyczne zastosowania. W 5 dni uporządkowałem swoje priorytety i wyznaczyłem jasny kierunek rozwoju.",
    rating: 5,
    daysToTransform: 3
  },
  {
    id: 7,
    name: "Magdalena Jabłońska",
    role: "HR Specialist",
    image: "/images/persona7.jpg",
    quote: "Polecam każdemu, kto czuje się zagubiony zawodowo. Kurs dał mi konkretne narzędzia do podejmowania lepszych decyzji. Żałuję, że nie poznałam tego wcześniej!",
    rating: 5,
    daysToTransform: 5
  }
];

export const SocialProofSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const openModal = useRegistrationModal(state => state.open);
  const slidesToShow = window.innerWidth < 768 ? 1 : 3;
  const totalSlides = Math.ceil(testimonials.length / slidesToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const newSlidesToShow = window.innerWidth < 768 ? 1 : 3;
      const newTotalSlides = Math.ceil(testimonials.length / newSlidesToShow);
      if (currentSlide >= newTotalSlides) {
        setCurrentSlide(newTotalSlides - 1);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentSlide]);

  return (
    <section className="relative overflow-hidden py-32 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
        >
          <StatCard 
            icon={Users} 
            value="127" 
            label="Zadowolonych uczestników" 
          />
          <StatCard 
            icon={ThumbsUp} 
            value="94%" 
            label="Poleca znajomym" 
          />
          <StatCard 
            icon={Award} 
            value="4.8/5" 
            label="Średnia ocena kursu" 
          />
        </motion.div>

        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Historie transformacji
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Dołącz do grona osób, które już odkryły swoje powołanie
            i zaczęły żyć pełnią życia dzięki AI
          </p>
        </motion.div>

        {/* Testimonials carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <TestimonialCarousel
            testimonials={testimonials}
            currentSlide={currentSlide}
            totalSlides={totalSlides}
            onPrevSlide={prevSlide}
            onNextSlide={nextSlide}
            onSlideSelect={setCurrentSlide}
          />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button 
            onClick={openModal}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-xl inline-flex items-center gap-3 transition-all duration-300 shadow-lg shadow-blue-500/25"
          >
            <span className="text-lg">Dołącz do zadowolonych uczestników</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};