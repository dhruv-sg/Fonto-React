import { useState, useEffect, useRef } from 'react';
import AnimatedLogo from './AnimatedLogo';

function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
    <footer ref={sectionRef} className="w-full bg-black text-white pt-12 pb-6 rounded-t-[3rem] md:rounded-t-[5rem] px-[30px] overflow-hidden min-h-[400px] flex flex-col justify-between">
      <div className={`max-w-[1400px] mx-auto w-full transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20 mb-10">
          {/* Left: Headline & CTA */}
          <div className={`flex-1 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
              Let's work <br /> together and <br /> make cool <br /> things!
            </h2>
            <button 
              aria-label="Contact us to start your project"
              className="group bg-white text-black px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 transition-all duration-300 hover:scale-[1.05] active:scale-95"
            >
              Let's Talk
              <span className="w-2.5 h-2.5 rounded-full bg-black transition-transform group-hover:scale-125" aria-hidden="true"></span>
            </button>
          </div>

          {/* Right: Contact & Socials */}
          <div className={`flex flex-col md:flex-row gap-16 md:gap-32 lg:pt-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col gap-6">
              <h4 className="text-gray-500 font-bold uppercase tracking-widest text-sm">Contact</h4>
              <div className="flex flex-col gap-3 text-lg md:text-xl text-white/70">
                <p>123 Creative St, Studio City</p>
                <a href="mailto:dhruvsgondaliya@gmail.com" className="hover:text-white transition-colors duration-300">dhruvsgondaliya@gmail.com</a>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="text-gray-500 font-bold uppercase tracking-widest text-sm">Follow Us</h4>
              <div className="flex flex-col gap-3 text-lg md:text-xl text-white/70">
                <a href="#" className="relative w-fit group">
                  LinkedIn
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#" className="relative w-fit group">
                  Instagram
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#" className="relative w-fit group">
                  Facebook
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Branding Section */}
        <div className="flex justify-end mb-10">
          <div className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-bold leading-none text-right">
            <AnimatedLogo text="Fonto®" subtext="Studio" />
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`flex flex-col md:flex-row justify-between items-center gap-6 pt-6 border-t border-white/10 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-gray-500 text-sm md:text-base text-center md:text-left">
            Designed by Dhruv Gondaliya
          </p>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex gap-8 text-gray-500 text-sm md:text-base">
              <a href="#" className="hover:text-white transition-colors">License</a>
              <a href="#" className="hover:text-white transition-colors">Style Guide</a>
              <a href="#" className="hover:text-white transition-colors">404 Page</a>
            </div>
            
            <button 
              aria-label="Purchase Fonto template on Webflow"
              className="bg-white text-black px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_8px_20px_rgba(255,255,255,0.2)]"
            >
              Buy Fonto
            </button>
          </div>
        </div>
      </div>

      <style>
        {`
          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              transition-duration: 0.01ms !important;
            }
          }
          
          .cubic-bezier(0.22, 1, 0.36, 1) {
            transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
          }
        `}
      </style>
    </footer>
  );
}

export default Footer;
