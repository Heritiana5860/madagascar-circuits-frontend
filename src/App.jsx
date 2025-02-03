import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/landing/Landing';
import CircuitPangalanes from './pages/Tours/CircuitPangalanes';
import LoadingSpinner from './components/LoadSpinner';
import CarRentals from './pages/carRentals/CarRentals';
import Contact from './pages/Contact/Contact';
import FAQ from './pages/FAQ/Faq';
import Apropos from './pages/Apropos/Apropos';



const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading && <LoadingSpinner />}
      <div className={`transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/tours" element={<CircuitPangalanes />} />
              <Route path="/location-de-voitures" element={<CarRentals />} />
              <Route path='/apropos'  element={<Apropos />}/>
              <Route path='/contact'  element={<Contact />}/>
              <Route path='/faq'  element={<FAQ />}/>
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;