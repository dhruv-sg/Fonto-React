import { useState, useRef, useEffect } from "react";

const TeamCard = ({ member, isActive, onMouseEnter, onMouseLeave }) => {
  const bioRef = useRef(null);
  const [bioHeight, setBioHeight] = useState(0);

  useEffect(() => {
    if (bioRef.current) {
      setBioHeight(bioRef.current.scrollHeight);
    }
  }, [member.bio]);

  return (
    <div className="relative group rounded-[1.5rem] overflow-hidden h-[450px] md:h-[500px] lg:h-[550px] bg-gray-100">
      {/* Background Image */}
      <img
        src={member.image}
        alt={member.name}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

      {/* Floating Info Card */}
      <div
        className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-5 shadow-xl transition-all duration-300 ease-out flex flex-col justify-end cursor-pointer"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={
          {
            // We don't need a fixed height, it will grow based on content
          }
        }
      >
        {/* Header: Name and Socials */}
        <div className="flex items-start justify-between mb-1">
          <h4 className="text-lg md:text-xl font-bold text-black leading-tight">
            {member.name}
          </h4>
          <div className="flex items-center gap-2 pt-1">
            <a
              href={member.linkedin}
              className="text-black hover:opacity-60 transition-opacity"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href={member.twitter}
              className="text-black hover:opacity-60 transition-opacity"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                bg-gray-100
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Role */}
        <p className="text-gray-500 text-xs md:text-sm font-medium mb-0">
          {member.role}
        </p>

        {/* Bio Panel (Accordion) */}
        <div
          style={{
            height: isActive ? `${bioHeight}px` : "0px",
            opacity: isActive ? 1 : 0,
            marginTop: isActive ? "1rem" : "0rem",
          }}
          className="overflow-hidden transition-all duration-300 ease-out"
        >
          <div
            ref={bioRef}
            className="text-gray-600 text-[13px] md:text-sm leading-snug"
          >
            {member.bio}
          </div>
        </div>
      </div>
    </div>
  );
};

function TeamSection() {
  const [activeId, setActiveId] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const team = [
    {
      id: 1,
      name: "Matthew Miller",
      role: "Lead Designer",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1000&fit=crop", // Asian female portrait matches image
      bio: "Leading our vision with 10+ years of experience in high-end brand identity and digital strategy.",
      linkedin: "#",
      twitter: "#",
    },
    {
      id: 2,
      name: "Michael Wilson",
      role: "Brand Strategist",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=1000&fit=crop", // Older male portrait matches image
      bio: "Fusce aliquet turpis at orci bibendum, non convallis justo tempor. Donec eu felis at libero consequat sagittis a et urna. Lorem ip",
      linkedin: "#",
      twitter: "#",
    },
    {
      id: 3,
      name: "Jennifer Johnson",
      role: "Web Designer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=1000&fit=crop", // Male portrait matches image
      bio: "Solving complex problems through intuitive interface design and human-centric user experiences.",
      linkedin: "#",
      twitter: "#",
    },
    {
      id: 4,
      name: "Jane Taylor",
      role: "UX/UI Specialist",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop", // Male portrait matches image
      bio: "Driving measurable growth through data-backed content strategies and visibility optimization.",
      linkedin: "#",
      twitter: "#",
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
    <section
      ref={sectionRef}
      className="w-full bg-white py-12 md:py-16 lg:py-24 overflow-hidden"
    >
      <div
        className={`px-[30px] transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12 md:mb-16">
          <div>
            <p className="text-sm md:text-base text-gray-400 mb-6 tracking-wide">
              • About Us
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-black max-w-[600px]">
              The faces behind <br />
              <span className="text-gray-400">
                successful projects execution
              </span>
            </h2>
          </div>
          <span className="text-gray-400 font-medium text-lg self-end md:self-start">
            (08)
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {team.map((member) => (
            <TeamCard
              key={member.id}
              member={member}
              isActive={activeId === member.id}
              onMouseEnter={() => setActiveId(member.id)}
              onMouseLeave={() => setActiveId(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
