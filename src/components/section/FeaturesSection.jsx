/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { Map, Compass, Car, Calendar } from 'lucide-react';

const FeatureCard = ({ Icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group text-center"
  >
    <div className="inline-flex p-4 rounded-2xl bg-yellow-50 group-hover:bg-yellow-100 transition-colors duration-300 mb-6">
      <Icon className="w-8 h-8 text-yellow-600" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

const FeaturesSection = () => {
  const features = [
    { Icon: Map, title: "Circuits Guidés", description: "Explorez avec nos guides experts locaux" },
    { Icon: Compass, title: "Sur Mesure", description: "Voyages personnalisés selon vos envies" },
    { Icon: Car, title: "Location 4x4", description: "Véhicules tout-terrain bien entretenus" },
    { Icon: Calendar, title: "Flexibilité", description: "Réservations adaptables toute l'année" }
  ];

  return (
    <section className="py-24 bg-white" aria-label="Nos services">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              Icon={feature.Icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;