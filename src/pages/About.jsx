import { useEffect } from 'react';
import ScrollVideoSection from '../components/ScrollVideoSection';
import ExperienceStats from '../components/ExperienceStats';
import TeamSection from '../components/TeamSection';
import PartnerSection from '../components/PartnerSection';
import AwardsSection from '../components/AwardsSection';
import Footer from '../components/Footer';

function About() {
  // Ensure we start at the top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full bg-white pt-24 md:pt-32 overflow-x-hidden">
      {/* Hero Header Section - Matches Image */}
      <section className="px-[30px] mb-12 md:mb-16">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-10 md:mb-12">
          About Us
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          {/* Left Column */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-black text-[10px] md:text-xs uppercase tracking-[0.2em] mb-3">Our Company</h4>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
              Every project we take on is designed for long-term success.
            </p>
          </div>
          
          {/* Right Column */}
          <div className="md:col-span-8">
            <h2 className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed text-gray-500 max-w-2xl">
              Our approach is simple: <span className="text-black">we prioritize functionality, speed, and clarity—ensuring every project serves a clear purpose without any unnecessary complexity.</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Immersive Scroll Video Section (High Value Interaction) */}
      <ScrollVideoSection />



      {/* Partner Section */}
      <PartnerSection />

      {/* Awards Section */}
      <AwardsSection />

      

      {/* Newsletter / CTA Section */}
      <section className="px-[30px] py-24 bg-gray-50 rounded-[3rem] md:rounded-[5rem] mx-4 mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-8">Ready to start something great?</h2>
          <p className="text-gray-500 text-lg mb-12 max-w-2xl mx-auto">
            Join 2,000+ companies that have scaled their brands with our creative solutions.
          </p>
          <button className="bg-black text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-xl">
            Get in touch
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default About;
