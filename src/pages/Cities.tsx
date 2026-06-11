import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CITIES } from '../constants';
import { ArrowRight, MapPin } from 'lucide-react';
import { useLanguage } from '../components/LanguageProvider';

export const Cities: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 bg-white min-h-screen">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="section-label mb-2 uppercase tracking-widest">{t('cities_label')}</div>
          <h1 className="text-6xl font-black text-navy leading-none tracking-tighter">{t('cities_title')}</h1>
          <p className="text-navy/50 text-sm font-medium mt-4">{t('cities_desc')}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {CITIES.map((city, index) => (
          <motion.div
            key={city.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link 
              to={`/hotels/${city.id}`}
              className="group bg-white border border-navy/10 p-5 flex flex-col gap-6 hover:shadow-2xl hover:border-cyan-accent/50 transition-all rounded-sm relative"
            >
              <div className="aspect-video bg-navy overflow-hidden relative rounded-sm">
                <img 
                  src={city.image} 
                  alt={city.name}
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-[linear-gradient(45deg,_var(--cyan)_0%,_transparent_100%)] opacity-20 group-hover:opacity-0 transition-opacity" />
                <div className="absolute top-4 right-4 bg-cyan-accent text-navy px-2 py-1 text-[10px] font-bold uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
                  {t('cities_selection')}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-cyan-accent mb-1 font-bold uppercase tracking-[0.2em] text-[10px]">
                    <MapPin className="w-3 h-3" />
                    Caucasus / GE
                  </div>
                  <h2 className="text-3xl font-black text-navy tracking-tight mb-2">{city.name}</h2>
                  <p className="text-navy/40 text-[10px] font-medium leading-relaxed uppercase tracking-wider max-w-[200px]">
                    {city.description}
                  </p>
                </div>
                <div className="w-12 h-12 border border-navy/10 rounded-sm flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-white transition-all transform group-hover:translate-x-1 shrink-0">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>

              {/* Decorative Geometric Element */}
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-cyan-accent/5 -z-10 group-hover:rotate-45 transition-transform" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
