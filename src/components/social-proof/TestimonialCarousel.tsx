import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TestimonialCard } from './TestimonialCard';
import { motion, AnimatePresence } from 'framer-motion';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
  daysToTransform: number;
};

type TestimonialCarouselProps = {
  testimonials: Testimonial[];
  currentSlide: number;
  totalSlides: number;
  onPrevSlide: () => void;
  onNextSlide: () => void;
  onSlideSelect: (index: number) => void;
};

export const TestimonialCarousel = ({
  testimonials,
  currentSlide,
  totalSlides,
  onPrevSlide,
  onNextSlide,
  onSlideSelect
}: TestimonialCarouselProps) => {
  const slidesToShow = window.innerWidth < 768 ? 1 : 3;
  const visibleTestimonials = testimonials.slice(
    currentSlide * slidesToShow, 
    (currentSlide * slidesToShow) + slidesToShow
  );

  // Wypełnij brakujące miejsca, jeśli nie ma wystarczającej liczby testimoniali
  while (visibleTestimonials.length < slidesToShow) {
    visibleTestimonials.push(testimonials[visibleTestimonials.length % testimonials.length]);
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <motion.div 
          className="flex gap-6"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence mode="wait">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${currentSlide}-${index}`}
                className="w-full md:w-1/3 flex-shrink-0"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={onPrevSlide}
        className="absolute -left-4 top-1/2 -translate-y-1/2 bg-blue-500 p-3 rounded-full hover:bg-blue-600 transition-colors shadow-lg"
        aria-label="Poprzedni slajd"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={onNextSlide}
        className="absolute -right-4 top-1/2 -translate-y-1/2 bg-blue-500 p-3 rounded-full hover:bg-blue-600 transition-colors shadow-lg"
        aria-label="Następny slajd"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Navigation dots */}
      <div className="flex justify-center gap-2 mt-8">
        {[...Array(totalSlides)].map((_, i) => (
          <button
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === currentSlide ? 'w-8 bg-blue-500' : 'w-2 bg-gray-600'
            }`}
            onClick={() => onSlideSelect(i)}
            aria-label={`Przejdź do slajdu ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};