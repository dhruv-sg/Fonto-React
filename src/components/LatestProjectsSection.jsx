import { useState, useEffect, useRef } from 'react';

function LatestProjectsSection({ showHeader = true }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Project data
  const projects = [
    {
      id: 1,
      title: 'Vortex branding',
      category: 'App Design / Brand Identity',
      year: '(2022)',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=900&fit=crop',
    },
    {
      id: 2,
      title: 'Nexus agency',
      category: 'Web Design / Development',
      year: '(2023)',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=900&fit=crop',
    },
    {
      id: 3,
      title: 'Quantum series',
      category: 'Motion Graphics / UI',
      year: '(2023)',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=900&fit=crop',
    },
    {
      id: 4,
      title: 'Horizon platform',
      category: 'SaaS / UI/UX Design',
      year: '(2024)',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=900&fit=crop',
    },
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
    <section ref={sectionRef} className="w-full bg-white py-12 md:py-24 lg:py-32 overflow-hidden">
      <div className={`px-[30px] transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Section Header */}
        {showHeader && (
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 md:mb-24">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-gray-400 mb-6 uppercase tracking-wider text-sm font-medium">
                <span>•</span>
                <p>Our Latest Work</p>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-black max-w-[700px]">
                The faces behind <br />
                <span className="text-gray-400">successful projects execution</span>
              </h2>
            </div>
            <div className="flex flex-col items-end gap-6">
              <span className="text-gray-400 font-medium text-lg">(02)</span>
              <button 
                aria-label="View all projects in our portfolio"
                className="group relative bg-black text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest overflow-hidden transition-all duration-300 hover:bg-gray-900 active:scale-95"
              >
                <span className="relative z-10">View All Work</span>
              </button>
            </div>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group transition-all duration-1000 ease-out`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : '0ms',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              }}
            >
              <div className="flex flex-col gap-6">
                {/* Image Container with Framing */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#ecedf1] p-[5px] border border-gray-100 shadow-sm shadow-black/5 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-black/10">
                  <div className="w-full h-full overflow-hidden rounded-[1.8rem]">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                    />
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-[5px] rounded-[1.8rem] bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>

                {/* Info Text */}
                <div className="flex flex-col gap-2 px-2">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl md:text-3xl font-bold text-black tracking-tight group-hover:underline decoration-1 underline-offset-8 transition-all">
                      {project.title}
                    </h3>
                    <span className="text-gray-400 font-medium text-sm md:text-base pt-1">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-gray-500 font-medium text-sm md:text-base tracking-wide uppercase">
                    {project.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestProjectsSection;
