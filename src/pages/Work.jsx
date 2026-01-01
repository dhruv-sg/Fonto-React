import { useEffect } from 'react';
import LatestProjectsSection from '../components/LatestProjectsSection';
import Footer from '../components/Footer';

function Work() {
  // Reset scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full bg-white pt-24 md:pt-32">
      {/* Portfolio Hero Header */}
      <section className="px-[30px] mb-12 md:mb-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-16">
          <div className="flex-1">
            <p className="text-[10px] md:text-xs text-gray-400 mb-4 tracking-[0.2em] uppercase font-bold">• Our Portfolio</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.1]">
              Featured <br />
              <span className="text-gray-400">Work.</span>
            </h1>
          </div>
          <div className="flex flex-col items-end gap-8 pb-4">
             <span className="text-gray-400 font-medium text-lg">(12)</span>
             <p className="text-right text-gray-500 max-w-[300px] text-sm md:text-base leading-relaxed">
               A curated collection of digital experiences built for industry leaders and ambitious startups.
             </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-100"></div>
      </section>

      {/* Projects Section */}
      <LatestProjectsSection showHeader={false} />



      <Footer />
    </main>
  );
}

export default Work;
