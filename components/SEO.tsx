
import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  path?: string;
  schema?: object; // For JSON-LD Structured Data
  keywords?: string[]; // New: Support for meta keywords
  noindex?: boolean; // New: Control indexing
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  image = "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop", 
  type = 'website',
  path = '',
  schema,
  keywords = [],
  noindex = false
}) => {
  const { language } = useLanguage();
  
  const siteName = "Panasa Global Export";
  const defaultTitle = "Panasa | Premium Indonesian Commodities Export";
  const defaultDesc = "Leading exporter of premium Indonesian agricultural products: Cocoa Beans, Arabica Coffee, White Copra, and Coconut Charcoal Briquettes. Connecting Sulawesi farmers to the global market.";
  const siteUrl = "https://panasa.global"; // Replace with actual domain
  
  const fullTitle = title ? `${title} | Panasa` : defaultTitle;
  const fullDesc = description || defaultDesc;
  const fullUrl = `${siteUrl}${path}`;

  // Default Keywords if none provided
  const baseKeywords = [
    "Indonesian commodities exporter",
    "Cocoa beans Sulawesi",
    "Arabica coffee Toraja",
    "White copra supplier",
    "Coconut charcoal briquettes Indonesia",
    "Agricultural export Indonesia",
    "Direct sourcing Sulawesi",
    "Panasa Global Export"
  ];

  const allKeywords = [...baseKeywords, ...keywords].join(", ");

  // React 19 automatically hoists these tags, but we ensure lang is set
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // Enhanced Organization Schema for Local SEO
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PT. Panasa Agro Nusantara",
    "alternateName": "Panasa Global Export",
    "url": siteUrl,
    "logo": "https://placehold.co/512x512/transparent/black?text=LOGO",
    "description": defaultDesc,
    "foundingDate": "2025",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kompleks Perumahan Kendari Indah Blok F/8",
      "addressLocality": "Kendari",
      "addressRegion": "Sulawesi Tenggara",
      "postalCode": "93117",
      "addressCountry": "ID"
    },
    // Geo coordinates for Google Maps indexing
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-3.9985", 
      "longitude": "122.5126" 
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-812-0000-0000",
      "contactType": "sales",
      "areaServed": "Global",
      "availableLanguage": ["English", "Indonesian"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/panasa",
      "https://www.instagram.com/panasa"
    ]
  };

  const jsonLd = schema || defaultSchema;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDesc} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content="PT. Panasa Agro Nusantara" />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <meta name="theme-color" content="#022c22" />
      
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDesc} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={language === 'en' ? 'en_US' : language === 'id' ? 'id_ID' : `${language}_${language.toUpperCase()}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDesc} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </>
  );
};

export default SEO;
