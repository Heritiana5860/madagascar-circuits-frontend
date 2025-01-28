/* eslint-disable react/prop-types */
import { useState } from 'react';
import { X, Smartphone, Calendar, Clock, ChevronRight, ChevronLeft } from 'lucide-react';
import paymentMethods from '../../components/constants/paymentMethods';

const PaymentInterface = ({ car, onClose, startDate, endDate }) => {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [mobileOperator, setMobileOperator] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const calculateTotalDays = () => {
    if (!startDate || !endDate) return 1;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays || 1;
  };

  const totalDays = calculateTotalDays();
  const subtotal = car.price * totalDays;
  const insurance = 20 * totalDays;
  const total = subtotal + insurance;

  

  const handleBack = () => {
    if (step === 2) {
      if (mobileOperator) {
        setMobileOperator(null);
      } else {
        setStep(1);
        setPaymentMethod(null);
      }
    }
  };

  const handleSubmit = async () => {
    setIsProcessing(true);
    // Simuler un traitement de paiement
    await new Promise(resolve => setTimeout(resolve, 2000));
    setStep(3);
    setIsProcessing(false);
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl overflow-hidden relative">
        {/* Header */}
        <div className="p-6 border-b flex items-center justify-between">
          <div className="flex items-center">
            {step > 1 && step < 3 && (
              <button
                onClick={handleBack}
                className="mr-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            <h2 className="text-2xl font-bold">
              {step === 1 && "Réservation de véhicule"}
              {step === 2 && "Détails du paiement"}
              {step === 3 && "Confirmation"}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between px-6 pt-4">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className="flex items-center"
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= s ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                {s}
              </div>
              {s < 3 && (
                <div className={`w-full h-1 ${
                  step > s ? 'bg-orange-500' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 1 && (
            <div className="space-y-6">
              <div className="flex items-center space-x-4 bg-orange-50 p-4 rounded-xl">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-xl font-bold">{car.name}</h3>
                  <div className="flex items-center text-gray-600 space-x-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {totalDays} jour{totalDays > 1 ? 's' : ''}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {car.price}€/jour
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Choisir le mode de paiement</h3>
                {paymentMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <button
                      key={method.id}
                      onClick={() => {
                        setPaymentMethod(method);
                        setStep(2);
                      }}
                      className={`w-full flex items-center justify-between p-4 rounded-xl border hover:border-orange-500 transition-colors ${
                        paymentMethod?.id === method.id ? 'border-orange-500 bg-orange-50' : ''
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-orange-500" />
                        </div>
                        <div className="text-left">
                          <p className="font-medium">{method.name}</p>
                          <p className="text-sm text-gray-500">
                            {method.operators ? method.operators.map(op => op.name).join(' • ') : 
                             method.providers.join(' • ')}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Récapitulatif de la commande</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Location ({totalDays} jour{totalDays > 1 ? 's' : ''})</span>
                    <span>{subtotal}€</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Assurance</span>
                    <span>{insurance}€</span>
                  </div>
                  <div className="h-px bg-gray-200 my-2" />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>{total}€</span>
                  </div>
                </div>
              </div>

              {paymentMethod?.id === 'mobile' && !mobileOperator && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Choisir votre opérateur</h3>
                  {paymentMethod.operators.map((operator) => (
                    <button
                      key={operator.id}
                      onClick={() => setMobileOperator(operator)}
                      className="w-full flex items-center justify-between p-4 rounded-xl border hover:border-orange-500 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-lg overflow-hidden">
                          <img 
                            src={operator.image} 
                            alt={operator.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="font-medium">{operator.name}</span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </button>
                  ))}
                </div>
              )}

              {paymentMethod?.id === 'mobile' && mobileOperator && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    Paiement via {mobileOperator.name}
                  </h3>
                  <div className="space-y-4">
                    <div className="relative">
                      <Smartphone className="absolute left-3 top-3 text-gray-400" />
                      <input
                        type="tel"
                        placeholder="Votre numéro"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    <p className="text-sm text-gray-600">
                      Vous allez recevoir un code de confirmation par SMS pour valider votre paiement
                    </p>
                  </div>
                </div>
              )}

              {paymentMethod?.id === 'bank' && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Informations de carte bancaire</h3>
                  <input
                    type="text"
                    placeholder="Numéro de carte"
                    className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <input
                      type="text"
                      placeholder="CVC"
                      className="px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>
              )}

              {paymentMethod?.id === 'transfer' && (
                <div className="bg-gray-50 p-4 rounded-xl space-y-2">
                  <p className="font-medium">Coordonnées bancaires:</p>
                  <p>IBAN: MD12 BANK 3456 7890 1234 5678</p>
                  <p>BIC: BANKMDXX</p>
                </div>
              )}

              {((paymentMethod?.id === 'mobile' && mobileOperator) || 
                paymentMethod?.id === 'bank' || 
                paymentMethod?.id === 'transfer') && (
                <button
                  onClick={handleSubmit}
                  disabled={isProcessing}
                  className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-4 rounded-xl font-medium hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:hover:scale-100"
                >
                  {isProcessing ? 'Traitement en cours...' : 'Confirmer le paiement'}
                </button>
              )}
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Réservation confirmée !</h3>
              <p className="text-gray-600">
                Un email de confirmation a été envoyé à votre adresse email.
                {paymentMethod?.id === 'mobile' && mobileOperator && (
                  <span> Vérifiez également vos SMS pour le reçu de paiement {mobileOperator.name}.</span>
                )}
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-8 py-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                Fermer
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentInterface;