import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [hide, setHide] = useState(false);

  // Kata-kata yang lebih variatif: Muncul -> Naik -> Hilang
  const words = [
    "ORIGIN",
    "HARVEST", 
    "SORTING",
    "PROCESS",
    "COCOA", 
    "COFFEE", 
    "COPRA", 
    "CHARCOAL", 
    "GLOBAL",
    "NURTURE"
  ];

  useEffect(() => {
    // Total duration of the loading phase (approx)
    const totalDuration = 2400; 
    const wordDuration = totalDuration / words.length;

    // Counter Animation (0 to 100)
    const steps = 50;
    const intervalTime = totalDuration / steps;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          return 100;
        }
        return next;
      });
    }, intervalTime);

    // Word Cycle Animation
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => {
        if (prev === words.length - 1) return prev;
        return prev + 1;
      });
    }, wordDuration);

    // Trigger Exit Animation
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      clearInterval(timer);
      clearInterval(wordInterval);
    }, totalDuration + 200);

    // Cleanup and notify App
    const completeTimer = setTimeout(() => {
      onComplete();
      setHide(true);
    }, totalDuration + 1200); // Wait for curtain slide up

    return () => {
      clearInterval(timer);
      clearInterval(wordInterval);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [words.length, onComplete]);

  if (hide) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col justify-between p-6 md:p-12 bg-nurture-dark text-nurture-light transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${isExiting ? '-translate-y-full' : 'translate-y-0'}`}
    >
      {/* Top Bar */}
      <div className="flex justify-between items-start font-mono text-xs uppercase tracking-widest opacity-50">
        <span>Indonesian Origin</span>
        <span>Est. 2025</span>
      </div>

      {/* Center Word Animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center overflow-hidden h-[15vw] md:h-[13vw]">
        {/* 
           KEY PROP is crucial here. 
           When 'key' changes, React unmounts the old element and mounts the new one,
           triggering the CSS animation defined in index.html (animate-slide-cycle) from the start.
        */}
        <h1 
          key={words[currentWordIndex]} 
          className="font-display font-bold text-[10vw] leading-none tracking-tighter uppercase animate-slide-cycle"
        >
            {words[currentWordIndex]}
        </h1>
      </div>

      {/* Bottom Bar / Counter */}
      <div className="flex justify-between items-end">
        <div className="font-mono text-xs uppercase tracking-widest max-w-[200px] hidden md:block opacity-50">
          Connecting resources...
        </div>
        <div className="font-display text-6xl md:text-8xl font-bold leading-none">
          {Math.round(count)}%
        </div>
      </div>
    </div>
  );
};

export default Preloader;