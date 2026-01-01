import { useState, useEffect, useRef } from 'react';

function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const services = [
    {
      id: 1,
      index: '01',
      title: 'Branding',
      description: 'We craft unique brand identities that resonate with your audience and stand out in the market. From logo design to complete brand guidelines, we ensure consistency across all touchpoints.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    },
    {
      id: 2,
      index: '02',
      title: 'Development',
      description: 'Building robust, scalable solutions with clean code and modern technologies. We develop high-performance web applications that are secure, maintainable, and tailored to your business needs.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
    },
    {
      id: 3,
      index: '03',
      title: 'Web Design',
      description: 'Designing beautiful, user-friendly websites that deliver exceptional experiences across all devices. We focus on intuitive interfaces that engage users and drive conversions.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
    },
    {
      id: 4,
      index: '04',
      title: 'Marketing',
      description: 'Strategic marketing campaigns that amplify your brand and drive measurable growth. From digital marketing to content strategy, we help you reach and engage your target audience effectively.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    },
  ];

  const [activeService, setActiveService] = useState(services[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="w-full bg-black py-12 md:py-16 lg:py-20">
      <div className={`px-[30px] transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Header */}
        <div className="flex items-start justify-between mb-12 md:mb-16">
          <p className="text-sm md:text-base text-gray-400">• Services</p>
          <span className="text-sm md:text-base text-gray-600">(04)</span>
        </div>

        {/* Main Container */}
        <div className="bg-black rounded-3xl p-8 md:p-12 lg:p-16 mx-4 md:mx-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left Side - Content Preview Card */}
            <div className="order-2 lg:order-1">
              {/* Image */}
              <div className="relative w-full max-w-[350px] h-[250px] overflow-hidden rounded-2xl mb-6">
                <img
                  key={activeService.id}
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-full object-cover transition-opacity duration-500"
                  style={{
                    animation: 'fadeIn 0.5s ease-out',
                  }}
                />
              </div>

              {/* Content */}
              <div>
                <h3
                  key={`title-${activeService.id}`}
                  className="text-2xl md:text-3xl font-bold text-white mb-3"
                  style={{
                    animation: 'slideUp 0.5s ease-out',
                  }}
                >
                  {activeService.title}
                </h3>
                <p
                  key={`desc-${activeService.id}`}
                  className="text-sm md:text-base text-gray-400 leading-relaxed max-w-md"
                  style={{
                    animation: 'slideUp 0.5s ease-out 0.1s backwards',
                  }}
                >
                  {activeService.description}
                </p>
              </div>
            </div>

            {/* Right Side - Service List */}
            <div className="order-1 lg:order-2">
              <div className="space-y-0">
                {services.map((service, index) => (
                  <div key={service.id}>
                    <button
                      onMouseEnter={() => setActiveService(service)}
                      className="w-fit text-left py-6 md:py-8 transition-colors duration-300 group"
                    >
                      <div className="relative">
                        <h4
                          className={`text-3xl md:text-4xl lg:text-5xl font-bold transition-colors duration-300 pr-16 ${
                            activeService.id === service.id
                              ? 'text-white'
                              : 'text-gray-600 group-hover:text-gray-400'
                          }`}
                        >
                          {service.title}
                        </h4>
                        <span
                          className={`absolute top-0 right-0 text-sm md:text-base transition-colors duration-300 ${
                            activeService.id === service.id
                              ? 'text-gray-400'
                              : 'text-gray-700 group-hover:text-gray-600'
                          }`}
                        >
                          {'{' + service.index + '}'}
                        </span>
                      </div>
                    </button>
                    {index < services.length - 1 && (
                      <div className="border-b border-gray-800"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

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

export default ServicesSection;
