import { useEffect } from 'react';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

function Contact() {
  // Ensure we start at the top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full">
      <ContactSection />
      <Footer />
    </main>
  );
}

export default Contact;
