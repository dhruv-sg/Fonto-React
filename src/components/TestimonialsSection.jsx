import { useState, useEffect, useRef } from 'react';

function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef(null);
  const modalRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      type: 'video',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      title: 'Collaboration in action',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 2,
      type: 'text',
      rating: 5,
      quote: 'Amazing experience from start to finish. The results exceeded our expectations!',
      author: 'Liam Reynolds',
      role: 'CEO, SamirTS',
      avatar: 'https://i.pravatar.cc/150?img=12',
    },
    {
      id: 3,
      type: 'text',
      rating: 5,
      quote: 'From start to finish, the experience was exceptional, and the results went beyond what we imagined.',
      author: 'Liam Reynolds',
      role: 'CEO, SamirTS',
      avatar: 'https://i.pravatar.cc/150?img=32',
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  // Modal keyboard handling
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const StarIcon = () => (
    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  const PlayIcon = () => (
    <svg className="w-10 h-10 text-white/90" fill="currentColor" viewBox="0 0 20 20">
      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
    </svg>
  );

  return (
    <section ref={sectionRef} className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="px-[30px]">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-start justify-between mb-6">
            <p className="text-sm md:text-base text-gray-600">• User Testimonials</p>
            <span className="text-sm md:text-base text-gray-400">(05)</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Hear from Our{' '}
            <span className="text-gray-400">Happy Customers</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-6 md:gap-8">
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className={`transition-all duration-700 ease-out ${
                item.type === 'video' ? 'md:col-span-2 lg:col-span-4' : 'md:col-span-1 lg:col-span-3'
              } ${
                isVisible
                  ? 'opacity-100 translate-x-0 translate-y-0'
                  : item.type === 'video'
                  ? 'opacity-0 -translate-x-20'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 120}ms` : '0ms',
              }}
            >
              {item.type === 'video' ? (
                // Video Testimonial Card
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="relative w-full h-[320px] rounded-2xl overflow-hidden group cursor-pointer hover:scale-[1.01] transition-transform duration-300"
                  aria-label="Play video testimonial"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/20"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/30 backdrop-blur-md rounded-full p-4 group-hover:bg-white/40 transition-all duration-300">
                      <PlayIcon />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-6 left-6 text-left">
                    <p className="text-white text-base md:text-xl font-bold leading-tight drop-shadow-lg">
                      Collaboration in<br />action
                    </p>
                  </div>
                </button>
              ) : (
                // Text Testimonial Card
                <div className="bg-gray-100/60 rounded-2xl p-6 md:p-8 h-[320px] flex flex-col justify-between hover:bg-gray-100 transition-all duration-300">
                  <div>
                    {/* Rating */}
                    <div className="flex gap-1 mb-10">
                      {[...Array(item.rating)].map((_, i) => (
                        <StarIcon key={i} />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-black text-sm md:text-base font-bold leading-snug">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.author}
                      className="w-10 h-10 rounded-full object-cover grayscale"
                    />
                    <div className="text-left">
                      <p className="text-sm font-bold text-black leading-tight">{item.author}</p>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wider">{item.role}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Video testimonial"
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video */}
            <iframe
              className="w-full h-full"
              src={testimonials[0].videoUrl}
              title="Video testimonial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Animations */}
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

export default TestimonialsSection;
