import { Building2, CreditCard, Smartphone } from "lucide-react";

const paymentMethods = [
    {
      id: 'mobile',
      name: 'Mobile Money',
      icon: Smartphone,
      operators: [
        { 
          id: 'mvola',
          name: 'MVola',
          color: '#FF6B00',
          image: '/mvola.png'
        },
        {
          id: 'orange',
          name: 'Orange Money',
          color: '#FF7900',
          image: '/orange.png'
        },
        {
          id: 'airtel',
          name: 'Airtel Money',
          color: '#FF0000',
          image: '/airtel.png'
        }
      ]
    },
    {
      id: 'bank',
      name: 'Carte Bancaire',
      icon: CreditCard,
      providers: ['Visa', 'Mastercard']
    },
    {
      id: 'transfer',
      name: 'Virement Bancaire',
      icon: Building2,
      providers: ['BNI', 'BOA', 'BFV-SG']
    }
  ];

  export default paymentMethods;