import { useState, useEffect, useRef } from 'react';

function BrandMarquee() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Brand logos - using direct image URLs
  const brands = [
    { name: 'Nike', logo: 'https://static.vecteezy.com/system/resources/previews/019/956/196/large_2x/nike-transparent-nike-free-free-png.png' },
    { name: 'Adidas', logo: "https://static.vecteezy.com/system/resources/previews/019/766/237/large_2x/adidas-logo-adidas-icon-transparent-free-png.png" },
    { name: 'Puma', logo: 'https://static.vecteezy.com/system/resources/previews/019/909/585/large_2x/puma-transparent-puma-free-free-png.png' },
    { name: 'Crocs', logo: 'https://static.vecteezy.com/system/resources/previews/019/956/196/large_2x/nike-transparent-nike-free-free-png.png' },
    { name: 'Google', logo: "https://static.vecteezy.com/system/resources/previews/019/766/237/large_2x/adidas-logo-adidas-icon-transparent-free-png.png" },
    { name: 'Microsoft', logo: 'https://static.vecteezy.com/system/resources/previews/019/909/585/large_2x/puma-transparent-puma-free-free-png.png' },
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
    <>
      <style>
        {`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll-left 30s linear infinite;
          }

          .marquee-mask {
            mask-image: linear-gradient(
              to right,
              transparent 0%,
              black 10%,
              black 90%,
              transparent 100%
            );
            -webkit-mask-image: linear-gradient(
              to right,
              transparent 0%,
              black 10%,
              black 90%,
              transparent 100%
            );
          }
        `}
      </style>

      <section ref={sectionRef} className="w-full bg-white pt-[15px] pb-12 md:pb-16 lg:pb-20">
        <div className={`px-[30px] transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            
            {/* Left Side - Animated Logo Marquee */}
            <div className="flex-1 w-full overflow-hidden">
              <div className="marquee-mask">
                <div className="flex items-center animate-scroll">
                  {/* First set of logos */}
                  {brands.map((brand, index) => (
                    <div
                      key={`first-${index}`}
                      className="flex-shrink-0 mx-8 md:mx-12"
                    >
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="h-16 md:h-20 lg:h-24 object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                      />
                    </div>
                  ))}
                  
                  {/* Duplicate set for seamless loop */}
                  {brands.map((brand, index) => (
                    <div
                      key={`second-${index}`}
                      className="flex-shrink-0 mx-8 md:mx-12"
                    >
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="h-16 md:h-20 lg:h-24 object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Trust Text */}
            <div className="flex-shrink-0 text-center lg:text-right">
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">
                2010 – 2025
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Trusted by 100+ businesses
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default BrandMarquee;
