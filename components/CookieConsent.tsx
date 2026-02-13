
import React, { useState, useEffect } from 'react';
import { X, Shield, Settings, Cookie } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const { t } = useLanguage();

  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('panasa_cookie_consent');
    if (!consent) {
      // Delay sedikit agar tidak mengganggu animasi opening
      setTimeout(() => setIsVisible(true), 2500);
    } else {
      try {
        setPreferences(JSON.parse(consent));
      } catch (e) {
        // Fallback
      }
    }

    const handleOpenSettings = () => {
      setShowSettings(true);
      setIsVisible(true); // Pastikan terlihat saat dibuka dari footer
    };
    window.addEventListener('open-cookie-settings', handleOpenSettings);
    
    return () => window.removeEventListener('open-cookie-settings', handleOpenSettings);
  }, []);

  const acceptAll = () => {
    const allEnabled = { essential: true, analytics: true, marketing: true };
    setPreferences(allEnabled);
    saveConsent(allEnabled);
  };

  const declineAll = () => {
    const essentialOnly = { essential: true, analytics: false, marketing: false };
    setPreferences(essentialOnly);
    saveConsent(essentialOnly);
  };

  const savePreferences = () => {
    saveConsent(preferences);
  };

  const saveConsent = (prefs: typeof preferences) => {
    localStorage.setItem('panasa_cookie_consent', JSON.stringify(prefs));
    setIsVisible(false);
    setShowSettings(false);
  };

  const togglePreference = (key: 'analytics' | 'marketing') => {
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // --- SETTINGS MODAL (Preferences) ---
  if (showSettings) {
    return (
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity" onClick={() => setShowSettings(false)}></div>
        
        <div className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-slide-up text-white">
          
          <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
            <h3 className="font-display text-xl font-bold flex items-center gap-2">
              <Shield size={20} className="text-nurture-accent"/>
              {t('cookie.preferences')}
            </h3>
            <button onClick={() => setShowSettings(false)} className="text-gray-400 hover:text-white transition-colors">
              <X size={24} />
            </button>
          </div>

          <div className="p-6 overflow-y-auto space-y-6 flex-grow">
            <p className="text-sm text-gray-400 leading-relaxed">
              {t('cookie.text')}
            </p>

            {/* Essential */}
            <div className="flex justify-between items-center gap-4 py-2 border-b border-white/5 pb-4">
              <div>
                <span className="block font-bold text-sm text-white mb-1">
                  {t('cookie.category.essential')}
                </span>
                <span className="text-xs text-gray-500">
                  {t('cookie.category.essential_desc')}
                </span>
              </div>
              <div className="text-[10px] font-mono uppercase text-nurture-accent bg-nurture-accent/10 border border-nurture-accent/20 px-2 py-1 rounded">
                Always On
              </div>
            </div>

            {/* Analytics */}
            <div className="flex justify-between items-center gap-4 py-2 border-b border-white/5 pb-4">
              <div>
                <span className="block font-bold text-sm text-white mb-1">
                  {t('cookie.category.analytics')}
                </span>
                <span className="text-xs text-gray-500">
                  {t('cookie.category.analytics_desc')}
                </span>
              </div>
              <button 
                onClick={() => togglePreference('analytics')}
                className={`w-11 h-6 rounded-full relative shrink-0 transition-all duration-300 ${preferences.analytics ? 'bg-nurture-accent border-nurture-accent' : 'bg-gray-800 border-gray-700'} border`}
              >
                <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all duration-300 shadow-sm ${preferences.analytics ? 'translate-x-5' : 'translate-x-1'}`}></div>
              </button>
            </div>

            {/* Marketing */}
            <div className="flex justify-between items-center gap-4 py-2">
              <div>
                <span className="block font-bold text-sm text-white mb-1">
                  {t('cookie.category.marketing')}
                </span>
                <span className="text-xs text-gray-500">
                  {t('cookie.category.marketing_desc')}
                </span>
              </div>
              <button 
                onClick={() => togglePreference('marketing')}
                className={`w-11 h-6 rounded-full relative shrink-0 transition-all duration-300 ${preferences.marketing ? 'bg-nurture-accent border-nurture-accent' : 'bg-gray-800 border-gray-700'} border`}
              >
                <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all duration-300 shadow-sm ${preferences.marketing ? 'translate-x-5' : 'translate-x-1'}`}></div>
              </button>
            </div>
          </div>

          <div className="p-4 bg-black/20 border-t border-white/10 flex gap-3 shrink-0">
             <button 
                onClick={savePreferences}
                className="flex-1 py-3 bg-white text-black font-mono text-xs uppercase tracking-widest hover:bg-gray-200 transition-all rounded-lg font-bold"
             >
               {t('cookie.save')}
             </button>
             <button 
                onClick={acceptAll}
                className="flex-1 py-3 bg-nurture-accent text-nurture-dark font-mono text-xs uppercase tracking-widest hover:opacity-90 transition-all rounded-lg font-bold"
             >
               {t('common.accept')}
             </button>
          </div>

        </div>
      </div>
    );
  }

  // --- FLOATING CARD DESIGN (Awwwards Style) ---
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-[100] w-[calc(100%-3rem)] md:w-[360px] animate-slide-up">
       <div className="relative overflow-hidden bg-[#022c22]/90 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]">
          
          {/* Decorative Glow */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-nurture-accent/20 rounded-full blur-[40px] pointer-events-none"></div>

          <div className="relative z-10">
             {/* Header */}
             <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-nurture-accent border border-white/10 shadow-inner">
                   <Cookie size={20} />
                </div>
                <button 
                  onClick={() => setIsVisible(false)} 
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  <X size={16} />
                </button>
             </div>

             {/* Content */}
             <h4 className="font-display text-lg font-bold text-white mb-2 tracking-tight">
               {t('cookie.title')}
             </h4>
             <p className="text-sm text-gray-400 leading-relaxed mb-6 font-light">
               {t('cookie.text')}
             </p>

             {/* Actions */}
             <div className="grid grid-cols-2 gap-3">
                <button
                   onClick={() => setShowSettings(true)}
                   className="col-span-1 px-4 py-3 border border-white/10 rounded-lg text-[10px] md:text-xs font-mono uppercase tracking-widest text-gray-300 hover:bg-white/5 hover:text-white transition-all hover:border-white/20"
                >
                   {t('cookie.manage')}
                </button>
                <button
                   onClick={acceptAll}
                   className="col-span-1 px-4 py-3 bg-nurture-accent text-nurture-dark rounded-lg text-[10px] md:text-xs font-mono uppercase tracking-widest font-bold hover:bg-white transition-all shadow-lg shadow-nurture-accent/20"
                >
                   {t('common.accept')}
                </button>
             </div>
             
             {/* Decline Link */}
             <div className="mt-4 text-center">
                <button 
                  onClick={declineAll} 
                  className="text-[10px] text-gray-500 hover:text-white uppercase tracking-widest transition-colors border-b border-transparent hover:border-gray-500 pb-0.5"
                >
                  {t('common.decline')}
                </button>
             </div>
          </div>
       </div>
    </div>
  );
};

export default CookieConsent;
