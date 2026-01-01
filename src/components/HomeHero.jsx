import { useState, useEffect } from 'react';

function HomeHero() {
  const brandText = "Fonto®";

  return (
    <section className="w-full bg-white">
      <div className="px-[30px] pt-12 md:pt-16 lg:pt-20 pb-[20px]">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-10 lg:gap-20">
          {/* Left Side - Brand Text with Character Drop Animation */}
          <div className="flex-shrink-0">
            <h1 
              aria-label="Fonto®"
              className="text-5xl sm:text-5xl md:text-[10rem] lg:text-[12rem] font-semibold text-black leading-none tracking-tight flex"
            >
              {brandText.split('').map((char, index) => (
                <span
                  key={index}
                  aria-hidden="true"
                  className="inline-block animate-character-drop"
                  style={{
                    animationDelay: `${index * 0.05}s`,
                    animationFillMode: 'both'
                  }}
                >
                  {char}
                </span>
              ))}
            </h1>
          </div>

          {/* Right Side - Rating + Description */}
          <div className="flex flex-col items-center lg:items-end gap-3 max-w-sm lg:max-w-md">
            {/* Star Rating Row */}
            <div 
              className="flex items-center gap-2"
              role="img" 
              aria-label="Rated 4.9 out of 5 stars"
            >
              {/* 5 Stars */}
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    aria-hidden="true"
                    className="w-4 h-4 fill-black"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              {/* Rating Text */}
              <span className="text-black font-medium text-sm">4.9/5</span>
            </div>

            {/* Description Text */}
            <p className="text-gray-600 text-sm text-center lg:text-right leading-relaxed">
              Smart tools and strategies designed to grow your business and elevate your brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
