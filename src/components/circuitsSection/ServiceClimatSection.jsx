
import { motion } from 'framer-motion';
import {  Sun, Cloud, Droplet, Users, Car, Hotel, Utensils } from 'lucide-react';

function ServiceClimatSection() {
  return (
    <div>
       <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold">Services Inclus</h2>
              <div className="grid gap-6">
                {[
                  { icon: Car, text: "Transport en 4x4 climatisé" },
                  { icon: Hotel, text: "Hébergement en lodge confortable" },
                  { icon: Utensils, text: "Pension complète" },
                  { icon: Users, text: "Guide francophone" }
                ].map((service, index) => (
                  <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                    <service.icon className="w-8 h-8 text-yellow-600" />
                    <span className="text-lg">{service.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold">Climat</h2>
              <div className="grid gap-6">
                {[
                  { icon: Sun, text: "Température moyenne: 25°C" },
                  { icon: Cloud, text: "Meilleure période: Avril à Novembre" },
                  { icon: Droplet, text: "Saison des pluies: Décembre à Mars" }
                ].map((info, index) => (
                  <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                    <info.icon className="w-8 h-8 text-yellow-600" />
                    <span className="text-lg">{info.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiceClimatSection
