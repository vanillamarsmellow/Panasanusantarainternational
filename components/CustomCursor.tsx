import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device supports hover (is not touch)
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        // Direct DOM manipulation for performance
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over clickable elements
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{ 
        transform: 'translate3d(-100px, -100px, 0)', 
        willChange: 'transform'
      }} 
    >
      <div 
        className={`
          relative flex items-center justify-center -translate-x-1/2 -translate-y-1/2
          transition-all duration-300 ease-out
          ${isHovering ? 'scale-[2.5] -rotate-12' : 'scale-100 rotate-0'}
        `}
      >
        {/* Sprout / Tunas Icon SVG */}
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className={`drop-shadow-lg transition-colors duration-300 ${isHovering ? 'text-nurture-accent' : 'text-white'}`}
        >
          {/* Stem / Batang */}
          <path 
            d="M12 22C12 22 12 15 12 13" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
          {/* Right Leaf / Daun Kanan */}
          <path 
            d="M12 13C12 13 16 7 21 9C18 13 12 13 12 13Z" 
            fill="currentColor"
          />
          {/* Left Leaf / Daun Kiri */}
          <path 
            d="M12 13C12 13 8 7 3 9C6 13 12 13 12 13Z" 
            fill="currentColor"
          />
          {/* Inner detail on hover (vein) */}
          <circle cx="12" cy="13" r="1" fill={isHovering ? "white" : "transparent"} />
        </svg>
      </div>
    </div>
  );
};

export default CustomCursor;