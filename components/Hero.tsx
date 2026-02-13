
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Parallax Effect Simple pada Background
    const handleScroll = () => {
      if (videoRef.current) {
        const scrolled = window.scrollY;
        // Geser video sedikit lebih lambat dari scroll (parallax)
        videoRef.current.style.transform = `scale(1.1) translateY(${scrolled * 0.5}px)`;
        // Blur video saat di-scroll ke bawah agar fokus ke konten berikutnya
        videoRef.current.style.filter = `brightness(0.6) blur(${Math.min(scrolled * 0.05, 10)}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger loaded animation
    setTimeout(() => setIsLoaded(true), 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToProducts = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      
      {/* 1. CINEMATIC BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover scale-110 transition-transform duration-75 ease-out will-change-transform"
          poster="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop"
        >
          <source src="https://videos.pexels.com/video-files/2824647/2824647-uhd_2560_1440_24fps.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay Gradient for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>
        
        {/* Noise/Grain Texture (Makes it look like a high-end render) */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none mix-blend-overlay" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}>
        </div>
      </div>

      {/* 2. CONTENT LAYER */}
      {/* UPDATE: Changed z-10 to z-30 to ensure content sits ON TOP of the bottom gradient */}
      {/* UPDATE: Increased pb-12 to pb-24/pb-28 to push content physically higher up */}
      <div className="relative z-30 container mx-auto px-6 h-full flex flex-col justify-between pt-32 pb-24 md:pb-28">
        
        {/* Top Info */}
        <div className={`flex justify-between items-start transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
           <div className="flex flex-col">
              <span className="font-mono text-xs text-nurture-accent uppercase tracking-widest mb-1">
                 ● {t('hero.liveMarket')}
              </span>
              <span className="font-display text-sm text-white/80">
                 Sulawesi, Indonesia
              </span>
           </div>
           <div className="hidden md:block text-right">
              <span className="font-mono text-xs text-white/60 uppercase tracking-widest block">
                 {t('hero.globalExport')}
              </span>
           </div>
        </div>

        {/* Center Typography (Clean & Massive) */}
        <div className="flex flex-col justify-center items-center w-full relative z-20">
           
           {/* Line 1: PREMIUM (Besar & Dominan) - Menggunakan Font Creative (Unbounded) */}
           <div className="overflow-hidden w-full text-center">
              <h1 className={`font-creative font-black text-[12vw] md:text-[11vw] leading-[0.85] tracking-tight text-white transition-transform duration-[1500ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${isLoaded ? 'translate-y-0' : 'translate-y-[120%]'} mix-blend-overlay`}>
                {t('hero.mainTitle')}
              </h1>
           </div>
           
           {/* Line 2: Nature's + COMMODITY (Sejajar / Satu Baris) */}
           <div className="flex items-baseline justify-center gap-2 md:gap-4 w-full -mt-2 md:-mt-4 overflow-hidden">
               <div className={`flex items-baseline transition-transform duration-[1500ms] delay-100 ease-[cubic-bezier(0.19,1,0.22,1)] ${isLoaded ? 'translate-y-0' : 'translate-y-[200%]'}`}>
                   <span className="font-display italic font-medium text-[5vw] md:text-[5vw] text-nurture-accent tracking-tight whitespace-nowrap">
                      {t('hero.subTitle1')}
                   </span>
                   {/* Spasi visual */}
                   <span className="w-2 md:w-4"></span>
                   <span className="font-creative font-bold text-[5vw] md:text-[5vw] text-white tracking-tighter whitespace-nowrap">
                      {t('hero.subTitle2')}
                   </span>
               </div>
           </div>
           
           {/* Description */}
           <div className={`mt-8 md:mt-12 max-w-lg md:text-center transition-opacity duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-lg md:text-xl font-light text-gray-200 leading-relaxed mx-auto">
                 {t('hero.desc')}
              </p>
           </div>
        </div>

        {/* Bottom Actions (Glassmorphism) */}
        <div className={`flex flex-col md:flex-row justify-between items-end gap-6 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
           
           {/* CTA Button */}
           <a 
              href="#work" 
              onClick={handleScrollToProducts}
              className="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-full pl-8 pr-2 py-2 flex items-center gap-4 hover:bg-white hover:text-black transition-all duration-500 w-full md:w-auto justify-between md:justify-start"
           >
              <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold">
                 {t('hero.cta')}
              </span>
              <span className="w-10 h-10 bg-nurture-accent text-nurture-dark rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                 <ArrowDown size={18} className="group-hover:rotate-[-45deg] transition-transform duration-300" />
              </span>
           </a>

           {/* Scroll Indicator */}
           <div className="hidden md:flex items-center gap-4 px-6 py-3 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
              <div className="flex gap-1 items-end h-4">
                 <div className="w-1 bg-nurture-accent h-2 animate-pulse"></div>
                 <div className="w-1 bg-nurture-accent h-4 animate-pulse delay-75"></div>
                 <div className="w-1 bg-nurture-accent h-3 animate-pulse delay-150"></div>
              </div>
              <span className="font-mono text-[10px] uppercase text-white/70">
                 {t('hero.scroll')}
              </span>
           </div>

        </div>

      </div>

      {/* 
          --- SEAMLESS TRANSITION GRADIENT --- 
          Z-Index 20: Tetap di atas video (z-0) tapi sekarang di bawah konten (z-30)
      */}
      <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 z-20 pointer-events-none bg-gradient-to-b from-transparent to-nurture-light dark:to-nurture-dark"></div>

    </section>
  );
};

export default Hero;
