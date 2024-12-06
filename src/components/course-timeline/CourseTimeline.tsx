import React, { useState } from 'react';
import { Play, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { DayCard } from './DayCard';
import { ProgressBar } from './ProgressBar';
import { courseData } from './courseData';
import { useRegistrationModal } from '../../hooks/useRegistrationModal';

export const CourseTimeline = () => {
  const [activeDay, setActiveDay] = useState(1);
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            5 dni do odkrycia Twojego powołania
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Poznaj dokładny plan działania, który przeprowadzi Cię od chaosu do celu
            z pomocą sztucznej inteligencji
          </p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <ProgressBar currentDay={activeDay} totalDays={5} />
        </motion.div>

        {/* Timeline cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
          {courseData.map((day, index) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <DayCard
                data={day}
                isActive={day.day === activeDay}
                onClick={() => setActiveDay(day.day)}
              />
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
          <motion.button
            onClick={openModal}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/25"
          >
            <Play className="w-5 h-5 mr-2" />
            <span className="text-lg">Rozpocznij swoją transformację</span>
            <ChevronRight className="w-5 h-5 ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};