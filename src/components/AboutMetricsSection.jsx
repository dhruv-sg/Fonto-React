import { useState, useEffect, useRef } from 'react';

function AboutMetricsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true);
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <>
      <style>
        {`
          @keyframes rollDigit {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-90.909%);
            }
          }

          .digit-roll {
            animation: rollDigit 2s cubic-bezier(0.45, 0.05, 0.55, 0.95) forwards;
          }

          .digit-container {
            overflow: hidden;
            display: inline-flex;
            align-items: flex-start;
            height: 1.1em;
            line-height: 1.1em;
          }

          .digit-reel {
            display: flex;
            flex-direction: column;
          }
          
          .digit-reel span {
            height: 1.1em;
            line-height: 1.1em;
          }
        `}
      </style>

      <section ref={sectionRef} className="w-full bg-white py-12 md:py-16 lg:py-20">
        <div className={`px-[30px] transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Section Header */}
          <div className="mb-12 md:mb-16">
            <div className="flex items-start justify-between mb-6">
              <p className="text-sm md:text-base text-gray-600">• About Us</p>
              <span className="text-sm md:text-base text-gray-400">(01)</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Delivering Results-Driven Solutions
              <br />
              <span className="text-gray-400">Focused on Design and Functionality</span>
            </h2>
          </div>

          {/* Main Grid - 4 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            
            {/* Column 1: Portrait Card */}
            <div className="relative rounded-[2.5rem] overflow-hidden h-[600px] lg:h-auto bg-gray-900 group">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1200&fit=crop"
                alt="Portrait"
                className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
              
              <div className="absolute top-8 left-0 right-0 text-center">
                <span className="text-white text-xl font-bold uppercase tracking-wider">Fonto®</span>
              </div>

              <div className="absolute bottom-10 left-8 right-8 text-center">
                <h3 className="text-white text-3xl font-bold mb-2">Design with intent.</h3>
                <p className="text-gray-400 text-sm">No excess, no fluff.</p>
              </div>
            </div>

            {/* Column 2: Triple Stacked Metrics */}
            <div className="flex flex-col gap-4 md:gap-5">
              {/* Year Metric */}
              <div className="bg-gray-50 rounded-[2.5rem] p-8 flex flex-col justify-between h-[190px] border border-gray-100 hover:border-gray-200 transition-colors">
                <div className="flex justify-between items-start">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-black flex">
                      <DigitRoll value={7} hasAnimated={isVisible} />
                    </span>
                    <span className="text-4xl font-bold text-black">+</span>
                  </div>
                  <span className="text-gray-400 text-sm font-medium">(Year)</span>
                </div>
                <p className="text-gray-600 text-sm leading-snug">
                  Shaking up the digital design scene, pioneering the trends of tomorrow.
                </p>
              </div>

              {/* Country Metric */}
              <div className="bg-gray-50 rounded-[2.5rem] p-8 flex flex-col justify-between h-[190px] border border-gray-100 hover:border-gray-200 transition-colors">
                <div className="flex justify-between items-start">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-black flex">
                      <DigitRoll value={20} hasAnimated={isVisible} />
                    </span>
                    <span className="text-4xl font-bold text-black">+</span>
                  </div>
                  <span className="text-gray-400 text-sm font-medium">(Country)</span>
                </div>
                <p className="text-gray-600 text-sm leading-snug">
                  We're everywhere! Our designs are making waves around the globe.
                </p>
              </div>

              {/* Project Metric */}
              <div className="bg-gray-50 rounded-[2.5rem] p-8 flex flex-col justify-between h-[190px] border border-gray-100 hover:border-gray-200 transition-colors">
                <div className="flex justify-between items-start">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-black flex">
                      <DigitRoll value={50} hasAnimated={isVisible} />
                    </span>
                    <span className="text-4xl font-bold text-black">+</span>
                  </div>
                  <span className="text-gray-400 text-sm font-medium">(Project)</span>
                </div>
                <p className="text-gray-600 text-sm leading-snug">
                  Our customers are not just satisfied, they're over the moon!
                </p>
              </div>
            </div>

            {/* Column 3: Tall Testimonial Card */}
            <div className="bg-gray-50 rounded-[2.5rem] p-8 flex flex-col justify-between h-[600px] lg:h-auto border border-gray-100 relative">
              {/* Top part: Trusted Brands */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <img
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-white object-cover"
                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                        alt="Avatar"
                      />
                    ))}
                  </div>
                  <span className="text-gray-500 font-bold text-sm">4.9/5</span>
                </div>
                <p className="text-black font-bold text-base">
                  Trusted by <span className="text-black/40">100+</span> businesses
                </p>
              </div>

              {/* Bottom part: Testimonial */}
              <div className="mt-auto">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-black font-bold text-lg leading-snug mb-8">
                  "Fonto understood our brand better than we did. Their ability to find the essential and express it simply is what sets them apart."
                </blockquote>
                <div className="flex items-center gap-4">
                  <img
                    src="https://i.pravatar.cc/150?img=33"
                    alt="Author"
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-black font-bold text-base leading-none">Shahin Alam</h4>
                    <p className="text-gray-400 text-sm mt-1">CEO, SamirTS</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 4: Performance & Action */}
            <div className="flex flex-col gap-4 md:gap-5">
              {/* Performance Score */}
              <div className="bg-white rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center h-[290px] border border-gray-100 shadow-sm relative overflow-hidden">
                {/* Circle gauge logic */}
                <div className="relative w-24 h-24 flex items-center justify-center mb-6">
                  {/* Subtle outer circle */}
                  <div className="absolute inset-0 rounded-full border-4 border-gray-100"></div>
                  {/* Score text */}
                  <div className="text-4xl font-bold text-black flex">
                    <DigitRoll value={100} hasAnimated={isVisible} />
                  </div>
                </div>
                <h3 className="text-black font-bold text-xl mb-3">Pagespeed score</h3>
                <p className="text-gray-400 text-sm leading-snug max-w-[180px]">
                  We focus on delivering high performance without compromising
                </p>
              </div>

              {/* Action Card with Image */}
              <div className="bg-gray-100 rounded-[2.5rem] relative overflow-hidden h-[290px] group border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
                  alt="Architecture"
                  className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                
                <div className="absolute top-8 left-8">
                  <h3 className="text-white text-2xl font-bold leading-tight">
                    Designing with<br />Meaning
                  </h3>
                </div>

                <div className="absolute bottom-8 right-8">
                  <button className="bg-white text-black px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-gray-100 transition-colors">
                    Get Started
                    <span className="w-2 h-2 rounded-full bg-black"></span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

// Sub-component for individual digit rolling
function DigitRoll({ value, hasAnimated }) {
  const digits = String(value).split('');
  
  return (
    <div className="flex">
      {digits.map((digit, i) => (
        <div key={i} className="digit-container">
          <div className={`digit-reel ${hasAnimated ? 'digit-roll' : ''}`}>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num, idx) => (
              <span key={idx}>{num === 10 ? 0 : num}</span>
            ))}
            <span>{digit}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AboutMetricsSection;
