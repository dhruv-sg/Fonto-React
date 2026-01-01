import { useState, useRef, useEffect } from 'react';

const FAQItem = ({ number, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [answer]);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 md:p-8 flex items-center justify-between focus:outline-none"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-6 md:gap-8">
          <span className="text-gray-400 font-medium text-sm md:text-base">
            {number}
          </span>
          <span className="text-black font-bold text-lg md:text-xl tracking-tight">
            {question}
          </span>
        </div>

        {/* Chevron */}
        <div
          className={`transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Answer */}
      <div
        style={{
          height: isOpen ? `${contentHeight}px` : '0px',
          opacity: isOpen ? 1 : 0,
        }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div
          ref={contentRef}
          className="px-6 md:px-8 pb-8 flex items-start gap-6 md:gap-8"
        >
          <div className="w-10 md:w-12 hidden md:block" />
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-[600px]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

function FAQSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const faqs = [
    {
      number: '01',
      question: 'How do we start our project?',
      answer:
        'We begin with a discovery call to understand your goals, target audience, and specific requirements. Once we have a clear vision, we move into the research and strategy phase before starting any design work.',
    },
    {
      number: '02',
      question: 'What is the typical delivery timeline?',
      answer:
        'Standard projects usually take between 4 to 8 weeks depending on complexity. A basic landing page might take less, while a full-scale platform requires more thorough development.',
    },
    {
      number: '03',
      question: 'Do you offer post-launch support?',
      answer:
        'Absolutely. We provide maintenance plans to ensure your site stays updated, secure, and performs optimally.',
    },
    {
      number: '04',
      question: 'Will my website be mobile-optimized?',
      answer:
        'Yes, every project follows a mobile-first philosophy to ensure a seamless experience across all devices.',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-12 md:py-24 lg:py-32"
    >
      {/* 🔹 PAGE NUMBER (VISIBLE & FIXED) */}
      <span className="absolute top-8 right-8 text-gray-400 text-sm md:text-base font-medium">
        (09)
      </span>

      <div
        className={`px-[30px] transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left */}
          <div className="lg:w-1/3">
            <p className="text-sm md:text-base text-gray-400 mb-6 tracking-wide">
              • FAQ
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-black mb-8">
              Frequently Asked <br />
              <span className="text-gray-400">Questions</span>
            </h2>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-sm">
              Your questions about our process, services, and workflow—answered.
            </p>
          </div>

          {/* Right */}
          <div className="lg:w-2/3 rounded-[2.5rem] w-fit">
            <div className="bg-gray-200 rounded-[1.5rem] p-2 w-fit">
              {/* 🔹 REDUCED GAP HERE */}
              <div className="flex flex-col gap-2">
                {faqs.map((faq, index) => (
                  <FAQItem key={index} {...faq} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @media (prefers-reduced-motion: reduce) {
            * {
              transition: none !important;
              animation: none !important;
            }
          }
        `}
      </style>
    </section>
  );
}

export default FAQSection;
