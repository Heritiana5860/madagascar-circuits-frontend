import 'leaflet/dist/leaflet.css';
import HeroSection from '../../components/circuitsSection/HeroSection';
import OverviewSection from '../../components/circuitsSection/OverviewSection';
import ProgrammeSection from '../../components/circuitsSection/ProgrammeSection';
import CTASection from '../../components/circuitsSection/CTA';
import GallerySection from '../../components/circuitsSection/GallerySection';
import ReviewsSection from '../../components/circuitsSection/ReviewsSection';
import MapSection from '../../components/circuitsSection/MapSection';
import ServiceClimatSection from '../../components/circuitsSection/ServiceClimatSection';

const CircuitPangalanes = () => {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Video Background */}
      <HeroSection />

      {/* Overview Section */}
      <OverviewSection />

      {/* Interactive Map Section */}
      <MapSection />

      {/* Programme détaillé */}
      <ProgrammeSection />

      {/* Services et Climat */}
      <ServiceClimatSection />

      {/* CTA section */}
      <CTASection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Reviews Section */}
      <ReviewsSection />
    </div>
  );
};

export default CircuitPangalanes;