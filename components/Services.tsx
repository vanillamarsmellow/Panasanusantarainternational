
import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import RevealOnScroll from './RevealOnScroll';

const serviceImages: Record<number, string> = {
  1: "https://images.unsplash.com/photo-1599527586523-c5982cb12918?q=80&w=1200&auto=format&fit=crop", 
  2: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop", 
  3: "https://images.unsplash.com/photo-1494412574643-35d324698420?q=80&w=1200&auto=format&fit=crop", 
  4: "https://images.unsplash.com/photo-1631552668568-19e0757d5ce3?q=80&w=1200&auto=format&fit=crop"  
};

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number>(1);
  const { t } = useLanguage();

  const servicesData = t('services.items') as any[];
  const services = servicesData.map((s, i) => ({
    id: i + 1,
    title: s.title,
    description: s.desc
  }));

  return (
    <section id="services" className="relative py-12 md:py-32 bg-nurture-light dark:bg-nurture-dark text-nurture-dark dark:text-nurture-light overflow-hidden">
      
      <div className="container mx-auto px-6">
        
        <div className="mb-8 md:mb-32 flex flex-col md:flex-row justify-between items-end gap-4 md:gap-8 border-b border-black/10 dark:border-white/10 pb-6 md:pb-12">
           <div>
              <RevealOnScroll>
                <span className="font-mono text-xs md:text-sm text-nurture-accent uppercase tracking-widest mb-2 md:mb-4 block">{t('services.label')}</span>
              </RevealOnScroll>
              <RevealOnScroll delay={100}>
                {/* Adjusted mobile font size */}
                <h2 className="font-display text-4xl md:text-8xl font-bold leading-[0.95] md:leading-[0.9] tracking-tight">
                  {t('services.title')}
                </h2>
              </RevealOnScroll>
           </div>
           <div className="max-w-md text-left">
              <RevealOnScroll delay={200}>
                <p className="text-sm md:text-lg font-light leading-relaxed opacity-80">
                  {t('services.desc')}
                </p>
              </RevealOnScroll>
           </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-24">
          
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            {services.map((service, index) => (
              <RevealOnScroll key={service.id} delay={index * 100}>
                <div 
                  onMouseEnter={() => setActiveService(service.id)}
                  onClick={() => setActiveService(service.id)} // Enable click for mobile
                  className={`group border-t border-black/10 dark:border-white/10 py-5 md:py-14 cursor-pointer transition-all duration-500`}
                >
                  <div className="flex items-baseline justify-between mb-2 md:mb-4">
                    <div className="flex items-baseline gap-4 md:gap-6">
                      <span className={`font-mono text-xs md:text-base transition-colors duration-300 ${activeService === service.id ? 'text-nurture-accent' : 'opacity-40'}`}>
                        0{index + 1}
                      </span>
                      {/* Adjusted mobile font size for service items */}
                      <h3 className={`font-display text-xl md:text-5xl font-bold transition-all duration-500 origin-left ${activeService === service.id ? 'text-nurture-accent translate-x-2 md:translate-x-4' : 'text-current group-hover:opacity-70'}`}>
                        {service.title}
                      </h3>
                    </div>
                    <ArrowRight 
                      className={`transition-all duration-500 ${activeService === service.id ? 'opacity-100 -rotate-45 text-nurture-accent' : 'opacity-0 -translate-x-4'}`} 
                      size={20} // Smaller icon on mobile
                    />
                  </div>
                  
                  <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${activeService === service.id ? 'max-h-60 opacity-100 mt-2 md:mt-4' : 'max-h-0 opacity-0'}`}>
                    <p className="text-sm md:text-xl font-light text-gray-600 dark:text-gray-300 pl-8 md:pl-12 max-w-md leading-relaxed">
                      {service.description}
                    </p>
                    <div className="pl-8 md:pl-12 mt-4 md:mt-6">
                        <span className="inline-flex items-center gap-2 text-[10px] md:text-xs font-mono uppercase tracking-widest border-b border-nurture-accent pb-1 text-nurture-accent">
                          {t('common.learnMore')} <ArrowUpRight size={10}/>
                        </span>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
            <div className="border-t border-black/10 dark:border-white/10"></div>
          </div>

          <div className="hidden lg:block w-1/2 relative h-[80vh]">
             <div className="sticky top-12 w-full h-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-900">
                {Object.keys(serviceImages).map((key) => {
                  const id = parseInt(key);
                  return (
                    <div 
                      key={id}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeService === id ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                      <img 
                        src={serviceImages[id]} 
                        alt="Service Visualization" 
                        className="w-full h-full object-cover transform scale-105 transition-transform duration-[2000ms] ease-out"
                        style={{ transform: activeService === id ? 'scale(1.0)' : 'scale(1.1)' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-nurture-dark/80 via-transparent to-transparent opacity-60"></div>
                      
                      <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-lg">
                        <span className="block font-mono text-xs text-nurture-accent uppercase mb-1">{t('services.capability')}</span>
                        <span className="block font-display text-white text-xl font-bold">{t('services.verified')}</span>
                      </div>
                    </div>
                  );
                })}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
