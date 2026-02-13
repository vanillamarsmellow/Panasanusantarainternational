
import React, { useRef, useEffect, useState } from 'react';
import { ArrowUpRight, Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface PortfolioProps {
  onProductClick?: (productId: string) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onProductClick }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);
  const { t } = useLanguage();

  const projects = [
    { id: 'cocoa', title: t('portfolio.items.cocoa.title'), category: t('portfolio.items.cocoa.cat'), image: 'https://images.unsplash.com/photo-1626202266854-474c3e761623?q=80&w=1000&auto=format&fit=crop', year: t('portfolio.items.cocoa.year') },
    { id: 'coffee', title: t('portfolio.items.coffee.title'), category: t('portfolio.items.coffee.cat'), image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop', year: t('portfolio.items.coffee.year') },
    { id: 'copra', title: t('portfolio.items.copra.title'), category: t('portfolio.items.copra.cat'), image: 'https://images.unsplash.com/photo-1599527586523-c5982cb12918?q=80&w=1000&auto=format&fit=crop', year: t('portfolio.items.copra.year') },
    { id: 'charcoal', title: t('portfolio.items.charcoal.title'), category: t('portfolio.items.charcoal.cat'), image: 'https://images.unsplash.com/photo-1563908906-8d62688469d8?q=80&w=1000&auto=format&fit=crop', year: t('portfolio.items.charcoal.year') },
    { id: 'robusta', title: t('portfolio.items.robusta.title'), category: t('portfolio.items.robusta.cat'), image: 'https://images.unsplash.com/photo-1611162458632-411a720e34c9?q=80&w=1000&auto=format&fit=crop', year: t('portfolio.items.robusta.year') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!triggerRef.current || !sectionRef.current) return;

      const trigger = triggerRef.current;
      const section = sectionRef.current;
      
      const triggerTop = trigger.getBoundingClientRect().top;
      const triggerHeight = trigger.offsetHeight;
      const windowHeight = window.innerHeight;

      const scrollDistance = triggerHeight - windowHeight;
      const contentWidth = section.scrollWidth;
      const maxTranslate = contentWidth - window.innerWidth;

      let progress = 0;

      if (triggerTop <= 0 && Math.abs(triggerTop) < scrollDistance) {
        progress = Math.abs(triggerTop) / scrollDistance;
      } else if (triggerTop > 0) {
        progress = 0; 
      } else {
        progress = 1;
      }

      setTranslateX(-(progress * maxTranslate));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="work" className="relative bg-nurture-medium text-white transition-colors duration-500">
      <div ref={triggerRef} className="h-[150vh] md:h-[400vh] relative">
        
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
          
          <div className="container mx-auto px-6 mb-2 md:mb-12 flex justify-between items-end shrink-0">
             <div>
                <span className="font-mono text-xs md:text-sm text-nurture-accent uppercase tracking-wider">{t('portfolio.label')}</span>
                <h2 className="font-display text-3xl md:text-7xl font-bold mt-2 text-white">{t('portfolio.title')}</h2>
             </div>
             <div className="hidden md:block text-right">
                <span className="block font-mono text-xs uppercase tracking-widest opacity-50">{t('portfolio.drag')}</span>
                <span className="block font-display text-xl">{t('portfolio.quality')}</span>
             </div>
          </div>

          <div 
            ref={sectionRef}
            className="flex px-6 md:px-24 gap-4 md:gap-16 items-center w-max"
            style={{ transform: `translateX(${translateX}px)`, transition: 'transform 0.1s linear' }}
          >
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="group relative w-[85vw] md:w-[700px] h-[45vh] md:h-[65vh] flex-shrink-0 cursor-pointer"
                onClick={() => onProductClick && onProductClick(project.id)}
              >
                {/* Card Background set to Nurture Dark to contrast with Medium background */}
                <div className="w-full h-full overflow-hidden bg-nurture-dark relative shadow-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  
                  {/* Hover Overlay Hint */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                         <span className="font-mono text-xs uppercase text-white">View</span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-4 md:p-8 bg-gradient-to-t from-black/80 to-transparent">
                   <div className="flex justify-between items-end transform translate-y-2 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div>
                        <span className="font-mono text-nurture-accent text-[10px] md:text-xs mb-1 md:mb-2 block">0{index + 1} — {project.year}</span>
                        <h3 className="font-display text-2xl md:text-5xl font-bold uppercase">{project.title}</h3>
                        <p className="font-mono text-[10px] md:text-sm text-gray-300 mt-1">{project.category}</p>
                      </div>
                      <button className="hidden md:flex w-16 h-16 rounded-full bg-white text-black items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110">
                        <ArrowUpRight size={24} />
                      </button>
                   </div>
                </div>
              </div>
            ))}

            {/* End Card - Direct Download */}
            <div className="w-[80vw] md:w-[400px] h-[45vh] md:h-[65vh] flex items-center justify-center border-l border-white/10 ml-6 md:ml-12 shrink-0">
               <a 
                 href="/Panasa_Commodities_Catalog.pdf" 
                 download="Panasa_Commodities_Catalog.pdf"
                 className="group flex flex-col items-center justify-center text-center p-8 hover:text-nurture-accent transition-colors w-full h-full"
               >
                 <Download size={48} className="mb-6 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                 <span className="font-display text-2xl md:text-4xl font-bold leading-tight">
                   {t('common.downloadCatalog')}
                 </span>
                 <span className="mt-4 font-mono text-xs uppercase tracking-widest opacity-50 border border-current px-3 py-1 rounded-full">
                   PDF Download
                 </span>
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
