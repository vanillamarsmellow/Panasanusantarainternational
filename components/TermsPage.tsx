import React, { useEffect } from 'react';
import { Scale, FileCheck, AlertTriangle, Gavel, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SEO from './SEO';

interface TermsPageProps {
  onNavigate: (view: string) => void;
}

const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const clausesData = t('legal.terms.clauses') as any[];
  const icons = [<Scale size={24} />, <FileCheck size={24} />, <AlertTriangle size={24} />, <Gavel size={24} />];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-nurture-light dark:bg-nurture-dark transition-colors duration-500">
      <SEO 
        title={t('legal.terms.title')}
        description={t('legal.terms.desc')}
        path="/terms-conditions"
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
            <span className="font-mono text-sm text-nurture-accent uppercase tracking-widest mb-6 block">{t('legal.terms.label')}</span>
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-[0.9] text-nurture-dark dark:text-white mb-8">
              {t('legal.terms.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed border-l-2 border-nurture-accent pl-6 mt-8">
              {t('legal.terms.desc')}
            </p>
        </div>
      </section>

      <section className="container mx-auto px-6">
         <div className="max-w-4xl space-y-16">
            
            {clausesData.map((clause, idx) => (
                <div key={idx}>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-nurture-accent">{icons[idx] || icons[0]}</span>
                        <span className="font-mono text-sm uppercase tracking-widest text-gray-500">Clause 0{idx + 1}</span>
                    </div>
                    <h3 className="font-display text-3xl font-bold mb-4 text-nurture-dark dark:text-white">{clause.title}</h3>
                    <p className="text-lg font-light text-gray-600 dark:text-gray-300 leading-relaxed">
                        {clause.content}
                    </p>
                </div>
            ))}

         </div>
      </section>

    </div>
  );
};

export default TermsPage;