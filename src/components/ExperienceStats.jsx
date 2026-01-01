import { useState, useEffect, useRef } from 'react';

const MetricItem = ({ value, label, delay, isVisible }) => {
  const [count, setCount] = useState(0);
  const [showSuffix, setShowSuffix] = useState(false);

  // Extract number and suffix (e.g., "50k+" -> { number: 50, suffix: "k+" })
  const numberMatch = value.match(/\d+/);
  const targetNumber = numberMatch ? parseInt(numberMatch[0]) : 0;
  const suffix = value.replace(/\d+/, '');

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = targetNumber;
      const duration = 1200; // 1.2s total duration
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out quad
        const easeProgress = 1 - (1 - progress) * (1 - progress);
        
        const currentCount = Math.floor(easeProgress * end);
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
          setShowSuffix(true);
        }
      };

      const timeoutId = setTimeout(() => {
        requestAnimationFrame(animate);
      }, delay);

      return () => clearTimeout(timeoutId);
    }
  }, [isVisible, targetNumber, delay]);

  return (
    <div 
      className={`flex flex-col gap-3 transition-all duration-1000 ease-out`}
      style={{ 
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
        transitionDelay: `${delay}ms`
      }}
    >
      <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-black flex items-baseline tracking-tight">
        <span>{count}</span>
        <span className={`transition-opacity duration-500 ${showSuffix ? 'opacity-100' : 'opacity-0 text-transparent'}`}>
          {suffix}
        </span>
      </div>
      <p className="text-gray-500 text-sm md:text-base font-medium max-w-[200px] leading-snug">
        {label}
      </p>
    </div>
  );
};

function ExperienceStats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const metrics = [
    { value: '3m+', label: 'Ad impressions managed' },
    { value: '24+', label: 'Successful projects launched' },
    { value: '97%', label: 'Client satisfaction rate' },
    { value: '50k+', label: 'Monthly visitors driven through SEO' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-12 md:py-12 lg:py-12 overflow-hidden">
      <div className="px-[30px]">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-10 md:mb-12">
          <div className="max-w-[300px]">
            <h3 className="text-xl font-bold text-black mb-4 tracking-tight">Fonto®</h3>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Every project we take on is designed for long-term success.
            </p>
          </div>

          <div className="lg:max-w-[700px] relative">
            <span className="absolute -top-12 right-0 text-gray-400 font-medium md:static md:block md:mb-6 md:text-right">
              (07)
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.1] tracking-tight">
              Years of Experience, Hundreds of Projects,{' '}
              <span className="text-gray-400">and Countless Happy Clients</span>
            </h2>
          </div>
        </div>

        {/* Divider */}
        <div className={`w-full h-[1px] bg-gray-200 mb-10 md:mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'scale-x-100' : 'scale-x-0'} origin-left`}></div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {metrics.map((metric, index) => (
            <MetricItem 
              key={index}
              value={metric.value}
              label={metric.label}
              delay={400 + (index * 150)}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>

      <style>
        {`
          @media (prefers-reduced-motion: reduce) {
            * {
              animation: none !important;
              transition: none !important;
            }
          }
        `}
      </style>
    </section>
  );
}

export default ExperienceStats;
