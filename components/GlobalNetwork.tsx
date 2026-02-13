
import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Radio } from 'lucide-react';

const GlobalNetwork: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Map Nodes Configuration 
  // Adjusted slightly to match standard Mercator projection
  const nodes = [
    { id: 1, x: 150, y: 180, name: 'Los Angeles' }, 
    { id: 2, x: 280, y: 170, name: 'New York' },    
    { id: 3, x: 320, y: 360, name: 'Sao Paulo' },   
    { id: 4, x: 500, y: 130, name: 'Hamburg' },     
    { id: 5, x: 530, y: 400, name: 'Cape Town' },   
    { id: 6, x: 630, y: 210, name: 'Dubai' },       
    { id: 7, x: 820, y: 180, name: 'Shanghai' },    
    { id: 8, x: 920, y: 170, name: 'Tokyo' },       
    { id: 9, x: 820, y: 310, name: 'Sulawesi' },    // Origin
    { id: 10, x: 920, y: 400, name: 'Sydney' },     
    { id: 11, x: 720, y: 240, name: 'Mumbai' },     
  ];

  // Connections from Sulawesi (id 9) to others and inter-hub connections
  const connections = [
    [9, 7], [7, 8], // Indo -> China -> Japan
    [9, 10],        // Indo -> Aus
    [9, 6], [6, 4], // Indo -> Dubai -> Europe
    [6, 5],         // Dubai -> Africa
    [4, 2], [2, 1], // Europe -> US East -> US West
    [4, 3],         // Europe -> Brazil
    [8, 1],         // Japan -> US West (Pacific)
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-nurture-medium text-white overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-xl">
             <span className="font-mono text-sm text-nurture-accent uppercase tracking-widest mb-4 block flex items-center gap-2">
               <Radio size={14} className="animate-pulse text-white"/> {t('network.label')}
             </span>
             <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-white">
               {t('network.title')}
             </h2>
             <p className="text-white/90 text-lg font-light leading-relaxed">
               {t('network.desc')}
             </p>
          </div>

          <div className="grid grid-cols-2 gap-8 border-t border-white/20 pt-6 w-full md:w-auto">
             <div>
                <span className="block font-display text-3xl font-bold text-white">20+</span>
                <span className="text-[10px] text-white/70 uppercase tracking-wider">{t('network.stats.countries')}</span>
             </div>
             <div>
                <span className="block font-display text-3xl font-bold text-white">5</span>
                <span className="text-[10px] text-white/70 uppercase tracking-wider">{t('network.stats.continents')}</span>
             </div>
          </div>
        </div>

        {/* Cinematic Map Visualization */}
        <div className="relative w-full aspect-[1.8/1] md:aspect-[2.1/1] bg-nurture-dark rounded-xl overflow-hidden group shadow-2xl border border-white/5">
          
          {/* SVG Map Container */}
          <svg 
            viewBox="0 0 1000 500" 
            className="w-full h-full object-cover"
            preserveAspectRatio="xMidYMid slice"
          >
             {/* 1. REALISTIC "EARTH AT NIGHT" BACKGROUND */}
             {/* Using a high-res NASA-style dark earth texture for that premium look */}
             <image 
               href="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop" 
               x="0" 
               y="0" 
               width="1000" 
               height="500" 
               preserveAspectRatio="none"
               style={{ opacity: 0.5 }}
             />
             
             {/* Gradient Overlay to focus center, matching new brand color (Deep Emerald) */}
             <defs>
                <radialGradient id="mapGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#022c22" stopOpacity="0" />
                    <stop offset="100%" stopColor="#022c22" stopOpacity="0.8" />
                </radialGradient>
             </defs>
             <rect x="0" y="0" width="1000" height="500" fill="url(#mapGradient)" />

             {/* 2. Connections (Lime Lines) */}
             <g className="stroke-nurture-accent stroke-[0.8] fill-none opacity-60">
                {connections.map(([start, end], i) => {
                  // Create slight curve for realism
                  const x1 = nodes[start].x;
                  const y1 = nodes[start].y;
                  const x2 = nodes[end].x;
                  const y2 = nodes[end].y;
                  const mx = (x1 + x2) / 2;
                  const my = (y1 + y2) / 2 - 20; // Curve upward

                  return (
                    <path 
                        key={i}
                        d={`M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`}
                        className="animate-draw"
                        strokeDasharray="4 4"
                    />
                  );
                })}
             </g>

             {/* 3. Sleek Nodes */}
             {nodes.map((node) => {
               const isOrigin = node.name === 'Sulawesi';
               return (
                <g key={node.id} className="group cursor-pointer">
                    
                    {/* Origin Pulse */}
                    {isOrigin && (
                        <circle cx={node.x} cy={node.y} r="15" className="fill-nurture-accent opacity-30 animate-ping" />
                    )}

                    {/* Dot */}
                    <circle 
                    cx={node.x} 
                    cy={node.y} 
                    r={isOrigin ? 4 : 2.5} 
                    className={`transition-all duration-300 ${isOrigin ? 'fill-nurture-accent' : 'fill-white group-hover:fill-nurture-accent group-hover:r-4'}`}
                    />

                    {/* Text Label (Simple & Clean) */}
                    <text 
                        x={node.x} 
                        y={node.y + 15} 
                        textAnchor="middle" 
                        className={`
                            font-mono text-[8px] uppercase tracking-widest fill-gray-300 transition-all duration-300 
                            ${isOrigin ? 'fill-nurture-accent font-bold' : 'opacity-0 group-hover:opacity-100 group-hover:translate-y-1'}
                        `}
                    >
                        {node.name}
                    </text>
                </g>
               );
             })}

          </svg>

        </div>

      </div>
      
      <style>{`
        .animate-draw {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: dash 5s linear forwards infinite;
          opacity: 0.5;
        }
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default GlobalNetwork;
