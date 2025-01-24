/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { Map, Info, Navigation } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import mananjary from "../assets/mananjary.jpg";
import mahela from "../assets/mahela.jpg";
import manambato from "../assets/manambato.jpeg";
import nosy_varika from "../assets/NOSY-VARIKA.jpg";
import vatomandry from "../assets/vatomandry.jpg";
import mahanoro from "../assets/mahanoro.jpg";
import ambahy from "../assets/ambahy.jpg";

// Correction pour les icônes Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const PangalanesSection = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locations = [
    {
      id: 'mananjary',
      name: 'Mananjary',
      description: 'Point de départ historique, Mananjary est une ville côtière animée connue pour ses épices et son architecture coloniale. Le port traditionnel offre un aperçu authentique de la vie maritime malgache.',
      coordinates: [-21.0297, 48.3453],
      imageUrl: mananjary
    },
    {
      id: 'mahela',
      name: 'Mahela',
      description: 'Village paisible entouré de plantations de girofle et de litchis. Les habitants sont réputés pour leur artisanat traditionnel et leur accueil chaleureux.',
      coordinates: [-20.9597, 48.4053],
      imageUrl: mahela
    },
    {
      id: 'nosy-varika',
      name: 'Nosy Varika',
      description: 'Important centre commercial du canal, Nosy Varika est célèbre pour son marché aux poissons et ses festivités traditionnelles. Le village offre une vue imprenable sur le canal.',
      coordinates: [-20.5833, 48.5333],
      imageUrl: nosy_varika
    },
    {
      id: 'ambahy',
      name: 'Ambahy',
      description: 'Petit village traditionnel où vous pourrez observer les pêcheurs locaux et leurs techniques ancestrales. Les couchers de soleil y sont particulièrement spectaculaires.',
      coordinates: [-20.2833, 48.6333],
      imageUrl: ambahy
    },
    {
      id: 'vatomandry',
      name: 'Vatomandry',
      description: 'Ville historique reconnue pour ses belles plages et son architecture traditionnelle. Un lieu où la culture malgache se mêle harmonieusement aux influences coloniales.',
      coordinates: [-19.3333, 48.9833],
      imageUrl: vatomandry
    },
    {
      id: 'manambato',
      name: 'Manambato',
      description: 'Charmant village lacustre niché entre le canal et l\'océan. Réputé pour ses lacs d\'eau douce et ses paysages exceptionnels, c\'est un véritable paradis pour les amateurs de nature.',
      coordinates: [-18.9167, 49.0500],
      imageUrl: manambato
    },
    {
      id: 'mahanoro',
      name: 'Mahanoro',
      description: "Point final du trajet, Mahanoro est une ville côtière dynamique connue pour ses plages de sable noir et son phare historique. Le mélange des eaux du canal et de l'océan crée un spectacle unique.",
      coordinates: [-19.9167, 48.8000],
      imageUrl: mahanoro
    }
  ];

  useEffect(() => {
    setSelectedLocation(locations[0]);
  }, []);

  // Ligne du Canal des Pangalanes
  const canalPath = locations.map(location => location.coordinates);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Le Canal des Pangalanes : Une Aventure Unique
          </h2>
          <p className="text-xl text-gray-600">
            Explorez l'un des plus longs canaux artificiels du monde, une merveille d'ingénierie qui relie les lagunes côtières de Madagascar
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Liste des villages */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Navigation className="w-5 h-5 mr-2 text-yellow-600"/>
              Villages étapes
            </h3>
            <div className="space-y-2">
              {locations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => setSelectedLocation(location)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                    selectedLocation?.id === location.id
                      ? 'bg-yellow-500 text-white'
                      : 'hover:bg-yellow-50'
                  }`}
                >
                  {location.name}
                </button>
              ))}
            </div>
          </div>

          {/* Carte Leaflet */}
          <div className="relative bg-gray-50 rounded-2xl p-4 h-[600px]">
            <MapContainer 
              center={[-20.5833, 48.5333]} 
              zoom={7} 
              className="w-full h-full rounded-xl"
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              />
              
              {/* Tracé du Canal */}
              <Polyline
                positions={canalPath}
                pathOptions={{ color: 'blue', weight: 3, dashArray: '5, 10' }}
              />
              
              {/* Marqueurs des villages */}
              {locations.map((location) => (
                <Marker
                  key={location.id}
                  position={location.coordinates}
                  eventHandlers={{
                    click: () => setSelectedLocation(location),
                  }}
                >
                  <Popup>
                    <h4 className="font-bold">{location.name}</h4>
                    <p className="text-sm">{location.description.substring(0, 100)}...</p>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          {/* Informations sur le lieu sélectionné */}
          <div className="bg-gray-50 rounded-2xl p-8">
            {selectedLocation ? (
              <div className="space-y-6">
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <img
                    src={selectedLocation.imageUrl}
                    alt={selectedLocation.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  {selectedLocation.name}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {selectedLocation.description}
                </p>
                <div className="text-sm text-gray-500">
                  Coordonnées : {selectedLocation.coordinates[0]}, {selectedLocation.coordinates[1]}
                </div>
                <a
                  href={`/destinations/${selectedLocation.id}`}
                  className="inline-flex items-center text-yellow-600 font-medium hover:text-yellow-700"
                >
                  Explorer ce lieu
                  <Info className="w-4 h-4 ml-2"/>
                </a>
              </div>
            ) : (
              <div className="text-center py-12">
                <Map className="w-16 h-16 mx-auto text-gray-400 mb-4"/>
                <p className="text-lg text-gray-600">
                  Sélectionnez un lieu sur la carte pour découvrir ses secrets
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Informations pratiques */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Durée conseillée",
              description: "5-6 jours pour profiter pleinement de chaque étape"
            },
            {
              title: "Meilleure période",
              description: "D'avril à décembre, hors saison cyclonique"
            },
            {
              title: "Transport",
              description: "Bateau traditionnel ou vedette rapide disponible"
            }
          ].map((info, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <h4 className="text-xl font-semibold mb-2">{info.title}</h4>
              <p className="text-gray-600">{info.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PangalanesSection;