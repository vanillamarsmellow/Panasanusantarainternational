
import React, { useEffect } from 'react';
import { ShieldCheck, TrendingUp, Truck, Users, Microscope, Leaf } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SEO from './SEO';

const WhyChooseUsPage: React.FC = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const itemsData = t('why_us.items') as any[];
  // Icons mapping for the storytelling items: 
  // 1. Precision (Quality) -> Microscope
  // 2. Logistics (Motion) -> Truck
  // 3. Partners (Relationship) -> Users
  // 4. Sustainability (Rooted) -> Leaf
  const icons = [<Microscope size={32} />, <Truck size={32} />, <Users size={32} />, <Leaf size={32} />];
  
  const reasons = itemsData.map((item, idx) => ({
    icon: icons[idx],
    title: item.title,
    desc: item.desc
  }));

  return (
    <div className="pt-24 pb-12 md:pt-32 md:pb-20 min-h-screen bg-nurture-light dark:bg-nurture-dark transition-colors duration-500">
      <SEO 
        title={t('why_us.label')}
        description={t('why_us.desc')}
        path="/why-us"
      />
      
      {/* Hero Header */}
      <section className="container mx-auto px-6 mb-16 md:mb-24">
        <span className="font-mono text-xs md:text-sm text-nurture-accent uppercase tracking-widest mb-4 md:mb-6 block">{t('why_us.label')}</span>
        <h1 className="font-display font-bold text-4xl md:text-7xl lg:text-8xl leading-[1.0] md:leading-[0.9] text-nurture-dark dark:text-white mb-6 md:mb-8">
          {t('why_us.title')}
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed border-l-2 border-nurture-accent pl-6 mt-6 md:mt-8">
          {t('why_us.desc')}
        </p>
      </section>

      {/* Main Grid */}
      <section className="container mx-auto px-6 mb-20 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {reasons.map((item, idx) => (
            <div 
              key={idx} 
              className="group p-8 md:p-12 border border-black/10 dark:border-white/10 rounded-2xl bg-white dark:bg-white/5 hover:border-nurture-accent dark:hover:border-nurture-accent transition-colors duration-300"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-nurture-light dark:bg-white/10 flex items-center justify-center text-nurture-dark dark:text-white mb-6 md:mb-8 group-hover:bg-nurture-accent group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-nurture-dark dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Image */}
      <section className="h-[50vh] md:h-[60vh] relative flex items-center justify-center overflow-hidden">
         <img 
           src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop" 
           alt="Logistics container" 
           className="absolute inset-0 w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-nurture-green/90 mix-blend-multiply"></div>
         <div className="relative z-10 text-center px-6">
            <h2 className="font-display text-4xl md:text-7xl font-bold text-white mb-6 md:mb-8">{t('why_us.cta.title')}</h2>
            <a href="#footer" className="inline-block px-6 py-3 md:px-8 md:py-4 bg-white text-nurture-dark font-mono text-sm md:text-base uppercase tracking-widest hover:bg-nurture-accent hover:text-white transition-all duration-300">
               {t('why_us.cta.btn')}
            </a>
         </div>
      </section>

    </div>
  );
};

export default WhyChooseUsPage;
