import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth, signInWithGoogle } from '../lib/firebase';
import { LogIn, Loader2, AlertTriangle, ExternalLink, UserCheck } from 'lucide-react';
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
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
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

  const handleGoogleSignIn = async () => {
    setIsSigningIn(true);
    setAuthError(null);
    try {
      const loggedUser = await signInWithGoogle();
      setUser(loggedUser);
    } catch (error: any) {
      console.error('Sign in error details:', error);
      
      const errorCode = error?.code || '';
      const errorMessage = error?.message || String(error);
      
      if (errorCode === 'auth/popup-closed-by-user') {
        setAuthError(
          language === 'ka'
            ? 'ავტორიზაციის ფანჯარა დაიხურა მომხმარებლის მიერ.'
            : 'Sign-in popup was closed by the user.'
        );
      } else if (errorCode === 'auth/unauthorized-domain' || errorMessage.includes('unauthorized-domain')) {
        setAuthError(
          language === 'ka'
            ? `დომენის შეცდომა: ეს დომენი (${window.location.hostname}) არ არის ნებადართული Firebase კონსოლში. გთხოვთ დაამატოთ Authorized Domains სიაში Firebase Console-დან.`
            : `Domain Error: This domain (${window.location.hostname}) is not authorized in the Firebase console. Please add it to Authorized Domains in your Firebase console.`
        );
      } else if (
        errorCode === 'auth/web-storage-unsupported' || 
        errorMessage.includes('storage') || 
        errorMessage.includes('network-request-failed') ||
        errorMessage.includes('cookie')
      ) {
        setAuthError(
          language === 'ka'
            ? 'ბრაუზერი ბლოკავს მესამე მხარის ქუქიებს (Third-party cookies) iframe-ში. გთხოვთ საიტი გახსნათ ახალ ტაბში ან ჩაურთოთ ქუქიები ბრაუზერში.'
            : 'Your browser is blocking third-party cookies in the iframe. Please open the app in a new tab or allow third-party cookies.'
        );
      } else {
        setAuthError(
          language === 'ka'
            ? `ავტორიზაციის შეცდომა: ${errorMessage}`
            : `Authentication Error: ${errorMessage}`
        );
      }
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleDemoSignIn = () => {
    const demoUser = {
      uid: 'demo-user-id',
      email: 'demo@georgiastay.ge',
      displayName: language === 'ka' ? 'დემო სტუმარი' : 'Demo Guest',
      photoURL: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150',
      emailVerified: true,
      providerId: 'google.com'
    };
    
    localStorage.setItem('demo_user', JSON.stringify(demoUser));
    setUser(demoUser as any as User);
    setAuthError(null);
  };

  const handleOpenInNewTab = () => {
    window.open(window.location.href, '_blank');
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
            <div className="w-full max-w-md bg-white rounded-sm p-8 sm:p-12 shadow-2xl text-center border-t-4 border-cyan-accent relative">
              <div className="w-16 h-16 bg-navy rounded-sm flex items-center justify-center mx-auto mb-8 rotate-3">
                <LogIn className="w-8 h-8 text-cyan-accent" />
              </div>
              <h1 className="text-4xl font-black text-navy mb-3 tracking-tighter uppercase leading-none">{t('auth_title')}</h1>
              <p className="section-label mb-8">{t('auth_label')}</p>
              
              <div className="space-y-4">
                <button
                  onClick={handleGoogleSignIn}
                  disabled={isSigningIn}
                  className="w-full flex items-center justify-center gap-4 bg-navy text-white px-8 py-5 rounded-sm font-black text-xs uppercase tracking-[0.2em] hover:bg-navy/90 transition-all hover:-translate-y-1 active:translate-y-0 shadow-lg shadow-navy/20 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {isSigningIn ? (
                    <Loader2 className="w-5 h-5 animate-spin text-cyan-accent" />
                  ) : (
                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5 h-5" alt="Google" />
                  )}
                  {isSigningIn ? (language === 'ka' ? 'შესვლა...' : 'Signing In...') : t('auth_google')}
                </button>

                {/* Error Alert with Solvers */}
                {authError && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 border border-red-200 rounded-sm text-left mt-4"
                  >
                    <div className="flex items-start gap-2 text-red-700">
                      <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider mb-1">
                          {language === 'ka' ? 'ავტორიზაციის შეფერხება' : 'Sign-In Issue'}
                        </p>
                        <p className="text-xs leading-relaxed text-red-600 font-medium">
                          {authError}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-3 pt-3 border-t border-red-100 flex flex-col gap-2">
                      <button
                        onClick={handleOpenInNewTab}
                        className="w-full flex items-center justify-center gap-2 bg-red-600 text-white px-3 py-2 rounded-sm text-[10px] font-bold uppercase tracking-wider hover:bg-red-700 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        {language === 'ka' ? 'ახალ ტაბში გახსნა (რეკომენდებული)' : 'Open in New Tab (Recommended)'}
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Try Demo Mode fallback - extremely helpful inside AI studio/iframe */}
                <div className="pt-2">
                  <div className="relative flex py-2 items-center">
                    <div className="flex-grow border-t border-navy/10"></div>
                    <span className="flex-shrink mx-4 text-[9px] text-navy/40 font-bold uppercase tracking-widest">
                      {language === 'ka' ? 'ან შემოვლითი გზა' : 'Or Fallback'}
                    </span>
                    <div className="flex-grow border-t border-navy/10"></div>
                  </div>
                  
                  <button
                    onClick={handleDemoSignIn}
                    className="w-full flex items-center justify-center gap-3 bg-cyan-accent/10 border border-cyan-accent/20 text-navy px-8 py-3.5 rounded-sm font-black text-[10px] uppercase tracking-[0.15em] hover:bg-cyan-accent hover:text-navy transition-all hover:-translate-y-0.5"
                  >
                    <UserCheck className="w-4 h-4 text-cyan-accent" />
                    {language === 'ka' ? 'დემო რეჟიმით შესვლა (სწრაფი)' : 'Sign In as Demo Guest'}
                  </button>
                </div>

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
