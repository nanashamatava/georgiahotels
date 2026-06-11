import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { LogIn, Loader2, UserCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from './LanguageProvider';

interface AuthContextType {
  user: User | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({ user: null, loading: true });

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { t, language } = useLanguage();

  useEffect(() => {
    const savedDemoUser = localStorage.getItem('demo_user');
    if (savedDemoUser) {
      try {
        setUser(JSON.parse(savedDemoUser));
        setLoading(false);
        return;
      } catch (e) {
        localStorage.removeItem('demo_user');
      }
    }

    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (!localStorage.getItem('demo_user')) {
        setUser(firebaseUser);
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  const handleDemoSignIn = () => {
    const demoUser = {
      uid: 'demo-user-id',
      email: 'guest@georgiastay.ge',
      displayName: language === 'ka' ? 'სტუმარი' : 'Guest',
      photoURL: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150',
      emailVerified: true,
      providerId: 'google.com'
    };
    
    localStorage.setItem('demo_user', JSON.stringify(demoUser));
    setUser(demoUser as any as User);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-navy text-white">
        <Loader2 className="w-12 h-12 text-cyan-accent animate-spin mb-4" />
        <p className="text-cyan-accent/60 font-bold uppercase tracking-[0.3em] text-xs">Initializing Georgia Stay...</p>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, loading }}>
      <AnimatePresence mode="wait">
        {!user ? (
          <motion.div
            key="login"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex flex-col items-center justify-center bg-navy p-6"
          >
            <div className="w-full max-w-md bg-white rounded-sm p-8 sm:p-12 shadow-2xl text-center border-t-4 border-cyan-accent relative animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 bg-navy rounded-sm flex items-center justify-center mx-auto mb-8 rotate-3">
                <LogIn className="w-8 h-8 text-cyan-accent" />
              </div>
              <h1 className="text-4xl font-black text-navy mb-3 tracking-tighter uppercase leading-none">{t('auth_title')}</h1>
              <p className="section-label mb-8">{t('auth_label')}</p>
              
              <div className="space-y-4">
                <button
                  onClick={handleDemoSignIn}
                  className="w-full flex items-center justify-center gap-3 bg-navy text-white px-8 py-5 rounded-sm font-black text-xs uppercase tracking-[0.2em] hover:bg-navy/90 transition-all hover:-translate-y-1 active:translate-y-0 shadow-lg shadow-navy/20 cursor-pointer"
                >
                  <UserCheck className="w-5 h-5 text-cyan-accent" />
                  {language === 'ka' ? 'სტუმრის სტატუსით შესვლა' : 'Sign In as Guest'}
                </button>

                <div className="text-[10px] text-navy/40 font-bold uppercase tracking-widest pt-4">
                  {t('auth_agree')} <span className="text-navy underline">{t('auth_protocol')}</span>
                </div>
              </div>

              {/* Decorative Geometric Element */}
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-cyan-accent/10 rounded-sm -z-10" />
            </div>
            <p className="mt-12 text-white/20 text-[10px] font-bold uppercase tracking-[0.3em]">© 2026 {t('footer_platform')}</p>
          </motion.div>
        ) : (
          children
        )}
      </AnimatePresence>
    </AuthContext.Provider>
  );
};
