import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LogOut, ChevronLeft, Languages } from 'lucide-react';
import { logout, auth } from '../lib/firebase';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageProvider';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const user = auth.currentUser;
  const { language, setLanguage, t } = useLanguage();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-navy text-white font-sans flex flex-col overflow-hidden">
      {/* Header Navigation */}
      <header className="h-16 border-b border-cyan-accent/20 flex items-center justify-between px-8 bg-navy shrink-0 sticky top-0 z-50">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-cyan-accent rounded-sm flex items-center justify-center font-bold text-navy group-hover:rotate-12 transition-transform">G</div>
            <span className="text-xl font-bold tracking-tight text-white italic">GEORGIA<span className="text-cyan-accent not-italic">STAY</span></span>
          </Link>

          {!isHome && (
            <button 
              onClick={() => navigate(-1)}
              className="hidden md:flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/50 hover:text-cyan-accent transition-colors"
            >
              <ChevronLeft className="w-3 h-3 text-cyan-accent" />
              {t('nav_back')}
            </button>
          )}
        </div>

        <div className="flex items-center gap-8">
          <nav className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-wider">
            <Link to="/cities" className={`pb-1 transition-colors ${location.pathname === '/cities' ? 'text-cyan-accent border-b border-cyan-accent' : 'text-white/60 hover:text-white'}`}>{t('nav_cities')}</Link>
          </nav>

          {/* Language Switcher */}
          <div className="flex bg-white/5 p-1 rounded-sm border border-white/10 gap-1">
            <button 
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 text-[9px] font-black uppercase tracking-tighter transition-all ${language === 'en' ? 'bg-cyan-accent text-navy' : 'text-white/40 hover:text-white'}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLanguage('ka')}
              className={`px-2 py-1 text-[9px] font-black uppercase tracking-tighter transition-all ${language === 'ka' ? 'bg-cyan-accent text-navy' : 'text-white/40 hover:text-white'}`}
            >
              KA
            </button>
          </div>
          
          <div className="flex items-center gap-4 pl-6 border-l border-white/10">
            <div className="hidden sm:block text-right">
              <p className="text-[10px] font-bold text-white uppercase tracking-tighter leading-none mb-1">{user?.displayName || 'Guest'}</p>
              <p className="text-[9px] text-cyan-accent uppercase tracking-widest leading-none">{t('status_premium')}</p>
            </div>
            <button 
              onClick={handleLogout}
              className="relative w-9 h-9 group"
            >
              <div className="w-full h-full rounded-full bg-cyan-accent flex items-center justify-center border-2 border-navy shadow-[0_0_0_1px_rgba(56,189,248,0.4)] overflow-hidden group-hover:scale-110 transition-transform">
                {user?.photoURL ? (
                  <img src={user.photoURL} alt="User" referrerPolicy="no-referrer" />
                ) : (
                  <span className="text-navy font-bold text-sm italic">
                    {user?.displayName?.[0] || 'G'}
                  </span>
                )}
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 border-2 border-navy rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <LogOut className="w-1.5 h-1.5 text-white" />
              </div>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-white">
        {children}
      </main>

      {/* Footer Bar */}
      <footer className="h-10 bg-navy border-t border-white/5 flex items-center justify-between px-8 text-[10px] text-white/30 uppercase tracking-[0.2em] shrink-0">
        <div>© 2026 {t('footer_platform')}</div>
        <div className="hidden sm:flex gap-6">
          <span className="hover:text-white/60 cursor-pointer transition-colors">{t('footer_terms')}</span>
          <span className="text-cyan-accent/50">{t('footer_verified')}</span>
        </div>
      </footer>
    </div>
  );
};
