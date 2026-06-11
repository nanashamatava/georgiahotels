import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import heroImage from '../assets/images/regenerated_image_1778510984244.jpg';
import { useLanguage } from '../components/LanguageProvider';

export const Dashboard: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden bg-white min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          <h1 className="text-6xl md:text-8xl font-black text-navy leading-[0.9] mb-8 tracking-tighter">
            {t('hero_title_1')}<br />
            <span className="text-cyan-accent text-[80px] leading-[72.4px]">{t('hero_title_2')}</span><br />
            {t('hero_title_3')}
          </h1>
          <p className="text-lg text-navy/60 mb-10 max-w-lg leading-relaxed font-medium">
            {t('hero_desc')}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/cities" className="btn-primary flex items-center justify-center gap-3 h-[37px] w-[208.163px] text-sm leading-[18px] px-0 py-0">
              {t('hero_view_cities')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="mt-16 flex items-center gap-8 border-t border-navy/5 pt-8">
            <div className="flex -space-x-3">
              {[1,2,3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-navy/5 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+44}`} alt="User" />
                </div>
              ))}
            </div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-navy/40">
              <span className="text-navy">5,000+</span> {t('hero_members')}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="rounded-sm overflow-hidden shadow-2xl relative aspect-[4/5] bg-navy p-2">
            <img 
              src={heroImage} 
              className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-700"
              alt="Tbilisi"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
          </div>
          
        </motion.div>
      </div>
    </div>
  );
};
