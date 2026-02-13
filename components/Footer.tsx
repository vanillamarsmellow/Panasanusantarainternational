
import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Copy, Globe, ShieldCheck, MapPin, Clock, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import RevealOnScroll from './RevealOnScroll';

interface FooterProps {
  onNavigate: (view: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState(new Date());
  const { t } = useLanguage();

  useEffect(() => {
    // Update every second to ensure accurate time display
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('export@panasa.global');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const globalTimes = [
    { city: 'Kendari', zone: 'Asia/Makassar' },
    { city: 'London', zone: 'Europe/London' },
    { city: 'New York', zone: 'America/New_York' },
    { city: 'China', zone: 'Asia/Shanghai' }, // Beijing time
  ];

  return (
    <footer id="footer" className="bg-nurture-dark text-nurture-light border-t border-white/10 font-sans overflow-hidden flex flex-col">
      
      <div className="container mx-auto px-6 pt-12 md:pt-20 pb-8 relative z-10 flex-grow">
        
        <div className="flex flex-col lg:flex-row justify-between items-start mb-8 md:mb-20 gap-6 md:gap-12">
          <div className="max-w-2xl">
            <RevealOnScroll>
              <h2 className="font-display text-4xl md:text-7xl font-bold leading-[0.95] md:leading-[0.9] tracking-tight mb-4 md:mb-8 break-words hyphens-auto">
                {t('footer.title1')} <br/>
                <span className="text-gray-600">{t('footer.title2')}</span>
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <p className="text-lg md:text-xl font-light text-gray-400 max-w-lg leading-relaxed">
                {t('footer.desc')}
              </p>
            </RevealOnScroll>
          </div>

          <div className="w-full lg:w-auto mt-4 md:mt-0">
            <button 
              onClick={handleCopyEmail}
              className="group relative overflow-hidden bg-white/5 hover:bg-nurture-accent/10 border border-white/10 hover:border-nurture-accent transition-all duration-300 rounded-lg p-6 md:p-8 w-full md:w-[450px] text-left"
            >
              <div className="flex justify-between items-start mb-4 md:mb-8">
                <span className="font-mono text-xs uppercase tracking-widest text-gray-400 group-hover:text-nurture-accent">{t('footer.inquiries')}</span>
                <Copy size={16} className="text-gray-500 group-hover:text-nurture-accent" />
              </div>
              <div className="space-y-1">
                <span className="block text-2xl md:text-4xl font-display font-bold text-white group-hover:text-nurture-accent transition-colors">
                  export@panasa.com
                </span>
                <span className="block font-mono text-xs text-nurture-accent transition-opacity duration-300 opacity-0 lg:opacity-100">
                   {copied ? 'Address copied to clipboard' : ''}
                </span>
                <span className={`lg:hidden block font-mono text-xs text-nurture-accent transition-opacity duration-300 ${copied ? 'opacity-100' : 'opacity-0'}`}>
                  Address copied to clipboard
                </span>
              </div>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 border-t border-white/10 pt-8 md:pt-16">
          
          <div className="space-y-4 md:space-y-6">
            <h4 className="font-mono text-xs text-nurture-accent uppercase tracking-widest">{t('footer.office')}</h4>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                 <MapPin className="shrink-0 mt-1 text-gray-500" size={16} />
                 <div>
                   <strong className="block text-white text-sm mb-1">Kendari Office</strong>
                   <p className="text-sm text-gray-400 leading-relaxed">
                     Kompleks Perumahan Kendari Indah<br/>
                     Blok F/8, Kendari<br/>
                     Sulawesi Tenggara
                   </p>
                 </div>
              </div>
              <div className="flex gap-4 items-start">
                 <Phone className="shrink-0 mt-1 text-gray-500" size={16} />
                 <div>
                   <strong className="block text-white text-sm mb-1">Phone / WhatsApp</strong>
                   <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 leading-relaxed hover:text-white transition-colors">
                     +62 812 3456 7890
                   </a>
                 </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
             <h4 className="font-mono text-xs text-nurture-accent uppercase tracking-widest">{t('footer.company')}</h4>
             <ul className="space-y-2">
                {['Our Story', 'Commodities Catalog', 'Careers'].map((item) => (
                  <li key={item}>
                    <a 
                      href={item === 'Commodities Catalog' ? '/Panasa_Commodities_Catalog.pdf' : '#'}
                      download={item === 'Commodities Catalog' ? "Panasa_Commodities_Catalog.pdf" : undefined}
                      onClick={(e) => { 
                        if (item === 'Commodities Catalog') return; 
                        e.preventDefault(); 
                        if (item === 'Our Story') onNavigate('about');
                      }}
                      className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group w-full text-left"
                    >
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-nurture-accent" />
                      {t(`footer.links.${item}`)}
                    </a>
                  </li>
                ))}
             </ul>
          </div>

          <div className="space-y-4 md:space-y-6">
             <h4 className="font-mono text-xs text-nurture-accent uppercase tracking-widest">{t('footer.connect')}</h4>
             <div className="grid grid-cols-2 gap-3 md:gap-4">
                {['LinkedIn', 'Instagram', 'WhatsApp', 'WeChat'].map((social) => (
                   <a key={social} href="#" className="flex items-center justify-between p-3 border border-white/10 rounded hover:bg-white/5 hover:border-nurture-accent transition-colors group">
                      <span className="text-sm text-gray-300">{social}</span>
                      <ArrowUpRight size={14} className="text-gray-600 group-hover:text-nurture-accent" />
                   </a>
                ))}
             </div>
          </div>

        </div>

        {/* Copyright & System Status Line */}
        <div className="mt-8 md:mt-20 pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] md:text-xs font-mono uppercase tracking-wider text-gray-500">
           
           <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 order-2 md:order-1">
              <span>{t('footer.rights')}</span>
              <button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors">{t('footer.privacy')}</button>
              <button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors">{t('footer.terms')}</button>
              {/* New Cookie Settings Button */}
              <button 
                onClick={() => window.dispatchEvent(new Event('open-cookie-settings'))} 
                className="hover:text-white transition-colors"
              >
                {t('cookie.settings')}
              </button>
           </div>

           {/* System Online Moved Here */}
           <div className="flex items-center gap-3 text-nurture-accent/80 order-1 md:order-2">
                <div className="w-1.5 h-1.5 bg-nurture-accent rounded-full animate-pulse"></div>
                <span>{t('footer.system')}</span>
           </div>
        </div>

      </div>

      <div className="w-full flex justify-center items-end mt-0 overflow-hidden pointer-events-none select-none border-t border-white/5 pt-8 md:pt-12 pb-4 md:pb-6">
          <h1 className="font-display font-black text-[13vw] md:text-[9.5vw] leading-[0.8] tracking-tighter text-nurture-accent opacity-100 mix-blend-normal">
            PANASA
          </h1>
      </div>

      {/* Global Time Zones Bar (System Online removed from here) */}
      <div className="w-full border-t border-white/5 py-4 md:py-6 bg-black/40">
        <div className="container mx-auto px-6 flex flex-nowrap overflow-x-auto md:overflow-visible justify-start md:justify-center items-center gap-8 md:gap-16 no-scrollbar">
            
            {/* Global Cities - KEPT AS REQUESTED */}
            {globalTimes.map((item) => (
              <div key={item.city} className="flex-shrink-0 flex items-center gap-3 font-mono text-[10px] md:text-xs uppercase tracking-widest text-gray-500">
                <span className="text-nurture-accent font-bold">{item.city}</span>
                <span className="opacity-70">{time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: item.zone, hour12: false })}</span>
              </div>
            ))}
        </div>
      </div>

    </footer>
  );
};

export default Footer;
