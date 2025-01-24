
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

function ReviewsSection() {
  return (
    <div>
        <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Avis des Voyageurs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Marie L.",
                date: "Octobre 2024",
                rating: 5,
                comment: "Une expérience inoubliable ! Le guide était fantastique et les paysages à couper le souffle."
              },
              {
                name: "Pierre D.",
                date: "Septembre 2024",
                rating: 5,
                comment: "Circuit très bien organisé. Les lodges étaient confortables et l'accueil chaleureux."
              },
              {
                name: "Sophie M.",
                date: "Août 2024",
                rating: 4,
                comment: "Superbe découverte de la région. Les activités sont variées et adaptées à tous."
              }
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-xl"
              >
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{review.comment}</p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{review.name}</span>
                  <span className="text-gray-500 text-sm">{review.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ReviewsSection
