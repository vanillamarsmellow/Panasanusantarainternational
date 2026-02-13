
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Philosophy: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Deteksi mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const itemsData = t('philosophy.items') as any[];
  
  const items = itemsData.map((item, index) => ({
    id: index + 1,
    title: item.title,
    description: item.desc, 
    image: [
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop", 
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800&auto=format&fit=crop", 
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop", 
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop", 
        "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=800&auto=format&fit=crop" 
    ][index]
  }));

  // Logika Scroll Baru: Deteksi Index Saja
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const { top } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Hitung kita sudah scroll berapa persen melewati container ini
      // Kita beri sedikit buffer negatif agar slide 1 aktif tepat saat masuk
      const progress = -top / windowHeight;
      
      // Tentukan index aktif (Setiap 100vh / 1 layar = 1 slide)
      let newIndex = Math.floor(progress + 0.3); // +0.3 agar trigger sedikit lebih awal
      
      // Clamp index agar tidak error
      newIndex = Math.max(0, Math.min(newIndex, items.length - 1));
      
      setActiveIndex(newIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items.length]);

  return (
    <section 
      ref={containerRef} 
      className="relative"
      style={{ 
        // Tinggi total section = jumlah item x tinggi layar
        height: `${items.length * 100}vh`,
        backgroundColor: '#064e3b'
      }} 
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#064e3b]">
        
        {/* Header Label Static */}
        <div className="absolute top-6 left-6 md:top-8 md:left-28 z-[60] pointer-events-none mix-blend-overlay">
           <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/50 border-l border-white/30 pl-3">
             Our Philosophy
           </span>
        </div>

        {/* Sidebar Indicator */}
        <div className="hidden md:flex absolute md:left-12 top-1/2 -translate-y-1/2 z-[70] flex-col items-center gap-4">
             <div className="w-[2px] h-40 bg-white/10 rounded-full overflow-hidden relative">
                <div 
                    className="absolute top-0 left-0 w-full bg-nurture-accent shadow-[0_0_15px_rgba(132,204,22,0.8)] transition-all duration-500 ease-out"
                    style={{ 
                        height: `${((activeIndex + 1) / items.length) * 100}%` 
                    }}
                />
             </div>
        </div>

        {items.map((item, index) => {
           const isActive = index === activeIndex;
           const isPast = index < activeIndex;

           // Split deskripsi menjadi kalimat
           const sentences = item.description.match(/[^\.!\?]+[\.!\?]+/g) || [item.description];

           // Warna & Styling khusus per slide
           let backgroundColor = '#064e3b';
           let textColor = 'text-white';
           let descColor = 'text-gray-300';
           let accentColor = 'text-nurture-accent';
           let lineColor = 'bg-white/20';
           let labelColor = 'text-white/60';
           let borderColor = 'border-white/10';
           let decorTextColor = 'text-white';

           if (index === 0) { 
               backgroundColor = '#FFFFFF';
               textColor = 'text-nurture-dark';
               descColor = 'text-nurture-medium';
               accentColor = 'text-nurture-medium';
               lineColor = 'bg-nurture-dark/20';
               labelColor = 'text-nurture-dark/60';
               borderColor = 'border-nurture-dark/10';
               decorTextColor = 'text-nurture-dark';
           } else if (index === 2) {
               backgroundColor = '#84cc16';
               textColor = 'text-nurture-dark';
               descColor = 'text-nurture-dark/80';
               accentColor = 'text-nurture-dark';
               lineColor = 'bg-nurture-dark/20';
               labelColor = 'text-nurture-dark/60';
               borderColor = 'border-nurture-dark/10';
               decorTextColor = 'text-nurture-dark';
           } else if (index === 3) {
               backgroundColor = '#022c22';
           }

           return (
             <div 
               key={item.id}
               className="absolute inset-0 w-full h-full flex flex-col justify-center"
               style={{
                 zIndex: index + 10,
                 backgroundColor: backgroundColor,
                 // Slide Logic: 
                 // Jika aktif: posisi normal (0)
                 // Jika belum aktif (index > active): ada di bawah (100%)
                 // Jika sudah lewat (index < active): diam di 0 atau naik sedikit (-20% parallax effect optional, disini kita buat 0 agar tumpuk rapi)
                 transform: isActive || isPast ? 'translateY(0%)' : 'translateY(100%)',
                 transition: 'transform 1.0s cubic-bezier(0.77, 0, 0.175, 1)', // Easing mewah
                 opacity: isPast ? 0 : 1 // Sembunyikan slide yang sudah lewat agar tidak berat
               }}
             >
                <div className="relative w-full h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24 md:pl-32">
                    
                    {/* LEFT SIDE: IMAGE */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-start items-center h-[35vh] md:h-auto order-1 md:order-1 relative">
                        <div className={`absolute -left-4 md:-left-6 top-10 w-[1px] h-20 md:h-32 hidden md:block ${index === 0 || index === 2 ? 'bg-nurture-dark/50' : 'bg-nurture-accent/50'}`}></div>
                        
                        {/* Wrapper Gambar */}
                        <div 
                            className="relative overflow-hidden bg-black"
                            style={{
                                width: 'var(--img-width)', 
                                height: 'var(--img-height)',
                                // ANIMASI GAMBAR:
                                // Tidak lagi pakai scroll pixel. Cukup check isActive.
                                // Jika aktif: buka (inset 0). Jika tidak: tutup (inset 100).
                                clipPath: isActive ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)',
                                transition: 'clip-path 1.5s cubic-bezier(0.19, 1, 0.22, 1)', // Durasi lambat & smooth
                                transitionDelay: isActive ? '0.2s' : '0s' // Delay dikit biar slide masuk dulu baru gambar buka
                            }}
                        >
                            <img 
                                src={item.image} 
                                alt={item.title} 
                                className="w-full h-full object-cover opacity-90 contrast-110"
                                style={{
                                    transform: isActive ? 'scale(1.0)' : 'scale(1.3)',
                                    transition: 'transform 2s ease-out'
                                }}
                            />
                            <div className="absolute inset-0 bg-nurture-medium/20 mix-blend-multiply"></div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: CONTENT */}
                    <div className="w-full md:w-1/2 flex flex-col justify-start md:justify-center items-start text-left order-2 md:order-2 h-auto md:h-full relative pt-2 md:pt-0">
                        <div className="relative z-20 w-full md:max-w-md">
                            
                            {/* Header Group */}
                            <div 
                                style={{ 
                                    opacity: isActive ? 1 : 0, 
                                    transform: isActive ? 'translateY(0)' : 'translateY(30px)',
                                    transition: 'opacity 1s ease-out, transform 1s ease-out',
                                    transitionDelay: '0.4s' // Muncul setelah gambar mulai membuka
                                }}
                            >
                                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-6">
                                    <span className={`font-display text-2xl md:text-4xl font-bold ${accentColor}`}>0{index + 1}</span>
                                    <div className={`h-[1px] w-8 md:w-12 ${lineColor}`}></div>
                                    <span className={`font-mono text-[9px] md:text-xs uppercase tracking-widest ${labelColor}`}>Values</span>
                                </div>

                                <h3 className={`font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4 md:mb-6 leading-tight ${textColor}`}>
                                    {item.title}
                                </h3>
                            </div>
                            
                            {/* Description - Otomatis Muncul Per Kalimat */}
                            <div className={`relative z-20 pl-4 border-l ${borderColor} mb-2 md:mb-0`}>
                                <p className={`text-sm md:text-lg font-light leading-relaxed ${descColor}`}>
                                    {sentences.map((sentence: string, sIdx: number) => {
                                        // Stagger logic otomatis
                                        // Base delay (0.6s) + (urutan kalimat * 0.5s)
                                        // Kalimat akan muncul satu per satu dengan jeda yang enak dibaca
                                        const delay = 600 + (sIdx * 500); 

                                        return (
                                            <span 
                                                key={sIdx}
                                                style={{
                                                    display: 'inline-block',
                                                    marginRight: '4px',
                                                    opacity: isActive ? 1 : 0,
                                                    transform: isActive ? 'translateY(0)' : 'translateY(10px)',
                                                    // Transisi CSS murni
                                                    transition: `opacity 1s ease, transform 1s ease`,
                                                    transitionDelay: isActive ? `${delay}ms` : '0ms'
                                                }}
                                            >
                                                {sentence}
                                            </span>
                                        );
                                    })}
                                </p>
                            </div>
                        </div>

                        {/* DECORATIVE TYPOGRAPHY */}
                        <div className="hidden md:block absolute left-0 bottom-12 w-full opacity-[0.05] pointer-events-none select-none z-0">
                             <h2 className={`font-display font-black text-6xl tracking-tighter leading-none uppercase ${decorTextColor}`}>
                                 {item.title}
                             </h2>
                        </div>
                        <div className="md:hidden relative mt-10 w-full opacity-[0.05] select-none pointer-events-none z-0">
                            <h2 className={`font-display font-black text-3xl tracking-tighter leading-none uppercase break-words ${decorTextColor}`}>
                                {item.title}
                            </h2>
                        </div>
                    </div>
                </div>
             </div>
           );
        })}
      </div>
      <style>{`
        :root { --img-width: 100%; --img-height: 280px; }
        @media (min-width: 768px) { :root { --img-width: 380px; --img-height: 500px; } }
      `}</style>
    </section>
  );
};

export default Philosophy;
