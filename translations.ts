
export const translations: any = {
  en: {
    common: {
      readMore: 'Read More',
      learnMore: 'Learn More',
      downloadCatalog: 'Download Catalog',
      getQuote: 'Get a Quote',
      contactUs: 'Contact Us',
      backHome: 'Back to Home',
      accept: 'Accept All',
      decline: 'Decline',
      backToProducts: 'Back to Products',
      specs: 'Specifications',
      packaging: 'Packaging & Shipping',
      submit: 'Submit',
      submitting: 'Sending...',
      successTitle: 'Inquiry Sent',
      successDesc: 'Thank you. Our team will contact you shortly via email or WhatsApp.'
    },
    nav: {
      Home: 'Home',
      About: 'About',
      'Why Us': 'Why Us',
      Work: 'Work',
      Expertise: 'Expertise',
      Sustainability: 'Sustainability',
      Contact: 'Contact',
      Client: 'Client Area'
    },
    client_form: {
      title: 'Partnership Inquiry',
      desc: 'Fill out the form below to become a registered client or request a formal quotation.',
      labels: {
        name: 'Full Name',
        company: 'Company Name',
        email: 'Email Address',
        phone: 'WhatsApp / Phone Number',
        country: 'Country',
        product: 'Product Interested',
        message: 'Message'
      },
      placeholders: {
        name: 'John Doe',
        company: 'Global Imports Ltd.',
        email: 'john@company.com',
        phone: '+1 234 567 890',
        country: 'Select or type country',
        message: 'Hello, I am interested in your cocoa beans. Please send specification, price, MOQ and packing details.'
      },
      products: {
        cocoa: 'Cocoa Beans',
        coffee: 'Arabica Coffee',
        cashew: 'Cashew Nuts',
        copra: 'White Copra',
        charcoal: 'Charcoal Briquettes'
      }
    },
    loader: {
      system: 'System',
      booting: 'Booting Sequence',
      est: 'Est. 2025',
      country: 'Indonesia',
      quality: 'Premium Export Quality',
      words: ["ORIGIN", "CULTIVATE", "HARVEST", "PROCESS", "PANASA"]
    },
    hero: {
      est: 'Est. 2025 — Indonesia',
      mainTitle: 'PREMIUM',
      subTitle1: "Nature's",
      subTitle2: 'COMMODITY',
      title1: 'Premium commodities',
      title2: 'for the world.',
      desc: 'We bridge the gap between Indonesian farmers and global markets. Exporting high-quality Cocoa, Coffee, Copra, and Charcoal Briquettes.',
      cta: 'Our Products',
      liveMarket: 'Live Market',
      globalExport: 'Global Export',
      scroll: 'Scroll to Explore'
    },
    marquee: {
      line1: ["COCOA", "COFFEE", "COPRA", "CHARCOAL"],
      line2: ["INDONESIA", "SUSTAINABLE", "PREMIUM", "EXPORT"]
    },
    network: {
      label: 'Global Network',
      title: 'Borderless Logistics.',
      desc: 'From the heart of Sulawesi to 20+ countries. Our integrated supply chain ensures that distance is never a barrier to quality. We navigate complex trade routes to deliver on time, every time.',
      stats: {
        countries: 'Countries Served',
        continents: 'Continents',
        ports: 'Partner Ports'
      },
      shipping: 'Live Shipment Tracking'
    },
    about: {
      label: 'Who We Are',
      title: 'Nurturing nature, supplying the globe.',
      desc: 'Panasa is a premier Indonesian export company. We specialize in sourcing the finest agricultural commodities from the lush archipelago.',
      stat1: 'Farmers Partnered',
      stat2: 'Countries Served'
    },
    portfolio: {
      label: 'Our Commodities',
      title: 'Premium Products',
      drag: 'Click to View Details',
      quality: 'Export Quality',
      items: {
        cocoa: { title: 'Cocoa Beans', cat: 'Sulawesi Origin', year: 'Fermented' },
        coffee: { title: 'Arabica Coffee', cat: 'Toraja Origin', year: 'Green Bean' },
        copra: { title: 'White Copra', cat: 'Sulawesi Grade', year: 'Dried' },
        charcoal: { title: 'Charcoal', cat: 'Coconut Shell', year: 'Briquettes' },
        robusta: { title: 'Robusta', cat: 'Sulawesi Origin', year: 'Premium' }
      }
    },
    product_details: {
      cocoa: {
        title: "Cocoa Beans",
        subtitle: "Fermented Sulawesi Origin",
        description: "Our Cocoa Beans are sourced directly from the fertile lands of Sulawesi, known for their rich flavor profile and high fat content. We utilize a meticulous fermentation process to unlock the full potential of the chocolate aroma, making them ideal for premium chocolate manufacturing.",
        specs: [
          { label: "Moisture Content", value: "7.5% Max" },
          { label: "Bean Count", value: "100 - 110 / 100g" },
          { label: "Moldy Beans", value: "3% Max" },
          { label: "Slaty Beans", value: "3% Max" },
          { label: "Fermentation", value: "Fully Fermented" }
        ],
        packaging: "Jute Bags (60kg / 65kg) or as per buyer request. Container capacity: 12.5 MT (20ft)."
      },
      coffee: {
        title: "Arabica Coffee",
        subtitle: "Toraja Origin Green Bean",
        description: "Grown in the highlands of Tana Toraja, our Arabica beans are world-renowned for their low acidity and heavy body with notes of caramel and spices. Carefully hand-picked and semi-washed to preserve their unique characteristics.",
        specs: [
          { label: "Moisture", value: "12.5% Max" },
          { label: "Defects", value: "Max 5% (Grade 1)" },
          { label: "Screen Size", value: "16-18" },
          { label: "Process", value: "Semi-Washed / Full Washed" },
          { label: "Altitude", value: "1400 - 2000 MASL" }
        ],
        packaging: "GrainPro inside Jute Bags (60kg). Container capacity: 19 MT (20ft)."
      },
      copra: {
        title: "White Copra",
        subtitle: "Edible Grade Sulawesi",
        description: "Our Edible White Copra is derived from mature coconuts, sun-dried and oven-dried to achieve perfect moisture levels. It is free from fungus and salmonella, making it suitable for high-quality coconut oil extraction or direct consumption.",
        specs: [
          { label: "Moisture", value: "5% Max" },
          { label: "Oil Content", value: "65% Min" },
          { label: "FFA", value: "0.5% Max" },
          { label: "Color", value: "White / Natural" },
          { label: "Fungus", value: "Nil" }
        ],
        packaging: "Mesh Bags or Jute Bags (50kg). Container capacity: 25 MT (40ft)."
      },
      charcoal: {
        title: "Coconut Charcoal",
        subtitle: "Premium Briquettes",
        description: "100% natural coconut shell charcoal briquettes tailored for shisha/hookah and BBQ. They burn hot, long, and clean with minimal ash content and absolutely no chemical odor.",
        specs: [
          { label: "Ash Content", value: "2.5% Max" },
          { label: "Moisture", value: "6% Max" },
          { label: "Volatile Matter", value: "15% Max" },
          { label: "Fixed Carbon", value: "80% Min" },
          { label: "Burning Time", value: "2+ Hours" }
        ],
        packaging: "Inner Box (1kg) + Master Box (10kg). Custom branding available."
      },
      robusta: {
        title: "Robusta Coffee",
        subtitle: "Sulawesi Premium",
        description: "Sourced from the lowlands of Sulawesi, our Robusta beans offer a strong, bold body with a distinct earthy flavor and high caffeine content. Perfect for instant coffee production or espresso blends.",
        specs: [
          { label: "Moisture", value: "13% Max" },
          { label: "Defects", value: "Max 45 (Grade 4) / Max 11 (Grade 1)" },
          { label: "Bean Size", value: "Large / Medium" },
          { label: "Process", value: "Natural / Dry" },
          { label: "Caffeine", value: "2.2% Avg" }
        ],
        packaging: "Jute Bags (60kg). Container capacity: 19 MT (20ft)."
      }
    },
    philosophy: {
      label: 'Our Philosophy',
      title: 'Cultivating Value',
      items: [
        { title: "Fair Trade", desc: "We believe in the prosperity of our farmers. By cutting out unnecessary middlemen, we ensure fair wages for local communities." },
        { title: "Sustainability", desc: "We are committed to running a responsible business by paying attention to environmental, social, and economic aspects. Every process is carried out efficiently to minimize environmental impact and maintain supply chain sustainability." },
        { title: "Partnership", desc: "We believe that strong relationships are built on trust and collaboration. Therefore, we forge long-term partnerships with all partners based on open communication, shared commitment, and aligned goals to grow together." },
        { title: "Business Ethics", desc: "Every business activity is conducted with high integrity, professionalism, and compliance with applicable regulations. We uphold transparency in every transaction." },
        { title: "Quality Commitment", desc: "We apply consistent quality standards throughout the process, from product selection to delivery. We ensure every product meets international market expectations." }
      ]
    },
    services: {
      label: 'Our Expertise',
      title: 'Operational Excellence.',
      desc: 'We simplify the complexities of international trade. From the farm to your warehouse, we manage every step with precision.',
      items: [
        { title: 'Direct Sourcing', desc: 'We work directly with local farmer cooperatives across Sulawesi to ensure fair trade and the highest quality harvest.' },
        { title: 'Quality Control', desc: 'Rigorous sorting, grading, and moisture checking processes to meet international export standards (ISO/SNI).' },
        { title: 'Global Logistics', desc: 'Seamless shipping solutions. From FOB to CIF, we handle documentation and freight to your destination port.', icon: 'Container' },
        { title: 'Export Readiness', desc: 'We ensure every product is ready for international shipment through quality verification, export-standard packaging, and complete documentation.' }
      ],
      capability: 'Service Capability',
      verified: 'Verified Process'
    },
    product_reveal: {
      text: "Years of cultivating trust, harvesting premium commodities, and growing with global partners. We're not just exporting crops, we're nurturing the future of trade."
    },
    sustainability: {
      label: 'Our Commitment',
      title: 'Green Energy & Farming',
      desc: 'Sustainability for us is a continuous process that is constantly being developed. We actively evaluate and improve operational practices to ensure business growth aligns with care for the environment and society.',
      stat1: { title: '100%', sub: 'Organic Sourcing' },
      stat2: { title: 'Eco', sub: 'Waste-to-Energy' },
      stat3: { title: 'Fair', sub: 'Farmer Compensation' }
    },
    footer: {
      title1: 'Establish trade',
      title2: 'partnership.',
      desc: 'Secure your supply chain with premium Indonesian commodities. We handle sourcing, compliance, and freight.',
      inquiries: 'Inquiries / RFQ',
      office: 'Office',
      company: 'Company',
      connect: 'Connect',
      privacy: 'Privacy',
      terms: 'Terms',
      rights: '© 2026 PT. Panasa Agro Nusantara',
      system: 'System: Online',
      links: {
          'Our Story': 'Our Story',
          'Commodities Catalog': 'Commodities Catalog',
          'Careers': 'Careers'
      }
    },
    cookie: {
      title: 'We value your privacy',
      text: 'We use cookies to enhance your browsing experience, serve personalized ads, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.',
      settings: 'Cookie Settings',
      manage: 'Manage Cookies',
      preferences: 'Cookie Preferences',
      save: 'Save Preferences',
      category: {
        essential: 'Essential',
        essential_desc: 'Required for the website to function.',
        analytics: 'Analytics',
        analytics_desc: 'Help us understand how you use our site.',
        marketing: 'Marketing',
        marketing_desc: 'Used to deliver relevant advertisements.'
      }
    },
    modal: {
      title: 'Select Region'
    },
    about_page: {
      label: 'The Company',
      title: 'We are builders of trust.',
      desc1: 'Panasa is an Indonesian agricultural commodity exporter focused on connecting quality local products with the global market. Based in Sulawesi, Indonesia, we work directly with farmers and trusted suppliers to deliver high-quality cocoa, arabica coffee, cashew nuts, white copra, and charcoal briquettes. Our sourcing areas are specifically chosen to ensure consistency, product traceability, and competitive pricing.',
      desc2: 'We believe that the best products start at the source. Therefore, Panasa emphasizes responsible procurement processes, strict quality control, and efficient export handling. From harvest to packaging and shipping, every stage is managed to meet international export standards.\n\nAs a growing Indonesian trading company, we prioritize long-term partnerships built on transparency, reliability, and clear communication. We don\'t just want to be a supplier — we want to be your trusted export partner from Indonesia.\n\nCurrently, Panasa continues to expand its global network while remaining committed to delivering quality agricultural products and reliable service to buyers worldwide.',
      vision: { title: 'Global Vision', desc: 'To be the most reliable, transparent, and sustainable bridge between Sulawesi\'s agriculture and the global industrial market by 2030.' },
      mission: { title: 'Our Mission', items: ['Empower local Sulawesi farmers.', 'Standardize quality control (ISO/HACCP).', 'Deliver strictly on-time.'] },
      team: { label: 'The Leadership', title: 'Managed by Experts', desc: 'Our team consists of certified agronomists, logistics veterans, and international trade specialists.', contact: 'Contact Management', stat1: 'Key Warehouses', stat2: 'Traceability' }
    },
    why_us: {
      label: 'Our Promise',
      title: 'Beyond Commodities, We Deliver Certainty.',
      desc: 'In a market full of noise, we offer clarity. We bridge the gap between Indonesia’s rich harvests and your business needs with a narrative of trust, quality, and unwavering reliability.',
      items: [
        { title: "Precision in Every Grain", desc: "Trust is good, but data is better. We verify every specification in the lab before it ever leaves the port. No surprises, just consistent excellence." },
        { title: "Mastery of Motion", desc: "Oceans are vast, but our reach is precise. We handle the complex web of customs, documentation, and freight, ensuring your cargo flows smoothly from our shores to your door." },
        { title: "Partners, Not Just Vendors", desc: "We aren't here for a single transaction. We are building a legacy. When you partner with Panasa, you gain a dedicated ally invested in your long-term growth." },
        { title: "Rooted in Sustainability", desc: "It starts in the soil. By working directly with Sulawesi's farmers, we ensure an ethical supply chain that honors the earth and uplifts the hands that cultivate it." }
      ],
      comparison: {
        title: 'The Standard Difference',
        subtitle: 'How we compare.',
        row1: { label: 'Traditional Aggregator', val1: 'Mixed Quality', label2: 'Panasa Export', val2: 'Machine Graded' },
        row2: { label: 'Communication', val1: 'Language Barriers', label2: 'Panasa Export', val2: '24/7 English Support' },
        row3: { label: 'Contracts', val1: 'Informal / Risky', label2: 'Panasa Export', val2: 'Legal Compliance' }
      },
      cta: { title: 'Ready to ship?', btn: 'Get a Quote' }
    },
    legal: {
      back: 'Back to Home',
      privacy: {
        label: 'Legal & Compliance',
        title: 'Privacy Policy.',
        desc: 'Trust is our most valuable commodity. We protect your data.',
        sections: [
          { title: "Data Collection", content: "We collect info for quotes and shipping." },
          { title: "Usage", content: "Used for trade negotiations and export docs." },
          { title: "Security", content: "We implement measures to protect trade secrets." }
        ],
        contact: 'Contact DPO'
      },
      terms: {
        label: 'Legal Framework',
        title: 'Terms & Conditions.',
        desc: 'General framework for trade inquiries with PT. Panasa.',
        clauses: [
          { title: "Agreement", content: "You verify you are a legitimate business entity." },
          { title: "Pricing", content: "Prices are indicative FOB Makassar/Surabaya." },
          { title: "Quality", content: "Claims must be made within 14 days of arrival." },
          { title: "Law", content: "Governed by laws of the Republic of Indonesia." }
        ]
      }
    }
  },
  id: {
    common: {
      readMore: 'Baca Selengkapnya',
      learnMore: 'Pelajari Lebih Lanjut',
      downloadCatalog: 'Unduh Katalog',
      getQuote: 'Dapatkan Penawaran',
      contactUs: 'Hubungi Kami',
      backHome: 'Kembali ke Beranda',
      accept: 'Terima Semua',
      decline: 'Tolak',
      backToProducts: 'Kembali ke Produk',
      specs: 'Spesifikasi',
      packaging: 'Pengemasan & Pengiriman',
      submit: 'Kirim',
      submitting: 'Mengirim...',
      successTitle: 'Pesan Terkirim',
      successDesc: 'Terima kasih. Tim kami akan segera menghubungi Anda melalui email atau WhatsApp.'
    },
    nav: {
      Home: 'Beranda',
      About: 'Tentang',
      'Why Us': 'Kenapa Kami',
      Work: 'Produk',
      Expertise: 'Keahlian',
      Sustainability: 'Keberlanjutan',
      Contact: 'Kontak',
      Client: 'Area Klien'
    },
    client_form: {
      title: 'Permintaan Kemitraan',
      desc: 'Isi formulir di bawah ini untuk menjadi klien terdaftar atau meminta penawaran resmi.',
      labels: {
        name: 'Nama Lengkap',
        company: 'Nama Perusahaan',
        email: 'Alamat Email',
        phone: 'WhatsApp / Nomor Telepon',
        country: 'Negara',
        product: 'Produk Diminati',
        message: 'Pesan'
      },
      placeholders: {
        name: 'Budi Santoso',
        company: 'PT. Maju Bersama',
        email: 'budi@perusahaan.com',
        phone: '+62 812 3456 7890',
        country: 'Pilih atau ketik negara',
        message: 'Halo, saya tertarik dengan biji kakao Anda. Mohon kirimkan spesifikasi, harga, MOQ, dan detail pengemasan.'
      },
      products: {
        cocoa: 'Biji Kakao',
        coffee: 'Kopi Arabika',
        cashew: 'Kacang Mete',
        copra: 'Kopra Putih',
        charcoal: 'Briket Arang'
      }
    },
    loader: {
      system: 'Sistem',
      booting: 'Urutan Booting',
      est: 'Est. 2025',
      country: 'Indonesia',
      quality: 'Kualitas Ekspor Premium',
      words: ["ASAL", "BUDIDAYA", "PANEN", "PROSES", "PANASA"]
    },
    hero: {
      est: 'Est. 2025 — Indonesia',
      mainTitle: 'PREMIUM',
      subTitle1: "Alam",
      subTitle2: 'KOMODITAS',
      title1: 'Komoditas premium',
      title2: 'untuk dunia.',
      desc: 'Kami menjembatani petani Indonesia dengan pasar global. Mengekspor Kakao, Kopi, Kopra, dan Briket Arang berkualitas tinggi.',
      cta: 'Produk Kami',
      liveMarket: 'Pasar Langsung',
      globalExport: 'Ekspor Global',
      scroll: 'Gulir untuk Menjelajah'
    },
    marquee: {
      line1: ["KAKAO", "KOPI", "KOPRA", "ARANG"],
      line2: ["INDONESIA", "BERKELANJUTAN", "PREMIUM", "EKSPOR"]
    },
    network: {
      label: 'Jangkauan Global',
      title: 'Logistik Tanpa Batas.',
      desc: 'Dari jantung Sulawesi ke lebih dari 20 negara. Rantai pasok terintegrasi kami memastikan jarak bukanlah hambatan bagi kualitas. Kami menavigasi rute perdagangan yang kompleks untuk pengiriman tepat waktu, setiap saat.',
      stats: {
        countries: 'Negara Dilayani',
        continents: 'Benua',
        ports: 'Mitra Pelabuhan'
      },
      shipping: 'Pelacakan Pengiriman Langsung'
    },
    about: {
      label: 'Siapa Kami',
      title: 'Merawat alam, memasok dunia.',
      desc: 'Panasa adalah perusahaan ekspor utama Indonesia. Kami mengkhususkan diri dalam pengadaan komoditas pertanian terbaik.',
      stat1: 'Mitra Petani',
      stat2: 'Negara Dilayani'
    },
    portfolio: {
      label: 'Komoditas Kami',
      title: 'Produk Premium',
      drag: 'Klik untuk Detail',
      quality: 'Kualitas Ekspor',
      items: {
        cocoa: { title: 'Biji Kakao', cat: 'Asal Sulawesi', year: 'Fermentasi' },
        coffee: { title: 'Kopi Arabika', cat: 'Asal Toraja', year: 'Biji Hijau' },
        copra: { title: 'Kopra Putih', cat: 'Grade Sulawesi', year: 'Kering' },
        charcoal: { title: 'Arang', cat: 'Batok Kelapa', year: 'Briket' },
        robusta: { title: 'Robusta', cat: 'Asal Sulawesi', year: 'Premium' }
      }
    },
    product_details: {
      cocoa: {
        title: "Biji Kakao",
        subtitle: "Fermentasi Asal Sulawesi",
        description: "Biji Kakao kami bersumber langsung dari tanah subur Sulawesi, dikenal dengan profil rasa yang kaya dan kandungan lemak tinggi. Kami menggunakan proses fermentasi yang teliti untuk membuka potensi penuh aroma cokelat, menjadikannya ideal untuk pembuatan cokelat premium.",
        specs: [
          { label: "Kadar Air", value: "7.5% Maks" },
          { label: "Jumlah Biji", value: "100 - 110 / 100g" },
          { label: "Biji Berjamur", value: "3% Maks" },
          { label: "Biji Slate", value: "3% Maks" },
          { label: "Fermentasi", value: "Terfermentasi Penuh" }
        ],
        packaging: "Karung Goni (60kg / 65kg) atau sesuai permintaan pembeli. Kapasitas kontainer: 12.5 MT (20ft)."
      },
      coffee: {
        title: "Kopi Arabika",
        subtitle: "Biji Hijau Asal Toraja",
        description: "Ditanam di dataran tinggi Tana Toraja, biji Arabika kami terkenal di dunia karena keasaman rendah dan body yang tebal dengan notasi karamel dan rempah. Dipetik tangan dengan hati-hati dan semi-washed untuk menjaga karakteristik uniknya.",
        specs: [
          { label: "Kadar Air", value: "12.5% Maks" },
          { label: "Cacat", value: "Maks 5% (Grade 1)" },
          { label: "Ukuran Layar", value: "16-18" },
          { label: "Proses", value: "Semi-Washed / Full Washed" },
          { label: "Ketinggian", value: "1400 - 2000 MDPL" }
        ],
        packaging: "GrainPro dalam Karung Goni (60kg). Kapasitas kontainer: 19 MT (20ft)."
      },
      copra: {
        title: "Kopra Putih",
        subtitle: "Edible Grade Sulawesi",
        description: "Kopra Putih Edible kami berasal dari kelapa matang, dikeringkan dengan matahari dan oven untuk mencapai tingkat kelembaban yang sempurna. Bebas dari jamur dan salmonella, menjadikannya cocok untuk ekstraksi minyak kelapa berkualitas tinggi atau konsumsi langsung.",
        specs: [
          { label: "Kadar Air", value: "5% Maks" },
          { label: "Kandungan Minyak", value: "65% Min" },
          { label: "FFA", value: "0.5% Maks" },
          { label: "Warna", value: "Putih / Alami" },
          { label: "Jamur", value: "Nihil" }
        ],
        packaging: "Karung Jaring atau Karung Goni (50kg). Kapasitas kontainer: 25 MT (40ft)."
      },
      charcoal: {
        title: "Arang Kelapa",
        subtitle: "Briket Premium",
        description: "100% briket arang batok kelapa alami yang disesuaikan untuk shisha/hookah dan BBQ. Membakar panas, lama, dan bersih dengan kadar abu minimal dan sama sekali tidak ada bau kimia.",
        specs: [
          { label: "Kadar Abu", value: "2.5% Maks" },
          { label: "Kadar Air", value: "6% Maks" },
          { label: "Zat Terbang", value: "15% Maks" },
          { label: "Karbon Tetap", value: "80% Min" },
          { label: "Waktu Bakar", value: "2+ Jam" }
        ],
        packaging: "Kotak Dalam (1kg) + Kotak Master (10kg). Branding kustom tersedia."
      },
      robusta: {
        title: "Kopi Robusta",
        subtitle: "Premium Sulawesi",
        description: "Bersumber dari dataran rendah Sulawesi, biji Robusta kami menawarkan body yang kuat dan tebal dengan rasa earthy yang khas dan kandungan kafein tinggi. Sempurna untuk produksi kopi instan atau campuran espresso.",
        specs: [
          { label: "Kadar Air", value: "13% Maks" },
          { label: "Cacat", value: "Maks 45 (Grade 4) / Maks 11 (Grade 1)" },
          { label: "Ukuran Biji", value: "Besar / Sedang" },
          { label: "Proses", value: "Natural / Kering" },
          { label: "Kafein", value: "2.2% Rata-rata" }
        ],
        packaging: "Karung Goni (60kg). Kapasitas kontainer: 19 MT (20ft)."
      }
    },
    philosophy: {
      label: 'Filosofi Kami',
      title: 'Menanamkan Nilai',
      items: [
        { title: "Perdagangan Adil", desc: "Kami memotong perantara yang tidak perlu untuk memastikan upah yang adil bagi komunitas lokal." },
        { title: "Keberlanjutan", desc: "Kami berkomitmen menjalankan usaha yang bertanggung jawab dengan memperhatikan aspek lingkungan, sosial, dan ekonomi. Setiap proses dijalankan secara efisien untuk meminimalkan dampak lingkungan serta menjaga keberlanjutan rantai pasok." },
        { title: "Kemitraan", desc: "Kami percaya bahwa hubungan yang kuat dibangun melalui kepercayaan dan kolaborasi. Oleh karena itu, kami menjalin kemitraan jangka panjang dengan seluruh mitra berdasarkan komunikasi terbuka, komitmen bersama, dan tujuan yang selaras untuk tumbuh bersama." },
        { title: "Etika Bisnis", desc: "Setiap aktivitas usaha dijalankan dengan integritas tinggi, profesionalisme, dan kepatuhan terhadap regulasi yang berlaku. Kami menjunjung transparansi dalam setiap transaksi." },
        { title: "Komitmen Mutu", desc: "Kami menerapkan standar kualitas yang konsisten di seluruh proses, mulai dari pemilihan produk hingga pengiriman. Kami memastikan setiap produk memenuhi ekspektasi pasar internasional." }
      ]
    },
    services: {
      label: 'Keahlian Kami',
      title: 'Keunggulan Operasional.',
      desc: 'Kami menyederhanakan kompleksitas perdagangan internasional. Dari kebun ke gudang Anda, kami kelola dengan presisi.',
      items: [
        { title: 'Sumber Langsung', desc: 'Bekerja langsung dengan koperasi petani di Sulawesi untuk panen kualitas terbaik.' },
        { title: 'Kontrol Kualitas', desc: 'Penyortiran dan pengecekan kadar air yang ketat sesuai standar ekspor (ISO/SNI).' },
        { title: 'Logistik Global', desc: 'Solusi pengiriman mulus. Dari FOB hingga CIF, kami tangani dokumentasi.' },
        { title: 'Kesiapan Ekspor', desc: 'Kami memastikan setiap produk siap dikirim ke pasar internasional melalui verifikasi kualitas, pengemasan standar ekspor, serta kelengkapan dokumen.' }
      ],
      capability: 'Kapabilitas Layanan',
      verified: 'Proses Terverifikasi'
    },
    product_reveal: {
      text: "Bertahun-tahun membangun kepercayaan, memanen komoditas premium, dan tumbuh bersama mitra global. Kami tidak hanya mengekspor hasil bumi, kami merawat masa depan perdagangan."
    },
    sustainability: {
      label: 'Komitmen Kami',
      title: 'Energi Hijau & Pertanian',
      desc: 'Keberlanjutan bagi kami adalah proses berkelanjutan yang terus dikembangkan. Kami secara aktif mengevaluasi dan meningkatkan praktik operasional untuk memastikan pertumbuhan bisnis yang sejalan dengan kepedulian terhadap lingkungan dan masyarakat.',
      stat1: { title: '100%', sub: 'Sumber Organik' },
      stat2: { title: 'Eco', sub: 'Limbah-ke-Energi' },
      stat3: { title: 'Adil', sub: 'Kompensasi Petani' }
    },
    footer: {
      title1: 'Bangun kemitraan',
      title2: 'dagang.',
      desc: 'Amankan rantai pasok Anda dengan komoditas premium Indonesia. Kami menangani pengadaan, kepatuhan, dan pengiriman.',
      inquiries: 'Pertanyaan / RFQ',
      office: 'Kantor',
      company: 'Perusahaan',
      connect: 'Hubungan',
      privacy: 'Privasi',
      terms: 'Syarat & Ketentuan',
      rights: '© 2026 PT. Panasa Agro Nusantara',
      system: 'Sistem: Online',
      links: {
          'Our Story': 'Cerita Kami',
          'Commodities Catalog': 'Katalog Komoditas',
          'Careers': 'Karir'
      }
    },
    cookie: {
      title: 'Kami menghargai privasi Anda',
      text: 'Kami menggunakan cookie untuk meningkatkan pengalaman penjelajahan Anda dan menganalisis lalu lintas kami.',
      settings: 'Pengaturan Cookie',
      manage: 'Kelola Cookie',
      preferences: 'Preferensi Cookie',
      save: 'Simpan Preferensi',
      category: {
        essential: 'Esensial',
        essential_desc: 'Diperlukan agar situs web berfungsi.',
        analytics: 'Analitik',
        analytics_desc: 'Bantu kami memahami cara Anda menggunakan situs kami.',
        marketing: 'Pemasaran',
        marketing_desc: 'Digunakan untuk menayangkan iklan yang relevan.'
      }
    },
    modal: {
      title: 'Pilih Wilayah'
    },
    about_page: {
      label: 'Perusahaan',
      title: 'Pembangun kepercayaan.',
      desc1: 'Panasa adalah eksportir komoditas pertanian Indonesia yang berfokus menghubungkan produk lokal berkualitas dengan pasar global. Berbasis di Sulawesi, Indonesia, kami bekerja sama langsung dengan petani serta supplier terpercaya untuk menghadirkan kakao, kopi arabika, kacang mete, white copra, dan briket arang berkualitas tinggi. Area sourcing kami dipilih secara khusus untuk memastikan konsistensi, keterlacakan asal produk, serta harga yang kompetitif.',
      desc2: 'Kami percaya bahwa produk terbaik dimulai dari sumbernya. Karena itu, Panasa menekankan proses pengadaan yang bertanggung jawab, kontrol kualitas yang ketat, serta penanganan ekspor yang efisien. Mulai dari panen, pengemasan, hingga pengiriman, setiap tahapan dikelola untuk memenuhi standar ekspor internasional.\n\nSebagai perusahaan perdagangan Indonesia yang terus berkembang, kami mengutamakan kemitraan jangka panjang yang dibangun atas dasar transparansi, keandalan, dan komunikasi yang jelas. Kami tidak ingin sekadar menjadi supplier — kami ingin menjadi mitra ekspor terpercaya Anda dari Indonesia.\n\nSaat ini, Panasa terus memperluas jaringan globalnya sambil tetap berkomitmen menghadirkan produk pertanian berkualitas dan layanan yang dapat diandalkan bagi buyer di seluruh dunia.',
      vision: { title: 'Visi Global', desc: 'Menjadi jembatan paling andal antara pertanian Sulawesi dan pasar industri global.' },
      mission: { title: 'Misi Kami', items: ['Berdayakan petani lokal.', 'Standarisasi kualitas.', 'Pengiriman tepat waktu.'] },
      team: { label: 'Kepemimpinan', title: 'Dikelola Para Ahli', desc: 'Tim kami terdiri dari agronomis bersertifikat dan veteran logistik.', contact: 'Hubungi Manajemen', stat1: 'Gudang Utama', stat2: 'Pelacakan' }
    },
    why_us: {
      label: 'Janji Kami',
      title: 'Lebih dari Komoditas, Kami Memberi Kepastian.',
      desc: 'Di tengah pasar yang bising, kami menawarkan kejelasan. Kami menjembatani hasil bumi Indonesia yang kaya dengan kebutuhan bisnis Anda melalui narasi kepercayaan, kualitas, dan keandalan yang tak tergoyahkan.',
      items: [
        { title: "Presisi di Setiap Butir", desc: "Kepercayaan itu baik, namun data lebih baik. Kami memverifikasi setiap spesifikasi di laboratorium sebelum meninggalkan pelabuhan. Tanpa kejutan, hanya keunggulan yang konsisten." },
        { title: "Penguasaan Logistik", desc: "Lautan itu luas, namun jangkauan kami presisi. Kami menangani kerumitan bea cukai, dokumen, dan kargo, memastikan barang Anda mengalir lancar dari pantai kami ke pintu Anda." },
        { title: "Mitra, Bukan Sekadar Penjual", desc: "Kami tidak di sini untuk satu transaksi. Kami membangun warisan. Bermitra dengan Panasa berarti mendapatkan sekutu yang berinvestasi pada pertumbuhan jangka panjang Anda." },
        { title: "Berakar pada Keberlanjutan", desc: "Semuanya bermula dari tanah. Dengan bekerja langsung bersama petani Sulawesi, kami memastikan rantai pasok etis yang menghormati bumi dan menyejahterakan tangan yang mengolahnya." }
      ],
      comparison: {
        title: 'Perbedaan Standar',
        subtitle: 'Perbandingan kami.',
        row1: { label: 'Agregator Tradisional', val1: 'Kualitas Campur', label2: 'Panasa Export', val2: 'Sortir Mesin' },
        row2: { label: 'Komunikasi', val1: 'Hambatan Bahasa', label2: 'Panasa Export', val2: 'Dukungan 24/7' },
        row3: { label: 'Kontrak', val1: 'Informal / Berisiko', label2: 'Panasa Export', val2: 'Kepatuhan Hukum' }
      },
      cta: { title: 'Siap mengirim?', btn: 'Minta Penawaran' }
    },
    legal: {
      back: 'Kembali ke Beranda',
      privacy: {
        label: 'Legal & Kepatuhan',
        title: 'Kebijakan Privasi.',
        desc: 'Kepercayaan adalah komoditas kami yang paling berharga.',
        sections: [
          { title: "Pengumpulan Data", content: "Kami mengumpulkan info untuk kutipan dan pengiriman." },
          { title: "Penggunaan", content: "Digunakan untuk negosiasi perdagangan dan dokumen ekspor." },
          { title: "Keamanan", content: "Kami menerapkan langkah-langkah untuk melindungi rahasia dagang." }
        ],
        contact: 'Hubungi DPO'
      },
      terms: {
        label: 'Kerangka Hukum',
        title: 'Syarat & Ketentuan.',
        desc: 'Kerangka umum untuk pertanyaan perdagangan dengan PT. Panasa.',
        clauses: [
          { title: "Perjanjian", content: "Anda memverifikasi bahwa Anda adalah entitas bisnis yang sah." },
          { title: "Harga", content: "Harga adalah indikatif FOB Makassar/Surabaya." },
          { title: "Kualitas", content: "Klaim harus dibuat dalam 14 hari setelah kedatangan." },
          { title: "Hukum", content: "Diatur oleh hukum Republik Indonesia." }
        ]
      }
    }
  },
  // Chinese (Simplified)
  zh: {
    common: { readMore: '阅读更多', learnMore: '了解更多', downloadCatalog: '下载目录', getQuote: '获取报价', contactUs: '联系我们', backHome: '返回首页', accept: '接受全部', decline: '拒绝', backToProducts: '返回产品', specs: '规格', packaging: '包装与运输', submit: '提交', submitting: '发送中...', successTitle: '询价已发送', successDesc: '谢谢。我们的团队将通过电子邮件或WhatsApp尽快与您联系。' },
    nav: { Home: '首页', About: '关于我们', 'Why Us': '为什么选择我们', Work: '产品', Expertise: '专长', Sustainability: '可持续性', Contact: '联系', Client: '客户专区' },
    client_form: { title: '合作伙伴咨询', desc: '请填写下表以成为注册客户或索取正式报价。', labels: { name: '全名', company: '公司名称', email: '电子邮件地址', phone: 'WhatsApp / 电话号码', country: '国家', product: '感兴趣的产品', message: '留言' }, placeholders: { name: '张三', company: '全球进出口有限公司', email: 'zhangsan@company.com', phone: '+86 123 4567 8901', country: '选择或输入国家', message: '您好，我对你们的可可豆感兴趣。请发送规格、价格、最小起订量和包装详情。' }, products: { cocoa: '可可豆', coffee: '阿拉比卡咖啡', cashew: '腰果', copra: '白椰干', charcoal: '木炭压块' } },
    loader: { system: '系统', booting: '启动序列', est: '成立于 2025', country: '印度尼西亚', quality: '优质出口质量', words: ["原产地", "培育", "收获", "加工", "PANASA"] },
    hero: { est: '成立于 2025 — 印度尼西亚', mainTitle: '优质', subTitle1: "自然之", subTitle2: '商品', title1: '优质大宗商品', title2: '面向世界', desc: '我们架起印尼农民与全球市场之间的桥梁。出口优质可可、咖啡、椰干和木炭压块。', cta: '我们的产品', liveMarket: '实时市场', globalExport: '全球出口', scroll: '滚动探索' },
    marquee: { line1: ["可可", "咖啡", "椰干", "木炭"], line2: ["印度尼西亚", "可持续", "优质", "出口"] },
    network: { label: '全球网络', title: '无国界物流', desc: '从苏拉威西中心到20多个国家。我们的综合供应链确保距离永远不会成为质量的障碍。我们驾驭复杂的贸易路线，确保每次都按时交货。', stats: { countries: '服务国家', continents: '大洲', ports: '合作港口' }, shipping: '实时发货跟踪' },
    about: { label: '关于我们', title: '培育自然，供应全球。', desc: 'Panasa 是印尼首屈一指的出口公司。', stat1: '合作农民', stat2: '服务国家' },
    portfolio: { 
      label: '我们的商品', 
      title: '优质产品', 
      drag: '拖动或滚动', 
      quality: '出口质量', 
      items: { 
        cocoa: { title: '可可豆', cat: '苏拉威西原产', year: '发酵' }, 
        coffee: { title: '阿拉比卡咖啡', cat: '托拉雅原产', year: '生豆' }, 
        copra: { title: '白椰干', cat: '苏拉威西级', year: '干燥' }, 
        charcoal: { title: '木炭', cat: '椰壳', year: '压块' }, 
        robusta: { title: '罗布斯塔', cat: '苏拉威西原产', year: '优质' } 
      } 
    },
    philosophy: { label: '我们的理念', title: '培育价值', items: [{ title: "公平贸易", desc: "我们确保当地社区获得公平的工资。" }, { title: "可持续性", desc: "我们致力于经营负责任的企业。" }, { title: "伙伴关系", desc: "我们相信牢固的关系建立在信任和协作之上。" }, { title: "商业道德", desc: "每一项商业活动都以高度的诚信进行。" }, { title: "质量承诺", desc: "我们在整个过程中应用一致的质量标准。" }] },
    services: { label: '我们的专长', title: '卓越运营', desc: '我们简化国际贸易的复杂性。从农场到您的仓库，我们精确管理每一步。', items: [{ title: '直接采购', desc: '直接与苏拉威西各地的农民合作社合作。' }, { title: '质量控制', desc: '严格的分拣和水分检查过程（ISO/SNI）。' }, { title: '全球物流', desc: '无缝运输解决方案。从FOB到CIF。' }, { title: '出口准备', desc: '我们确保每件产品都准备好运往国际市场。' }], capability: '服务能力', verified: '验证流程' },
    product_reveal: { text: "多年来建立信任，收获优质商品，并与全球合作伙伴共同成长。我们不仅是在出口农作物，我们是在培育贸易的未来。" },
    sustainability: { label: '我们的承诺', title: '绿色能源与农业', desc: '对我们而言，可持续发展是一个不断发展的持续过程。', stat1: { title: '100%', sub: '有机采购' }, stat2: { title: '环保', sub: '废物转能源' }, stat3: { title: '公平', sub: '农民补偿' } },
    footer: { title1: '建立贸易', title2: '合作伙伴', desc: '用优质印尼商品保障您的供应链。我们处理采购、合规和货运。', inquiries: '咨询 / 询价', office: '办公室', company: '公司', connect: '连接', privacy: '隐私', terms: '条款', rights: '© 2026 PT. Panasa Agro Nusantara', system: '系统：在线', links: { 'Our Story': '我们的故事', 'Commodities Catalog': '商品目录', 'Careers': '职业生涯' } },
    cookie: { title: '我们重视您的隐私', text: '我们使用 cookie 来增强您的浏览体验。', settings: 'Cookie 设置', manage: '管理 Cookie', preferences: 'Cookie 偏好', save: '保存偏好', category: { essential: '必要', essential_desc: '网站运行所需。', analytics: '分析', analytics_desc: '帮助我们了解您如何使用我们的网站。', marketing: '营销', marketing_desc: '用于投放相关广告。' } },
    modal: { title: '选择地区' },
    about_page: { 
      label: '公司介绍', 
      title: '我们是信任的建设者。', 
      desc1: 'Panasa 是一家印度尼西亚农产品出口商，致力于将优质本地产品与全球市场联系起来。我们总部位于印度尼西亚苏拉威西，直接与农民和值得信赖的供应商合作，提供高品质的可可、阿拉比卡咖啡、腰果、白椰干和木炭压块。我们的采购区域经过专门选择，以确保一致性、产品可追溯性和具有竞争力的价格。',
      desc2: '我们相信最好的产品源自源头。因此，Panasa 强调负责任的采购流程、严格的质量控制和高效的出口处理。从收获到包装和运输，每个阶段的管理都符合国际出口标准。\n\n作为一家不断发展的印度尼西亚贸易公司，我们优先考虑建立在透明度、可靠性和清晰沟通基础上的长期合作伙伴关系。我们不仅想成为供应商——我们想成为您在印度尼西亚值得信赖的出口合作伙伴。\n\n目前，Panasa 继续扩大其全球网络，同时致力于为世界各地的买家提供优质的农产品和可靠的服务。',
      vision: { title: '全球愿景', desc: '到2030年成为苏拉威西农业与全球工业市场之间最可靠、透明且可持续的桥梁。' }, 
      mission: { title: '我们的使命', items: ['赋能苏拉威西当地农民。', '标准化质量控制 (ISO/HACCP)。', '严格准时交付。'] }, 
      team: { label: '领导团队', title: '由专家管理', desc: '我们的团队由资深农学家、物流专家和国际贸易专员组成。', contact: '联系管理层', stat1: '关键仓库', stat2: '可追溯性' } 
    },
    why_us: { 
      label: '我们的承诺', 
      title: '超越商品，我们交付确定性。', 
      desc: '在充满噪音的市场中，我们提供清晰度。', 
      items: [
        { title: "每一粒的精准", desc: "信任虽好，数据更佳。" }, 
        { title: "物流的掌控", desc: "海洋浩瀚，但我们的触达精准。" }, 
        { title: "是伙伴，不仅是卖家", desc: "我们要的不是一次性交易，而是建立传承。" }, 
        { title: "植根于可持续性", desc: "一切始于土壤。" }
      ], 
      comparison: { title: '标准差异', subtitle: '对比', row1: { label: '传统聚合商', val1: '混合质量', label2: 'Panasa 出口', val2: '机器分级' }, row2: { label: '沟通', val1: '语言障碍', label2: 'Panasa 出口', val2: '24/7 英语支持' }, row3: { label: '合同', val1: '非正式/风险', label2: 'Panasa 出口', val2: '法律合规' } }, 
      cta: { title: '准备发货？', btn: '获取报价' } 
    },
    legal: { back: '返回首页', privacy: { label: '法律与合规', title: '隐私政策', desc: '信任是我们最宝贵的商品。', sections: [{ title: "数据收集", content: "我们收集报价和运输信息。" }, { title: "使用", content: "用于贸易谈判和出口文件。" }, { title: "安全", content: "我们实施措施保护商业机密。" }], contact: '联系数据保护官' }, terms: { label: '法律框架', title: '条款和条件', desc: '贸易咨询的一般框架。', clauses: [{ title: "协议", content: "您验证您是合法的商业实体。" }, { title: "定价", content: "价格为指示性 FOB。" }, { title: "质量", content: "索赔必须在14天内提出。" }, { title: "法律", content: "受印度尼西亚共和国法律管辖。" }] } },
    product_details: {
      cocoa: {
        title: "可可豆",
        subtitle: "苏拉威西原产发酵",
        description: "我们的可可豆直接采购自苏拉威西肥沃的土地。",
        specs: [
          { label: "水分含量", value: "7.5% 最大" },
          { label: "豆数", value: "100 - 110 / 100g" },
          { label: "霉豆", value: "3% 最大" },
          { label: "板豆", value: "3% 最大" },
          { label: "发酵", value: "完全发酵" }
        ],
        packaging: "麻袋 (60kg / 65kg) 或按买方要求。集装箱容量：12.5 MT (20ft)。"
      },
      coffee: {
        title: "阿拉比卡咖啡",
        subtitle: "托拉雅原产生豆",
        description: "生长在塔纳托拉雅的高地。",
        specs: [
          { label: "水分", value: "12.5% 最大" },
          { label: "缺陷", value: "最大 5% (一级)" },
          { label: "筛网尺寸", value: "16-18" },
          { label: "处理", value: "半水洗 / 全水洗" },
          { label: "海拔", value: "1400 - 2000 米" }
        ],
        packaging: "麻袋内衬 GrainPro (60kg)。集装箱容量：19 MT (20ft)。"
      },
      copra: {
        title: "白椰干",
        subtitle: "苏拉威西食用级",
        description: "我们的食用白椰干源自成熟的椰子。",
        specs: [
          { label: "水分", value: "5% 最大" },
          { label: "含油量", value: "65% 最小" },
          { label: "游离脂肪酸", value: "0.5% 最大" },
          { label: "颜色", value: "白色 / 自然" },
          { label: "真菌", value: "无" }
        ],
        packaging: "网袋或麻袋 (50kg)。集装箱容量：25 MT (40ft)."
      },
      charcoal: {
        title: "椰壳炭",
        subtitle: "优质压块",
        description: "100% 天然椰子壳木炭压块。",
        specs: [
          { label: "灰分", value: "2.5% 最大" },
          { label: "水分", value: "6% 最大" },
          { label: "挥发物", value: "15% 最大" },
          { label: "固定碳", value: "80% 最小" },
          { label: "燃烧时间", value: "2小时以上" }
        ],
        packaging: "内盒 (1kg) + 外箱 (10kg)。可定制品牌。"
      },
      robusta: {
        title: "罗布斯塔咖啡",
        subtitle: "苏拉威西优质",
        description: "源自苏拉威西低地。",
        specs: [
          { label: "水分", value: "13% 最大" },
          { label: "缺陷", value: "最大 45 (四级) / 最大 11 (一级)" },
          { label: "豆尺寸", value: "大 / 中" },
          { label: "处理", value: "自然 / 日晒" },
          { label: "咖啡因", value: "平均 2.2%" }
        ],
        packaging: "麻袋 (60kg)。集装箱容量：19 MT (20ft)。"
      }
    }
  },
  // Arabic
  ar: {
    common: { readMore: 'اقرأ المزيد', learnMore: 'اعرف المزيد', downloadCatalog: 'تنزيل الكتالوج', getQuote: 'احصل على عرض أسعار', contactUs: 'اتصل بنا', backHome: 'العودة للرئيسية', accept: 'قبول الكل', decline: 'رفض', backToProducts: 'عودة إلى المنتجات', specs: 'المواصفات', packaging: 'التعبئة والشحن', submit: 'إرسال', submitting: 'جارٍ الإرسال...', successTitle: 'تم إرسال الاستفسار', successDesc: 'شكراً لك. سيتصل بك فريقنا قريباً عبر البريد الإلكتروني أو واتساب.' },
    nav: { Home: 'الرئيسية', About: 'عنا', 'Why Us': 'لماذا نحن', Work: 'أعمالنا', Expertise: 'الخبرة', Sustainability: 'الاستدامة', Contact: 'اتصال', Client: 'منطقة العميل' },
    client_form: { title: 'استفسار عن شراكة', desc: 'املأ النموذج أدناه لتصبح عميلاً مسجلاً أو لطلب عرض أسعار رسمي.', labels: { name: 'الاسم الكامل', company: 'اسم الشركة', email: 'عنوان البريد الإلكتروني', phone: 'واتساب / رقم الهاتف', country: 'الدولة', product: 'المنتج المهتم به', message: 'الرسالة' }, placeholders: { name: 'جون دو', company: 'شركة الاستيراد العالمية', email: 'john@company.com', phone: '+1 234 567 890', country: 'اختر أو اكتب الدولة', message: 'مرحبًا، أنا مهتم بحبوب الكاكاو الخاصة بكم. يرجى إرسال المواصفات والسعر والحد الأدنى للطلب وتفاصيل التعبئة.' }, products: { cocoa: 'حبوب الكاكاو', coffee: 'قهوة أرابيكا', cashew: 'الكاجو', copra: 'كوبرا بيضاء', charcoal: 'قوالب الفحم' } },
    loader: { system: 'نظام', booting: 'تسلسل التشغيل', est: 'تأسست 2025', country: 'إندونيسيا', quality: 'جودة تصدير ممتازة', words: ["أصل", "زراعة", "حصاد", "معالجة", "باناسا"] },
    hero: { est: 'تأسست 2025 — إندونيسيا', mainTitle: 'ممتاز', subTitle1: "من الطبيعة", subTitle2: 'سلع', title1: 'سلع ممتازة', title2: 'للعالم.', desc: 'نحن نسد الفجوة بين المزارعين الإندونيسيين والأسواق العالمية. تصدير الكاكاو والبن وجوز الهند والفحم عالي الجودة.', cta: 'منتجاتنا', liveMarket: 'سوق مباشر', globalExport: 'تصدير عالمي', scroll: 'قم بالتمرير للاستكشاف' },
    marquee: { line1: ["كاكاو", "قهوة", "كوبرا", "فحم"], line2: ["إندونيسيا", "مستدام", "ممتاز", "تصدير"] },
    network: { label: 'شبكة عالمية', title: 'لوجستيات بلا حدود', desc: 'من قلب سولاويزي إلى أكثر من 20 دولة. تضمن سلسلة التوريد المتكاملة لدينا أن المسافة ليست عائقاً أمام الجودة. نحن نبحر في طرق التجارة المعقدة للتسليم في الوقت المحدد، في كل مرة.', stats: { countries: 'دولة مخدومة', continents: 'قارات', ports: 'موانئ شريكة' }, shipping: 'تتبع الشحنات الحية' },
    about: { label: 'من نحن', title: 'رعاية الطبيعة، وتزويد العالم.', desc: 'باناسا هي شركة تصدير إندونيسية رائدة.', stat1: 'مزارع شريك', stat2: 'دولة مخدومة' },
    portfolio: { 
      label: 'سلعنا', 
      title: 'منتجات ممتازة', 
      drag: 'سحب أو تمرير', 
      quality: 'جودة التصدير', 
      items: { 
        cocoa: { title: 'حبوب الكاكاو', cat: 'أصل سولاويزي', year: 'مخمر' }, 
        coffee: { title: 'قهوة أرابيكا', cat: 'أصل توراجا', year: 'حبوب خضراء' }, 
        copra: { title: 'كوبرا بيضاء', cat: 'درجة سولاويزي', year: 'مجفف' }, 
        charcoal: { title: 'فحم', cat: 'قشرة جوز الهند', year: 'قوالب' }, 
        robusta: { title: 'روبوستا', cat: 'أصل سولاويزي', year: 'ممتاز' } 
      } 
    },
    philosophy: { label: 'فلسفتنا', title: 'زراعة القيمة', items: [{ title: "تجارة عادلة", desc: "نحن نضمن أجوراً عادلة للمجتمعات المحلية." }, { title: "الاستدامة", desc: "نحن ملتزمون بإدارة أعمال مسؤولة." }, { title: "الشراكة", desc: "نؤمن بأن العلاقات القوية تُبنى على الثقة والتعاون." }, { title: "أخلاقيات العمل", desc: "يتم تنفيذ كل نشاط تجاري بنزاهة عالية." }, { title: "الالتزام بالجودة", desc: "نطبق معايير جودة متسقة في جميع مراحل العملية." }] },
    services: { label: 'خبرتنا', title: 'التميز التشغيلي', desc: 'نحن نبسط تعقيدات التجارة الدولية. من المزرعة إلى مستودعك.', items: [{ title: 'المصادر المباشرة', desc: 'العمل مباشرة مع تعاونيات المزارعين في سولاويزي.' }, { title: 'مراقبة الجودة', desc: 'فرز صارم وفحص الرطوبة (ISO/SNI).' }, { title: 'اللوجستيات العالمية', desc: 'حلول شحن سلسة. من FOB إلى CIF.' }, { title: 'جاهزية التصدير', desc: 'نحن نضمن أن كل منتج جاهز للشحن إلى الأسواق الدولية.' }], capability: 'قدرة الخدمة', verified: 'عملية تم التحقق منها' },
    product_reveal: { text: "سنوات من بناء الثقة، وحصاد السلع الممتازة، والنمو مع الشركاء العالميين. نحن لا نصدر المحاصيل فحسب، بل نرعى مستقبل التجارة." },
    sustainability: { label: 'التزامنا', title: 'الطاقة الخضراء والزراعة', desc: 'الاستدامة بالنسبة لنا هي عملية مستمرة يتم تطويرها باستمرار.', stat1: { title: '100%', sub: 'مصادر عضوية' }, stat2: { title: 'بيئي', sub: 'تحويل النفايات لطاقة' }, stat3: { title: 'عادل', sub: 'تعويض المزارعين' } },
    footer: { title1: 'تأسيس تجارة', title2: 'شراكة.', desc: 'أمّن سلسلة التوريد الخاصة بك بالسلع الإندونيسية الممتازة.', inquiries: 'استفسارات', office: 'مكتب', company: 'شركة', connect: 'تواصل', privacy: 'خصوصية', terms: 'شروط', rights: '© 2026 PT. Panasa Agro Nusantara', system: 'نظام: متصل', links: { 'Our Story': 'قصتنا', 'Commodities Catalog': 'كتالوج السلع', 'Careers': 'وظائف' } },
    cookie: { title: 'نحن نقدر خصوصيتك', text: 'نحن نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح الخاصة بك.', settings: 'إعدادات ملفات تعريف الارتباط', manage: 'إدارة ملفات تعريف الارتباط', preferences: 'تفضيلات ملفات تعريف الارتباط', save: 'حفظ التفضيلات', category: { essential: 'أساسي', essential_desc: 'مطلوب لعمل الموقع.', analytics: 'تحليلات', analytics_desc: 'ساعدنا في فهم كيفية استخدامك لموقعنا.', marketing: 'تسويق', marketing_desc: 'تستخدم لتقديم إعلانات ذات صلة.' } },
    modal: { title: 'اختر المنطقة' },
    about_page: { 
      label: 'الشركة', 
      title: 'بناة الثقة.', 
      desc1: 'باناسا هي شركة مصدرة للسلع الزراعية الإندونيسية تركز على ربط المنتجات المحلية عالية الجودة بالسوق العالمية. يقع مقرنا في سولاويزي، إندونيسيا، ونعمل مباشرة مع المزارعين والموردين الموثوقين لتقديم الكاكاو عالي الجودة، والبن العربي، والكاجو، والكوبرا البيضاء، وقوالب الفحم. يتم اختيار مناطق التوريد الخاصة بنا بشكل خاص لضمان الاتساق وإمكانية تتبع المنتج والأسعار التنافسية.',
      desc2: 'نحن نؤمن بأن أفضل المنتجات تبدأ من المصدر. لذلك، تؤكد باناسا على عمليات الشراء المسؤولة، ومراقبة الجودة الصارمة، والتعامل الفعال مع التصدير. من الحصاد إلى التعبئة والشحن، تتم إدارة كل مرحلة لتلبية معايير التصدير الدولية.\n\nكشركة تجارية إندونيسية متنامية، نعطي الأولوية للشراكات طويلة الأمد المبنية على الشفافية والموثوقية والتواصل الواضح. لا نريد أن نكون مجرد مورد — نريد أن نكون شريك التصدير الموثوق به من إندونيسيا.\n\nحالياً، تواصل باناسا توسيع شبكتها العالمية مع الحفاظ على التزامها بتقديم منتجات زراعية عالية الجودة وخدمة موثوقة للمشترين في جميع أنحاء العالم.',
      vision: { title: 'رؤية عالمية', desc: 'أن نكون الجسر الأكثر موثوقية وشفافية واستدامة بين زراعة سولاويزي والسوق الصناعي العالمي بحلول عام 2030.' }, 
      mission: { title: 'مهمتنا', items: ['تمكين المزارعين المحليين في سولاويزي.', 'توحيد معايير مراقبة الجودة (ISO/HACCP).', 'التسليم في الوقت المحدد بصرامة.'] }, 
      team: { label: 'القيادة', title: 'تدار بواسطة خبراء', desc: 'يتكون فريقنا من مهندسين زراعيين معتمدين، وقدامى المحاربين في مجال الخدمات اللوجستية، وأخصائيي التجارة الدولية.', contact: 'اتصل بالإدارة', stat1: 'مستودعات رئيسية', stat2: 'إمكانية التتبع' } 
    },
    why_us: { 
      label: 'وعدنا', 
      title: 'أكثر من مجرد سلع، نحن نقدم اليقين.', 
      desc: 'في سوق مليء بالضجيج، نحن نقدم الوضوح.', 
      items: [
        { title: "دقة في كل حبة", desc: "الثقة جيدة، لكن البيانات أفضل." }, 
        { title: "إتقان الحركة", desc: "المحيطات واسعة، لكن وصولنا دقيق." }, 
        { title: "شركاء، وليسوا مجرد بائعين", desc: "نحن لسنا هنا لصفقة واحدة." }, 
        { title: "متجذرون في الاستدامة", desc: "الأمر يبدأ في التربة." }
      ], 
      comparison: { title: 'الفرق القياسي', subtitle: 'كيف نقارن.', row1: { label: 'المجمع التقليدي', val1: 'جودة مختلطة', label2: 'تصدير باناسا', val2: 'فرز آلي' }, row2: { label: 'اتصالات', val1: 'حواجز لغوية', label2: 'تصدير باناسا', val2: 'دعم إنجليزي 24/7' }, row3: { label: 'عقود', val1: 'غير رسمي / محفوف بالمخاطر', label2: 'تصدير باناسا', val2: 'امتثال قانوني' } }, 
      cta: { title: 'جاهز للشحن؟', btn: 'احصل على عرض أسعار' } 
    },
    legal: { back: 'العودة للرئيسية', privacy: { label: 'قانوني وامتثال', title: 'سياسة الخصوصية', desc: 'الثقة هي سلعتنا الأكثر قيمة.', sections: [{ title: "جمع البيانات", content: "نجمع المعلومات لعروض الأسعار." }, { title: "الاستخدام", content: "تستخدم للمفاوضات التجارية." }, { title: "الأمان", content: "ننفذ تدابير لحماية الأسرار التجارية." }], contact: 'اتصل بمسؤول البيانات' }, terms: { label: 'الإطار القانوني', title: 'الشروط والأحكام', desc: 'الإطار العام للاستفسارات التجارية.', clauses: [{ title: "الاتفاقية", content: "أنت تتحقق من أنك كيان تجاري شرعي." }, { title: "التسعير", content: "الأسعار هي FOB إرشادي." }, { title: "الجودة", content: "يجب تقديم المطالبات خلال 14 يومًا." }, { title: "القانون", content: "تخضع لقوانين جمهورية إندونيسيا." }] } },
    product_details: {
      cocoa: {
        title: "حبوب الكاكاو",
        subtitle: "منشأ سولاويزي مخمر",
        description: "يتم الحصول على حبوب الكاكاو الخاصة بنا مباشرة من أراضي سولاويزي الخصبة.",
        specs: [
          { label: "محتوى الرطوبة", value: "7.5% كحد أقصى" },
          { label: "عدد الحبوب", value: "100 - 110 / 100غ" },
          { label: "حبوب متعفنة", value: "3% كحد أقصى" },
          { label: "حبوب مسطحة", value: "3% كحد أقصى" },
          { label: "التخمير", value: "مخمر بالكامل" }
        ],
        packaging: "أكياس الجوت (60 كجم / 65 كجم) أو حسب طلب المشتري. سعة الحاوية: 12.5 طن (20 قدمًا)."
      },
      coffee: {
        title: "قهوة أرابيكا",
        subtitle: "حبوب خضراء منشأ توراجا",
        description: "تُزرع حبوب الأرابيكا في مرتفعات تانا توراجا.",
        specs: [
          { label: "الرطوبة", value: "12.5% كحد أقصى" },
          { label: "العيوب", value: "حد أقصى 5% (درجة 1)" },
          { label: "حجم الغربال", value: "16-18" },
          { label: "المعالجة", value: "شبه مغسول / مغسول بالكامل" },
          { label: "الارتفاع", value: "1400 - 2000 متر" }
        ],
        packaging: "GrainPro داخل أكياس الجوت (60 كجم). سعة الحاوية: 19 طن (20 قدمًا)."
      },
      copra: {
        title: "كوبرا بيضاء",
        subtitle: "درجة صالحة للأكل سولاويزي",
        description: "يتم استخلاص الكوبرا البيضاء الصالحة للأكل من جوز الهند الناضج.",
        specs: [
          { label: "الرطوبة", value: "5% كحد أقصى" },
          { label: "محتوى الزيت", value: "65% كحد أدنى" },
          { label: "FFA", value: "0.5% كحد أقصى" },
          { label: "اللون", value: "أبيض / طبيعي" },
          { label: "الفطريات", value: "لا يوجد" }
        ],
        packaging: "أكياس شبكية أو أكياس الجوت (50 كجم). سعة الحاوية: 25 طن (40 قدمًا)."
      },
      charcoal: {
        title: "فحم جوز الهند",
        subtitle: "قوالب ممتازة",
        description: "قوالب فحم قشرة جوز الهند الطبيعية 100%.",
        specs: [
          { label: "محتوى الرماد", value: "2.5% كحد أقصى" },
          { label: "الرطوبة", value: "6% كحد أقصى" },
          { label: "المواد المتطايرة", value: "15% كحد أقصى" },
          { label: "الكربون الثابت", value: "80% كحد أدنى" },
          { label: "وقت الاحتراق", value: "2+ ساعات" }
        ],
        packaging: "صندوق داخلي (1 كجم) + صندوق رئيسي (10 كجم). تتوفر علامة تجارية مخصصة."
      },
      robusta: {
        title: "قهوة روبوستا",
        subtitle: "سولاويزي ممتاز",
        description: "يتم الحصول عليها من أراضي سولاويزي المنخفضة.",
        specs: [
          { label: "الرطوبة", value: "13% كحد أقصى" },
          { label: "العيوب", value: "حد أقصى 45 (درجة 4) / حد أقصى 11 (درجة 1)" },
          { label: "حجم الحبة", value: "كبير / متوسط" },
          { label: "المعالجة", value: "طبيعي / جاف" },
          { label: "الكافيين", value: "2.2% متوسط" }
        ],
        packaging: "أكياس الجوت (60 كجم). سعة الحاوية: 19 طن (20 قدمًا)."
      }
    }
  },
  // Spanish
  es: {
    common: { readMore: 'Leer más', learnMore: 'Saber más', downloadCatalog: 'Descargar Catálogo', getQuote: 'Obtener Cotización', contactUs: 'Contáctenos', backHome: 'Volver al Inicio', accept: 'Aceptar Todo', decline: 'Rechazar', backToProducts: 'Volver a Productos', specs: 'Especificaciones', packaging: 'Embalaje y Envío', submit: 'Enviar', submitting: 'Enviando...', successTitle: 'Consulta Enviada', successDesc: 'Gracias. Nuestro equipo se pondrá en contacto con usted en breve por correo electrónico o WhatsApp.' },
    nav: { Home: 'Inicio', About: 'Nosotros', 'Why Us': 'Por Qué', Work: 'Productos', Expertise: 'Experiencia', Sustainability: 'Sostenibilidad', Contact: 'Contacto', Client: 'Área de Cliente' },
    client_form: { title: 'Consulta de Asociación', desc: 'Complete el formulario a continuación para convertirse en cliente registrado o solicitar una cotización formal.', labels: { name: 'Nombre Completo', company: 'Nombre de la Empresa', email: 'Dirección de Correo Electrónico', phone: 'WhatsApp / Número de Teléfono', country: 'País', product: 'Producto de Interés', message: 'Mensaje' }, placeholders: { name: 'Juan Pérez', company: 'Importaciones Globales S.A.', email: 'juan@empresa.com', phone: '+1 234 567 890', country: 'Seleccione o escriba el país', message: 'Hola, estoy interesado en sus granos de cacao. Por favor envíe especificaciones, precio, MOQ y detalles de embalaje.' }, products: { cocoa: 'Granos de Cacao', coffee: 'Café Arábica', cashew: 'Anacardos', copra: 'Copra Blanca', charcoal: 'Briquetas de Carbón' } },
    loader: { system: 'Sistema', booting: 'Secuencia de Arranque', est: 'Est. 2025', country: 'Indonesia', quality: 'Calidad de Exportación Premium', words: ["ORIGEN", "CULTIVO", "COSECHA", "PROCESO", "PANASA"] },
    hero: { est: 'Est. 2025 — Indonesia', mainTitle: 'PREMIUM', subTitle1: 'Natural', subTitle2: 'PRODUCTOS', title1: 'Materias primas', title2: 'para el mundo.', desc: 'Unimos a los agricultores indonesios con los mercados globales. Exportando Cacao, Café, Copra y Briquetas de Carbón de alta calidad.', cta: 'Nuestros Productos', liveMarket: 'Mercado en Vivo', globalExport: 'Exportación Global', scroll: 'Desplazar para Explorar' },
    marquee: { line1: ["CACAO", "CAFÉ", "COPRA", "CARBÓN"], line2: ["INDONESIA", "SOSTENIBLE", "PREMIUM", "EXPORTACIÓN"] },
    network: { label: 'Red Global', title: 'Logística sin fronteras', desc: 'Desde el corazón de Sulawesi a más de 20 países. Nuestra cadena de suministro integrada asegura que la distancia nunca sea una barrera para la calidad. Navegamos rutas comerciales complejas para entregar a tiempo, siempre.', stats: { countries: 'Países Servidos', continents: 'Continentes', ports: 'Puertos Asociados' }, shipping: 'Rastreo de Envíos en Vivo' },
    about: { label: 'Quiénes Somos', title: 'Nutriendo la naturaleza, abasteciendo al mundo.', desc: 'Panasa es una empresa líder en exportación indonesia. Nos especializamos en obtener las mejores materias primas agrícolas.', stat1: 'Agricultores Asociados', stat2: 'Países Servidos' },
    portfolio: { 
      label: 'Nuestras Mercancías', 
      title: 'Productos Premium', 
      drag: 'Arrastrar o Desplazar', 
      quality: 'Calidad de Exportación', 
      items: { 
        cocoa: { title: 'Granos de Cacao', cat: 'Origen Sulawesi', year: 'Fermentado' }, 
        coffee: { title: 'Café Arábica', cat: 'Origen Toraja', year: 'Grano Verde' }, 
        copra: { title: 'Copra Blanca', cat: 'Grado Sulawesi', year: 'Secado' }, 
        charcoal: { title: 'Carbón', cat: 'Cáscara de Coco', year: 'Briquetas' }, 
        robusta: { title: 'Robusta', cat: 'Origen Sulawesi', year: 'Premium' } 
      } 
    },
    philosophy: { label: 'Nuestra Filosofía', title: 'Cultivando Valor', items: [{ title: "Comercio Justo", desc: "Aseguramos salarios justos para las comunidades locales." }, { title: "Sostenibilidad", desc: "Nos comprometemos a dirigir un negocio responsable." }, { title: "Alianzas", desc: "Creemos que las relaciones sólidas se construyen sobre la confianza y la colaboración." }, { title: "Ética Empresarial", desc: "Cada actividad comercial se lleva a cabo con alta integridad." }, { title: "Compromiso de Calidad", desc: "Aplicamos estándares de calidad consistentes en todo el proceso." }] },
    services: { label: 'Nuestra Experiencia', title: 'Excelencia Operativa', desc: 'Simplificamos las complejidades del comercio internacional. De la granja a su almacén.', items: [{ title: 'Abastecimiento Directo', desc: 'Trabajamos directamente con cooperativas de agricultores en Sulawesi.' }, { title: 'Control de Calidad', desc: 'Procesos rigurosos de clasificación (ISO/SNI).' }, { title: 'Logística Global', desc: 'Soluciones de envío sin interrupciones. De FOB a CIF.' }, { title: 'Preparación para la Exportación', desc: 'Aseguramos que cada producto esté listo para el envío internacional.' }], capability: 'Capacidad de Servicio', verified: 'Proceso Verificado' },
    product_reveal: { text: "Años cultivando confianza, cosechando materias primas premium y creciendo con socios globales. No solo exportamos cultivos, nutrimos el futuro del comercio." },
    sustainability: { label: 'Nuestro Compromiso', title: 'Energía Verde y Agricultura', desc: 'Para nosotros, la sostenibilidad es un proceso continuo en constante desarrollo.', stat1: { title: '100%', sub: 'Abastecimiento Orgánico' }, stat2: { title: 'Eco', sub: 'Residuos a Energía' }, stat3: { title: 'Justo', sub: 'Compensación a Agricultores' } },
    footer: { title1: 'Establecer alianza', title2: 'comercial.', desc: 'Asegure su cadena de suministro con productos indonesios premium.', inquiries: 'Consultas / RFQ', office: 'Oficina', company: 'Empresa', connect: 'Conectar', privacy: 'Privacidad', terms: 'Términos', rights: '© 2026 PT. Panasa Agro Nusantara', system: 'Sistema: En línea', links: { 'Our Story': 'Nuestra Historia', 'Commodities Catalog': 'Catálogo de Productos', 'Carreras': 'Carreras' } },
    cookie: { title: 'Valoramos su privacidad', text: 'Utilizamos cookies para mejorar su experiencia de navegación.', settings: 'Configuración de Cookies', manage: 'Gestionar Cookies', preferences: 'Preferencias de Cookies', save: 'Guardar Preferencias', category: { essential: 'Esencial', essential_desc: 'Requerido para que el sitio web funcione.', analytics: 'Analítica', analytics_desc: 'Ayúdanos a entender cómo usas nuestro sitio.', marketing: 'Marketing', marketing_desc: 'Utilizado para ofrecer anuncios relevantes.' } },
    modal: { title: 'Seleccionar Región' },
    about_page: { 
      label: 'La Empresa', 
      title: 'Somos constructores de confianza.', 
      desc1: 'Panasa es un exportador de productos agrícolas indonesios enfocado en conectar productos locales de calidad con el mercado global. Con sede en Sulawesi, Indonesia, trabajamos directamente con agricultores y proveedores de confianza para ofrecer cacao, café arábica, anacardos, copra blanca y briquetas de carbón de alta calidad. Nuestras áreas de abastecimiento se eligen específicamente para garantizar la consistencia, la trazabilidad del producto y precios competitivos.',
      desc2: 'Creemos que los mejores productos comienzan en el origen. Por ello, Panasa enfatiza procesos de adquisición responsables, un control de calidad estricto y un manejo eficiente de las exportaciones. Desde la cosecha hasta el empaquetado y el envío, cada etapa se gestiona para cumplir con los estándares internacionales de exportación.\n\nComo una empresa comercial indonesia en crecimiento, priorizamos las asociaciones a largo plazo basadas en la transparencia, la fiabilidad y una comunicación clara. No solo queremos ser un proveedor, queremos ser su socio de exportación de confianza en Indonesia.\n\nActualmente, Panasa continúa expandiendo su red global mientras mantiene su compromiso de entregar productos agrícolas de calidad y un servicio confiable a compradores de todo el mundo.',
      vision: { title: 'Visión Global', desc: 'Ser el puente más confiable, transparente y sostenible entre la agricultura de Sulawesi y el mercado industrial global para 2030.' }, 
      mission: { title: 'Nuestra Misión', items: ['Empoderar a los agricultores locales de Sulawesi.', 'Estandarizar el control de calidad (ISO/HACCP).', 'Entregar estrictamente a tiempo.'] }, 
      team: { label: 'El Liderazgo', title: 'Gestionado por Expertos', desc: 'Nuestro equipo está formado por agrónomos certificados, veteranos de la logística y especialistas en comercio internacional.', contact: 'Contactar con la Gerencia', stat1: 'Almacenes Clave', stat2: 'Trazabilidad' } 
    },
    why_us: { 
      label: 'Nuestra Promesa', 
      title: 'Más que Mercancías, Entregamos Certeza.', 
      desc: 'En un mercado lleno de ruido, ofrecemos claridad.', 
      items: [
        { title: "Precisión en Cada Grano", desc: "La confianza es buena, pero los datos son mejores." }, 
        { title: "Dominio del Movimiento", desc: "Los océanos son vastos, pero nuestro alcance es preciso." }, 
        { title: "Socios, No Solo Vendedores", desc: "No buscamos una sola transacción." }, 
        { title: "Arraigados en la Sostenibilidad", desc: "Todo comienza en el suelo." }
      ], 
      comparison: { title: 'Diferencia Estándar', subtitle: 'Cómo nos comparamos.', row1: { label: 'Agregador Tradisional', val1: 'Calidad Mixta', label2: 'Panasa Export', val2: 'Clasificado a Máquina' }, row2: { label: 'Comunicación', val1: 'Barreras de Idioma', label2: 'Panasa Export', val2: 'Soporte 24/7 en Inglés' }, row3: { label: 'Contratos', val1: 'Informal / Riesgoso', label2: 'Panasa Export', val2: 'Cumplimiento Legal' } }, 
      cta: { title: '¿Listo para enviar?', btn: 'Obtener Cotización' } 
    },
    legal: { back: 'Volver al Inicio', privacy: { label: 'Legal y Cumplimiento', title: 'Política de Privacidad', desc: 'La confianza es nuestra mercancía más valiosa.', sections: [{ title: "Recopilación de Datos", content: "Recopilamos información para cotizaciones." }, { title: "Uso", content: "Utilizado para negociaciones comerciales." }, { title: "Seguridad", content: "Implementamos medidas para proteger secretos comerciales." }], contact: 'Contactar DPO' }, terms: { label: 'Marco Legal', title: 'Términos y Condiciones', desc: 'Marco general para consultas comerciales.', clauses: [{ title: "Acuerdo", content: "Usted verifica que es una entidad comercial legítima." }, { title: "Precios", content: "Los precios son indicativos FOB." }, { title: "Calidad", content: "Reclamaciones dentro de los 14 días." }, { title: "Ley", content: "Regido por las leyes de Indonesia." }] } },
    product_details: {
      cocoa: {
        title: "Granos de Cacao",
        subtitle: "Fermentado Origen Sulawesi",
        description: "Nuestros granos de cacao provienen directamente de las tierras fértiles de Sulawesi.",
        specs: [
          { label: "Contenido de Humedad", value: "7.5% Max" },
          { label: "Conteo de Granos", value: "100 - 110 / 100g" },
          { label: "Granos Mohosos", value: "3% Max" },
          { label: "Granos Pizarrzosos", value: "3% Max" },
          { label: "Fermentation", value: "Totalmente Fermentado" }
        ],
        packaging: "Sacos de Yute (60kg / 65kg) o según solicitud del comprador. Capacidad del contenedor: 12.5 MT (20ft)."
      },
      coffee: {
        title: "Café Arábica",
        subtitle: "Grano Verde Origen Toraja",
        description: "Cultivado en las tierras altas de Tana Toraja.",
        specs: [
          { label: "Humedad", value: "12.5% Max" },
          { label: "Defectos", value: "Max 5% (Grado 1)" },
          { label: "Tamaño de Criba", value: "16-18" },
          { label: "Proceso", value: "Semi-Lavado / Lavado Completo" },
          { label: "Altitud", value: "1400 - 2000 MSNM" }
        ],
        packaging: "GrainPro dentro de Sacos de Yute (60kg). Capacidad del contenedor: 19 MT (20ft)."
      },
      copra: {
        title: "Copra Blanca",
        subtitle: "Grado Comestible Sulawesi",
        description: "Nuestra Copra Blanca Comestible se deriva de cocos maduros.",
        specs: [
          { label: "Humedad", value: "5% Max" },
          { label: "Contenido de Aceite", value: "65% Min" },
          { label: "FFA", value: "0.5% Max" },
          { label: "Color", value: "Blanco / Natural" },
          { label: "Hongos", value: "Nulo" }
        ],
        packaging: "Sacos de Malla o Sacos de Yute (50kg). Capacidad del contenedor: 25 MT (40ft)."
      },
      charcoal: {
        title: "Carbón de Coco",
        subtitle: "Briquetas Premium",
        description: "Briquetas de carbón de cáscara de coco 100% naturales.",
        specs: [
          { label: "Contenido de Ceniza", value: "2.5% Max" },
          { label: "Humedad", value: "6% Max" },
          { label: "Materia Volátil", value: "15% Max" },
          { label: "Carbono Fijo", value: "80% Min" },
          { label: "Tiempo de Combustión", value: "2+ Horas" }
        ],
        packaging: "Caja Interior (1kg) + Caja Maestra (10kg). Marca personalizada disponible."
      },
      robusta: {
        title: "Café Robusta",
        subtitle: "Premium Sulawesi",
        description: "Procedente de las tierras bajas de Sulawesi.",
        specs: [
          { label: "Humedad", value: "13% Max" },
          { label: "Defectos", value: "Max 45 (Grado 4) / Max 11 (Grado 1)" },
          { label: "Tamaño del Grano", value: "Grande / Mediano" },
          { label: "Proceso", value: "Natural / Sec" },
          { label: "Cafeína", value: "2.2% Promedio" }
        ],
        packaging: "Sacos de Yute (60kg). Capacidad del contenedor: 19 MT (20ft)."
      }
    }
  },
  // French
  fr: {
    common: { readMore: 'Lire la suite', learnMore: 'En savoir plus', downloadCatalog: 'Télécharger le catalogue', getQuote: 'Obtenir un devis', contactUs: 'Contactez-nous', backHome: 'Retour à l\'accueil', accept: 'Tout accepter', decline: 'Refuser', backToProducts: 'Retour aux Produits', specs: 'Spécifications', packaging: 'Emballage & Expédition', submit: 'Soumettre', submitting: 'Envoi...', successTitle: 'Demande Envoyée', successDesc: 'Merci. Notre équipe vous contactera bientôt par e-mail ou WhatsApp.' },
    nav: { Home: 'Accueil', About: 'À propos', 'Why Us': 'Pourquoi Nous', Work: 'Produits', Expertise: 'Expertise', Sustainability: 'Durabilité', Contact: 'Contact', Client: 'Espace Client' },
    client_form: { title: 'Demande de Partenariat', desc: 'Remplissez le formulaire ci-dessous pour devenir un client enregistré ou demander un devis officiel.', labels: { name: 'Nom Complet', company: 'Nom de l\'Entreprise', email: 'Adresse Email', phone: 'WhatsApp / Numéro de Téléphone', country: 'Pays', product: 'Produit Intéressé', message: 'Message' }, placeholders: { name: 'Jean Dupont', company: 'Imports Mondiaux SARL', email: 'jean@entreprise.com', phone: '+33 6 12 34 56 78', country: 'Sélectionnez ou tapez le pays', message: 'Bonjour, je suis intéressé par vos fèves de cacao. Veuillez envoyer les spécifications, le prix, le MOQ et les détails d\'emballage.' }, products: { cocoa: 'Fèves de Cacao', coffee: 'Café Arabica', cashew: 'Noix de Cajou', copra: 'Coprah Blanc', charcoal: 'Briquettes de Charbon' } },
    loader: { system: 'Système', booting: 'Séquence de démarrage', est: 'Est. 2025', country: 'Indonésie', quality: 'Qualité Export Premium', words: ["ORIGINE", "CULTURE", "RÉCOLTE", "PROCESSUS", "PANASA"] },
    hero: { est: 'Est. 2025 — Indonésie', mainTitle: 'PREMIUM', subTitle1: 'Nature', subTitle2: 'PRODUITS', title1: 'Marchandises premium', title2: 'pour le monde.', desc: 'Nous comblons le fossé entre les agriculteurs indonésiens et les marchés mondiaux. Exportation de Cacao, Café, Coprah et Briquettes de Charbon de haute qualité.', cta: 'Nos Produits', liveMarket: 'Marché en Direct', globalExport: 'Exportation Mondiale', scroll: 'Défilez pour Explorer' },
    marquee: { line1: ["CACAO", "CAFÉ", "COPRAH", "CHARBON"], line2: ["INDONÉSIE", "DURABLE", "PREMIUM", "EXPORT"] },
    network: { label: 'Réseau Mondial', title: 'Logistique Sans Frontières', desc: 'Du cœur de Sulawesi à plus de 20 pays. Notre chaîne d\'approvisionnement intégrée garantit que la distance n\'est jamais un obstacle à la qualité. Nous naviguons sur des routes commerciales complexes pour livrer à temps, à chaque fois.', stats: { countries: 'Pays Servis', continents: 'Continents', ports: 'Ports Partenaires' }, shipping: 'Suivi des Expéditions en Direct' },
    about: { label: 'Qui sommes-nous', title: 'Nourrir la nature, approvisionner le globe.', desc: 'Panasa est une société d\'exportation indonésienne de premier plan.', stat1: 'Agriculteurs Partenaires', stat2: 'Pays Servis' },
    portfolio: { 
      label: 'Nos Marchandises', 
      title: 'Produits Premium', 
      drag: 'Glisser ou Défiler', 
      quality: 'Qualité Export', 
      items: { 
        cocoa: { title: 'Fèves de Cacao', cat: 'Origine Sulawesi', year: 'Fermenté' }, 
        coffee: { title: 'Café Arabica', cat: 'Origine Toraja', year: 'Grain Vert' }, 
        copra: { title: 'Coprah Blanc', cat: 'Grade Sulawesi', year: 'Séché' }, 
        charcoal: { title: 'Charbon', cat: 'Coque de Coco', year: 'Briquettes' }, 
        robusta: { title: 'Robusta', cat: 'Origine Sulawesi', year: 'Premium' } 
      } 
    },
    philosophy: { label: 'Notre Philosophie', title: 'Cultiver la Valeur', items: [{ title: "Commerce Équitable", desc: "Nous assurons des salaires équitables pour les communautés locales." }, { title: "Durabilité", desc: "Nous nous engageons à gérer une entreprise responsable." }, { title: "Partenariat", desc: "Nous croyons que les relations solides se construisent sur la confiance." }, { title: "Éthique des Affaires", desc: "Chaque activité commerciale est menée avec une haute intégrité." }, { title: "Engagement Qualité", desc: "Nous appliquons des normes de qualité cohérentes." }] },
    services: { label: 'Notre Expertise', title: 'Excellence Opérationnelle', desc: 'Nous simplifions les complexités du commerce international. De la ferme à votre entrepôt.', items: [{ title: 'Sourcing Direct', desc: 'Nous travaillons directement avec les coopératives agricoles.' }, { title: 'Contrôle Qualité', desc: 'Processus rigoureux de tri (ISO/SNI).' }, { title: 'Logistique Mondiale', desc: 'Solutions d\'expédition transparentes. De FOB à CIF.' }, { title: 'Préparation à l\'Exportation', desc: 'Nous nous assurons que chaque produit est prêt pour l\'expédition internationale.' }], capability: 'Capacité de Service', verified: 'Processus Vérifié' },
    product_reveal: { text: "Des années à cultiver la confiance, à récolter des produits premium et à grandir avec des partenaires mondiaux. Nous n'exportons pas seulement des cultures, nous nourrissons l'avenir du commerce." },
    sustainability: { label: 'Notre Engagement', title: 'Énergie Verte & Agriculture', desc: 'Pour nous, la durabilité est un processus continu en constante évolution.', stat1: { title: '100%', sub: 'Sourcing Bio' }, stat2: { title: 'Éco', sub: 'Déchets en Énergie' }, stat3: { title: 'Équitable', sub: 'Compensation Agriculteurs' } },
    footer: { title1: 'Établir un partenariat', title2: 'commercial.', desc: 'Sécurisez votre chaîne d\'approvisionnement avec des produits indonésiens premium.', inquiries: 'Demandes / RFQ', office: 'Bureau', company: 'Société', connect: 'Connecter', privacy: 'Confidentialité', terms: 'Conditions', rights: '© 2026 PT. Panasa Agro Nusantara', system: 'Système: En ligne', links: { 'Our Story': 'Notre Histoire', 'Commodities Catalog': 'Catalogue Produits', 'Careers': 'Carrières' } },
    cookie: { title: 'Nous respectons votre vie privée', text: 'Nous utilisons des cookies pour améliorer votre expérience de navigation.', settings: 'Paramètres des Cookies', manage: 'Gérer les Cookies', preferences: 'Préférences de Cookies', save: 'Enregistrer', category: { essential: 'Essentiel', essential_desc: 'Requis pour le fonctionnement du site.', analytics: 'Analytique', analytics_desc: 'Aidez-nous à comprendre comment vous utilisez notre site.', marketing: 'Marketing', marketing_desc: 'Utilisé pour diffuser des publicités pertinentes.' } },
    modal: { title: 'Choisir la Région' },
    about_page: { 
      label: 'La Société', 
      title: 'Nous sommes des bâtisseurs de confiance.', 
      desc1: 'Panasa est un exportateur de produits agricoles indonésiens qui se concentre sur la connexion de produits locaux de qualité avec le marché mondial. Basés à Sulawesi, en Indonésie, nous travaillons directement avec des agriculteurs et des fournisseurs de confiance pour fournir du cacao, du café arabica, des noix de cajou, du coprah blanc et des briquettes de charbon de haute qualité. Nos zones d\'approvisionnement sont spécifiquement choisies pour garantir la cohérence, la traçabilité des produits et des prix compétitifs.',
      desc2: 'Nous croyons que les meilleurs produits commencent à la source. C\'est pourquoi Panasa met l\'accent sur des processus d\'approvisionnement responsables, un contrôle qualité strict et une gestion efficace des exportations. De la récolte à l\'emballage et à l\'expédition, chaque étape est gérée pour répondre aux normes d\'exportation internationales.\n\nEn tant qu\'entreprise commerciale indonésienne en pleine croissance, nous privilégions les partenariats à long terme fondés sur la transparence, la fiabilité et une communication claire. Nous ne voulons pas seulement être un fournisseur — nous voulons être votre partenaire d\'exportation de confiance en Indonésie.\n\nActuellement, Panasa continue d\'étendre son réseau mondial tout en restant engagé à fournir des produits agricoles de qualité et un service fiable aux acheteurs du monde entier.',
      vision: { title: 'Vision Mondiale', desc: 'Être le pont le plus fiable, transparent et durable entre l\'agriculture de Sulawesi et le marché industriel mondial d\'ici 2030.' }, 
      mission: { title: 'Notre Mission', items: ['Responsabiliser les agriculteurs locaux de Sulawesi.', 'Standardiser le contrôle qualité (ISO/HACCP).', 'Livrer strictement à temps.'] }, 
      team: { label: 'Direction', title: 'Géré par des Experts', desc: 'Notre équipe est composée d\'agronomes certifiés, de vétérans de la logistique et de spécialistes du commerce international.', contact: 'Contacter la Direction', stat1: 'Entrepôts Clés', stat2: 'Traçabilité' } 
    },
    why_us: { 
      label: 'Notre Promesse', 
      title: 'Au-delà des Marchandises, Nous Livrons la Certitude.', 
      desc: 'Dans un marché bruyant, nous offrons la clarté.', 
      items: [
        { title: "Précision dans Chaque Grain", desc: "La confiance c'est bien, les données c'est mieux." }, 
        { title: "Maîtrise du Mouvement", desc: "Les océans sont vastes, mais notre portée est précise." }, 
        { title: "Partenaires, Pas Juste Vendeurs", desc: "Nous ne sommes pas là pour une seule transaction." }, 
        { title: "Enraciné dans la Durabilité", desc: "Tout commence dans le sol." }
      ], 
      comparison: { title: 'Différence Standard', subtitle: 'Comparaison.', row1: { label: 'Agrégateur Traditionnel', val1: 'Qualité Mixte', label2: 'Panasa Export', val2: 'Trié par Machine' }, row2: { label: 'Communication', val1: 'Barrières Linguistiques', label2: 'Panasa Export', val2: 'Support Anglais 24/7' }, row3: { label: 'Contrats', val1: 'Informel / Risqué', label2: 'Panasa Export', val2: 'Conformité Légale' } }, 
      cta: { title: 'Prêt à expédier ?', btn: 'Obtenir un Devis' } 
    },
    legal: { back: 'Retour à l\'accueil', privacy: { label: 'Juridique et Conformité', title: 'Politique de Confidentialité', desc: 'La confiance est notre bien le plus précieux.', sections: [{ title: "Collecte de Données", content: "Nous collectons des infos pour les devis." }, { title: "Utilisation", content: "Utilisé pour les négociations commerciales." }, { title: "Sécurité", content: "Nous protégeons les secrets commerciaux." }], contact: 'Contacter le DPO' }, terms: { label: 'Cadre Juridique', title: 'Conditions Générales', desc: 'Cadre général pour les demandes commerciales.', clauses: [{ title: "Accord", content: "Vous vérifiez être une entité commerciale légitime." }, { title: "Prix", content: "Les prix sont indicatifs FOB." }, { title: "Qualité", content: "Réclamations sous 14 jours." }, { title: "Loi", content: "Régi par les lois de l'Indonésie." }] } },
    product_details: {
      cocoa: {
        title: "Fèves de Cacao",
        subtitle: "Origine Sulawesi Fermenté",
        description: "Nos fèves de cacao proviennent directement des terres fertiles de Sulawesi.",
        specs: [
          { label: "Teneur en Humidité", value: "7.5% Max" },
          { label: "Nombre de Fèves", value: "100 - 110 / 100g" },
          { label: "Fèves Moisies", value: "3% Max" },
          { label: "Fèves Ardoisées", value: "3% Max" },
          { label: "Fermentation", value: "Entièrement Fermenté" }
        ],
        packaging: "Sacs de Jute (60kg / 65kg) ou selon la demande de l'acheteur. Capacité du conteneur : 12.5 MT (20ft)."
      },
      coffee: {
        title: "Café Arabica",
        subtitle: "Grain Vert Origine Toraja",
        description: "Cultivées dans les hauts plateaux de Tana Toraja.",
        specs: [
          { label: "Humidité", value: "12.5% Max" },
          { label: "Défauts", value: "Max 5% (Grade 1)" },
          { label: "Taille de Crible", value: "16-18" },
          { label: "Processus", value: "Semi-Lavé / Lavé Complet" },
          { label: "Altitude", value: "1400 - 2000 m" }
        ],
        packaging: "GrainPro dans Sacs de Jute (60kg). Capacité du conteneur : 19 MT (20ft)."
      },
      copra: {
        title: "Coprah Blanc",
        subtitle: "Grade Comestible Sulawesi",
        description: "Notre Coprah Blanc Comestible est dérivé de noix de coco mûres.",
        specs: [
          { label: "Humidité", value: "5% Max" },
          { label: "Teneur en Huile", value: "65% Min" },
          { label: "FFA", value: "0.5% Max" },
          { label: "Couleur", value: "Blanc / Naturel" },
          { label: "Champignon", value: "Néant" }
        ],
        packaging: "Sacs en Filet ou Sacs de Jute (50kg). Capacité du conteneur : 25 MT (40ft)."
      },
      charcoal: {
        title: "Charbon de Coco",
        subtitle: "Briquettes Premium",
        description: "Briquettes de charbon de coque de noix de coco 100% naturelles.",
        specs: [
          { label: "Teneur en Cendres", value: "2.5% Max" },
          { label: "Humidité", value: "6% Max" },
          { label: "Matière Volatile", value: "15% Max" },
          { label: "Carbone Fixe", value: "80% Min" },
          { label: "Temps de Combustion", value: "2+ Heures" }
        ],
        packaging: "Boîte Intérieure (1kg) + Boîte Maîtresse (10kg). Marque personnalisée disponible."
      },
      robusta: {
        title: "Café Robusta",
        subtitle: "Premium Sulawesi",
        description: "Provenant des basses terres de Sulawesi.",
        specs: [
          { label: "Humidité", value: "13% Max" },
          { label: "Défauts", value: "Max 45 (Grade 4) / Max 11 (Grade 1)" },
          { label: "Taille de Fève", value: "Grand / Moyen" },
          { label: "Processus", value: "Naturel / Sec" },
          { label: "Caféine", value: "2.2% Moyenne" }
        ],
        packaging: "Sacs de Jute (60kg). Capacité du conteneur : 19 MT (20ft)."
      }
    }
  },
  // German
  de: {
    common: { readMore: 'Mehr lesen', learnMore: 'Mehr erfahren', downloadCatalog: 'Katalog herunterladen', getQuote: 'Angebot anfordern', contactUs: 'Kontaktieren Sie uns', backHome: 'Zurück zur Startseite', accept: 'Alle akzeptieren', decline: 'Ablehnen', backToProducts: 'Zurück zu den Produkten', specs: 'Spezifikationen', packaging: 'Verpackung & Versand', submit: 'Senden', submitting: 'Senden...', successTitle: 'Anfrage Gesendet', successDesc: 'Danke. Unser Team wird Sie in Kürze per E-Mail oder WhatsApp kontaktieren.' },
    nav: { Home: 'Startseite', About: 'Über uns', 'Why Us': 'Warum wir', Work: 'Produkte', Expertise: 'Expertise', Sustainability: 'Nachhaltigkeit', Contact: 'Kontakt', Client: 'Kundenbereich' },
    client_form: { title: 'Partnerschaftsanfrage', desc: 'Füllen Sie das untenstehende Formular aus, um registrierter Kunde zu werden oder ein formelles Angebot anzufordern.', labels: { name: 'Vollständiger Name', company: 'Firmenname', email: 'E-Mail-Adresse', phone: 'WhatsApp / Telefonnummer', country: 'Land', product: 'Interessiertes Produkt', message: 'Nachricht' }, placeholders: { name: 'Max Mustermann', company: 'Global Imports GmbH', email: 'max@firma.de', phone: '+49 123 456789', country: 'Land auswählen oder eingeben', message: 'Hallo, ich interessiere mich für Ihre Kakaobohnen. Bitte senden Sie Spezifikationen, Preis, MOQ und Verpackungsdetails.' }, products: { cocoa: 'Kakaobohnen', coffee: 'Arabica Kaffee', cashew: 'Cashewnüsse', copra: 'Weiße Kopra', charcoal: 'Holzkohlebriketts' } },
    loader: { system: 'System', booting: 'Startsequenz', est: 'Gegr. 2025', country: 'Indonesien', quality: 'Premium Exportqualität', words: ["HERKUNFT", "ANBAU", "ERNTE", "PROZESS", "PANASA"] },
    hero: { est: 'Gegr. 2025 — Indonesien', mainTitle: 'PREMIUM', subTitle1: 'Natur', subTitle2: 'ROHSTOFFE', title1: 'Premium-Rohstoffe', title2: 'für die Welt.', desc: 'Wir überbrücken die Lücke zwischen indonesischen Bauern und globalen Märkten. Export von hochwertigem Kakao, Kaffee, Kopra und Holzkohlebriketts.', cta: 'Unsere Produkte', liveMarket: 'Live-Markt', globalExport: 'Globaler Export', scroll: 'Scrollen zum Erkunden' },
    marquee: { line1: ["KAKAO", "KAFFEE", "KOPRA", "HOLZKOHLE"], line2: ["INDONESIEN", "NACHHALTIG", "PREMIUM", "EXPORT"] },
    network: { label: 'Globales Netzwerk', title: 'Grenzenlose Logistik', desc: 'Vom Herzen Sulawesis in über 20 Länder. Unsere integrierte Lieferkette stellt sicher, dass Entfernungen kein Hindernis für Qualität sind. Wir navigieren komplexe Handelsrouten, um pünktlich zu liefern, jedes Mal.', stats: { countries: 'Belieferte Länder', continents: 'Kontinente', ports: 'Partnerhäfen' }, shipping: 'Live-Sendungsverfolgung' },
    about: { label: 'Wer wir sind', title: 'Natur pflegen, die Welt versorgen.', desc: 'Panasa ist ein führendes indonesisches Exportunternehmen.', stat1: 'Partner-Landwirte', stat2: 'Belieferte Länder' },
    portfolio: { 
      label: 'Unsere Waren', 
      title: 'Premium Produkte', 
      drag: 'Ziehen oder Scrollen', 
      quality: 'Exportqualität', 
      items: { 
        cocoa: { title: 'Kakaobohnen', cat: 'Herkunft Sulawesi', year: 'Fermentiert' }, 
        coffee: { title: 'Arabica Kaffee', cat: 'Herkunft Toraja', year: 'Grüne Bohnen' }, 
        copra: { title: 'Weiße Kopra', cat: 'Qualität Sulawesi', year: 'Getrocknet' }, 
        charcoal: { title: 'Holzkohle', cat: 'Kokosnussschale', year: 'Briketts' }, 
        robusta: { title: 'Robusta', cat: 'Herkunft Sulawesi', year: 'Premium' } 
      } 
    },
    philosophy: { label: 'Unsere Philosophie', title: 'Werte kultivieren', items: [{ title: "Fairer Handel", desc: "Wir sichern faire Löhne für lokale Gemeinschaften." }, { title: "Nachhaltigkeit", desc: "Wir verpflichten uns zu einer verantwortungsvollen Unternehmensführung." }, { title: "Partnerschaft", desc: "Wir glauben, dass starke Beziehungen auf Vertrauen basieren." }, { title: "Geschäftsethik", desc: "Jede geschäftliche Aktivität wird mit hoher Integrität durchgeführt." }, { title: "Qualitätsverpflichtung", desc: "Wir wenden konsistente Qualitätsstandards an." }] },
    services: { label: 'Unsere Expertise', title: 'Operative Exzellenz', desc: 'Wir vereinfachen die Komplexität des internationalen Handels. Vom Bauernhof bis zu Ihrem Lager.', items: [{ title: 'Direktbeschaffung', desc: 'Wir arbeiten direkt mit Bauerngenossenschaften zusammen.' }, { title: 'Qualitätskontrolle', desc: 'Strenge Sortierprozesse (ISO/SNI).' }, { title: 'Globale Logistik', desc: 'Nahtlose Versandlösungen. Von FOB bis CIF.' }, { title: 'Exportbereitschaft', desc: 'Wir stellen sicher, dass jedes Produkt bereit für den internationalen Versand ist.' }], capability: 'Servicefähigkeit', verified: 'Verifizierter Prozess' },
    product_reveal: { text: "Jahre des Vertrauensaufbaus, der Ernte von Premium-Rohstoffen und des Wachstums mit globalen Partnern. Wir exportieren nicht nur Ernten, wir pflegen die Zukunft des Handels." },
    sustainability: { label: 'Unser Engagement', title: 'Grüne Energie & Landwirtschaft', desc: 'Nachhaltigkeit ist für uns ein kontinuierlicher Prozess, der ständig weiterentwickelt wird.', stat1: { title: '100%', sub: 'Bio-Beschaffung' }, stat2: { title: 'Öko', sub: 'Abfall-zu-Energie' }, stat3: { title: 'Fair', sub: 'Bauernkompensation' } },
    footer: { title1: 'Handelspartnerschaft', title2: 'aufbauen.', desc: 'Sichern Sie Ihre Lieferkette mit indonesischen Premium-Rohstoffen.', inquiries: 'Anfragen / RFQ', office: 'Büro', company: 'Firma', connect: 'Verbinden', privacy: 'Datenschutz', terms: 'AGB', rights: '© 2026 PT. Panasa Agro Nusantara', system: 'System: Online', links: { 'Our Story': 'Unsere Geschichte', 'Commodities Catalog': 'Warenkatalog', 'Careers': 'Karriere' } },
    cookie: { title: 'Wir schätzen Ihre Privatsphäre', text: 'Wir verwenden Cookies, um Ihr Surferlebnis zu verbessern.', settings: 'Cookie-Einstellungen', manage: 'Cookies verwalten', preferences: 'Cookie-Präferenzen', save: 'Einstellungen speichern', category: { essential: 'Essenziell', essential_desc: 'Erforderlich für die Funktion der Website.', analytics: 'Analytik', analytics_desc: 'Helfen Sie uns zu verstehen, wie Sie unsere Website nutzen.', marketing: 'Marketing', marketing_desc: 'Wird verwendet, um relevante Werbung bereitzustellen.' } },
    modal: { title: 'Region wählen' },
    about_page: { 
      label: 'Das Unternehmen', 
      title: 'Wir sind Vertrauensbildner.', 
      desc1: 'Panasa ist ein indonesischer Exporteur von landwirtschaftlichen Erzeugnissen, der sich darauf konzentriert, hochwertige lokale Produkte mit dem globalen Markt zu verbinden. Mit Sitz in Sulawesi, Indonesien, arbeiten wir direkt mit Bauern und vertrauenswürdigen Lieferanten zusammen, um hochwertigen Kakao, Arabica-Kaffee, Cashewnüsse, weiße Kopra und Holzkohlebriketts zu liefern. Unsere Beschaffungsgebiete werden speziell ausgewählt, um Konsistenz, Rückverfolgbarkeit der Produkte und wettbewerbsfähige Preise zu gewährleisten.',
      desc2: 'Wir glauben, dass die besten Produkte an der Quelle beginnen. Daher legt Panasa Wert auf verantwortungsvolle Beschaffungsprozesse, strenge Qualitätskontrollen und eine effiziente Exportabwicklung. Von der Ernte über die Verpackung bis zum Versand wird jede Phase so gesteuert, dass sie internationalen Exportstandards entspricht.\n\nAls wachsendes indonesisches Handelsunternehmen priorisieren wir langfristige Partnerschaften, die auf Transparenz, Zuverlässigkeit und klarer Kommunikation aufbauen. Wir wollen nicht nur ein Lieferant sein — wir wollen Ihr vertrauenswürdiger Exportpartner aus Indonesien.\n\nDerzeit Panasa baut sein globales Netzwerk weiter aus und bleibt gleichzeitig seinem Engagement treu, Käufern weltweit hochwertige landwirtschaftliche Produkte und zuverlässigen Service zu bieten.',
      vision: { title: 'Globale Vision', desc: 'Bis 2030 die zuverlässigste, transparenteste und nachhaltigste Brücke antara der Landwirtschaft Sulawesis und dem globalen Industriemarkt zu sein.' }, 
      mission: { title: 'Unsere Mission', items: ['Lokale Bauern in Sulawesi stärken.', 'Qualitätskontrolle standardisieren (ISO/HACCP).', 'Pünktlich liefern.'] }, 
      team: { label: 'Führung', title: 'Von Experten geleitet', desc: 'Unser Team besteht aus zertifizierten Agronomen, Logistikveteranen und Spezialisten für internationalen Handel.', contact: 'Management kontaktieren', stat1: 'Hauptlager', stat2: 'Rückverfolgbarkeit' } 
    },
    why_us: { 
      label: 'Unser Versprechen', 
      title: 'Mehr als Rohstoffe, wir liefern Gewissheit.', 
      desc: 'In einem lauten Markt bieten wir Klarheit.', 
      items: [
        { title: "Präzision in jedem Korn", desc: "Vertrauen ist gut, Daten sind besser." }, 
        { title: "Meisterschaft der Bewegung", desc: "Ozeane sind weit, aber unsere Reichweite ist präzise." }, 
        { title: "Partner, nicht nur Verkäufer", desc: "Wir sind nicht für eine einzige Transaktion hier." }, 
        { title: "Verwurzelt in Nachhaltigkeit", desc: "Es beginnt im Boden." }
      ], 
      comparison: { title: 'Standardunterschied', subtitle: 'Vergleich.', row1: { label: 'Traditioneller Aggregator', val1: 'Gemischte Qualität', label2: 'Panasa Export', val2: 'Maschinell sortiert' }, row2: { label: 'Kommunikation', val1: 'Sprachbarrieren', label2: 'Panasa Export', val2: '24/7 Englischer Support' }, row3: { label: 'Verträge', val1: 'Informell / Riskant', label2: 'Panasa Export', val2: 'Rechtssicherheit' } }, 
      cta: { title: 'Bereit zum Versand?', btn: 'Angebot einholen' } 
    },
    legal: { back: 'Zurück zur Startseite', privacy: { label: 'Recht & Compliance', title: 'Datenschutzrichtlinie', desc: 'Vertrauen ist unser wertvollstes Gut.', sections: [{ title: "Datenerfassung", content: "Wir erfassen Infos für Angebote." }, { title: "Nutzung", content: "Für Handelsverhandlungen genutzt." }, { title: "Sicherheit", content: "Wir schützen Geschäftsgeheimnisse." }], contact: 'DSB kontaktieren' }, terms: { label: 'Rechtlicher Rahmen', title: 'Allgemeine Geschäftsbedingungen', desc: 'Rahmen für Handelsanfragen.', clauses: [{ title: "Vereinbarung", content: "Sie bestätigen, dass Sie ein legitimes Unternehmen sind." }, { title: "Preise", content: "Preise sind indikativ FOB." }, { title: "Qualität", content: "Ansprüche innerhalb von 14 Tagen." }, { title: "Gesetz", content: "Unterliegt den Gesetzen Indonesiens." }] } },
    product_details: {
      cocoa: {
        title: "Kakaobohnen",
        subtitle: "Fermentiert Herkunft Sulawesi",
        description: "Unsere Kakaobohnen stammen direkt aus Sulawesi.",
        specs: [
          { label: "Feuchtigkeitsgehalt", value: "7.5% Max" },
          { label: "Bohnenanzahl", value: "100 - 110 / 100g" },
          { label: "Schimmelige Bohnen", value: "3% Max" },
          { label: "Schieferige Bohnen", value: "3% Max" },
          { label: "Fermentation", value: "Vollständig Fermentiert" }
        ],
        packaging: "Jutesäcke (60kg / 65kg) oder nach Kundenwunsch. Containerkapazität: 12.5 MT (20ft)."
      },
      coffee: {
        title: "Arabica Kaffee",
        subtitle: "Grüne Bohnen Herkunft Toraja",
        description: "Angebaut im Hochland von Tana Toraja.",
        specs: [
          { label: "Feuchtigkeit", value: "12.5% Max" },
          { label: "Defekte", value: "Max 5% (Grad 1)" },
          { label: "Siebgröße", value: "16-18" },
          { label: "Prozess", value: "Halb gewaschen / Voll gewaschen" },
          { label: "Höhe", value: "1400 - 2000 m" }
        ],
        packaging: "GrainPro in Jutesäcken (60kg). Containerkapazität: 19 MT (20ft)."
      },
      copra: {
        title: "Weiße Kopra",
        subtitle: "Lebensmittelqualität Sulawesi",
        description: "Unsere essbare weiße Kopra stammt von reifen Kokosnüssen.",
        specs: [
          { label: "Feuchtigkeit", value: "5% Max" },
          { label: "Ölgehalt", value: "65% Min" },
          { label: "FFA", value: "0.5% Max" },
          { label: "Farbe", value: "Weiß / Natürlich" },
          { label: "Pilz", value: "Keiner" }
        ],
        packaging: "Netzsäcke oder Jutesäcke (50kg). Containerkapazität: 25 MT (40ft)."
      },
      charcoal: {
        title: "Kokoskohle",
        subtitle: "Premium Briketts",
        description: "100% natürliche Kokosnussschalen-Holzkohlebriketts.",
        specs: [
          { label: "Aschegehalt", value: "2.5% Max" },
          { label: "Feuchtigkeit", value: "6% Max" },
          { label: "Flüchtige Bestandteile", value: "15% Max" },
          { label: "Fester Kohlenstoff", value: "80% Min" },
          { label: "Brenndauer", value: "2+ Stunden" }
        ],
        packaging: "Innenbox (1kg) + Umkarton (10kg). Individuelles Branding verfügbar."
      },
      robusta: {
        title: "Robusta Kaffee",
        subtitle: "Premium Sulawesi",
        description: "Aus dem Tiefland von Sulawesi stammend.",
        specs: [
          { label: "Feuchtigkeit", value: "13% Max" },
          { label: "Defekte", value: "Max 45 (Grad 4) / Max 11 (Grad 1)" },
          { label: "Bohnengröße", value: "Groß / Mittel" },
          { label: "Prozess", value: "Natürlich / Trocken" },
          { label: "Koffein", value: "2.2% Durchschnitt" }
        ],
        packaging: "Jutesäcke (60kg). Containerkapazität: 19 MT (20ft)."
      }
    }
  },
  // Russian
  ru: {
    common: { readMore: 'Читать далее', learnMore: 'Узнать больше', downloadCatalog: 'Скачать каталог', getQuote: 'Получить квоту', contactUs: 'Связаться с нами', backHome: 'На главную', accept: 'Принять все', decline: 'Отклонить', backToProducts: 'Назад к продукции', specs: 'Спецификации', packaging: 'Упаковка и доставка', submit: 'Отправить', submitting: 'Отправка...', successTitle: 'Запрос отправлен', successDesc: 'Спасибо. Наша команда свяжется с вами в ближайшее время по электронной почте или WhatsApp.' },
    nav: { Home: 'Главная', About: 'О нас', 'Why Us': 'Почему мы', Work: 'Продукция', Expertise: 'Экспертиза', Sustainability: 'Устойчивость', Contact: 'Контакты', Client: 'Зона Клиента' },
    client_form: { title: 'Запрос на Партнерство', desc: 'Заполните форму ниже, чтобы стать зарегистрированным клиентом или запросить официальное предложение.', labels: { name: 'Полное Имя', company: 'Название Компании', email: 'Адрес Электронной Почты', phone: 'WhatsApp / Номер Телефона', country: 'Страна', product: 'Интересующий Продукт', message: 'Сообщение' }, placeholders: { name: 'Иван Иванов', company: 'Глобал Импорт ООО', email: 'ivan@company.ru', phone: '+7 912 345 67 89', country: 'Выберите или введите страну', message: 'Здравствуйте, меня интересуют ваши какао-бобы. Пожалуйста, пришлите спецификацию, цену, MOQ и детали упаковки.' }, products: { cocoa: 'Какао-бобы', coffee: 'Кофе Арабика', cashew: 'Кешью', copra: 'Белая Копра', charcoal: 'Угольные Брикеты' } },
    loader: { system: 'Система', booting: 'Загрузка', est: 'Осн. 2025', country: 'Индонезия', quality: 'Премиум экспортное качество', words: ["ИСТОК", "ВЫРАЩИВАНИЕ", "УРОЖАЙ", "ПРОЦЕСС", "PANASA"] },
    hero: { est: 'Осн. 2025 — Индонезия', mainTitle: 'ПРЕМИУМ', subTitle1: 'Природы', subTitle2: 'ТОВАРЫ', title1: 'Премиум товары', title2: 'для мира.', desc: 'Мы соединяем индонезийских фермеров с глобальными рынками. Экспорт высококачественного какао, кофе, копры и древесного угля.', cta: 'Наши продукты', liveMarket: 'Живой Рынок', globalExport: 'Глобальный Экспорт', scroll: 'Прокрутите для просмотра' },
    marquee: { line1: ["КАКАО", "КОФЕ", "КОПРА", "УГОЛЬ"], line2: ["ИНДОНЕЗИЯ", "ЭКОЛОГИЧНО", "ПРЕМИУМ", "ЭКСПОРТ"] },
    network: { label: 'Глобальная Сеть', title: 'Логистика без границ', desc: 'Из сердца Сулавеси в более чем 20 стран. Наша интегрированная цепочка поставок гарантирует, что расстояние никогда не станет препятствием для качества. Мы прокладываем сложные торговые маршруты, чтобы доставлять вовремя, каждый раз.', stats: { countries: 'Обслуживаемые страны', continents: 'Континенты', ports: 'Порты-партнеры' }, shipping: 'Отслеживание грузов в реальном времени' },
    about: { label: 'Кто мы', title: 'Заботясь о природе, снабжаем мир.', desc: 'Panasa — ведущая индонезийская экспортная компания.', stat1: 'Фермеров-партнеров', stat2: 'Охвачено стран' },
    portfolio: { 
      label: 'Наши товары', 
      title: 'Премиум Продукты', 
      drag: 'Тяните или листайте', 
      quality: 'Экспортное качество', 
      items: { 
        cocoa: { title: 'Какао-бобы', cat: 'Происхождение Сулавеси', year: 'Ферментированные' }, 
        coffee: { title: 'Кофе Арабика', cat: 'Происхождение Тораха', year: 'Зеленый кофе' }, 
        copra: { title: 'Белая Копра', cat: 'Сорт Сулавеси', year: 'Сушеная' }, 
        charcoal: { title: 'Уголь', cat: 'Кокосовая скорлупа', year: 'Брикеты' }, 
        robusta: { title: 'Робуста', cat: 'Происхождение Сулавеси', year: 'Премиум' } 
      } 
    },
    philosophy: { label: 'Наша философия', title: 'Культивируя ценность', items: [{ title: "Честная торговля", desc: "Мы обеспечиваем справедливую оплату труда местным сообществам." }, { title: "Устойчивость", desc: "Мы стремимся вести ответственный бизнес." }, { title: "Партнерство", desc: "Мы верим, что крепкие отношения строятся на доверии." }, { title: "Деловая Этика", desc: "Каждая деловая активность осуществляется с высокой честностью." }, { title: "Обязательство Качества", desc: "Мы применяем последовательные стандарты качества." }] },
    services: { label: 'Наша экспертиза', title: 'Операционное совершенство', desc: 'Мы упрощаем сложности международной торговли. От фермы до вашего склада.', items: [{ title: 'Прямые закупки', desc: 'Работаем напрямую с фермерскими кооперативами.' }, { title: 'Контроль качества', desc: 'Строгие процессы (ISO/SNI).' }, { title: 'Глобальная логистика', desc: 'Бесшовные решения по доставке. От FOB до CIF.' }, { title: 'Готовность к экспорту', desc: 'Мы гарантируем готовность каждого продукта к международной отправке.' }], capability: 'Возможности сервиса', verified: 'Проверенный процесс' },
    product_reveal: { text: "Годы построения доверия, сбора премиальных товаров и роста с глобальными партнерами. Мы не просто экспортируем урожай, мы заботимся о будущем торговли." },
    sustainability: { label: 'Наши обязательства', title: 'Зеленая энергия и фермерство', desc: 'Для нас устойчивое развитие — это непрерывный процесс, который постоянно совершенствуется.', stat1: { title: '100%', sub: 'Органические закупки' }, stat2: { title: 'Эко', sub: 'Отходы в энергию' }, stat3: { title: 'Честно', sub: 'Компенсация фермерам' } },
    footer: { title1: 'Создать торговое', title2: 'партнерство.', desc: 'Обезопасьте свою цепочку поставок премиальными индонезийскими товарами.', inquiries: 'Запросы / RFQ', office: 'Офис', company: 'Компания', connect: 'Связь', privacy: 'Конфиденциальность', terms: 'Условия', rights: '© 2026 PT. Panasa Agro Nusantara', system: 'Система: Онлайн', links: { 'Our Story': 'Наша история', 'Commodities Catalog': 'Каталог товаров', 'Careers': 'Карьера' } },
    cookie: { title: 'Мы ценим вашу конфиденциальность', text: 'Мы используем файлы cookie для улучшения вашего опыта просмотра.', settings: 'Настройки Cookie', manage: 'Управление Cookie', preferences: 'Настройки Cookie', save: 'Сохранить настройки', category: { essential: 'Основные', essential_desc: 'Необходимы для работы сайта.', analytics: 'Аналитика', analytics_desc: 'Помогите нам понять, как вы используете наш сайт.', marketing: 'Маркетинг', marketing_desc: 'Используется для доставки релевантной рекламы.' } },
    modal: { title: 'Выберите регион' },
    about_page: { 
      label: 'Компания', 
      title: 'Мы — строители доверия.', 
      desc1: 'Panasa — индонезийский экспортер сельскохозяйственной продукции, ориентированный на соединение качественных местных продуктов с мировым рынком. Базируясь на Сулавеси, Индонезия, мы работаем напрямую с фермерами и надежными поставщиками, поставляя высококачественное какао, кофе арабика, орехи кешью, белую копру и брикеты из древесного угля. Наши зоны закупки выбираются специально для обеспечения стабильности, отслеживаемости продукции и конкурентоспособных цен.',
      desc2: 'Мы верим, что лучшие продукты начинаются у истока. Поэтому Panasa уделяет особое внимание ответственным процессам закупок, строгому контролю качества и эффективной обработке экспорта. От сбора урожая до упаковки и отгрузки каждый этап управляется в соответствии с международными экспортными стандартами.\n\nКак растущая индонезийская торговая компания, мы уделяем приоритетное внимание долгосрочным партнерским отношениям, построенным на прозрачности, надежности и четкой коммуникации. Мы не просто хотим быть поставщиком — мы хотим быть вашим надежным экспортным партнером из Индонезии.\n\nВ настоящее время Panasa продолжает расширять свою глобальную сеть, сохраняя приверженность поставке качественной сельскохозяйственной продукции и надежному обслуживанию покупателей по всему миру.',
      vision: { title: 'Глобальное видение', desc: 'Стать самым надежным, прозрачным и устойчивым мостом между сельским хозяйством Сулавеси и мировым промышленным рынком к 2030 году.' }, 
      mission: { title: 'Наша миссия', items: ['Расширение прав и возможностей местных фермеров Сулавеси.', 'Стандартизация контроля качества (ISO/HACCP).', 'Строго своевременная доставка.'] }, 
      team: { label: 'Руководство', title: 'Управляется экспертами', desc: 'Наша команда состоит из сертифицированных агрономов, ветеранов логистики и специалистов в области международной торговли.', contact: 'Связаться с руководством', stat1: 'Ключевые склады', stat2: 'Отслеживаемость' } 
    },
    why_us: { 
      label: 'Наше обещание', 
      title: 'Больше, чем товары. Мы доставляем уверенность.', 
      desc: 'На шумном рынке мы предлагаем ясность.', 
      items: [
        { title: "Точность в каждом зерне", desc: "Доверие — это хорошо, но данные — лучше." }, 
        { title: "Мастерство движения", desc: "Океаны огромны, но наша точность безупречна." }, 
        { title: "Партнеры, а не просто продавцы", desc: "Мы здесь не ради одной сделки." }, 
        { title: "Укорененные в устойчивости", desc: "Все начинается с почвы." }
      ], 
      comparison: { title: 'Стандартное различие', subtitle: 'Сравнение.', row1: { label: 'Традиционный агрегатор', val1: 'Смешанное качество', label2: 'Panasa Export', val2: 'Машинная сортировка' }, row2: { label: 'Коммуникация', val1: 'Языковые барьеры', label2: 'Panasa Export', val2: 'Поддержка 24/7 (Англ)' }, row3: { label: 'Контракты', val1: 'Неформально / Рискованно', label2: 'Panasa Export', val2: 'Юридическое соответствие' } }, 
      cta: { title: 'Готовы к отправке?', btn: 'Получить квоту' } 
    },
    legal: { back: 'На главную', privacy: { label: 'Право и соблюдение', title: 'Политика конфиденциальности', desc: 'Доверие — наш самый ценный товар.', sections: [{ title: "Сбор данных", content: "Мы собираем информацию для квот." }, { title: "Использование", content: "Используется для торговых переговоров." }, { title: "Безопасность", content: "Мы защищаем коммерческие тайны." }], contact: 'Связаться с DPO' }, terms: { label: 'Правовая база', title: 'Условия и положения', desc: 'Общие рамки для торговых запросов.', clauses: [{ title: "Соглашение", content: "Вы подтверждаете, что являетесь законным юрлицом." }, { title: "Ценообразование", content: "Цены индикативные FOB." }, { title: "Качество", content: "Претензии в течение 14 дней." }, { title: "Закон", content: "Регулируется законами Индонезии." }] } },
    product_details: {
      cocoa: {
        title: "Какао-бобы",
        subtitle: "Происхождение Сулавеси Ферментированные",
        description: "Наши какао-бобы закупаются напрямую с Сулавеси.",
        specs: [
          { label: "Влажность", value: "7.5% Макс" },
          { label: "Количество бобов", value: "100 - 110 / 100г" },
          { label: "Заплесневелые бобы", value: "3% Макс" },
          { label: "Сланцевые бобы", value: "3% Макс" },
          { label: "Ферментация", value: "Полностью Ферментированные" }
        ],
        packaging: "Джутовые мешки (60кг / 65кг) или по запросу покупателя. Вместимость контейнера: 12.5 МТ (20 футов)."
      },
      coffee: {
        title: "Кофе Арабика",
        subtitle: "Зеленое зерно Происхождение Тораха",
        description: "Выращенные на высокогорье Тана-Тораха.",
        specs: [
          { label: "Влажность", value: "12.5% Макс" },
          { label: "Дефекты", value: "Макс 5% (Сорт 1)" },
          { label: "Размер сита", value: "16-18" },
          { label: "Обработка", value: "Полумытая / Полностью мытая" },
          { label: "Высота", value: "1400 - 2000 м" }
        ],
        packaging: "GrainPro внутри джутовых мешков (60кг). Вместимость контейнера: 19 МТ (20 футов)."
      },
      copra: {
        title: "Белая Копра",
        subtitle: "Пищевой сорт Сулавеси",
        description: "Наша пищевая белая копра производится из зрелых кокосов.",
        specs: [
          { label: "Влажность", value: "5% Макс" },
          { label: "Содержание масла", value: "65% Мин" },
          { label: "FFA", value: "0.5% Макс" },
          { label: "Цвет", value: "Белый / Натуральный" },
          { label: "Грибок", value: "Нет" }
        ],
        packaging: "Сетчатые мешки или джутовые мешки (50кг). Вместимость контейнера: 25 МТ (40 футов)."
      },
      charcoal: {
        title: "Кокосовый уголь",
        subtitle: "Премиум Брикеты",
        description: "100% натуральные брикеты из скорлупы кокосового ореха.",
        specs: [
          { label: "Содержание золы", value: "2.5% Макс" },
          { label: "Влажность", value: "6% Макс" },
          { label: "Летучие вещества", value: "15% Макс" },
          { label: "Фиксированный углерод", value: "80% Мин" },
          { label: "Время горения", value: "2+ часа" }
        ],
        packaging: "Внутренняя коробка (1кг) + Мастер-коробка (10кг). Доступен индивидуальный брендинг."
      },
      robusta: {
        title: "Кофе Робуста",
        subtitle: "Премиум Сулавеси",
        description: "Полученные с низменностей Сулавеси.",
        specs: [
          { label: "Влажность", value: "13% Макс" },
          { label: "Дефекты", value: "Макс 45 (Сорт 4) / Макс 11 (Сорт 1)" },
          { label: "Размер зерна", value: "Крупный / Средний" },
          { label: "Обработка", value: "Натуральная / Сухая" },
          { label: "Кофеин", value: "2.2% В среднем" }
        ],
        packaging: "Джутовые мешки (60кг). Вместимость контейнера: 19 МТ (20 футов)."
      }
    }
  },
  // Japanese
  ja: {
    common: { readMore: '続きを読む', learnMore: '詳細を見る', downloadCatalog: 'カタログをダウンロード', getQuote: '見積もりを取得', contactUs: 'お問い合わせ', backHome: 'ホームに戻る', accept: 'すべて同意', decline: '拒否', backToProducts: '製品に戻る', specs: '仕様', packaging: '梱包と配送', submit: '送信', submitting: '送信中...', successTitle: '問い合わせ送信完了', successDesc: 'ありがとうございます。チームがまもなくメールまたはWhatsAppでご連絡いたします。' },
    nav: { Home: 'ホーム', About: '私たちについて', 'Why Us': '選ばれる理由', Work: '製品', Expertise: '専門知識', Sustainability: '持続可能性', Contact: '連絡先', Client: 'クライアントエリア' },
    client_form: { title: 'パートナーシップのお問い合わせ', desc: '登録クライアントになるか、正式な見積もりを依頼するには、以下のフォームに記入してください。', labels: { name: '氏名', company: '会社名', email: 'メールアドレス', phone: 'WhatsApp / 電話番号', country: '国', product: '興味のある製品', message: 'メッセージ' }, placeholders: { name: '山田 太郎', company: 'グローバルインポート株式会社', email: 'taro@company.jp', phone: '+81 90 1234 5678', country: '国を選択または入力', message: 'こんにちは、貴社のカカオ豆に興味があります。仕様、価格、MOQ、梱包の詳細を送ってください。' }, products: { cocoa: 'カカオ豆', coffee: 'アラビカコーヒー', cashew: 'カシューナッツ', copra: '白コプラ', charcoal: '木炭ブリケット' } },
    loader: { system: 'システム', booting: '起動シーケンス', est: '設立 2025', country: 'インドネシア', quality: 'プレミアム輸出品質', words: ["起源", "栽培", "収穫", "加工", "PANASA"] },
    hero: { est: '設立 2025 — インドネシア', mainTitle: 'プレミアム', subTitle1: '自然の', subTitle2: '恵み', title1: 'プレミアム商品', title2: '世界へ。', desc: '私たちはインドネシアの農家と世界市場の架け橋となります。高品質のカカオ、コーヒー、コプラ、木炭ブリケットを輸出しています。', cta: '当社の製品', liveMarket: 'ライブ市場', globalExport: '世界への輸出', scroll: 'スクロールして探索' },
    marquee: { line1: ["カカオ", "コーヒー", "コプラ", "木炭"], line2: ["インドネシア", "持続可能", "プレミアム", "輸出"] },
    network: { label: 'グローバルネットワーク', title: '国境なき物流', desc: 'スラウェシの中心部から20カ国以上へ。当社の統合サプライチェーンにより、距離が品質の障壁になることはありません。複雑な貿易ルートをナビゲートし、常に時間通りに配送します。', stats: { countries: '提供国', continents: '大陸', ports: 'パートナー港' }, shipping: 'ライブ貨物追跡' },
    about: { label: '私たちについて', title: '自然を育み、世界に供給する。', desc: 'Panasaはインドネシアの主要な輸出企業です。', stat1: '提携農家', stat2: '提供国' },
    portfolio: { 
      label: '当社の商品', 
      title: 'プレミアム製品', 
      drag: 'ドラッグまたはスクロール', 
      quality: '輸出品質', 
      items: { 
        cocoa: { title: 'カカオ豆', cat: 'スラウェシ産', year: '発酵' }, 
        coffee: { title: 'アラビカコーヒー', cat: 'トラジャ産', year: '生豆' }, 
        copra: { title: '白コプラ', cat: 'スラウェシ等級', year: '乾燥' }, 
        charcoal: { title: '木炭', cat: 'ココナッツ殻', year: 'ブリケット' }, 
        robusta: { title: 'ロブスタ', cat: 'スラウェシ産', year: 'プレミアム' } 
      } 
    },
    philosophy: { label: '当社の哲学', title: '価値の育成', items: [{ title: "フェアトレード", desc: "地域社会への公正な賃金を保証します。" }, { title: "持続可能性", desc: "私たちは責任あるビジネスを運営することに取り組んでいます。" }, { title: "パートナーシップ", desc: "強い関係は信頼と協力の上に築かれると信じています。" }, { title: "ビジネス倫理", desc: "すべての事業活動は誠実に行われます。" }, { title: "品質へのコミットメント", desc: "製品の選定から配送まで品質基準を適用しています。" }] },
    services: { label: '当社の専門知識', title: '卓越した運営', desc: '国際貿易の複雑さを簡素化します。農場から倉庫まで。', items: [{ title: '直接調達', desc: 'スラウェシ全土の農協と直接連携しています。' }, { title: '品質管理', desc: '厳格な選別と水分チェックプロセス（ISO/SNI）。' }, { title: 'グローバル物流', desc: 'シームレスな配送ソリューション。FOBからCIFまで。' }, { title: '輸出準備', desc: 'すべての製品が国際市場への出荷準備が整っていることを保証します。' }], capability: 'サービス能力', verified: '検証済みプロセス' },
    product_reveal: { text: "信頼を築き、プレミアム商品を収穫し、グローバルパートナーと共に成長してきた年月。私たちは作物を輸出するだけでなく、貿易の未来を育んでいます。" },
    sustainability: { label: '私たちのコミットメント', title: 'グリーンエネルギーと農業', desc: '私たちにとって持続可能性とは、絶えず発展し続ける継続的なプロセスです。', stat1: { title: '100%', sub: 'オーガニック調達' }, stat2: { title: 'エコ', sub: '廃棄物からエネルギーへ' }, stat3: { title: '公正', sub: '農家への補償' } },
    footer: { title1: '貿易パートナーシップ', title2: 'を確立。', desc: 'プレミアムなインドネシア商品でサプライチェーンを確保してください。', inquiries: 'お問い合わせ / RFQ', office: 'オフィス', company: '会社', connect: '接続', privacy: 'プライバシー', terms: '利用規約', rights: '© 2026 PT. Panasa Agro Nusantara', system: 'システム: オンライン', links: { 'Our Story': '私たちの物語', 'Commodities Catalog': '商品カタログ', 'Careers': '採用情報' } },
    cookie: { title: 'プライバシーを尊重します', text: 'ブラウジング体験を向上させるためにCookieを使用しています。', settings: 'Cookie設定', manage: 'Cookie管理', preferences: 'Cookie設定', save: '設定を保存', category: { essential: '必須', essential_desc: 'ウェブサイトの機能に必要です。', analytics: '分析', analytics_desc: 'サイトの利用状況を理解するのに役立ちます。', marketing: 'マーケティング', marketing_desc: '関連する広告を表示するために使用されます。' } },
    modal: { title: '地域を選択' },
    about_page: { 
      label: '会社紹介', 
      title: '私たちは信頼を築く者です。', 
      desc1: 'Panasaは、高品質な地元の産品と世界市場を結びつけることに注力しているインドネシアの農産物輸出業者です。インドネシアのスラウェシ島を拠点とし、農家や信頼できるサプライヤーと直接協力して、高品質のカカオ、アラビカコーヒー、カシューナッツ、ホワイトコプラ、木炭ブリケットを提供しています。当社の調達地域は、一貫性、製品のトレーサビリティ、および競争力のある価格を確保するために特別に選ばれています。',
      desc2: '最高の製品は源流から始まると信じています。そのため、Panasaは責任ある調達プロセス、厳格な品質管理、および効率的な輸出処理を重視しています。収穫から梱包、出荷まで、すべての段階が国際的な輸出基準を満たすように管理されています。\n\n成長を続けるインドネシアの商社として、私たちは透明性、信頼性、明確なコミュニケーションに基づいて構築された長期的なパートナーシップを優先しています。単なるサプライヤーではなく、インドネシアからの信頼できる輸出パートナーになりたいと考えています。\n\n現在、Panasaはグローバルネットワークを拡大し続けており、世界中のバイヤーに高品質の農産物と信頼できるサービスを提供することに尽力しています。',
      vision: { title: 'グローバルビジョン', desc: '2030年までに、スラウェシの農業と世界の産業市場を結ぶ、最も信頼性が高く、透明性が高く、持続可能な架け橋となること。' }, 
      mission: { title: '私たちの使命', items: ['スラウェシ現地の農家のエンパワーメント。', '品質管理の標準化 (ISO/HACCP)。', '納期を厳守する。'] }, 
      team: { label: 'リーダーシップ', title: '専門家による管理', desc: '私たちのチームは、認定された農学者、物流のベテラン、および国際貿易の専門家で構成されています。', contact: '経営陣に連絡', stat1: '主要倉庫', stat2: 'トレーサビリティ' } 
    },
    why_us: { 
      label: '私たちの約束', 
      title: '商品以上の価値、確実性をお届けします。', 
      desc: '不確実な市場において、私たちは明確さを提供します。', 
      items: [
        { title: "一粒一粒の精度", desc: "信頼も大切ですが、データはより重要です。" }, 
        { title: "物流の熟達", desc: "海は広大ですが、私たちのリーチは正確です。" }, 
        { title: "単なる売り手ではない、パートナー", desc: "私たちは一度きりの取引のためにここにいるのではありません。" }, 
        { title: "持続可能性への根ざし", desc: "すべては土壌から始まります。" }
      ], 
      comparison: { title: '標準の違い', subtitle: '比較。', row1: { label: '従来のアグリゲーター', val1: '品質混合', label2: 'Panasa輸出', val2: '機械選別' }, row2: { label: 'コミュニケーション', val1: '言語の壁', label2: 'Panasa輸出', val2: '24/7 英語サポート' }, row3: { label: '契約', val1: '非公式 / リスク', label2: 'Panasa輸出', val2: '法的遵守' } }, 
      cta: { title: '発送の準備はできましたか？', btn: '見積もりを取得' } 
    },
    legal: { back: 'ホームに戻る', privacy: { label: '法務とコンプライアンス', title: 'プライバシーポリシー', desc: '信頼は私たちの最も貴重な商品です。', sections: [{ title: "データ収集", content: "見積もりのために情報を収集します。" }, { title: "使用", content: "貿易交渉に使用されます。" }, { title: "セキュリティ", content: "企業秘密を保護するための措置を講じています。" }], contact: 'DPOに連絡' }, terms: { label: '法的枠組み', title: '利用規約', desc: '貿易に関する問い合わせの一般的な枠組み。', clauses: [{ title: "合意", content: "あなたが正当な事業体であることを確認します。" }, { title: "価格設定", content: "価格はFOBの目安です。" }, { title: "品質", content: "クレームは14日以内に行う必要があります。" }, { title: "法律", content: "インドネシア共和国の法律に準拠します。" }] } },
    product_details: {
      cocoa: {
        title: "カカオ豆",
        subtitle: "スラウェシ産発酵",
        description: "当社のカカオ豆は、スラウェシから直接調達されています。",
        specs: [
          { label: "水分含有量", value: "7.5% 最大" },
          { label: "豆数", value: "100 - 110 / 100g" },
          { label: "カビ豆", value: "3% 最大" },
          { label: "スレート豆", value: "3% 最大" },
          { label: "発酵", value: "完全発酵" }
        ],
        packaging: "ジュートバッグ（60kg / 65kg）またはバイヤーの要望に応じて。コンテナ容量：12.5 MT（20フィート）。"
      },
      coffee: {
        title: "アラビカコーヒー",
        subtitle: "トラジャ産生豆",
        description: "タナ・トラジャの高地で栽培されています。",
        specs: [
          { label: "水分", value: "12.5% 最大" },
          { label: "欠点", value: "最大 5%（グレード1）" },
          { label: "スクリーンサイズ", value: "16-18" },
          { label: "プロセス", value: "セミウォッシュ / フルウォッシュ" },
          { label: "標高", value: "1400 - 2000 m" }
        ],
        packaging: "ジュートバッグ（60kg）内のGrainPro。コンテナ容量：19 MT（20フィート）。"
      },
      copra: {
        title: "白コプラ",
        subtitle: "食用グレードスラウェシ",
        description: "当社の食用白コプラは、完熟したココナッツから得られます。",
        specs: [
          { label: "水分", value: "5% 最大" },
          { label: "油分", value: "65% 最小" },
          { label: "FFA", value: "0.5% 最大" },
          { label: "色", value: "白 / ナチュラル" },
          { label: "真菌", value: "なし" }
        ],
        packaging: "メッシュバッグまたはジュートバッグ（50kg）。コンテナ容量：25 MT（40フィート）。"
      },
      charcoal: {
        title: "ココナッツ炭",
        subtitle: "プレミアムブリケット",
        description: "100％天然ココナッツ殻炭ブリケット。",
        specs: [
          { label: "灰分", value: "2.5% 最大" },
          { label: "水分", value: "6% 最大" },
          { label: "揮発分", value: "15% 最大" },
          { label: "固定炭素", value: "80% 最小" },
          { label: "燃焼時間", value: "2時間以上" }
        ],
        packaging: "インナーボックス（1kg）+ マスターボックス（10kg）。カスタムブランディング可能。"
      },
      robusta: {
        title: "ロブスタコーヒー",
        subtitle: "プレミアムスラウェシ",
        description: "スラウェシの低地から調達されています。",
        specs: [
          { label: "水分", value: "13% 最大" },
          { label: "欠点", value: "最大 45（グレード4）/ 最大 11（グレード1）" },
          { label: "豆サイズ", value: "大 / 中" },
          { label: "プロセス", value: "ナチュラル / ドライ" },
          { label: "カフェイン", value: "2.2% 平均" }
        ],
        packaging: "ジュートバッグ（60kg）。コンテナ容量：19 MT（20フィート）。"
      }
    }
  },
  // Korean
  ko: {
    common: { readMore: '더 읽기', learnMore: '더 알아보기', downloadCatalog: '카탈로그 다운로드', getQuote: '견적 받기', contactUs: '문의하기', backHome: '홈으로 돌아가기', accept: '모두 수락', decline: '거절', backToProducts: '제품으로 돌아가기', specs: '사양', packaging: '포장 및 배송', submit: '제출', submitting: '전송 중...', successTitle: '문의 전송됨', successDesc: '감사합니다. 우리 팀이 곧 이메일이나 WhatsApp을 통해 연락드릴 것입니다.' },
    nav: { Home: '홈', About: '소개', 'Why Us': '왜 우리인가', Work: '제품', Expertise: '전문성', Sustainability: '지속 가능성', Contact: '연락처', Client: '클라이언트 영역' },
    client_form: { title: '파트너십 문의', desc: '등록된 고객이 되거나 공식 견적을 요청하려면 아래 양식을 작성하십시오.', labels: { name: '성명', company: '회사명', email: '이메일 주소', phone: 'WhatsApp / 전화번호', country: '국가', product: '관심 제품', message: '메시지' }, placeholders: { name: '홍길동', company: '글로벌 수입 주식회사', email: 'hong@company.kr', phone: '+82 10 1234 5678', country: '국가 선택 또는 입력', message: '안녕하세요, 귀사의 코코아 빈에 관심이 있습니다. 사양, 가격, MOQ 및 포장 세부 정보를 보내주십시오.' }, products: { cocoa: '코코아 빈', coffee: '아라비카 커피', cashew: '캐슈넛', copra: '화이트 코프라', charcoal: '숯 연탄' } },
    loader: { system: '시스템', booting: '부팅 시퀀스', est: '설립 2025', country: '인도네시아', quality: '프리미엄 수출 품질', words: ["기원", "경작", "수확", "공정", "PANASA"] },
    hero: { est: '설립 2025 — 인도네시아', mainTitle: '프리미엄', subTitle1: '자연의', subTitle2: '상품', title1: '프리미엄 원자재', title2: '세계를 위한.', desc: '우리는 인도네시아 농부들과 세계 시장 간의 격차를 해소합니다. 고품질 코코아, 커피, 코프라 및 숯 연탄 수출.', cta: '우리의 제품', liveMarket: '라이브 마켓', globalExport: '글로벌 수출', scroll: '스크롤하여 탐색' },
    marquee: { line1: ["코코아", "커피", "코프라", "숯"], line2: ["인도네시아", "지속 가능", "프리미엄", "수출"] },
    network: { label: '글로벌 네트워크', title: '국경 없는 물류', desc: '술라웨시 중심부에서 20개국 이상으로. 우리의 통합 공급망은 거리가 품질의 장벽이 되지 않도록 보장합니다. 우리는 복잡한 무역 경로를 탐색하여 매번 정시에 배송합니다.', stats: { countries: '서비스 국가', continents: '대륙', ports: '파트너 항구' }, shipping: '실시간 배송 추적' },
    about: { label: '회사 소개', title: '자연을 가꾸고, 세계에 공급하다.', desc: 'Panasa는 인도네시아 최고의 수출 기업입니다.', stat1: '파트너 농부', stat2: '서비스 국가' },
    portfolio: { 
      label: '우리의 상품', 
      title: '프리미엄 제품', 
      drag: '드래그 또는 스크롤', 
      quality: '수출 품질', 
      items: { 
        cocoa: { title: '코코아 빈', cat: '술라웨시 원산지', year: '발효' }, 
        coffee: { title: '아라비카 커피', cat: '토라자 원산지', year: '생두' }, 
        copra: { title: '화이트 코프라', cat: '술라웨시 등급', year: '건조' }, 
        charcoal: { title: '숯', cat: '코코넛 껍질', year: '연탄' }, 
        robusta: { title: '로부스타', cat: '술라웨시 원산지', year: '프리미엄' } 
      } 
    },
    philosophy: { label: '우리의 철학', title: '가치 배양', items: [{ title: "공정 무역", desc: "우리는 지역 사회에 공정한 임금을 보장합니다." }, { title: "지속 가능성", desc: "우리는 책임감 있는 비즈니스를 운영하기 위해 최선을 다하고 있습니다." }, { title: "파트너십", desc: "우리는 강력한 관계가 신뢰와 협력을 바탕으로 구축된다고 믿습니다." }, { title: "기업 윤리", desc: "모든 사업 활동은 정직하게 수행됩니다." }, { title: "품질 약속", desc: "우리는 전체 과정에 걸쳐 품질 기준을 적용합니다." }] },
    services: { label: '우리의 전문성', title: '운영 우수성', desc: '국제 무역의 복잡성을 간소화합니다. 농장에서 창고까지.', items: [{ title: '직접 조달', desc: '술라웨시 전역의 농협과 직접 협력합니다.' }, { title: '품질 관리', desc: '엄격한 분류 과정 (ISO/SNI).' }, { title: '글로벌 물류', desc: '원활한 배송 솔루션. FOB에서 CIF까지.' }, { title: '수출 준비', desc: '우리는 모든 제품이 국제 시장으로 배송될 준비가 되었음을 보장합니다.' }], capability: '서비스 능력', verified: '검증된 공정' },
    product_reveal: { text: "수년 동안 신뢰를 쌓고, 프리미엄 원자재를 수확하며, 글로벌 파트너와 함께 성장해 왔습니다. 우리는 단순히 작물을 수출하는 것이 아니라 무역의 미래를 가꾸고 있습니다." },
    sustainability: { label: '우리의 약속', title: '녹색 에너지 및 농업', desc: '우리에게 지속 가능성은 끊임없이 발전하는 지속적인 과정입니다.', stat1: { title: '100%', sub: '유기농 조달' }, stat2: { title: '에코', sub: '에너지 효율' }, stat3: { title: '공정', sub: '농부 보상' } },
    footer: { title1: '무역 파트너십', title2: '구축.', desc: '프리미엄 인도네시아 상품으로 공급망을 확보하세요.', inquiries: '문의 / RFQ', office: '사무실', company: '회사', connect: '연결', privacy: '개인정보', terms: '약관', rights: '© 2026 PT. Panasa Agro Nusantara', system: '시스템: 온라인', links: { 'Our Story': '우리의 이야기', 'Commodities Catalog': '상품 카탈로그', 'Careers': '채용' } },
    cookie: { title: '우리는 당신의 개인정보를 소중히 여깁니다', text: '우리는 브라우징 경험을 향상시키기 위해 쿠키를 사용합니다.', settings: '쿠키 설정', manage: '쿠키 관리', preferences: '쿠키 환경설정', save: '설정 저장', category: { essential: '필수', essential_desc: '웹사이트 기능에 필요합니다.', analytics: '분석', analytics_desc: '사이트 사용 방식을 이해하는 데 도움을 줍니다.', marketing: '마케팅', marketing_desc: '관련 광고를 제공하는 데 사용됩니다.' } },
    modal: { title: '지역 선택' },
    about_page: { 
      label: '회사 소개', 
      title: '우리는 신뢰의 구축자입니다.', 
      desc1: 'Panasa는 우수한 현지 제품과 세계 시장을 연결하는 데 주력하는 인도네시아 농산물 수출업체입니다. 인도네시아 술라웨시에 본사를 두고 농부 및 신뢰할 수 있는 공급업체와 직접 협력하여 고품질 코코아, 아라비카 커피, 캐슈넛, 화이트 코프라 및 숯 연탄을 제공합니다. 우리의 소싱 지역은 일관성, 제품 추적성 및 경쟁력 있는 가격을 보장하기 위해 특별히 선정되었습니다.',
      desc2: '우리는 최고의 제품이 원천에서 시작된다고 믿습니다. 따라서 Panasa는 책임 있는 조달 프로세스, 엄격한 품질 관리 및 효율적인 수출 처리를 강조합니다. 수확에서 포장 및 선적에 이르기까지 모든 단계는 국제 수출 표준을 충족하도록 관리됩니다.\n\n성장하는 인도네시아 무역 회사로서 우리는 투명성, 신뢰성 및 명확한 의사소통을 바탕으로 구축된 장기적인 파트너십을 우선시합니다. 우리는 단순한 공급업체가 아니라 인도네시아에서 귀하의 신뢰할 수 있는 수출 파트너가 되고자 합니다.\n\n현재 Panasa는 전 세계 바이어들에게 고품질 농산물과 신뢰할 수 있는 서비스를 제공하기 위해 노력하면서 글로벌 네트워크를 계속 확장하고 있습니다.',
      vision: { title: '글로벌 비전', desc: '2030년까지 술라웨시의 농업과 글로벌 산업 시장을 잇는 가장 신뢰할 수 있고 투명하며 지속 가능한 가교가 되는 것.' }, 
      mission: { title: '우리의 사명', items: ['술라웨시 현지 농부들의 역량 강화.', '품질 관리 표준화 (ISO/HACCP).', '철저한 정시 배송.'] }, 
      team: { label: '리더십', title: '전문가 관리', desc: '우리 팀은 인증된 농학자, 물류 베테랑 및 국제 무역 전문가로 구성되어 있습니다.', contact: '경영진 연락', stat1: '주요 창고', stat2: '추적 가능성' } 
    },
    why_us: { 
      label: '우리의 약속', 
      title: '상품 그 이상, 우리는 확신을 전달합니다.', 
      desc: '소음이 가득한 시장에서 우리는 명확성을 제공합니다.', 
      items: [
        { title: "모든 알갱이의 정밀함", desc: "신뢰도 좋지만, 데이터는 더 좋습니다." }, 
        { title: "물류의 숙달", desc: "바다는 넓지만 우리의 도달 범위는 정확합니다." }, 
        { title: "단순한 판매자가 아닌 파트너", desc: "우리는 단일 거래를 위해 여기 있는 것이 아닙ers." }, 
        { title: "지속 가능성에 뿌리를 둔", desc: "모든 것은 흙에서 시작됩니다." }
      ], 
      comparison: { title: '표준 차이', subtitle: '비교.', row1: { label: '전통적 수집가', val1: '혼합 품질', label2: 'Panasa 수출', val2: '기계 분류' }, row2: { label: '커뮤니케이션', val1: '언어 장벽', label2: 'Panasa 수출', val2: '24/7 영어 지원' }, row3: { label: '계약', val1: '비공식 / 위험', label2: 'Panasa 수출', val2: '법적 준수' } }, 
      cta: { title: '선적 준비 완료?', btn: '견적 받기' } 
    },
    legal: { back: '홈으로 돌아가기', privacy: { label: '법률 및 규정 준수', title: '개인정보 처리방침', desc: '신뢰는 우리의 가장 소중한 상품입니다.', sections: [{ title: "데이터 수집", content: "견적을 위해 정보를 수집합니다." }, { title: "사용", content: "무역 협상에 사용됩니다." }, { title: "보안", content: "영업 비밀을 보호하기 위한 조치를 시행합니다." }], contact: 'DPO 연락' }, terms: { label: '법적 프레임워크', title: '이용 약관', desc: '무역 문의에 대한 일반 프레임워크.', clauses: [{ title: "동의", content: "귀하가 합법적인 사업체임을 확인합니다." }, { title: "가격", content: "가격은 지표 FOB입니다." }, { title: "품질", content: "클레임은 14일 이내에 제기해야 합니다." }, { title: "법률", content: "인도네시아 공화국 법률의 적용을 받습니다." }] } },
    product_details: {
      cocoa: {
        title: "코코아 빈",
        subtitle: "술라웨시 원산지 발효",
        description: "우리의 코코아 빈은 술라웨시에서 직접 조달됩니다.",
        specs: [
          { label: "수분 함량", value: "7.5% 최대" },
          { label: "빈 개수", value: "100 - 110 / 100g" },
          { label: "곰팡이 빈", value: "3% 최대" },
          { label: "슬레이트 빈", value: "3% 최대" },
          { label: "발효", value: "완전 발효" }
        ],
        packaging: "황마 자루 (60kg / 65kg) 또는 구매자 요청에 따라. 컨테이너 용량: 12.5 MT (20ft)."
      },
      coffee: {
        title: "아라비카 커피",
        subtitle: "토라자 원산지 생두",
        description: "타나 토라자의 고지대에서 재배됩니다.",
        specs: [
          { label: "수분", value: "12.5% 최대" },
          { label: "결점", value: "최대 5% (등급 1)" },
          { label: "스크린 크기", value: "16-18" },
          { label: "가공", value: "세미 워시드 / 풀 워시드" },
          { label: "고도", value: "1400 - 2000 m" }
        ],
        packaging: "황마 자루 내 GrainPro (60kg). 컨테이너 용량: 19 MT (20ft)."
      },
      copra: {
        title: "화이트 코프라",
        subtitle: "술라웨시 식용 등급",
        description: "우리의 식용 화이트 코프라는 성숙한 코코넛에서 추출됩니다.",
        specs: [
          { label: "수분", value: "5% 최대" },
          { label: "오일 함량", value: "65% 최소" },
          { label: "FFA", value: "0.5% 최대" },
          { label: "색상", value: "흰색 / 자연" },
          { label: "곰팡이", value: "없음" }
        ],
        packaging: "메쉬 백 또는 황마 자루 (50kg). 컨테이너 용량: 25 MT (40ft)."
      },
      charcoal: {
        title: "코코넛 숯",
        subtitle: "프리미엄 연탄",
        description: "100% 천연 코코넛 껍질 숯 연탄.",
        specs: [
          { label: "재 함량", value: "2.5% 최대" },
          { label: "수분", value: "6% 최대" },
          { label: "휘발성 물질", value: "15% 최대" },
          { label: "고정 탄소", value: "80% 최소" },
          { label: "연소 시간", value: "2시간 이상" }
        ],
        packaging: "내부 상자 (1kg) + 마스터 박스 (10kg). 맞춤형 브랜딩 가능."
      },
      robusta: {
        title: "로부스타 커피",
        subtitle: "프리미엄 술라웨시",
        description: "술라웨시 저지대에서 공급됩니다.",
        specs: [
          { label: "수분", value: "13% 최대" },
          { label: "결점", value: "최대 45 (등급 4) / 최대 11 (등급 1)" },
          { label: "원두 크기", value: "대 / 중" },
          { label: "가공", value: "내추럴 / 건식" },
          { label: "카페인", value: "2.2% 평균" }
        ],
        packaging: "황마 자루 (60kg). 컨테이너 용량: 19 MT (20ft)."
      }
    }
  },
  // Spanish (es) - Finalizing Missing Sections
  es_fix: {
    about: {
      label: 'Quiénes Somos',
      title: 'Nutriendo la naturaleza, abasteciendo al mundo.',
      desc: 'Panasa es una empresa líder en exportación indonesia. Nos especializamos en obtener las mejores materias primas agrícolas del archipiélago.',
      stat1: 'Agricultores Asociados',
      stat2: 'Países Servidos'
    }
  }
};
