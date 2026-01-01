import HomeHero from '../components/HomeHero';
import ShowreelSection from '../components/ShowreelSection';
import BrandMarquee from '../components/BrandMarquee';
import AboutMetricsSection from '../components/AboutMetricsSection';
import LatestProjectsSection from '../components/LatestProjectsSection';
import ProcessSection from '../components/ProcessSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PricingSection from '../components/PricingSection';
import ExperienceStats from '../components/ExperienceStats';
import TeamSection from '../components/TeamSection';
import FAQSection from '../components/FAQSection';
import BlogSection from '../components/BlogSection';
import Footer from '../components/Footer';
import { useScrollRestoration } from '../hooks/useScrollRestoration';

function Home() {
  // Restore scroll position on page refresh
  useScrollRestoration();

  return (
    <div>
      <HomeHero />
      <ShowreelSection />
      <BrandMarquee />
      <AboutMetricsSection />
      <LatestProjectsSection />
      <ProcessSection />
      <ServicesSection />
      <TestimonialsSection />
      <PricingSection />
      <ExperienceStats />
      <TeamSection />
      <FAQSection />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default Home;
