
import React, { useEffect } from 'react';
import { ArrowDown, CheckCircle, Globe, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SEO from './SEO';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const missionItems = t('about_page.mission.items') as string[];

  return (
    <div className="bg-nurture-light dark:bg-nurture-dark transition-colors duration-500">
      <SEO 
        title={t('about.label')}
        description={t('about.desc')}
        path="/about"
      />
      
      {/* 1. HERO SECTION (Gambar di Paling Atas) */}
      <section className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">
        {/* Hero Image */}
        <img 
          src="https://images.unsplash.com/photo-1621245084365-22d7936a287c?q=80&w=2500&auto=format&fit=crop" 
          alt="Sulawesi Landscape Hero" 
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-nurture-dark via-nurture-dark/20 to-transparent opacity-80"></div>
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Hero Content */}
        <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-end pb-12 md:pb-24">
          <div className="max-w-5xl">
            <span className="font-mono text-xs md:text-sm text-nurture-accent uppercase tracking-[0.3em] mb-4 md:mb-6 block animate-fade-in">
              {t('about_page.label')} — PANASA
            </span>
            <h1 className="font-display font-bold text-5xl md:text-8xl lg:text-9xl leading-[0.85] text-white tracking-tighter mb-8 animate-slide-up">
              {t('about_page.title')}
            </h1>
            <div className="flex items-center gap-4 text-white/60 font-mono text-[10px] md:text-xs uppercase tracking-widest">
               <span className="w-12 h-[1px] bg-nurture-accent"></span>
               <span>INDONESIAN COMMODITY EXCELLENCE</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRO CONTENT SECTION (Dibawah Hero) */}
      <section className="py-20 md:py-32 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          <div className="w-full lg:w-1/2">
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight text-nurture-dark dark:text-white mb-6">
               Bridging Cultures through <span className="text-nurture-accent italic">Quality.</span>
            </h2>
            <p className="text-lg md:text-2xl font-light leading-relaxed text-gray-700 dark:text-gray-300">
              {t('about_page.desc1')}
            </p>
          </div>
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="h-[1px] w-full bg-black/10 dark:bg-white/10 hidden lg:block"></div>
            <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
              {t('about_page.desc2')}
            </p>
            <div className="pt-4">
               <div className="flex items-center gap-6">
                  <div>
                    <span className="block font-display text-4xl md:text-5xl font-bold text-nurture-dark dark:text-white">2025</span>
                    <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-gray-500">Established</span>
                  </div>
                  <div className="w-[1px] h-12 bg-black/10 dark:bg-white/10"></div>
                  <div>
                    <span className="block font-display text-4xl md:text-5xl font-bold text-nurture-dark dark:text-white">100%</span>
                    <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-gray-500">Traceable</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION GRID */}
      <section className="bg-nurture-grey dark:bg-nurture-medium/20 py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            <div className="bg-white dark:bg-nurture-dark p-8 md:p-16 rounded-3xl border border-black/5 dark:border-white/10 shadow-sm group hover:border-nurture-accent transition-colors duration-500">
              <div className="w-12 h-12 bg-nurture-accent text-nurture-dark rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-12 transition-transform">
                <Globe size={24} />
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-6 text-nurture-dark dark:text-white">{t('about_page.vision.title')}</h3>
              <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                {t('about_page.vision.desc')}
              </p>
            </div>

            <div className="bg-white dark:bg-nurture-dark p-8 md:p-16 rounded-3xl border border-black/5 dark:border-white/10 shadow-sm group hover:border-nurture-accent transition-colors duration-500">
              <div className="w-12 h-12 bg-nurture-accent text-nurture-dark rounded-2xl flex items-center justify-center mb-8 transform group-hover:-rotate-12 transition-transform">
                <Users size={24} />
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-6 text-nurture-dark dark:text-white">{t('about_page.mission.title')}</h3>
              <ul className="space-y-4 text-base md:text-lg text-gray-600 dark:text-gray-400 font-light">
                {missionItems.map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <CheckCircle size={22} className="text-nurture-accent shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 4. LEADERSHIP / TEAM (Gambar Dihapus) */}
      <section className="py-20 md:py-32 container mx-auto px-6 mb-12">
        <div className="border-t border-black/10 dark:border-white/10 pt-12 md:pt-20 text-center">
           <div className="flex flex-col items-center">
              <div className="max-w-3xl">
                 <span className="font-mono text-xs text-nurture-accent uppercase tracking-widest mb-6 block">{t('about_page.team.label')}</span>
                 <h2 className="font-display text-4xl md:text-7xl font-bold mb-8 text-nurture-dark dark:text-white">{t('about_page.team.title')}</h2>
                 <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-10 font-light">
                    {t('about_page.team.desc')}
                 </p>
                 <a href="#footer" className="group inline-flex items-center gap-4 font-mono text-sm uppercase tracking-[0.2em] bg-nurture-dark dark:bg-white text-white dark:text-black px-8 py-4 rounded-full hover:bg-nurture-accent dark:hover:bg-nurture-accent hover:text-white transition-all duration-500">
                    {t('about_page.team.contact')}
                    <ArrowDown size={18} className="-rotate-90 group-hover:translate-x-2 transition-transform" />
                 </a>
              </div>
           </div>
        </div>
      </section>

      <style>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-slide-up {
          animation: slide-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in {
          animation: fade-in 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
