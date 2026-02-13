
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const MarqueeSection: React.FC = () => {
  const { t } = useLanguage();

  const line1Data = (t('marquee.line1') as string[]);
  const line2Data = (t('marquee.line2') as string[]);

  // Helpers for note data (could also be translated if needed, keeping static for now or mapping)
  const line1Notes = ["01", "100%", "EST", "24h"];
  const line2Notes = ["ID", "ECO", "A++", "WW"];

  const line1 = line1Data.map((text, i) => ({ text, note: line1Notes[i] || "" }));
  const line2 = line2Data.map((text, i) => ({ text, note: line2Notes[i] || "" }));

  const MarqueeRow = ({ items, reverse = false }: { items: { text: string; note: string }[], reverse?: boolean }) => {
    const content = [...items, ...items, ...items, ...items]; 
    
    return (
      <div className="relative flex overflow-hidden bg-nurture-light dark:bg-nurture-dark">
         <div 
            className={`flex w-fit items-center whitespace-nowrap will-change-transform py-2 md:py-3
            ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
            style={{ animationDuration: '50s' }} 
         >
            {content.map((item, i) => (
              <div key={i} className="flex items-start px-4 md:px-20 relative group select-none">
                 <div className="relative">
                   <span className="block text-5xl md:text-8xl lg:text-9xl leading-none font-display font-black tracking-tighter text-nurture-dark dark:text-nurture-light uppercase transform transition-transform duration-500 group-hover:scale-[1.02] group-hover:text-nurture-accent">
                     {item.text}
                   </span>
                   
                   <span className="absolute -top-1 -right-3 md:top-0 md:-right-10 font-mono text-[10px] md:text-base font-medium text-nurture-dark dark:text-nurture-light opacity-50">
                     ({item.note})
                   </span>
                 </div>
              </div>
            ))}
         </div>
      </div>
    );
  };

  return (
    <section className="py-0 flex flex-col w-full overflow-hidden">
       <MarqueeRow items={line1} />
       <MarqueeRow items={line2} reverse={true} />
    </section>
  );
};

export default MarqueeSection;
