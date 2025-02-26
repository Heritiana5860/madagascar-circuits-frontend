import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/landing/Landing';
import CircuitPangalanes from './pages/Tours/CircuitPangalanes';
import LoadingSpinner from './components/LoadSpinner';
import CarRentals from './pages/carRentals/CarRentals';
import Contact from './pages/Contact/Contact';
import FAQ from './pages/FAQ/Faq';
import Apropos from './pages/Apropos/Apropos';
import Dashboard from './pages/backoffice/dashboard';
import './i18n/i18n';
import LoginPage from './app/login/page';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const currentPath = window.location.pathname;
  const isDashboardRoute = currentPath.startsWith('/backoffice');
  const isLoginRoute = currentPath === '/login';

  return (
    <Router>
      {loading && <LoadingSpinner />}
      
      <div className={`transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {isLoginRoute ? (
              <Routes>
                <Route path="/login" element={<LoginPage />} />
              </Routes>
  
        ) : isDashboardRoute ? (
          // Routes pour le backoffice
          <Routes>
            <Route path="/backoffice/*" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        ) : (
          // Layout pour le site principal avec Navbar et Footer
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/tours" element={<CircuitPangalanes />} />
                <Route path="/location-de-voitures" element={<CarRentals />} />
                <Route path="/apropos" element={<Apropos />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
                {/* Redirection si une route inconnue est entrée */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <Footer />
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;