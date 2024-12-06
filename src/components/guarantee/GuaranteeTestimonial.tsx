import React from 'react';
import { Heart } from 'lucide-react';

export const GuaranteeTestimonial = () => (
  <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 relative border border-gray-700/50">
    <div className="absolute -top-4 left-6">
      <Heart className="w-8 h-8 text-red-500 fill-current" />
    </div>
    <blockquote className="text-white italic mb-6 leading-relaxed">
      "Wahałem się z zakupem, ale gwarancja zwrotu przekonała mnie do spróbowania. 
      Kurs okazał się świetny, ale sam fakt, że Paweł daje taką pewność siebie 
      w postaci 30-dniowej gwarancji, pokazuje jak bardzo wierzy w wartość tego kursu."
    </blockquote>
    <div className="flex items-center">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 mr-3 flex items-center justify-center text-white font-bold">
        MK
      </div>
      <div>
        <div className="font-medium text-white">Marek Kowalski</div>
        <div className="text-sm text-gray-300">Senior Developer</div>
      </div>
    </div>
  </div>
);