
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Mission from './components/sections/Mission';
import Services from './components/sections/Services';
import ImpactGrid from './components/sections/ImpactGrid';
import Partners from './components/sections/Partners';
import HowItWorks from './components/sections/HowItWorks';
import Testimonials from './components/sections/Testimonials';
import EmergencyBanner from './components/sections/EmergencyBanner';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Mission />
        <HowItWorks />
        <Services />
        <ImpactGrid />
        <Testimonials />
        <EmergencyBanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
