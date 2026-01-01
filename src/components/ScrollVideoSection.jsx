import { useState, useRef } from 'react';

/**
 * StaticVideoSection - A clean, static video display.
 * Replaces the scroll-driven expansion with a fixed, premium thumbnail layout.
 */
function StaticVideoSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // Toggle play/pause on click
  const togglePlay = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="px-[30px] pt-8 pb-4 md:pt-12 md:pb-6">
      <div className="w-full max-w-[1400px]">
        {/* Fixed Thumbnail Layout - Matches the design image */}
        <div 
          className="relative w-full max-w-[500px] h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-[2.5rem] cursor-pointer shadow-[0_20px_60px_rgba(0,0,0,0.1)] group transition-transform duration-500 hover:scale-[1.02]"
          onClick={togglePlay}
        >
          {/* Muted Autoplay Video */}
          <video
            ref={videoRef}
            src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Centered Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-white/20 backdrop-blur-2xl rounded-full flex items-center justify-center border border-white/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
              {isPlaying ? (
                <svg className="w-6 h-6 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg className="w-6 h-6 md:w-10 md:h-10 text-white ml-1.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </div>
          </div>

          {/* Watch Showreel Label */}
          <div className="absolute bottom-8 left-8 text-white z-10 transition-opacity duration-300">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <p className="text-[10px] md:text-xs uppercase tracking-widest font-black">Play Showreel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StaticVideoSection;
