import { useState, useEffect, useRef } from 'react';

function PricingSection() {
  const [billingMode, setBillingMode] = useState('project'); // 'project' or 'monthly'
  const [isAddonSelected, setIsAddonSelected] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const pricing = {
    project: {
      main: 3490,
      addon: 1490,
      label: 'per project'
    },
    monthly: {
      main: 1490,
      addon: 890,
      label: 'per month'
    }
  };

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

  const currentPrice = pricing[billingMode];

  return (
    <section ref={sectionRef} className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div 
        className={`px-[30px] transition-all duration-700 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
        }`}
      >
        {/* Main Pricing Card */}
        <div className="bg-[#0a0a0a] rounded-[2.5rem] p-8 md:p-12 lg:p-16 mx-auto relative overflow-hidden shadow-2xl border border-white/5">
          {/* Subtle Inner Glow */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-50"></div>

          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 md:mb-16 relative z-10">
            <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-sm md:text-base text-gray-400 mb-4 tracking-wide">• Pricing</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Pricing Plans</h2>
            </div>

            <div className={`flex flex-col items-end gap-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="text-gray-600 font-medium">(06)</span>
              
              {/* Toggle */}
              <div className="bg-[#1a1a1a] p-1 rounded-full flex items-center relative border border-white/5" role="group" aria-label="Billing frequency">
                <button
                  onClick={() => setBillingMode('project')}
                  aria-pressed={billingMode === 'project'}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 relative z-10 ${
                    billingMode === 'project' ? 'text-black' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Per Project
                </button>
                <button
                  onClick={() => setBillingMode('monthly')}
                  aria-pressed={billingMode === 'monthly'}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 relative z-10 ${
                    billingMode === 'monthly' ? 'text-black' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Monthly
                </button>
                
                {/* Toggle Slider */}
                <div 
                  className={`absolute top-1 bottom-1 rounded-full bg-white transition-all duration-300 ease-out ${
                    billingMode === 'project' ? 'left-1 w-[120px]' : 'left-[122px] w-[100px]'
                  }`}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          {/* Pricing Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 relative z-10">
            
            {/* Left Side: Add-on Card */}
            <div 
              onClick={() => setIsAddonSelected(!isAddonSelected)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setIsAddonSelected(!isAddonSelected)}
              role="checkbox"
              aria-checked={isAddonSelected}
              tabIndex={0}
              aria-label="Add marketing and SEO strategies for leads"
              className={`group bg-[#141414] rounded-3xl p-8 border-2 transition-all duration-700 cursor-pointer hover:translate-y-[-4px] delay-300 focus:outline-none focus:ring-2 focus:ring-white/20 ${
                isAddonSelected ? 'border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)]' : 'border-white/5'
              } ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
            >
              <div className="flex items-start justify-between mb-8 pointer-events-none">
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-3">Need more traffic and leads?</h4>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-[280px]">
                    Marketing and SEO strategies tailored to your goals.
                  </p>
                </div>
                
                {/* Custom Radio Button */}
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  isAddonSelected ? 'border-white bg-white' : 'border-white/20'
                }`}>
                  {isAddonSelected && (
                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>

              <div className="mt-12 pointer-events-none">
                <span className="text-3xl font-bold text-white transition-all duration-300">
                  +${currentPrice.addon.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Right Side: Main Plan */}
            <div className={`flex flex-col justify-between transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <div>
                <ul className="space-y-6 mb-12">
                  {[
                    'Homepage + up to 10 inner pages',
                    'Design and Development',
                    'Mobile-Optimized Design',
                    'Content Writing'
                  ].map((feature, idx) => (
                    <li 
                      key={idx} 
                      className={`flex items-center gap-4 group transition-all duration-500`}
                      style={{ transitionDelay: isVisible ? `${500 + (idx * 100)}ms` : '0ms' }}
                    >
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-colors group-hover:bg-white/20">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-sm md:text-base font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className={`text-gray-500 text-xs italic tracking-wide transition-all duration-700 delay-[900ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                  *Delivery time (3–4 weeks)
                </p>
              </div>

              <div className={`mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8 transition-all duration-700 delay-[1000ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="text-left md:text-right w-full md:w-auto ml-auto">
                  <div className="flex flex-col items-start md:items-end">
                    <span className="text-5xl md:text-6xl font-bold text-white mb-2 transition-all duration-500">
                      ${(currentPrice.main + (isAddonSelected ? currentPrice.addon : 0)).toLocaleString()}
                    </span>
                    <span className="text-gray-500 text-sm font-medium uppercase tracking-widest">
                      {currentPrice.label}
                    </span>
                  </div>
                </div>
                
                <button className="w-full bg-white text-black py-5 rounded-full font-bold text-lg hover:bg-gray-200 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_10px_30px_rgba(255,255,255,0.1)]">
                  Request a Demo
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>
        {`
          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}
      </style>
    </section>
  );
}

export default PricingSection;
