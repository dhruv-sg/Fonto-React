import React from 'react';

/**
 * PartnerSection - Minimalist agency-style brand grid.
 * Features a 2-column desktop layout with a 3x2 logo grid.
 */
const PartnerSection = () => {
  // Logo data - grayscale brand placeholders from the image
  const partners = [
    { name: 'Logo 1', logo: 'https://cdn.worldvectorlogo.com/logos/linear-1.svg' },
    { name: 'Logo 2', logo: 'https://cdn.worldvectorlogo.com/logos/vercel.svg' },
    { name: 'Logo 3', logo: 'https://static.vecteezy.com/system/resources/previews/019/766/237/large_2x/adidas-logo-adidas-icon-transparent-free-png.png' },
    { name: 'Logo 4', logo: 'https://cdn.worldvectorlogo.com/logos/airbnb-2.svg' },
    { name: 'Logo 5', logo: 'https://static.vecteezy.com/system/resources/previews/019/956/196/large_2x/nike-transparent-nike-free-free-png.png' },
    { name: 'Logo 6', logo: 'https://cdn.worldvectorlogo.com/logos/notion-2.svg' },
  ];

  return (
    <section className="w-full bg-white pt-10 pb-24 md:pt-16 md:pb-32 lg:pb-40">
      <div className="px-[30px]">
        {/* Top Indicators */}
        <div className="flex items-center justify-between mb-6 md:mb-10">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
            <p className="text-[10px] md:text-xs font-bold text-black uppercase tracking-widest leading-none">
              Our Partner
            </p>
          </div>
          <span className="text-[10px] md:text-xs font-medium text-gray-400">
            (01)
          </span>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Massive Bold Typography */}
          <div className="lg:col-span-5 flex flex-col pt-2">
            <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-bold leading-[1.05] tracking-tight text-black">
              Partnered with brands <br />
              to create
            </h2>
          </div>

          {/* Right Column: Logo Grid Container */}
          <div className="lg:col-span-12 xl:col-span-7 flex justify-center lg:justify-end">
            <div 
              className="bg-[#e8e8e8] rounded-[2rem] p-3 md:p-[12px] w-full max-w-[450px] md:max-w-[650px] lg:w-[650px]"
            >
              <div 
                className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-[13px]"
              >
                {partners.map((brand, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-[1.5rem] flex items-center justify-center transition-all duration-300 hover:scale-[1.02] w-full h-[80px] md:w-[200px] md:h-[100px]"
                  >
                    <img 
                      src={brand.logo} 
                      alt={brand.name} 
                      className="w-[70px] md:w-[90px] h-auto object-contain grayscale opacity-80"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
