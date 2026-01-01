import React from 'react';

/**
 * AwardsSection - Minimalist agency-style awards list.
 * Features a bottom-to-top fill hover effect.
 */
const AwardsSection = () => {
  const awards = [
    { id: '01', title: 'Site of the Day', type: 'Awwwards', year: '2024' },
    { id: '02', title: 'Agency of the Year', type: 'The Webby Awards', year: '2023' },
    { id: '03', title: 'Mobile Excellence', type: 'Awwwards', year: '2023' },
    { id: '04', title: 'Best UI/UX Design', type: 'CSS Design Awards', year: '2023' },
    { id: '05', title: 'Developer Award', type: 'Awwwards', year: '2022' },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="px-[30px]">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10 md:mb-16">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-black"></span>
            <p className="text-xs md:text-sm font-black text-black uppercase tracking-[0.3em] leading-none">
              Our Awards
            </p>
          </div>
          <span className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest opacity-60">
            Public Recognition
          </span>
        </div>

        {/* Awards List */}
        <div className="flex flex-col border-t border-black/5">
          {awards.map((award) => (
            <div 
              key={award.id}
              className="group relative flex items-center py-5 md:py-7 border-b border-black/5 cursor-pointer overflow-hidden transition-colors duration-500"
            >
              {/* Hover Background - Fills FROM BOTTOM TO TOP */}
              <div className="absolute bottom-0 left-0 w-full h-0 bg-black transition-all duration-500 ease-in-out group-hover:h-full z-0"></div>

              {/* Row Content */}
              <div className="relative z-10 w-full grid grid-cols-12 items-center gap-4 text-black group-hover:text-white transition-colors duration-500">
                {/* Index */}
                <div className="col-span-1">
                  <span className="text-xs md:text-sm font-black opacity-20 group-hover:opacity-100 uppercase tracking-tighter">
                    {award.id}
                  </span>
                </div>

                {/* Award Title */}
                <div className="col-span-11 md:col-span-7">
                  <h3 className="text-2xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.85]">
                    {award.title}
                  </h3>
                </div>

                {/* Award Type */}
                <div className="hidden md:block md:col-span-3 text-right">
                  <span className="text-[10px] md:text-xs font-black opacity-30 group-hover:opacity-100 uppercase tracking-[0.3em]">
                    {award.type}
                  </span>
                </div>

                {/* Year */}
                <div className="hidden md:block md:col-span-1 text-right px-2">
                  <span className="text-sm md:text-base font-black tracking-tight opacity-30 group-hover:opacity-100 italic">
                    {award.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
