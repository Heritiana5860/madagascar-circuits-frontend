import { Users, Heart, Calendar, Award } from 'lucide-react';

export default function Apropos() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative h-96 mb-16">
        <img 
          src="/api/placeholder/1920/600" 
          alt="Madagascar landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center">
            Découvrez Notre Histoire
          </h1>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Notre Mission</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Depuis 2010, nous nous engageons à faire découvrir les merveilles de Madagascar 
            aux voyageurs du monde entier, en créant des expériences authentiques et inoubliables.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: Users, title: "10K+", desc: "Clients Satisfaits" },
            { icon: Heart, title: "150+", desc: "Circuits Uniques" },
            { icon: Calendar, title: "13", desc: "Années d'Expérience" },
            { icon: Award, title: "25", desc: "Prix Reçus" }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Notre Équipe</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Jean Rakoto",
                role: "Fondateur & CEO",
                image: "/api/placeholder/400/400"
              },
              {
                name: "Marie Ratsima",
                role: "Directrice des Opérations",
                image: "/api/placeholder/400/400"
              },
              {
                name: "Paul Randria",
                role: "Chef Guide",
                image: "/api/placeholder/400/400"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Nos Valeurs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Authenticité",
              desc: "Nous créons des expériences authentiques qui respectent la culture locale."
            },
            {
              title: "Durabilité",
              desc: "Nous nous engageons pour un tourisme responsable et durable."
            },
            {
              title: "Excellence",
              desc: "Nous visons l'excellence dans chaque aspect de nos services."
            }
          ].map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
