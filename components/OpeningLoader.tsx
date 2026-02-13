
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface OpeningLoaderProps {
  onComplete: () => void;
}

const OpeningLoader: React.FC<OpeningLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [hide, setHide] = useState(false);
  const { t } = useLanguage();

  const words = (t('loader.words') as string[]);

  useEffect(() => {
    const totalDuration = 2000; // 2 seconds loading
    const intervalTime = 20; 
    const totalSteps = totalDuration / intervalTime;
    
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min((currentStep / totalSteps) * 100, 100);
      
      setProgress(newProgress);

      // Logic to switch word based on progress
      const wordIndex = Math.floor((newProgress / 100) * (words.length - 1));
      setCurrentWordIndex(Math.min(wordIndex, words.length - 1));

      if (currentStep >= totalSteps) {
        clearInterval(timer);
        
        // Start exit animation
        setTimeout(() => {
          setIsExiting(true);
        }, 200);

        // Notify App loading is done
        setTimeout(() => {
          onComplete();
        }, 1000);

        // Remove from DOM
        setTimeout(() => {
          setHide(true);
        }, 1500);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete, words]);

  if (hide) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-nurture-dark flex flex-col justify-between px-6 py-8 md:p-12 transition-transform duration-[1000ms] ease-[cubic-bezier(0.87,0,0.13,1)] ${isExiting ? '-translate-y-full' : 'translate-y-0'}`}
    >
      {/* Top Bar Info - Updated to justify-end and removed the left text block */}
      <div className="flex justify-end items-start font-mono text-[10px] md:text-xs text-nurture-light/60 uppercase tracking-widest">
        <div className="text-right flex flex-col gap-1">
            <span>{t('loader.est')}</span>
            <span>{t('loader.country')}</span>
        </div>
      </div>

      {/* CENTER KINETIC TYPOGRAPHY */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center overflow-hidden">
        <div className="relative h-[20vh] flex items-center justify-center">
            {words.map((word, index) => (
                <h1 
                    key={index}
                    className={`
                        absolute font-display font-black leading-none tracking-tighter text-nurture-accent transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
                        text-[12vw] md:text-[8vw]
                        ${index === currentWordIndex 
                            ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                            : index < currentWordIndex 
                                ? 'opacity-0 -translate-y-[30px] scale-95 blur-sm' 
                                : 'opacity-0 translate-y-[30px] scale-105 blur-sm'
                        }
                    `}
                >
                    {word}
                </h1>
            ))}
        </div>
      </div>

      {/* Bottom Bar / Loader Line */}
      <div className="w-full">
        <div className="flex justify-between items-end mb-2 font-mono text-xs md:text-sm text-nurture-light uppercase">
            <span className="tracking-widest hidden md:block text-nurture-light/50">{t('loader.quality')}</span>
            <span className="font-display text-4xl md:text-6xl font-bold text-nurture-light">{Math.round(progress)}%</span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
            <div 
                className="h-full bg-nurture-accent transition-all duration-100 ease-linear shadow-[0_0_15px_rgba(197,160,89,0.5)]"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
      </div>
    </div>
  );
};

export default OpeningLoader;
