import { Clock, Calendar,Flag, Users} from 'lucide-react';
import {motion} from "framer-motion";

function OverviewSection() {
  return (
    <div>
       <section id="overview" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Clock, text: "6 jours / 5 nuits" },
              { icon: Users, text: "2 à 12 personnes" },
              { icon: Calendar, text: "Disponible toute l'année" },
              { icon: Flag, text: "Difficulté: Facile" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <item.icon className="w-8 h-8 text-yellow-600" />
                <span className="text-gray-700 text-lg">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default OverviewSection
