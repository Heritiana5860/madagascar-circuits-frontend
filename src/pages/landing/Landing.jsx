import image1 from '../../assets/image1.jpg';
import image3 from '../../assets/image4x4.jpg';
import image4 from '../../assets/image3.jpg';
import HeroCarousel from '../../components/section/HeroCarousel';
import FeaturesSection from '../../components/section/FeaturesSection';
import PopularToursSection from '../../components/section/PopularToursSection';
import CTASection from '../../components/section/CTASection';

const Landing = () => {
  // Configuration des images du carousel
  const carouselImages = [
    {
      url: image1,
      title: "Canal des Pangalanes",
      description: "Naviguez sur l'un des plus longs canaux artificiels du monde",
      position: "left",
      alt: "Formations rocheuses des Tsingys de Madagascar"
    },
    {
      url: "https://media.istockphoto.com/id/469886495/photo/stunning-rock-formation-in-tsingy-de-bemaraha-madagascar.jpg?s=2048x2048&w=is&k=20&c=z8D7sidtsD_7pYflOzx7ySMB0fa1Z5cNUxHxf4y0QDo=",
      title: "Explorez les Tsingy de Madagascar",
      description: "Découvrez les formations rocheuses uniques classées au patrimoine mondial de l'UNESCO",
      position: "right",
      alt: "Vue panoramique du Canal des Pangalanes"
    },
    {
      url: image3,
      title: "Aventure en 4x4",
      description: "Explorez Madagascar hors des sentiers battus en véhicule tout-terrain",
      position: "left",
      alt: "4x4 traversant un paysage malgache"
    },
    {
      url: image4,
      title: "La Grande Île",
      description: "Découvrez une biodiversité unique au monde entre mer et terre",
      position: "right",
      alt: "Paysage côtier de Madagascar"
    }
  ];

  return (
    <main className="flex flex-col min-h-screen">
      {/* Section Hero avec Carousel */}
      <HeroCarousel images={carouselImages} />

      {/* Section des caractéristiques */}
      <FeaturesSection />

      {/* Section des circuits populaires */}
      <PopularToursSection />

      {/* Section CTA */}
      <CTASection />
    </main>
  );
};

export default Landing;