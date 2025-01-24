import { motion } from 'framer-motion';

const images = [
  "https://cdn.pixabay.com/photo/2019/03/28/10/24/madagascar-4086877_960_720.jpg",
  "https://cdn.pixabay.com/photo/2019/10/29/15/30/madagascar-4587230_960_720.jpg",
  "https://cdn.pixabay.com/photo/2019/11/06/15/53/africa-4606513_960_720.jpg",
  "https://media.istockphoto.com/id/468053366/photo/off-road-madagascar.jpg?s=2048x2048&w=is&k=20&c=Vm7f9ks2cMNHj4m10kk_o59lbY05CfNmJ69d1W8BTmA=",
  "https://media.istockphoto.com/id/468053358/photo/baobab-off-road.jpg?s=2048x2048&w=is&k=20&c=-qh4F7s39EPtnq1xCe8LGs9OiJ7OmUXO6RD_RqbYr2Q=",
  "https://cdn.pixabay.com/photo/2019/10/31/09/03/freesbee-4591399_960_720.jpg"
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