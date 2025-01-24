/* eslint-disable react/no-unescaped-entities */
const CTASection = () => {
    return (
      <section className="py-16 bg-yellow-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-8">Prêt à Vivre l'Aventure ?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Réservez maintenant votre circuit des Pangalanes et partez à la découverte de l'une des plus belles régions de Madagascar
            </p>
            <button className="bg-white text-yellow-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
              Réserver ce Circuit
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default CTASection;