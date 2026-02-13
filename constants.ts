import { Language, Project, Service } from './types';

export const LANGUAGES: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia' },
  { code: 'zh', name: 'Chinese', nativeName: '中文' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語' },
  { code: 'ko', name: 'Korean', nativeName: '한국어' },
  // ... other languages
];

export const PROJECTS: Project[] = [
  { id: 1, title: 'Cocoa Beans', category: 'Sulawesi Origin', image: 'https://images.unsplash.com/photo-1626202266854-474c3e761623?q=80&w=1000&auto=format&fit=crop', year: 'Fermented' },
  { id: 2, title: 'Arabica Coffee', category: 'Toraja Origin', image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop', year: 'Green Bean' },
  { id: 3, title: 'White Copra', category: 'Sulawesi Grade', image: 'https://images.unsplash.com/photo-1599527586523-c5982cb12918?q=80&w=1000&auto=format&fit=crop', year: 'Dried' },
  { id: 4, title: 'Charcoal', category: 'Coconut Shell', image: 'https://images.unsplash.com/photo-1563908906-8d62688469d8?q=80&w=1000&auto=format&fit=crop', year: 'Briquettes' },
  { id: 5, title: 'Robusta', category: 'Sulawesi Origin', image: 'https://images.unsplash.com/photo-1611162458632-411a720e34c9?q=80&w=1000&auto=format&fit=crop', year: 'Premium' },
];

export const SERVICES: Service[] = [
  { id: 1, title: 'Direct Sourcing', description: 'We work directly with local farmer cooperatives across Sulawesi to ensure fair trade and the highest quality harvest.', icon: 'Handshake' },
  { id: 2, title: 'Quality Control', description: 'Rigorous sorting, grading, and moisture checking processes to meet international export standards (ISO/SNI).', icon: 'CheckCircle' },
  { id: 3, title: 'Global Logistics', description: 'Seamless shipping solutions. From FOB to CIF, we handle documentation and freight to your destination port.', icon: 'Container' },
  { id: 4, title: 'Private Labeling', description: 'Custom packaging and branding solutions for our coconut charcoal briquettes and retail-ready coffee products.', icon: 'Package' },
];