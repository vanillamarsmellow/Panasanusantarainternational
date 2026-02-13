
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import RevealOnScroll from './RevealOnScroll';

const Sustainability: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollSpeed = 0.08; 
      
      const screenCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const difference = screenCenter - elementCenter;
      
      setOffsetY(difference * scrollSpeed);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="sustainability" 
      ref={sectionRef}
      className="relative py-16 md:py-32 overflow-hidden bg-nurture-green text-nurture-light"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1600&auto=format&fit=crop" 
          alt="Mist Forest Background" 
          className="w-full h-[140%] object-cover absolute -top-[20%] opacity-40 mix-blend-overlay blur-[2px]"
          style={{ transform: `translateY(${offsetY}px)` }}
        />
        <div className="absolute inset-0 bg-nurture-green/85"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <RevealOnScroll>
          <span className="font-mono text-xs md:text-sm uppercase tracking-widest opacity-70 mb-4 block">{t('sustainability.label')}</span>
        </RevealOnScroll>
        <RevealOnScroll delay={100}>
          <h2 className="font-display text-4xl md:text-7xl font-bold mb-6 md:mb-12 relative">
            {t('sustainability.title')}
          </h2>
        </RevealOnScroll>
        
        <RevealOnScroll delay={200}>
          <div className="max-w-3xl mx-auto mb-8 md:mb-16">
            <p className="text-base md:text-2xl font-light leading-relaxed opacity-90 shadow-sm">
              {t('sustainability.desc')}
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={300}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/20 pt-8 md:pt-12 backdrop-blur-sm bg-white/5 rounded-xl">
            <div className="p-4 md:p-6">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-1 md:mb-2">{t('sustainability.stat1.title')}</h3>
              <p className="text-xs md:text-sm opacity-70 font-mono">{t('sustainability.stat1.sub')}</p>
            </div>
            <div className="p-4 md:p-6 border-t md:border-t-0 md:border-l border-white/20">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-1 md:mb-2">{t('sustainability.stat2.title')}</h3>
              <p className="text-xs md:text-sm opacity-70 font-mono">{t('sustainability.stat2.sub')}</p>
            </div>
            <div className="p-4 md:p-6 border-t md:border-t-0 md:border-l border-white/20">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-1 md:mb-2">{t('sustainability.stat3.title')}</h3>
              <p className="text-xs md:text-sm opacity-70 font-mono">{t('sustainability.stat3.sub')}</p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Sustainability;
