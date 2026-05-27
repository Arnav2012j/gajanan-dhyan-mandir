import Navigation from '../sections/Navigation';
import Hero from '../sections/Hero';
import About from '../sections/About';
import DecorativeDivider from '../components/DecorativeDivider';
import DonationPlans from '../sections/DonationPlans';
import Activities from '../sections/Activities';
import Benefits from '../sections/Benefits';
import Gallery from '../sections/Gallery';
import Testimonials from '../sections/Testimonials';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <DecorativeDivider />
      <About />
      <DonationPlans />
      <Activities />
      <Benefits />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
