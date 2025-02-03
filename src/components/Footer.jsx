import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const menuItems = [
    { to: "/", label: "Accueil" },
    { to: "/tours", label: "Circuits" },
    { to: "/location-de-voitures", label: "Location de Voitures" },
    { to: "/apropos", label: "À Propos" },
    { to: "/contact", label: "Contact" },
    { to: "/faq", label: "FAQ" },
    { to: "/languages", label: "Langues" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Mada Circuits</h3>
            <p className="text-gray-300">
              Votre partenaire de confiance pour découvrir les merveilles de Madagascar.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+261 34 00 000 00</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>contact@madagascartours.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Antananarivo, Madagascar</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Liens Utiles</h3>
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.to} className="hover:text-gray-300 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
            <div className="flex gap-4">
              <Link to="#" className="hover:text-gray-300 transition-colors">
                <Facebook size={24} />
              </Link>
              <Link to="#" className="hover:text-gray-300 transition-colors">
                <Instagram size={24} />
              </Link>
              <Link to="#" className="hover:text-gray-300 transition-colors">
                <Twitter size={24} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>© {new Date().getFullYear()} Mada Circuits. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;