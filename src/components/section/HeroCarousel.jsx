/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroCarousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideChange((currentSlide + 1) % images.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [currentSlide, images.length]);

  const handleSlideChange = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(newIndex);
    setTimeout(() => setIsAnimating(false), 800);
  };

  return (
    <section 
      className="relative h-[90vh] min-h-[600px]" 
      aria-label="Galerie des destinations phares"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={images[currentSlide].url}
            alt={images[currentSlide].alt}
            className="w-full h-full object-cover"
            loading={currentSlide === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </motion.div>
      </AnimatePresence>

      <div className="relative h-full container mx-auto px-4 flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`max-w-2xl ${
            images[currentSlide].position === 'right' 
              ? 'ml-auto' 
              : 'mr-auto'
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            {images[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            {images[currentSlide].description}
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="/tours" 
              className="group relative px-8 py-4 bg-yellow-500 rounded-full overflow-hidden"
            >
              <span className="relative z-10 text-white font-medium">
                Découvrir nos circuits
              </span>
              <div className="absolute inset-0 bg-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </a>
            <a 
              href="/contact" 
              className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full overflow-hidden"
            >
              <span className="relative z-10 text-white font-medium">
                Nous contacter
              </span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </a>
          </div>
        </motion.div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`relative h-2 transition-all duration-300 ${
                index === currentSlide ? 'w-12 bg-yellow-500' : 'w-2 bg-white/50'
              } rounded-full overflow-hidden`}
              aria-label={`Voir la diapositive ${index + 1}`}
            >
              {index === currentSlide && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 8, ease: "linear" }}
                  className="absolute inset-0 bg-yellow-400 origin-left"
                />
              )}
            </button>
          ))}
        </div>

        <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
          <button
            onClick={() => handleSlideChange((currentSlide - 1 + images.length) % images.length)}
            className="group p-2 backdrop-blur-sm bg-black/20 rounded-full transform transition-all duration-300 hover:scale-110 pointer-events-auto"
            aria-label="Image précédente"
          >
            <ChevronLeft className="w-6 h-6 text-white transform group-hover:scale-110 transition-transform duration-300" />
          </button>
          <button
            onClick={() => handleSlideChange((currentSlide + 1) % images.length)}
            className="group p-2 backdrop-blur-sm bg-black/20 rounded-full transform transition-all duration-300 hover:scale-110 pointer-events-auto"
            aria-label="Image suivante"
          >
            <ChevronRight className="w-6 h-6 text-white transform group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;