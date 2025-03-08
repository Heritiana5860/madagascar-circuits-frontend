import { motion } from 'framer-motion';
import recolte from '@assets/recolte-de-girofle.JPG';
import excursion from '@assets/excursion-canal.jpg';
import transport from '@assets/transport.JPG';
import vanille from '@assets/vanille-et-fleure.JPG';
import tete from '@assets/tete-bateau.jpg';

const images = [
  "https://cdn.pixabay.com/photo/2019/03/28/10/24/madagascar-4086877_960_720.jpg",
  excursion,
  vanille,
  recolte,
  transport,
  tete
];

const GallerySection = () => {
  return (
    <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-12 text-center">Galerie Photos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={item}
              alt={`Gallery image ${item}`}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">Vue du Circuit</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default GallerySection;