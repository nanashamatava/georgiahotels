import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CreditCard, User, Phone, Home, CheckCircle2, ChevronRight, Loader2 } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { Hotel } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  hotel: Hotel | null;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, hotel }) => {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    roomType: 'standard',
    roomCount: 1,
    guestName: '',
    phone: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!hotel) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const resetAndClose = () => {
    setStep(1);
    setIsSuccess(false);
    setFormData({
      roomType: 'standard',
      roomCount: 1,
      guestName: '',
      phone: '',
      cardNumber: '',
      expiry: '',
      cvv: ''
    });
    onClose();
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={resetAndClose}
            className="absolute inset-0 bg-navy/60 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="relative w-full max-w-lg bg-white overflow-hidden rounded-sm shadow-2xl"
          >
            {/* Header */}
            <div className="bg-navy p-6 flex justify-between items-start">
              <div>
                <div className="section-label text-cyan-accent mb-1">{hotel.name}</div>
                <h2 className="text-2xl font-black text-white uppercase tracking-tight">{t('booking_title')}</h2>
              </div>
              <button 
                onClick={resetAndClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-8">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 bg-cyan-accent/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-cyan-accent" />
                  </div>
                  <h3 className="text-3xl font-black text-navy uppercase mb-2">{t('booking_success')}</h3>
                  <p className="text-navy/50 text-sm font-bold uppercase tracking-widest">{hotel.name} / {formData.roomCount} Rooms</p>
                  <button 
                    onClick={resetAndClose}
                    className="btn-primary mt-12 w-full py-4 text-sm tracking-[0.2em]"
                  >
                    {t('booking_close')}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleConfirm} className="space-y-6">
                  {/* Progress Line */}
                  <div className="flex gap-2 mb-8">
                    {[1, 2].map((s) => (
                      <div 
                        key={s} 
                        className={`h-1 flex-1 transition-all duration-500 ${step >= s ? 'bg-cyan-accent' : 'bg-navy/5'}`} 
                      />
                    ))}
                  </div>

                  {step === 1 ? (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-navy/40 uppercase tracking-widest flex items-center gap-2">
                            <Home className="w-3 h-3" />
                            {t('booking_room_type')}
                          </label>
                          <select 
                            name="roomType"
                            value={formData.roomType}
                            onChange={handleInputChange}
                            className="w-full bg-navy/[0.03] border-navy/10 rounded-sm p-3 text-xs font-bold text-navy focus:border-cyan-accent transition-colors outline-none appearance-none"
                          >
                            <option value="standard">Standard Studio</option>
                            <option value="deluxe">Deluxe Suite</option>
                            <option value="penthouse">Penthouse Executive</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-navy/40 uppercase tracking-widest">
                            {t('booking_rooms_count')}
                          </label>
                          <input 
                            type="number" 
                            name="roomCount"
                            min="1"
                            max="5"
                            value={formData.roomCount}
                            onChange={handleInputChange}
                            className="w-full bg-navy/[0.03] border-navy/10 rounded-sm p-3 text-xs font-bold text-navy focus:border-cyan-accent transition-colors outline-none"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-navy/40 uppercase tracking-widest flex items-center gap-2">
                          <User className="w-3 h-3" />
                          {t('booking_name')}
                        </label>
                        <input 
                          type="text" 
                          name="guestName"
                          placeholder="John Doe"
                          required
                          value={formData.guestName}
                          onChange={handleInputChange}
                          className="w-full bg-navy/[0.03] border-navy/10 rounded-sm p-3 text-xs font-bold text-navy placeholder:text-navy/20 focus:border-cyan-accent transition-colors outline-none"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-navy/40 uppercase tracking-widest flex items-center gap-2">
                          <Phone className="w-3 h-3" />
                          {t('booking_phone')}
                        </label>
                        <input 
                          type="tel" 
                          name="phone"
                          placeholder="+995 555 12 34 56"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-navy/[0.03] border-navy/10 rounded-sm p-3 text-xs font-bold text-navy placeholder:text-navy/20 focus:border-cyan-accent transition-colors outline-none"
                        />
                      </div>

                      <button 
                        type="button"
                        onClick={() => setStep(2)}
                        disabled={!formData.guestName || !formData.phone}
                        className="btn-primary w-full py-4 text-sm tracking-[0.2em] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Next
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <div className="bg-navy/[0.02] p-6 border border-navy/5 rounded-sm">
                         <div className="flex items-center gap-3 mb-6">
                           <CreditCard className="w-5 h-5 text-cyan-accent" />
                           <h4 className="text-xs font-black text-navy uppercase tracking-widest">{t('booking_payment')}</h4>
                         </div>
                         
                         <div className="space-y-4">
                           <div className="space-y-2">
                             <label className="text-[10px] font-black text-navy/40 uppercase tracking-widest">{t('booking_card_number')}</label>
                             <input 
                               type="text" 
                               name="cardNumber"
                               placeholder="0000 0000 0000 0000"
                               required
                               value={formData.cardNumber}
                               onChange={handleInputChange}
                               className="w-full bg-white border border-navy/10 rounded-sm p-3 text-xs font-mono font-bold text-navy placeholder:text-navy/10 focus:border-cyan-accent transition-colors outline-none"
                             />
                           </div>
                           <div className="grid grid-cols-2 gap-4">
                             <div className="space-y-2">
                               <label className="text-[10px] font-black text-navy/40 uppercase tracking-widest">{t('booking_expiry')}</label>
                               <input 
                                 type="text" 
                                 name="expiry"
                                 placeholder="MM/YY"
                                 required
                                 value={formData.expiry}
                                 onChange={handleInputChange}
                                 className="w-full bg-white border border-navy/10 rounded-sm p-3 text-xs font-mono font-bold text-navy placeholder:text-navy/10 focus:border-cyan-accent transition-colors outline-none"
                               />
                             </div>
                             <div className="space-y-2">
                               <label className="text-[10px] font-black text-navy/40 uppercase tracking-widest">{t('booking_cvv')}</label>
                               <input 
                                 type="text" 
                                 name="cvv"
                                 placeholder="***"
                                 required
                                 value={formData.cvv}
                                 onChange={handleInputChange}
                                 className="w-full bg-white border border-navy/10 rounded-sm p-3 text-xs font-mono font-bold text-navy placeholder:text-navy/10 focus:border-cyan-accent transition-colors outline-none"
                               />
                             </div>
                           </div>
                         </div>
                      </div>

                      <div className="flex gap-4">
                        <button 
                          type="button"
                          onClick={() => setStep(1)}
                          className="flex-1 py-4 text-xs font-black text-navy/40 uppercase tracking-widest hover:text-navy transition-colors"
                        >
                          Back
                        </button>
                        <button 
                          type="submit"
                          disabled={isSubmitting}
                          className="btn-primary flex-[2] py-4 text-sm tracking-[0.2em] flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            t('booking_confirm')
                          )}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
