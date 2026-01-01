import { useState, useEffect, useRef } from 'react';

function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const processSteps = [
    {
      id: 1,
      number: '01',
      title: 'Branding',
      description:
        'We craft unique brand identities that resonate with your audience and stand out in the market.',
      icon: (
        <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4z" />
        </svg>
      ),
    },
    {
      id: 2,
      number: '02',
      title: 'Development',
      description:
        'Building robust, scalable solutions with clean code and modern technologies tailored to your needs.',
      icon: (
        <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      id: 3,
      number: '03',
      title: 'Website',
      description:
        'Designing beautiful, user-friendly websites that deliver exceptional experiences across all devices.',
      icon: (
        <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13h18M5 17h14" />
        </svg>
      ),
    },
    {
      id: 4,
      number: '04',
      title: 'Marketing',
      description:
        'Strategic marketing campaigns that amplify your brand and drive measurable growth and engagement.',
      icon: (
        <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3v10h10" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="px-[30px]">

        {/* 🔹 SECTION HEADER (RESTORED) */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-start justify-between mb-6">
            <p className="text-sm md:text-base text-gray-600">• Our Process</p>
            <span className="text-sm md:text-base text-gray-400">(03)</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            A Thoughtful, Step-by-Step Process
            <br />
            <span className="text-gray-400">
              Designed to Deliver Exceptional Results
            </span>
          </h2>
        </div>

        {/* 🔹 PROCESS CARDS */}
        <div className="bg-gray-100 rounded-3xl p-2">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className={`transition-all duration-[800ms] ease-out ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="bg-white rounded-2xl p-6 h-full flex flex-col">

                  {/* Top Row */}
                  <div className="flex justify-between mb-6">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map((dot) => (
                        <span
                          key={dot}
                          className={`w-1.5 h-1.5 rounded-full ${
                            dot <= step.id ? 'bg-black' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-400">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-5">{step.icon}</div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold mb-3">
                    {step.title}
                  </h3>

                  {/* Spacer */}
                  <div className="flex-1" />

                  {/* Description (BOTTOM SPACING FIXED) */}
                  <p className="text-xs md:text-sm text-gray-500 leading-relaxed mb-2">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
