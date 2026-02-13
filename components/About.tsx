
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import RevealOnScroll from './RevealOnScroll';

const About: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (!imageContainerRef.current) return;
      
      const rect = imageContainerRef.current.getBoundingClientRect();
      const scrollSpeed = 0.12; 
      
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
    <section id="about" className="py-12 md:py-32 container mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-center">
        
        <div className="w-full md:w-1/2 order-2 md:order-1">
          {/* Reduced height on mobile: h-[250px] instead of 300px */}
          <div ref={imageContainerRef} className="w-full h-[250px] md:h-[600px] overflow-hidden rounded-sm relative group">
            <img 
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop" 
              alt="Indonesian Farm" 
              className="w-full h-[130%] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out absolute -top-[15%]"
              style={{ transform: `translateY(${offsetY}px)` }}
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        </div>

        <div className="w-full md:w-1/2 order-1 md:order-2">
          <RevealOnScroll>
            <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-nurture-accent mb-4 md:mb-6 block">{t('about.label')}</span>
          </RevealOnScroll>
          
          <RevealOnScroll delay={100}>
            {/* Adjusted mobile font size */}
            <h2 className="font-display text-3xl md:text-6xl font-bold mb-4 md:mb-8 leading-tight">
              {t('about.title')}
            </h2>
          </RevealOnScroll>
          
          <RevealOnScroll delay={200}>
            <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6 md:mb-8">
              {t('about.desc')}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={300}>
            <div className="mt-6 md:mt-12 border-t border-gray-200 dark:border-gray-800 pt-6 md:pt-8">
              <div>
                <span className="block font-display text-2xl md:text-3xl font-bold mb-1">20+</span>
                <span className="text-sm text-gray-500">{t('about.stat2')}</span>
              </div>
            </div>
          </RevealOnScroll>
        </div>

      </div>
    </section>
  );
};

export default About;
