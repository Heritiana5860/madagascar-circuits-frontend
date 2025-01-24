/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const TourCard = ({ tour, index }) => {

  const images = [
    "https://media.istockphoto.com/id/463419167/photo/stone-blades-at-tsingy-de-bemaraha-madagascar.jpg?s=2048x2048&w=is&k=20&c=qEatUqeXwX-POR9MVd5uo76nRek3OC53OLWu57mR7Lo=",
    "https://media.istockphoto.com/id/177357922/photo/canal-des-pangalanes.jpg?s=2048x2048&w=is&k=20&c=SrMYWu868roOW2_xxWZWeDwcDZwJNzFYGz-tOm13s8E=",
    "https://plus.unsplash.com/premium_photo-1661871178548-e35aece53d53?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  const image = images[index % images.length];

  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group relative overflow-hidden rounded-2xl bg-white shadow-lg"
  >
    <div className="aspect-[4/3] overflow-hidden">
      <img
        src={image}
        alt={tour.title}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        loading="lazy"
      />
    </div>
    <div className="absolute top-4 right-4 bg-yellow-500 text-white px-4 py-1 rounded-full text-sm">
      {tour.duration}
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
      <p className="text-gray-600 mb-4">{tour.desc}</p>
      <a 
        href={`/tours/${tour.title.toLowerCase().replace(/ /g, '-')}`}
        className="inline-flex items-center text-yellow-600 font-medium group-hover:text-yellow-700"
      >
        En savoir plus
        <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  </motion.div>
  );
};

const PopularToursSection = () => {
  const tours = [
    {
      title: "Les Tsingy de Bemaraha",
      desc: "Une merveille géologique unique au monde",
      duration: "4 jours"
    },
    {
      title: "Canal des Pangalanes",
      desc: "Une aventure fluviale inoubliable",
      duration: "6 jours"
    },
    {
      title: "L'Allée des Baobab",
      desc: "Les géants emblématiques de Madagascar",
      duration: "3 jours"
    }
  ];

  return (
    <section className="py-24 bg-gray-50" aria-label="Nos circuits populaires">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Nos Circuits Phares</h2>
          <p className="text-xl text-gray-600">
            Découvrez nos itinéraires les plus populaires à travers Madagascar
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <TourCard key={index} tour={tour} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularToursSection;