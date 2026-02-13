
import React, { useEffect, useState } from 'react';

interface PageTransitionProps {
  isActive: boolean;
  targetName: string;
}

const PageTransition: React.FC<PageTransitionProps> = ({ isActive, targetName }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isActive) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[120] pointer-events-none flex flex-col items-center justify-center overflow-hidden`}
    >
      {/* Background Layers - Staggered Slide */}
      <div 
        className={`absolute inset-0 bg-nurture-dark transition-transform duration-[1000ms] ease-[cubic-bezier(0.87,0,0.13,1)] ${
          isActive ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ transform: isActive ? 'translateY(0%)' : 'translateY(-100%)' }}
      >
        {/* Animated Noise Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}>
        </div>
      </div>

      {/* Content Center */}
      <div className={`relative z-10 text-center transition-all duration-500 ${isActive ? 'opacity-100 scale-100 blur-0 delay-500' : 'opacity-0 scale-95 blur-md'}`}>
         <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-[1px] bg-nurture-accent animate-pulse"></div>
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.5em] text-nurture-accent">
              Navigating to
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white uppercase tracking-tighter">
              {targetName || 'Panasa'}
            </h2>
            <div className="mt-4 flex items-center gap-2 font-mono text-[9px] text-white/30 uppercase tracking-widest">
               <span>Origin</span>
               <span className="w-1 h-1 rounded-full bg-nurture-accent animate-ping"></span>
               <span>Global</span>
            </div>
         </div>
      </div>

      {/* Decorative Tabular Progress Line */}
      <div className={`absolute bottom-0 left-0 h-1 bg-nurture-accent transition-all duration-[1500ms] ease-in-out ${isActive ? 'w-full' : 'w-0'}`}></div>
    </div>
  );
};

export default PageTransition;
