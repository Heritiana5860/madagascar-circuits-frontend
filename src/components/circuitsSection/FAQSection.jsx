import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [activeSection, setActiveSection] = useState('');

  const faqs = [
    {
      question: "Quel est le meilleur moment pour faire ce circuit ?",
      answer: "La meilleure période est d'avril à novembre, pendant la saison sèche. Le climat est plus agréable et les activités sont plus facilement praticables."
    },
    {
      question: "Le circuit est-il adapté aux enfants ?",
      answer: "Oui, le circuit est accessible aux familles avec enfants à partir de 6 ans. Les activités sont adaptables selon l'âge des participants."
    },
    {
      question: "Que dois-je emporter ?",
      answer: "Nous recommandons d'apporter des vêtements légers, un maillot de bain, de la crème solaire, un chapeau, des chaussures confortables et un anti-moustique."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Questions Fréquentes</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <button
                className="w-full text-left p-6 focus:outline-none"
                onClick={() => setActiveSection(activeSection === `faq-${index}` ? '' : `faq-${index}`)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      activeSection === `faq-${index}` ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
              {activeSection === `faq-${index}` && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;