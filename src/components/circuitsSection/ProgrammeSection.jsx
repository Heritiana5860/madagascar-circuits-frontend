import { Flag } from "lucide-react";
import itinerary from "../constants/itinerary"
import {motion} from "framer-motion";

function ProgrammeSection() {
  return (
    <div>
       <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Programme Détaillé</h2>
          <div className="space-y-8">
            {itinerary.map((day, index) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-yellow-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                    {day.day}
                  </div>
                  <h3 className="text-2xl font-bold">{day.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{day.description}</p>
                <div className="grid md:grid-cols-3 gap-4">
                  {day.activities.map((activity, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                      <Flag className="w-5 h-5 text-yellow-600" />
                      <span>{activity}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProgrammeSection
