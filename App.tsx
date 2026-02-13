
import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeSection from './components/MarqueeSection';
import About from './components/About';
import AboutPage from './components/AboutPage';
import WhyChooseUsPage from './components/WhyChooseUsPage'; 
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsPage from './components/TermsPage';
import Portfolio from './components/Portfolio';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import GlobalNetwork from './components/GlobalNetwork';
import Sustainability from './components/Sustainability';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import OpeningLoader from './components/OpeningLoader'; 
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor'; 
import ProductReveal from './components/ProductReveal'; 
import ProductDetailPage from './components/ProductDetailPage';
import ClientFormPage from './components/ClientFormPage';
import PageTransition from './components/PageTransition';
import SEO from './components/SEO';
import { useLanguage, LanguageProvider } from './contexts/LanguageContext';
import { LANGUAGES } from './constants';

const AppContent: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [langModalOpen, setLangModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionTarget, setTransitionTarget] = useState('');
  
  const { language, setLanguage, t } = useLanguage();

  // Router State
  const [currentView, setCurrentView] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  // Updated Navigation with Page Transition
  const handleNavigate = useCallback((view: string) => {
    if (view === currentView && view !== 'product-detail') return;

    setTransitionTarget(view);
    setIsTransitioning(true);

    // Wait for the wipe animation to cover the screen (approx 800ms-1000ms)
    setTimeout(() => {
      setCurrentView(view);
      window.scrollTo(0, 0);
      
      // Let the content render before revealing
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 1000);
  }, [currentView]);

  const handleProductClick = (productId: string) => {
    setTransitionTarget('Product Details');
    setIsTransitioning(true);
    
    setTimeout(() => {
      setSelectedProductId(productId);
      setCurrentView('product-detail');
      window.scrollTo(0, 0);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 1000);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'about': return <AboutPage />;
      case 'why-us': return <WhyChooseUsPage />;
      case 'privacy': return <PrivacyPolicyPage onNavigate={handleNavigate} />;
      case 'terms': return <TermsPage onNavigate={handleNavigate} />;
      case 'client-form': return <ClientFormPage onNavigate={handleNavigate} />;
      case 'product-detail':
        return selectedProductId ? (
          <ProductDetailPage 
            productId={selectedProductId} 
            onNavigate={handleNavigate} 
          />
        ) : null;
      case 'home':
      default:
        return (
          <>
            <SEO keywords={["Export Indonesia", "Sulawesi Agriculture"]} /> 
            <Hero />
            <MarqueeSection />
            <About /> 
            <Portfolio onProductClick={handleProductClick} />
            <Philosophy />
            <Services />
            <GlobalNetwork />
            <ProductReveal />
            <Sustainability />
          </>
        );
    }
  };

  return (
    <>
      <CustomCursor />
      <OpeningLoader onComplete={() => setLoading(false)} />
      <PageTransition isActive={isTransitioning} targetName={transitionTarget} />
      
      <div className="min-h-screen bg-nurture-light text-nurture-dark dark:bg-nurture-dark dark:text-nurture-light font-sans selection:bg-nurture-accent selection:text-white">
        
        <Navbar 
          isDark={isDark} 
          toggleTheme={toggleTheme} 
          openLang={() => setLangModalOpen(true)}
          currentLang={language}
          onNavigate={handleNavigate}
        />

        <main className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          {renderContent()}
        </main>

        <Footer onNavigate={handleNavigate} />
        
        <CookieConsent />
        <ScrollToTop />

        {/* Language Modal Overlay */}
        {langModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md transition-opacity duration-300">
            <div className="w-full max-w-5xl p-8 max-h-[90vh] overflow-y-auto no-scrollbar">
              <div className="flex justify-between items-center mb-12">
                <h2 className="font-display text-4xl md:text-6xl text-white">{t('modal.title')}</h2>
                <button onClick={() => setLangModalOpen(false)} className="text-white hover:text-nurture-accent transition-colors">
                  <X size={48} strokeWidth={1} />
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {LANGUAGES.map((lang) => (
                  <button 
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code as any);
                      setLangModalOpen(false);
                    }}
                    className={`text-left p-4 border border-white/10 hover:border-nurture-accent hover:bg-white/5 transition-all group ${language === lang.code ? 'border-nurture-accent bg-white/10' : ''}`}
                  >
                    <span className="block text-sm text-gray-400 group-hover:text-white transition-colors">{lang.nativeName}</span>
                    <span className="block text-lg text-white font-medium">{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
import { X } from 'lucide-react';
