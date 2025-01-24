/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="relative py-24 bg-yellow-500 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-20 mix-blend-overlay" />
      <div className="relative container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt pour l'aventure de votre vie ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Laissez-nous vous guider dans la création de votre voyage sur mesure à Madagascar
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-yellow-600 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              Demander un devis gratuit
            </a>
            <a
              href="/tours"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors duration-300"
            >
              Explorer nos circuits
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;