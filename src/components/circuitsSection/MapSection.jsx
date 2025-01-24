import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Waves, ChevronLeft, ChevronRight } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import circuitPoints from '../constants/circuitPoints';

function MapSection() {
    const [selectedPoint, setSelectedPoint] = useState(circuitPoints[0]);
    const [carouselIndex, setCarouselIndex] = useState(0);
    const [hoveredMarker, setHoveredMarker] = useState(null);
    const [activeTab, setActiveTab] = useState('sites');

    useEffect(() => {
        if (selectedPoint && selectedPoint.tourist_sites) {
            const timer = setInterval(() => {
                setCarouselIndex((prev) => 
                    (prev + 1) % selectedPoint.tourist_sites.length
                );
            }, 3000);
        
            return () => clearInterval(timer);
        }
    }, [selectedPoint]);

    const getCustomIcon = (point) => {
        const baseSize = hoveredMarker === point.id ? 48 : 32;
        return new L.Icon({
            iconUrl: `data:image/svg+xml;base64,${btoa(`
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${baseSize}" height="${baseSize}">
                    <circle cx="12" cy="12" r="10" fill="#eab308" stroke="white" stroke-width="2"/>
                    <circle cx="12" cy="12" r="5" fill="white"/>
                </svg>
            `)}`,
            iconSize: [baseSize, baseSize],
            iconAnchor: [baseSize/2, baseSize/2],
            popupAnchor: [0, -baseSize/2]
        });
    };

    const handleMarkerHover = (point) => {
        setHoveredMarker(point.id);
    };

    const handleMarkerLeave = () => {
        setHoveredMarker(null);
    };

    return (
        <div>
            <section className="py-16 bg-gray-50 relative">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-12 text-center">Parcours du Circuit</h2>
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 relative">
                            <div className="bg-white rounded-2xl shadow-xl overflow-hidden" style={{ height: '600px', position: 'relative', zIndex: 10 }}>
                                <MapContainer
                                    center={[-18.3498, 49.0077]}
                                    zoom={9}
                                    style={{ height: '100%', width: '100%' }}
                                    className="z-10"
                                >
                                    <TileLayer
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    />
                                    <Polyline
                                        positions={circuitPoints.map(point => point.coordinates)}
                                        color="#eab308"
                                        weight={4}
                                        opacity={0.8}
                                    />
                                    {circuitPoints.map((point) => (
                                        <Marker
                                            key={point.id}
                                            position={point.coordinates}
                                            icon={getCustomIcon(point)}
                                            eventHandlers={{
                                                click: () => {
                                                    setSelectedPoint(point);
                                                    setCarouselIndex(0);
                                                },
                                                mouseover: () => handleMarkerHover(point),
                                                mouseout: handleMarkerLeave
                                            }}
                                        >
                                            <Popup className="text-base font-semibold">
                                                <div className="text-center p-2">
                                                    <h3 className="font-bold text-lg mb-2">{point.name}</h3>
                                                    <p className="text-sm">{point.description}</p>
                                                </div>
                                            </Popup>
                                        </Marker>
                                    ))}
                                </MapContainer>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-6">
                            {selectedPoint ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="space-y-6"
                                >
                                    {/* Tab Navigation */}
                                    <div className="flex border-b mb-4">
                                        <button 
                                            onClick={() => setActiveTab('sites')}
                                            className={`flex-1 py-2 text-center ${activeTab === 'sites' ? 'border-b-2 border-yellow-500 font-bold' : 'text-gray-500'}`}
                                        >
                                            Sites Touristiques
                                        </button>
                                        <button 
                                            onClick={() => setActiveTab('pangalanes')}
                                            className={`flex-1 py-2 text-center ${activeTab === 'pangalanes' ? 'border-b-2 border-yellow-500 font-bold' : 'text-gray-500'}`}
                                        >
                                            Sites Pangalanes
                                        </button>
                                    </div>

                                    {activeTab === 'sites' ? (
                                        <>
                                            {selectedPoint.tourist_sites && selectedPoint.tourist_sites.length > 0 ? (
                                                <div className="relative">
                                                    <AnimatePresence mode="wait">
                                                        <motion.div
                                                            key={carouselIndex}
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            exit={{ opacity: 0 }}
                                                            transition={{ duration: 0.5 }}
                                                            className="w-full h-48 rounded-lg overflow-hidden"
                                                        >
                                                            <img 
                                                                src={selectedPoint.tourist_sites[carouselIndex].image} 
                                                                alt={selectedPoint.tourist_sites[carouselIndex].name}
                                                                className="w-full h-full object-cover"
                                                            />
                                                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
                                                                {selectedPoint.tourist_sites[carouselIndex].name}
                                                            </div>
                                                        </motion.div>
                                                    </AnimatePresence>

                                                    {selectedPoint.tourist_sites.length > 1 && (
                                                        <>
                                                            <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-2">
                                                                <button 
                                                                    onClick={() => setCarouselIndex((prev) => 
                                                                        (prev - 1 + selectedPoint.tourist_sites.length) % 
                                                                        selectedPoint.tourist_sites.length
                                                                    )}
                                                                    className="bg-yellow-500 text-white p-2 rounded-full"
                                                                >
                                                                    <ChevronLeft />
                                                                </button>
                                                                <button 
                                                                    onClick={() => setCarouselIndex((prev) => 
                                                                        (prev + 1) % selectedPoint.tourist_sites.length
                                                                    )}
                                                                    className="bg-yellow-500 text-white p-2 rounded-full"
                                                                >
                                                                    <ChevronRight />
                                                                </button>
                                                            </div>
                                                            
                                                            <div className="flex justify-center mt-2">
                                                                {selectedPoint.tourist_sites.map((_, index) => (
                                                                    <span 
                                                                        key={index} 
                                                                        className={`h-2 w-2 rounded-full mx-1 ${
                                                                            index === carouselIndex 
                                                                            ? 'bg-yellow-500' 
                                                                            : 'bg-gray-300'
                                                                        }`}
                                                                    />
                                                                ))}
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            ) : (
                                                <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                                                    <p className="text-gray-600">Pas de sites touristiques disponibles</p>
                                                </div>
                                            )}

                                            <div>
                                                <h3 className="text-2xl font-bold mb-2">{selectedPoint.name}</h3>
                                                <p className="text-gray-600 mb-4">{selectedPoint.description}</p>
                                                <div className="space-y-2">
                                                    <h4 className="font-semibold">Activités:</h4>
                                                    <ul className="space-y-2">
                                                        {selectedPoint.activities.map((activity, index) => (
                                                            <li key={index} className="flex items-center gap-2">
                                                                <Coffee className="w-4 h-4 text-yellow-600" />
                                                                <span>{activity}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="space-y-4">
                                            <h4 className="text-xl font-bold mb-2">Sites des Pangalanes</h4>
                                            {selectedPoint.pangalanes_sites && selectedPoint.pangalanes_sites.length > 0 ? (
                                                <ul className="space-y-3">
                                                    {selectedPoint.pangalanes_sites.map((site, index) => (
                                                        <li key={index} className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg">
                                                            <Waves className="w-5 h-5 text-blue-500" />
                                                            <span className="text-gray-700">{site}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className="text-gray-600 text-center">Aucun site des Pangalanes disponible</p>
                                            )}
                                        </div>
                                    )}
                                </motion.div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MapSection;