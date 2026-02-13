
import React, { useRef, useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ProductReveal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const { t } = useLanguage();

  const text = t('product_reveal.text');
  
  const words = text.split(" ");

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const element = containerRef.current;
      const { top, height } = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Logic: Start revealing when element enters viewport, finish when it leaves
      // Using a larger scroll distance to make the reading feel natural
      const start = windowHeight * 0.8; 
      const end = -height * 0.5;
      
      const scrollDistance = start - end;
      const currentPos = start - top;
      
      let newProgress = currentPos / scrollDistance;
      
      // Clamp between 0 and 1
      newProgress = Math.max(0, Math.min(1, newProgress));

      setProgress(newProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative bg-nurture-dark text-nurture-light h-[120vh] md:h-[250vh]"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Added h-full and flex column to ensure centering and prevent cut-off */}
        <div className="w-full h-full flex flex-col justify-center container mx-auto px-6 md:px-20 relative z-10 py-12 md:py-0">
          <div className="max-w-6xl mx-auto text-center md:text-left leading-snug md:leading-tight">
            {words.map((word, i) => {
              // Calculate activation threshold for this specific word
              // We add a small buffer so they don't all trigger instantly
              const threshold = i / words.length;
              
              const isActive = progress > threshold;
              
              return (
                <span 
                  key={i}
                  // Adjusted font sizes for better responsiveness (text-2xl on mobile) and added py-1
                  className="font-display font-bold text-2xl sm:text-4xl md:text-6xl lg:text-7xl inline-block mr-2 md:mr-4 mb-2 transition-all duration-300 py-1"
                  style={{
                    // If active: Solid White.
                    // If inactive: Transparent with White/Grey Stroke (Outline)
                    color: isActive ? '#ffffff' : 'transparent',
                    WebkitTextStroke: isActive ? '0px' : '1px rgba(255, 255, 255, 0.3)',
                    // Optional: slight blur on inactive words for depth
                    filter: isActive ? 'blur(0px)' : 'blur(0.5px)',
                    opacity: isActive ? 1 : 0.6
                  }}
                >
                  {word}
                </span>
              );
            })}
          </div>
        </div>
        
        {/* Background Element subtle */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-nurture-accent/20 rounded-full blur-[120px]"></div>
        </div>
      </div>
    </section>
  );
};

export default ProductReveal;
