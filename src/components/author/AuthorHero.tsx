import React from 'react';
import { Building, Calendar } from 'lucide-react';
import { OptimizedImage } from '../OptimizedImage';

export const AuthorHero = () => (
  <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
    {/* Left column - Photo & intro */}
    <div>
      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
        <OptimizedImage 
          publicId="author_inoc7g"
          alt="Prezentacja na konferencji"
          className="w-full object-cover aspect-[4/3]"
          loading="eager"
          sizes={[320, 640, 768, 1024, 1280]}
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
);