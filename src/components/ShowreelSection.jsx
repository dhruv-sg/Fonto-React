import { useState, useEffect, useRef } from 'react';

function ShowreelSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handlePlayClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section ref={sectionRef} className="w-full bg-white pt-[20px] pb-[15px]">
      <div className={`px-[30px] transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}>
        {/* Video Card Container */}
        <div className="relative w-full rounded-3xl overflow-hidden h-[400px] md:h-[500px] lg:h-[600px]">
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=75&w=1200&auto=format&fit=crop"
            alt="Showreel preview"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/20">
            {/* Play Button */}
            <button
              onClick={handlePlayClick}
              aria-label="Play showreel"
              className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
            >
              {/* Play Icon Triangle */}
              <svg
                className="w-6 h-6 md:w-8 md:h-8 ml-1"
                viewBox="0 0 24 24"
                fill="black"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>

            {/* Text */}
            <p className="text-white text-base md:text-lg font-medium">
              Watch showreel
            </p>
          </div>
        </div>
      </div>

      {/* Video Modal Overlay */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10"
          onClick={closeModal}
        >
          {/* Close Button - Outside the video box */}
          <button 
            onClick={closeModal}
            className="fixed top-6 right-6 md:top-10 md:right-10 z-[210] w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 active:scale-90"
            aria-label="Close video"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div 
            className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* YouTube Embed */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/iUtnZpzkbG8?autoplay=1&rel=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}

export default ShowreelSection;
