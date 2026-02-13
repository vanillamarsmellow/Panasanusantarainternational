
import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // delay in ms
  threshold?: number; // 0 to 1
}

const RevealOnScroll: React.FC<RevealProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  threshold = 0 // Ubah default ke 0 agar mentrigger secepat mungkin
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve setelah muncul agar animasi hanya terjadi sekali (lebih performant)
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold: threshold,
        // Ubah rootMargin: "0px" berarti trigger tepat saat pixel pertama masuk layar.
        // Sebelumnya -50px membuat user harus scroll lebih dalam.
        rootMargin: "0px 0px -5% 0px" 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      // Mengubah duration-1000 menjadi duration-700 agar terasa lebih cepat
      // Mengubah translate-y-12 menjadi translate-y-8 agar jarak gerak lebih pendek (lebih cepat sampai)
      className={`transition-all duration-700 ease-out ${className} ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8' 
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
