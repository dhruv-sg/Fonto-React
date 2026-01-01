import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import SlotText from './SlotText';

const BlogCard = ({ category, title, date, image }) => {
  return (
    <div className="group cursor-pointer flex flex-col gap-6">
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-[2.2rem] border border-gray-100 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:scale-[1.01] bg-[#ecedf1] p-[7px]">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover rounded-[1.8rem] transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-6 left-6">
          <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-black border border-white/20 shadow-sm">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 px-1">
        <h3 className="text-xl md:text-2xl font-bold text-black leading-tight group-hover:text-gray-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm font-medium">{date}</p>
      </div>
    </div>
  );
};

function BlogSection() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const blogs = [
    {
      id: 1,
      category: 'Design',
      title: 'How to build a brand identity that lasts for 20 years',
      date: 'OCTOBER 24, 2023',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80'
    },
    {
      id: 2,
      category: 'Fintech',
      title: 'The future of digital payments in the modern era',
      date: 'SEPTEMBER 12, 2023',
      image: 'https://images.unsplash.com/photo-1556742521-9713bf272865?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 3,
      category: 'Design',
      title: 'Why minimal design is the most effective approach',
      date: 'AUGUST 05, 2023',
      image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&q=80'
    }
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
    <section ref={sectionRef} className="w-full bg-white py-12 md:py-24 lg:py-32">
      <div className={`px-[30px] transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-16 md:mb-20">
          <div className="flex-1">
            <p className="text-sm md:text-base text-gray-400 mb-6 tracking-wide">• Our Blog</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-black max-w-[600px]">
              Latest trends and insights <br />
              <span className="text-gray-400">from our team</span>
            </h2>
          </div>

          <div className="flex flex-col items-end gap-10">
            <span className="text-gray-400 font-medium text-lg">(10)</span>
            
            {/* All Blogs Button */}
            <button
              onClick={() => navigate('/blog')}
              aria-label="View all blog posts"
              className="group relative bg-gray-100 px-8 py-4 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gray-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-300 overflow-hidden"
            >
              <SlotText text="All Blogs" className="text-black font-bold uppercase tracking-widest text-sm" />
            </button>
          </div>
        </div> 

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
