
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Send, CheckCircle, AlertCircle, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SEO from './SEO';

interface ClientFormPageProps {
  onNavigate: (view: string) => void;
}

const ClientFormPage: React.FC<ClientFormPageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    product: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // URL Google Apps Script Anda
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw8cyGScRGM88xwBAica_YH61qfkl-Uovd0GlQ0XQfyzMshZ2zH0altP2_FORbj6Gyz/exec"; 

  const productKeys = ['cocoa', 'coffee', 'copra', 'charcoal', 'cashew'];
  
  // Daftar negara sederhana
  const countries = [
    "Indonesia", "United States", "China", "India", "Germany", "Netherlands", 
    "France", "United Kingdom", "Japan", "South Korea", "Russia", "Saudi Arabia", 
    "UAE", "Turkey", "Brazil", "Australia", "Singapore", "Malaysia", "Vietnam", 
    "Thailand", "Philippines", "Other"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Format Waktu agar enak dibaca (Contoh: 27 Okt 2025, 14:30)
    const formattedDate = new Date().toLocaleString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });

    // Kita menggunakan FormData agar sesuai dengan cara kerja script Google
    // Nama key (append) harus sesuai dengan header di Google Sheet (huruf kecil di script biasanya menghandle ini)
    const dataToSend = new FormData();
    dataToSend.append('timestamp', formattedDate); // Mengirim waktu yang sudah diformat
    dataToSend.append('name', formData.name);
    dataToSend.append('company', formData.company);
    dataToSend.append('email', formData.email);
    dataToSend.append('phone', formData.phone);
    dataToSend.append('country', formData.country);
    dataToSend.append('product', formData.product);
    dataToSend.append('message', formData.message);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: dataToSend,
        // mode: 'no-cors' sangat penting! 
        // Ini memberitahu browser untuk mengirim data tanpa menunggu respons JSON standar
        // karena Google Script berada di domain yang berbeda.
        mode: 'no-cors'
      });

      // Jika tidak ada error jaringan, kita asumsikan sukses
      setStatus('success');
      resetForm();
      
      // Kembalikan tombol ke normal setelah 5 detik
      setTimeout(() => setStatus('idle'), 5000);

    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus('error');
      // Kembalikan status setelah 3 detik
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      country: '',
      product: '',
      message: ''
    });
  };

  return (
    <div className="pt-24 md:pt-32 pb-12 md:pb-20 min-h-screen bg-nurture-light dark:bg-nurture-dark transition-colors duration-500">
      <SEO 
        title={t('client_form.title')}
        description={t('client_form.desc')}
        path="/client-area"
      />

      <section className="container mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-8 md:mb-12">
          <button 
            onClick={() => onNavigate('home')}
            className="group inline-flex items-center gap-2 mb-6 md:mb-8 text-xs md:text-sm font-mono uppercase tracking-widest text-gray-500 hover:text-nurture-accent transition-colors"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            {t('common.backHome')}
          </button>

          <h1 className="font-display font-bold text-3xl md:text-6xl text-nurture-dark dark:text-white mb-4 md:mb-6 leading-tight">
            {t('client_form.title')}
          </h1>
          <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
            {t('client_form.desc')}
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl md:rounded-2xl p-6 md:p-12 shadow-xl">
          
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-10 md:py-20 text-center animate-slide-up">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-nurture-accent/10 rounded-full flex items-center justify-center text-nurture-accent mb-6">
                <CheckCircle size={32} className="md:w-10 md:h-10" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-nurture-dark dark:text-white mb-2">
                {t('common.successTitle')}
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-md">
                {t('common.successDesc')}
              </p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-8 px-8 py-3 bg-nurture-dark dark:bg-white text-white dark:text-black font-mono uppercase tracking-widest text-xs rounded hover:opacity-90 transition-all"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="block font-mono text-[10px] md:text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
                    {t('client_form.labels.name')} <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('client_form.placeholders.name')}
                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-2 md:py-3 text-sm md:text-base text-nurture-dark dark:text-white focus:border-nurture-accent focus:outline-none transition-colors placeholder:text-gray-400/50"
                  />
                </div>

                {/* Company Name */}
                <div className="space-y-2">
                  <label className="block font-mono text-[10px] md:text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
                    {t('client_form.labels.company')} <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={t('client_form.placeholders.company')}
                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-2 md:py-3 text-sm md:text-base text-nurture-dark dark:text-white focus:border-nurture-accent focus:outline-none transition-colors placeholder:text-gray-400/50"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="block font-mono text-[10px] md:text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
                    {t('client_form.labels.email')} <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('client_form.placeholders.email')}
                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-2 md:py-3 text-sm md:text-base text-nurture-dark dark:text-white focus:border-nurture-accent focus:outline-none transition-colors placeholder:text-gray-400/50"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="block font-mono text-[10px] md:text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
                    {t('client_form.labels.phone')} <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t('client_form.placeholders.phone')}
                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-2 md:py-3 text-sm md:text-base text-nurture-dark dark:text-white focus:border-nurture-accent focus:outline-none transition-colors placeholder:text-gray-400/50"
                  />
                </div>

                {/* Country Dropdown */}
                <div className="space-y-2 relative">
                  <label className="block font-mono text-[10px] md:text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
                    {t('client_form.labels.country')} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select 
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-2 md:py-3 text-sm md:text-base text-nurture-dark dark:text-white focus:border-nurture-accent focus:outline-none appearance-none cursor-pointer"
                    >
                      <option value="" disabled>{t('client_form.placeholders.country')}</option>
                      {countries.map(c => (
                        <option key={c} value={c} className="text-black bg-white">{c}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                  </div>
                </div>

                {/* Product Dropdown */}
                <div className="space-y-2 relative">
                  <label className="block font-mono text-[10px] md:text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
                    {t('client_form.labels.product')} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select 
                      name="product"
                      required
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-2 md:py-3 text-sm md:text-base text-nurture-dark dark:text-white focus:border-nurture-accent focus:outline-none appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select Product</option>
                      {productKeys.map(key => (
                        <option key={key} value={key} className="text-black bg-white">
                          {t(`client_form.products.${key}`)}
                        </option>
                      ))}
                      <option value="other" className="text-black bg-white">Other / Multiple</option>
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="block font-mono text-[10px] md:text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  {t('client_form.labels.message')} <span className="text-red-500">*</span>
                </label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('client_form.placeholders.message')}
                  className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-2 md:py-3 text-sm md:text-base text-nurture-dark dark:text-white focus:border-nurture-accent focus:outline-none transition-colors placeholder:text-gray-400/50 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex flex-col md:flex-row items-center gap-4">
                <button 
                  type="submit"
                  disabled={status === 'submitting'}
                  className="group relative w-full md:w-auto px-10 py-4 bg-nurture-dark dark:bg-white text-white dark:text-black font-mono uppercase tracking-widest text-xs rounded overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {status === 'submitting' ? t('common.submitting') : t('common.submit')}
                    {status !== 'submitting' && <Send size={14} className="group-hover:translate-x-1 transition-transform" />}
                  </span>
                  <div className="absolute inset-0 bg-nurture-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-0"></div>
                </button>

                {/* Error Message */}
                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-500 text-xs font-mono animate-pulse">
                    <AlertCircle size={14} />
                    <span>Failed to send. Please check your connection or try again.</span>
                  </div>
                )}
              </div>

            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default ClientFormPage;
