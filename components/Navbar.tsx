
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Moon, Sun, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  openLang: () => void;
  currentLang: string;
  onNavigate: (view: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme, openLang, currentLang, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);
  const { t } = useLanguage();

  // Dynamic Nav Config using translation keys
  const navConfig = [
    { name: t('nav.Home'), href: '#', view: 'home', image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=800&auto=format&fit=crop' },
    { name: t('nav.About'), href: '#', view: 'about', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop' },
    { name: t('nav.Why Us'), href: '#', view: 'why-us', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop' },
    { name: t('nav.Work'), href: '#work', view: 'home', image: 'https://images.unsplash.com/photo-1626202266854-474c3e761623?q=80&w=800&auto=format&fit=crop' },
    { name: t('nav.Client'), href: '#', view: 'client-form', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop' },
    { name: t('nav.Sustainability'), href: '#sustainability', view: 'home', image: 'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=800&auto=format&fit=crop' },
    { name: t('nav.Contact'), href: '#footer', view: 'home', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  const handleLinkClick = (e: React.MouseEvent, item: typeof navConfig[0]) => {
    e.preventDefault();
    setMenuOpen(false);
    
    // Switch View Logic
    onNavigate(item.view);

    // If it's a section on the home page, scroll to it after a slight delay to allow rendering
    if (item.view === 'home' && item.href !== '#') {
      setTimeout(() => {
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 transition-all duration-500 pointer-events-none ${isScrolled ? 'pt-4 pb-4' : 'pt-6 pb-6'}`}
      >
          
          {/* 1. LEFT: Logo Area */}
          <div className="flex-shrink-0 pointer-events-auto z-50 relative">
             <a 
               href="#" 
               onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
               className="flex items-center group"
             >
               <img 
                 src="https://placehold.co/120x40/transparent/black?text=LOGO" 
                 alt="Panasa Logo" 
                 className={`
                    h-8 md:h-10 w-auto object-contain transition-all duration-300
                    ${isScrolled 
                      ? 'filter-none dark:invert'
                      : 'invert brightness-0'
                    }
                 `}
               />
             </a>
          </div>

          {/* 2. CENTER: Navigation Menu (Glassmorphic & Centered) */}
          <nav className={`
              hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
              items-center gap-1 px-3 py-2 rounded-full transition-all duration-500 pointer-events-auto
              ${isScrolled 
                ? 'bg-white/30 dark:bg-black/30 backdrop-blur-xl border border-white/20 shadow-lg' 
                : 'bg-white/10 backdrop-blur-md border border-white/10 shadow-sm'}
          `}>
            {navConfig.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className={`
                  px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-300
                  ${isScrolled 
                    ? 'text-nurture-dark dark:text-white hover:bg-white/20 dark:hover:bg-white/10' 
                    : 'text-white hover:bg-white/20'}
                `}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* 3. RIGHT: Actions (Glassmorphic) */}
          <div className={`
              pointer-events-auto z-50
              flex items-center gap-2 p-1.5 rounded-full transition-all duration-500
              ${isScrolled 
                ? 'bg-white/30 dark:bg-black/30 backdrop-blur-xl border border-white/20 shadow-lg' 
                : 'bg-white/10 backdrop-blur-md border border-white/10 shadow-sm'}
          `}>
              
              {/* Lang Switcher */}
              <button 
                onClick={openLang} 
                className={`
                   w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors font-mono text-[10px] md:text-xs uppercase
                   ${isScrolled 
                      ? 'hover:bg-white/20 dark:hover:bg-white/10 text-nurture-dark dark:text-white' 
                      : 'text-white hover:bg-white/20'}
                `}
              >
                {currentLang}
              </button>

              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme} 
                className={`
                   w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors
                   ${isScrolled 
                      ? 'hover:bg-white/20 dark:hover:bg-white/10 text-nurture-dark dark:text-white' 
                      : 'text-white hover:bg-white/20'}
                `}
              >
                {isDark ? <Sun size={14} className="md:w-4 md:h-4" /> : <Moon size={14} className="md:w-4 md:h-4" />}
              </button>

              {/* Mobile Menu Trigger */}
              <button 
                onClick={() => setMenuOpen(true)}
                className={`
                   md:hidden w-10 h-10 rounded-full flex items-center justify-center transition-colors
                   ${isScrolled 
                      ? 'bg-nurture-dark text-white dark:bg-white dark:text-black' 
                      : 'bg-white text-black'}
                `}
              >
                <Menu size={18} />
              </button>
          </div>

      </header>


      {/* 
         FULL SCREEN OVERLAY MENU
      */}
      <div 
        className={`fixed inset-0 z-[60] bg-nurture-dark text-nurture-light transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${menuOpen ? 'opacity-100 pointer-events-auto clip-path-open' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="absolute inset-0 flex flex-col md:flex-row">
          
          {/* LEFT: Navigation List */}
          <div className="w-full md:w-1/2 h-full p-6 md:p-20 flex flex-col justify-center relative z-20 bg-nurture-dark/95 backdrop-blur-sm md:bg-nurture-dark/90">
             <div className="flex justify-between items-center mb-8 md:hidden">
                {/* Mobile Menu Logo */}
                <img 
                   src="https://placehold.co/120x40/transparent/white?text=LOGO" 
                   alt="Panasa Logo" 
                   className="h-8 w-auto object-contain"
                />
                <button onClick={() => setMenuOpen(false)} className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-white/10 transition-colors">
                  <X size={20} className="text-white" />
                </button>
             </div>

             <nav className="flex flex-col gap-1 md:gap-2">
               {navConfig.map((link, idx) => (
                 <a 
                   key={link.name} 
                   href={link.href}
                   onClick={(e) => handleLinkClick(e, link)}
                   onMouseEnter={() => setHoveredLink(idx)}
                   onMouseLeave={() => setHoveredLink(null)}
                   className="group flex items-center gap-4 py-1.5 md:py-2"
                 >
                   <span className={`
                     font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter transition-all duration-300
                     ${hoveredLink !== null && hoveredLink !== idx ? 'opacity-30 blur-[2px]' : 'opacity-100 blur-0'}
                     ${hoveredLink === idx ? 'translate-x-4 text-transparent text-stroke-white' : 'text-white'}
                   `}>
                     {link.name}
                   </span>
                 </a>
               ))}
             </nav>

             <div className="mt-8 md:mt-24 pt-6 md:pt-8 border-t border-white/10 flex gap-6 md:gap-8">
               <div className="flex flex-col">
                 <span className="text-[10px] md:text-xs font-mono text-gray-500 mb-1">Email</span>
                 <a href="mailto:hello@panasa.com" className="text-sm hover:text-nurture-accent transition-colors">hello@panasa.global</a>
               </div>
               <div className="flex flex-col">
                 <span className="text-[10px] md:text-xs font-mono text-gray-500 mb-1">Office</span>
                 <span className="text-sm">Kendari, Indonesia</span>
               </div>
             </div>
          </div>

          {/* RIGHT: Image Reveal Area (Desktop Only) */}
          <div className="hidden md:block w-1/2 h-full relative overflow-hidden bg-gray-900">
             <button 
               onClick={() => setMenuOpen(false)}
               className="absolute top-10 right-10 z-30 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-nurture-accent hover:scale-110 transition-all duration-300 group"
             >
               <X size={32} className="text-white group-hover:rotate-90 transition-transform duration-300" />
             </button>

             {navConfig.map((link, idx) => (
               <div 
                 key={link.name}
                 className={`absolute inset-0 transition-opacity duration-500 ease-out ${hoveredLink === idx ? 'opacity-100' : 'opacity-0'}`}
               >
                 <img 
                   src={link.image} 
                   alt={link.name} 
                   className="w-full h-full object-cover transform scale-105"
                 />
                 <div className="absolute inset-0 bg-nurture-dark/20"></div>
               </div>
             ))}

             <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${hoveredLink === null ? 'opacity-100' : 'opacity-0'}`}>
                <div className="text-center">
                   <div className="w-64 h-64 rounded-full border border-white/10 flex items-center justify-center animate-spin-slow">
                      <div className="w-56 h-56 rounded-full border border-white/5 border-dashed"></div>
                   </div>
                   <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-xs uppercase tracking-[0.3em] text-white/50">
                     Navigation
                   </span>
                </div>
             </div>
          </div>

        </div>
      </div>
      
      <style>{`
        .text-stroke-white {
          -webkit-text-stroke: 1px white;
          color: transparent;
        }
        .clip-path-open {
          clip-path: circle(150% at 100% 0);
        }
      `}</style>
    </>
  );
};

export default Navbar;
