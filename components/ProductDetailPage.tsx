
import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle, Layers, Package, Truck, Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SEO from './SEO';

interface ProductDetailPageProps {
  productId: string;
  onNavigate: (view: string) => void;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ productId, onNavigate }) => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  // Image mapping based on ID
  const images: Record<string, string> = {
    cocoa: 'https://images.unsplash.com/photo-1626202266854-474c3e761623?q=80&w=2000&auto=format&fit=crop',
    coffee: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2000&auto=format&fit=crop',
    copra: 'https://images.unsplash.com/photo-1599527586523-c5982cb12918?q=80&w=2000&auto=format&fit=crop',
    charcoal: 'https://images.unsplash.com/photo-1563908906-8d62688469d8?q=80&w=2000&auto=format&fit=crop',
    robusta: 'https://images.unsplash.com/photo-1611162458632-411a720e34c9?q=80&w=2000&auto=format&fit=crop'
  };

  // Specific keywords for each product to boost SEO
  const productKeywords: Record<string, string[]> = {
    cocoa: ["Fermented Cocoa Beans", "Sulawesi Cocoa", "Raw Cacao", "Chocolate manufacturing ingredients", "Wholesale Cocoa"],
    coffee: ["Arabica Green Beans", "Toraja Coffee", "Indonesian Specialty Coffee", "High altitude coffee", "Coffee export"],
    copra: ["White Copra", "Edible Copra", "Dried Coconut", "Coconut oil ingredients", "Sulawesi Copra"],
    charcoal: ["Coconut Charcoal Briquettes", "Shisha Charcoal", "Hookah Coal", "BBQ Charcoal", "Eco-friendly fuel"],
    robusta: ["Robusta Green Beans", "Strong coffee beans", "Instant coffee ingredients", "Lowland coffee"]
  };

  // Get product data
  const productData = t(`product_details.${productId}`) as any;
  
  if (!productData || typeof productData === 'string') {
    return <div className="pt-32 text-center">Product not found.</div>;
  }

  const specs = productData.specs || [];

  // Construct JSON-LD for Product Schema
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": productData.title,
    "image": images[productId],
    "description": productData.description,
    "brand": {
      "@type": "Brand",
      "name": "Panasa"
    },
    "offers": {
      "@type": "AggregateOffer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD",
      "lowPrice": "100", // Placeholder values for schema validity
      "highPrice": "10000"
    }
  };

  return (
    <div className="min-h-screen bg-nurture-light dark:bg-nurture-dark transition-colors duration-500">
      <SEO 
        title={productData.title}
        description={productData.description.substring(0, 160) + "..."}
        image={images[productId]}
        type="product"
        path={`/product/${productId}`}
        schema={productSchema}
        keywords={productKeywords[productId] || []}
      />

      {/* Navigation Bar Placeholder (Back Button) */}
      <div className="fixed top-24 left-6 z-40">
        <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-full text-sm font-mono uppercase tracking-widest hover:bg-nurture-accent hover:text-white transition-all"
        >
            <ArrowLeft size={16} />
            <span className="hidden md:inline">{t('common.backToProducts')}</span>
        </button>
      </div>

      {/* Hero Section with Image */}
      <div className="h-[60vh] md:h-[70vh] relative overflow-hidden">
        <img 
            src={images[productId]} 
            alt={productData.title} 
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-nurture-light dark:to-nurture-dark opacity-90"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-20">
            <div className="container mx-auto">
                <span className="inline-block px-3 py-1 mb-4 border border-nurture-accent text-nurture-accent font-mono text-xs uppercase tracking-widest rounded-full bg-nurture-light/80 dark:bg-nurture-dark/80 backdrop-blur-sm">
                    {productData.subtitle}
                </span>
                <h1 className="font-display font-bold text-5xl md:text-8xl text-nurture-dark dark:text-white mb-6">
                    {productData.title}
                </h1>
            </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 pb-32">
        <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left: Description & Specs */}
            <div className="w-full lg:w-2/3">
                <h2 className="font-display text-3xl font-bold mb-6 text-nurture-dark dark:text-white">Product Overview</h2>
                <p className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-300 mb-12">
                    {productData.description}
                </p>

                <div className="mb-12">
                    <h3 className="flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-nurture-accent mb-6 border-b border-black/10 dark:border-white/10 pb-4">
                        <Layers size={18} />
                        {t('common.specs')}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {specs.map((spec: any, idx: number) => (
                            <div key={idx} className="flex justify-between items-center p-4 bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-lg">
                                <span className="text-gray-500 font-medium">{spec.label}</span>
                                <span className="font-bold text-nurture-dark dark:text-white">{spec.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-nurture-accent mb-6 border-b border-black/10 dark:border-white/10 pb-4">
                        <Package size={18} />
                        {t('common.packaging')}
                    </h3>
                    <div className="p-6 bg-nurture-green/5 border border-nurture-accent/20 rounded-lg flex gap-4 items-start">
                        <Truck className="shrink-0 text-nurture-accent mt-1" />
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {productData.packaging}
                        </p>
                    </div>
                </div>
            </div>

            {/* Right: Sticky CTA */}
            <div className="w-full lg:w-1/3">
                <div className="sticky top-32 p-8 border border-black/10 dark:border-white/10 rounded-2xl bg-white dark:bg-white/5">
                    <h3 className="font-display text-2xl font-bold mb-4">Interested?</h3>
                    <p className="text-gray-500 mb-8 text-sm">
                        Request a formal quotation or download our full specification sheet.
                    </p>
                    
                    <a href="#footer" className="block w-full py-4 bg-nurture-dark dark:bg-white text-white dark:text-black font-mono uppercase tracking-widest text-center text-sm hover:bg-nurture-accent dark:hover:bg-nurture-accent hover:text-white transition-all mb-4">
                        {t('common.getQuote')}
                    </a>
                    
                    <a 
                      href="/Panasa_Commodities_Catalog.pdf" 
                      download="Panasa_Commodities_Catalog.pdf"
                      className="flex items-center justify-center gap-3 w-full py-4 border border-current font-mono uppercase tracking-widest text-center text-sm hover:bg-black/5 dark:hover:bg-white/10 transition-all"
                    >
                        <Download size={16} />
                        {t('common.downloadCatalog')}
                    </a>

                    <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10">
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                            <CheckCircle size={14} className="text-nurture-accent" />
                            <span>ISO / SNI Certified</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                            <CheckCircle size={14} className="text-nurture-accent" />
                            <span>Worldwide Shipping</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>

    </div>
  );
};

export default ProductDetailPage;
