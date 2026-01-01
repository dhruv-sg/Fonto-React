import { useState, useEffect, useRef } from 'react';

const AnimatedLogo = ({ text, subtext }) => {
  const [isVisible, setIsVisible] = useState(false);
  const logoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (logoRef.current) observer.observe(logoRef.current);
    return () => observer.disconnect();
  }, []);

  const characters = text.split('');

  return (
    <div ref={logoRef} className="flex flex-col items-end">
      <div className="flex overflow-hidden gap-[0.02em]">
        {characters.map((char, index) => (
          <span
            key={index}
            className={`block transition-all duration-800 cubic-bezier(0.22, 1, 0.36, 1) ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{ 
              transitionDelay: `${index * 80}ms`,
              display: char === ' ' ? 'inline-block' : 'block',
              paddingRight: char === ' ' ? '0.25em' : '0'
            }}
          >
            {char}
          </span>
        ))}
      </div>
      <span 
        className={`text-4xl md:text-6xl lg:text-8xl font-bold transition-all duration-1000 delay-[600ms] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {subtext}
      </span>
    </div>
  );
};

export default AnimatedLogo;
