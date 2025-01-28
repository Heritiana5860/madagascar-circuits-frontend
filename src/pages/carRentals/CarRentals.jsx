/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Car, Search, ChevronLeft, ChevronRight, Star, X } from 'lucide-react';
import PaymentInterface from './PaymentInterface';

const CarRentals = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchSticky, setIsSearchSticky] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);

    // Categories
    const categories = [
        { id: 'all', name: 'Tous les véhicules', icon: Car },
        { id: '4x4', name: '4x4', icon: Car },
        { id: 'van', name: 'Van', icon: Users },
        { id: 'luxury', name: 'Luxe', icon: Star }
    ];

    // Car data
    const allCars = [
        {
            id: 1,
            name: "Land Cruiser V8",
            category: "4x4",
            price: 150,
            image: "/api/placeholder/800/500",
            rating: 4.9,
            reviews: 124,
            capacity: 7,
            features: ["7 places", "Automatique", "GPS", "Climatisation"],
            description: "Parfait pour les aventures tout-terrain et le confort absolu"
        },
        {
            id: 2,
            name: "Mercedes Sprinter",
            category: "van",
            price: 180,
            image: "/api/placeholder/800/500",
            rating: 4.8,
            reviews: 98,
            capacity: 12,
            features: ["12 places", "Automatique", "WiFi", "Climatisation"],
            description: "Idéal pour les groupes et les longs trajets confortables"
        },
        {
            id: 3,
            name: "Bentley Continental",
            category: "luxury",
            price: 300,
            image: "/api/placeholder/800/500",
            rating: 5.0,
            reviews: 56,
            capacity: 4,
            features: ["4 places", "Automatique", "Cuir", "Massage"],
            description: "L'excellence automobile pour vos déplacements"
        }
    ];

    // Filter cars
    const filteredCars = allCars.filter(car =>
        (selectedCategory === 'all' || car.category === selectedCategory) &&
        (searchQuery === '' || car.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    // Slider navigation
    const nextSlide = () => {
        setActiveSlide((prev) => (prev + 1) % filteredCars.length);
    };

    const prevSlide = () => {
        setActiveSlide((prev) => (prev - 1 + filteredCars.length) % filteredCars.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setIsSearchSticky(offset > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            {/* Floating Search Button */}
            <button
                onClick={() => setShowSearch(true)}
                className={`fixed right-6 top-24 z-50 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 ${showSearch ? 'opacity-0' : 'opacity-100'
                    }`}
            >
                <Search className="w-6 h-6" />
            </button>

            {/* Full-Screen Search Overlay */}
            {showSearch && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl w-full max-w-4xl p-6 relative">
                        <button
                            onClick={() => setShowSearch(false)}
                            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold">Rechercher votre véhicule idéal</h2>

                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Rechercher un véhicule..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="relative group">
                                    <MapPin className="absolute left-3 top-3 text-gray-400 group-hover:text-orange-500 transition-colors" />
                                    <select className="w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none bg-white">
                                        <option>Choisir un lieu</option>
                                        <option>Antananarivo</option>
                                        <option>Nosy Be</option>
                                        <option>Toamasina</option>
                                    </select>
                                </div>
                                <div className="relative group">
                                    <Calendar className="absolute left-3 top-3 text-gray-400 group-hover:text-orange-500 transition-colors" />
                                    <input type="date" className="w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500" />
                                </div>
                                <div className="relative group">
                                    <Users className="absolute left-3 top-3 text-gray-400 group-hover:text-orange-500 transition-colors" />
                                    <select className="w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none bg-white">
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(num => (
                                            <option key={num} value={num}>{num} passager{num > 1 ? 's' : ''}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <button
                                onClick={() => setShowSearch(false)}
                                className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 rounded-xl font-medium hover:scale-105 transition-transform duration-300"
                            >
                                Rechercher
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Featured Section with Slider */}
            <div className="relative h-[70vh] mb-12 overflow-hidden">
                {filteredCars.map((car, index) => (
                    <div
                        key={car.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === activeSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                        <img
                            src={car.image}
                            alt={car.name}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center">
                            <div className="max-w-7xl mx-auto px-4 w-full">
                                <div className="max-w-xl text-white space-y-6">
                                    <h2 className="text-5xl font-bold leading-tight">{car.name}</h2>
                                    <p className="text-xl">{car.description}</p>
                                    <div className="flex items-center space-x-4">
                                        <span className="flex items-center">
                                            <Star className="text-yellow-400 w-5 h-5" />
                                            <span className="ml-1">{car.rating}</span>
                                        </span>
                                        <span>({car.reviews} avis)</span>
                                        <span className="flex items-center">
                                            <Users className="text-yellow-400 w-5 h-5 mr-1" />
                                            {car.capacity} places
                                        </span>
                                    </div>
                                    <div className="flex space-x-4">
                                        <button 
                                        onClick={() => setSelectedCar(car)}
                                        className="bg-gradient-to-r from-orange-500 to-yellow-500 px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300">
                                            Réserver maintenant
                                        </button>
                                        <button className="bg-white/20 backdrop-blur-sm px-8 py-3 rounded-full hover:bg-white/30 transition-colors duration-300">
                                            En savoir plus
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Slider Controls */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-4">
                    <button
                        onClick={prevSlide}
                        className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors duration-300"
                    >
                        <ChevronLeft className="text-white w-6 h-6" />
                    </button>
                    <div className="flex space-x-2">
                        {filteredCars.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveSlide(index)}
                                className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === activeSlide ? 'bg-orange-500' : 'bg-white/50 hover:bg-white'
                                    }`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={nextSlide}
                        className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors duration-300"
                    >
                        <ChevronRight className="text-white w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Category Filters */}
            <div className="max-w-7xl mx-auto px-4 mb-8">
                <div className="flex flex-wrap gap-4">
                    {categories.map(category => {
                        const CategoryIcon = category.icon;
                        return (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${selectedCategory === category.id
                                        ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white'
                                        : 'bg-white border hover:border-orange-500 hover:text-orange-500'
                                    }`}
                            >
                                <CategoryIcon className="w-5 h-5" />
                                <span>{category.name}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Car Grid */}
            <div className="max-w-7xl mx-auto px-4 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCars.map((car) => (
                        <div
                            key={car.id}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={car.image}
                                    alt={car.name}
                                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1 flex items-center space-x-1">
                                    <Users className="w-4 h-4 text-orange-500" />
                                    <span className="text-sm font-medium">{car.capacity}</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold">{car.name}</h3>
                                        <p className="text-gray-600">
                                            <Car className="inline-block w-4 h-4 mr-1" />
                                            {car.category}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-3xl font-bold text-orange-500">{car.price}€</p>
                                        <p className="text-gray-600">par jour</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    {car.features.map((feature, index) => (
                                        <div key={index} className="flex items-center text-gray-600">
                                            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                                <button
                                    onClick={() => setSelectedCar(car)}
                                    className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 rounded-xl font-medium hover:scale-105 transition-transform duration-300">
                                    Réserver maintenant
                                </button>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {selectedCar && (
                <PaymentInterface
                    car={selectedCar}
                    onClose={() => setSelectedCar(null)}
                    startDate={new Date()}
                    endDate={new Date(Date.now() + 24 * 60 * 60 * 1000)}
                />
            )}
        </div>
    );
};

export default CarRentals;