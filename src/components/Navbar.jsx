import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  
  const languages = [
    { code: 'fr', label: 'Français' },
    { code: 'en', label: 'English' },
    { code: 'mg', label: 'Malagasy' }
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const menuItems = [
    { to: "/", label: "Accueil" },
    { to: "/tours", label: "Circuits" },
    { to: "/location-de-voitures", label: "Location de Voitures" },
    { to: "/apropos", label: "À Propos" },
    { to: "/contact", label: "Contact" },
    { to: "/faq", label: "FAQ" }
  ];

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsLanguageOpen(false);
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Navigation principale">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3" aria-label="Accueil Mada Circuits">
              <img 
                src="/api/placeholder/48/48" 
                alt="Logo Mada Circuits"
                className="h-12 w-auto"
                width="48"
                height="48"
              />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Mada Circuits
              </h1>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="text-gray-700 hover:text-yellow-500 transition duration-300 font-medium"
              >
                {item.label}
              </Link>
            ))}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-yellow-500 transition duration-300 font-medium"
                aria-expanded={isLanguageOpen}
                aria-haspopup="true"
              >
                <span>{selectedLanguage.label}</span>
                <ChevronDown size={20} />
              </button>
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => handleLanguageSelect(language)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-500"
                        role="menuitem"
                      >
                        {language.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-yellow-500 transition-colors"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-yellow-50 hover:text-yellow-500 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-3 py-2">
              <div className="space-y-1">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => {
                      handleLanguageSelect(language);
                      setIsOpen(false);
                    }}
                    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                      selectedLanguage.code === language.code
                        ? "text-yellow-500 bg-yellow-50"
                        : "text-gray-700 hover:bg-yellow-50 hover:text-yellow-500"
                    } transition duration-300`}
                  >
                    {language.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;