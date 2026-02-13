import React, { useEffect } from 'react';
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SEO from './SEO';

interface PrivacyPolicyPageProps {
  onNavigate: (view: string) => void;
}

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionsData = t('legal.privacy.sections') as any[];
  const icons = [<Eye size={24} />, <FileText size={24} />, <Lock size={24} />];
  
  const sections = sectionsData.map((sec, i) => ({
    title: sec.title,
    icon: icons[i],
    content: sec.content
  }));

  return (
    <div className="pt-32 pb-20 min-h-screen bg-nurture-light dark:bg-nurture-dark transition-colors duration-500">
      <SEO 
        title={t('legal.privacy.title')}
        description={t('legal.privacy.desc')}
        path="/privacy-policy"
      />
      
      <section className="container mx-auto px-6 mb-20">
        
        {/* Back Button */}
        <button
          onClick={() => onNavigate('home')}
          className="group inline-flex items-center gap-2 mb-12 text-sm font-mono uppercase tracking-widest text-gray-500 hover:text-nurture-accent transition-colors"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          {t('legal.back')}
        </button>

        <div className="max-w-4xl">
            <span className="font-mono text-sm text-nurture-accent uppercase tracking-widest mb-6 block">{t('legal.privacy.label')}</span>
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-[0.9] text-nurture-dark dark:text-white mb-8">
              {t('legal.privacy.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed border-l-2 border-nurture-accent pl-6 mt-8">
              {t('legal.privacy.desc')}
            </p>
            <p className="font-mono text-xs text-gray-500 mt-4 pl-6 uppercase tracking-widest">
              Last Updated: January 1, 2026
            </p>
        </div>
      </section>

      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12 max-w-4xl">
          {sections.map((section, idx) => (
            <div key={idx} className="group border-t border-black/10 dark:border-white/10 pt-8 hover:border-nurture-accent transition-colors duration-300">
              <div className="flex items-start gap-6">
                <div className="hidden md:flex w-12 h-12 rounded-full bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 items-center justify-center text-nurture-accent shrink-0">
                   {section.icon}
                </div>
                <div>
                   <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-nurture-dark dark:text-white">{section.title}</h3>
                   <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg font-light">
                     {section.content}
                   </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 bg-nurture-dark dark:bg-white/5 text-nurture-light rounded-lg max-w-4xl">
           <h4 className="font-display text-2xl font-bold mb-2">{t('legal.privacy.contact')}</h4>
           <p className="opacity-80 mb-4 font-light">
             If you have questions about our privacy practices or would like to exercise your data rights, please contact our Data Protection Officer.
           </p>
           <a href="mailto:compliance@panasa.global" className="inline-block border-b border-nurture-accent pb-1 font-mono text-sm uppercase tracking-widest hover:text-nurture-accent transition-colors">
             compliance@panasa.global
           </a>
        </div>
      </section>

    </div>
  );
};

export default PrivacyPolicyPage;