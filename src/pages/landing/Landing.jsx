import image1 from '@assets/lakana.jpg';
import image3 from '@assets/image4x4.jpg';
import sud from '@assets/sud.jpg';
import langouste from '@assets/langouste.jpg';
import huitre from '@assets/tamatave-degustation.JPG';
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
      url: sud,
      title: "Explorez la partie sud de Madagascar",
      description: "Découvrez les paysages uniques du sud de Madagascar",
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
      url: huitre,
      title: "Deguster les huitres de Tamatave",
      description: "Dégustez les huitres de Tamatave, une des meilleures du monde",
      position: "right",
      alt: "Dégustation"
    }
    ,
    {
      url: langouste,
      title: "Devoirer les langoustes de Madagascar",
      description: "Dégustez les langoustes de Madagascar, une des meilleures du monde",
      position: "left",
      alt: "Langouste"
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