import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { collection, query, where, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { Hotel } from '../types';
import { CITIES, HOTELS } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, User, Loader2, Info, Star, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../components/LanguageProvider';
import BookingModal from '../components/BookingModal';

export const Hotels: React.FC = () => {
  const { cityId } = useParams<{ cityId: string }>();
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const city = CITIES.find(c => c.id === cityId);
  const { t } = useLanguage();

  const handleBooking = (hotel: Hotel) => {
    setSelectedHotel(hotel);
    setIsBookingOpen(true);
  };

  useEffect(() => {
    const fetchHotels = async () => {
      if (!cityId) return;
      setLoading(true);
      try {
        const hotelsRef = collection(db, 'hotels');
        const q = query(hotelsRef, where('cityId', '==', cityId));
        const querySnapshot = await getDocs(q);
        
        let fetchedHotels = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Hotel));

        if (fetchedHotels.length === 0) {
          const toSeed = HOTELS.filter(h => h.cityId === cityId);
          if (toSeed.length > 0) {
            const promises = toSeed.map(({ id, ...hotel }) => addDoc(hotelsRef, { ...hotel, createdAt: serverTimestamp() }));
            await Promise.all(promises);
            const newSnapshot = await getDocs(q);
            fetchedHotels = newSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Hotel));
          }
        }

        // Dynamically align images to use unique room interiors of the respective hotels
        fetchedHotels = fetchedHotels.map(fHotel => {
          const matchingStaticHotel = HOTELS.find(h => h.name === fHotel.name || h.id === fHotel.id);
          if (matchingStaticHotel) {
            return { ...fHotel, image: matchingStaticHotel.image };
          }
          return fHotel;
        });

        setHotels(fetchedHotels);
      } catch (error) {
        handleFirestoreError(error, OperationType.LIST, 'hotels');
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, [cityId]);

  if (!city) return (
    <div className="p-20 text-center">
      <h1 className="text-4xl font-black text-navy mb-8">City Not Found</h1>
      <Link to="/cities" className="btn-primary inline-flex items-center gap-2">
        <ArrowLeft className="w-4 h-4" />
        Back to Cities
      </Link>
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      {/* City Header */}
      <div className="h-[400px] bg-navy relative overflow-hidden flex items-end px-8 pb-12">
        <div className="absolute inset-0 opacity-40">
            <img 
              src={city.image} 
              className="w-full h-full object-cover grayscale"
              alt={city.name}
            />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy transition-all" />
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative w-full max-w-7xl mx-auto"
        >
          <Link to="/cities" className="group inline-flex items-center gap-2 text-white/40 hover:text-white text-xs font-bold uppercase tracking-widest mb-12 transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {t('back_to_cities')}
          </Link>
          <div className="section-label mb-2 text-cyan-accent">{t('hotels_loc_profile')}</div>
          <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter uppercase leading-none">{city.name}</h1>
          <p className="text-white/40 text-sm font-medium mt-4 max-w-md">{city.description}</p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex justify-between items-end mb-8 border-b border-navy/5 pb-8">
            <div>
              <h2 className="text-3xl font-black text-navy leading-none">{t('hotels_curated')}</h2>
              <p className="text-navy/50 text-xs font-bold uppercase tracking-widest mt-2">{hotels.length} {t('hotels_verified_count')}</p>
            </div>

        </div>

        {loading ? (
          <div className="py-32 flex flex-col items-center justify-center">
            <Loader2 className="w-12 h-12 text-cyan-accent animate-spin mb-4" />
            <div className="section-label">{t('hotels_loading')}</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {hotels.length > 0 ? (
                hotels.map((hotel, index) => (
                  <motion.div
                    key={hotel.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="geometric-card group"
                  >
                    <div className="aspect-video bg-navy overflow-hidden relative rounded-sm">
                        <div className="absolute top-3 right-3 cyan-badge z-10">{t('hotels_premium_stay')}</div>
                        <img 
                          src={hotel.image} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100 grayscale-[0.3] group-hover:grayscale-0"
                          alt={hotel.name}
                        />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--cyan)_0%,_transparent_70%)] opacity-20" />
                    </div>

                    <div className="flex flex-col gap-4">
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-2xl font-black text-navy tracking-tight group-hover:text-cyan-accent transition-colors">{hotel.name}</h3>
                          <div className="text-right">
                             <div className="text-xl font-black text-cyan-accent leading-none">$240</div>
                             <div className="text-[9px] text-navy/40 font-bold uppercase italic tracking-tighter">{t('hotels_per_night')}</div>
                          </div>
                        </div>
                        <p className="text-[10px] text-navy/60 flex items-center gap-1 font-bold uppercase tracking-tighter">
                          <MapPin className="w-3 h-3 text-cyan-accent" />
                          {hotel.address}
                        </p>
                      </div>

                      <div className="border-t border-navy/5 pt-4 flex justify-between items-center bg-navy/[0.01] -mx-5 px-5 py-4">
                        <div>
                          <p className="text-[9px] uppercase font-bold text-cyan-accent tracking-widest mb-1">{t('hotels_manager')}</p>
                          <p className="text-xs font-black text-navy flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {hotel.ownerName}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-[9px] uppercase font-bold text-navy/40 tracking-widest mb-1">{t('hotels_contact_reg')}</p>
                          <p className="text-xs font-bold text-navy flex items-center justify-end gap-1">
                            <Phone className="w-3 h-3 text-cyan-accent" />
                            {hotel.ownerPhone}
                          </p>
                        </div>
                      </div>

                      <button 
                        onClick={() => handleBooking(hotel)}
                        className="btn-primary w-full py-4 text-sm tracking-[0.2em]"
                      >
                        {t('hotels_secure')}
                      </button>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-32 text-center border-2 border-dashed border-navy/5 rounded-sm">
                  <div className="w-16 h-16 bg-navy/5 rounded-sm flex items-center justify-center mx-auto mb-6 rotate-45 group-hover:rotate-0 transition-transform">
                    <Info className="w-8 h-8 text-navy/20 -rotate-45" />
                  </div>
                  <h3 className="text-2xl font-black text-navy uppercase tracking-widest mb-2">{t('hotels_empty')}</h3>
                  <p className="text-navy/40 text-xs font-bold uppercase tracking-wider">{t('hotels_expanding')} {city.name}...</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>

      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        hotel={selectedHotel}
      />
    </div>
  );
};
