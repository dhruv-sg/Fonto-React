import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SlotText from './SlotText';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Work', path: '/work' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-[100] h-[72px] flex items-center">
        <div className="w-full px-[30px] flex items-center justify-between">
          {/* Left Section - Brand */}
          <Link to="/" className="flex items-center z-[110]">
            <span className="text-black font-bold text-lg tracking-tight hover:opacity-70 transition-opacity">Fonto®</span>
          </Link>

          {/* Right Section - Hamburger / Close Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="group relative z-[110] w-10 h-10 flex items-center justify-center focus:outline-none"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            <div className="relative w-6 h-5">
              {/* Top Line */}
              <span className={`absolute left-0 block w-full h-0.5 bg-black transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'top-2 rotate-45' : 'top-0'
              }`}></span>
              {/* Middle Line */}
              <span className={`absolute left-0 top-2 block w-full h-0.5 bg-black transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-0 -translate-x-2' : 'opacity-100'
              }`}></span>
              {/* Bottom Line */}
              <span className={`absolute left-0 block w-full h-0.5 bg-black transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'top-2 -rotate-45' : 'top-4'
              }`}></span>
            </div>
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-white z-[90] transition-all duration-700 cubic-bezier(0.85, 0, 0.15, 1) px-[30px] flex flex-col pt-[120px] pb-10 items-center justify-center ${
        isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="flex flex-col gap-6 md:gap-8 w-full max-w-2xl">
          <p className="text-gray-400 text-xs md:text-sm uppercase tracking-widest font-bold mb-4 opacity-60 text-center">Menu</p>
          <div className="flex flex-col">
            {navLinks.map((link, index) => (
              <div 
                key={link.path} 
                className="overflow-hidden"
              >
                <Link 
                  to={link.path}
                  className={`group block py-2 md:py-3 transition-all duration-700 ease-out ${
                    isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 80 + 200}ms` }}
                >
                  <div className="flex items-center justify-center">
                    <SlotText 
                      text={link.name} 
                      className="text-xl md:text-3xl lg:text-4xl font-bold tracking-tight text-black" 
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Info in Menu */}
        <div className={`mt-20 flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 transition-all duration-700 delay-[800ms] ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex flex-col gap-4 items-center">
            <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">Follow Us</p>
            <div className="flex gap-8 text-black font-semibold text-sm">
              <a href="#" className="hover:opacity-50 transition-opacity">LinkedIn</a>
              <a href="#" className="hover:opacity-50 transition-opacity">Instagram</a>
              <a href="#" className="hover:opacity-50 transition-opacity">X</a>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">Contact</p>
            <p className="text-black font-semibold text-sm">hello@fonto.com</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

