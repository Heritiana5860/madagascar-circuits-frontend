
const routePoints = [
  { 
    id: 1, 
    name: "Toamasina (Tamatave)", 
    coordinates: [-18.1498, 49.4077],
    description: "Point de départ - Grande ville portuaire",
    activities: ["Visite du port", "Marché central", "Plages"],
    tourist_sites: [
      {
        name: "Parc botanique et zoologique de Toamasina",
        image: "image1.jpg"
      },
      {
        name: "Cathédrale Saint-Vincent", 
        image: "image2.jpg"
      },
      {
        name: "Plage de Chaouène",
        image: "image4x4.jpg"
      },
      {
        name: "Musée régional de la Côte Est",
        image: "image1.jpg"
      },
      {
        name: "Point de départ du canal des Pangalanes",
        image: "image2"
      }
    ],
    pangalanes_sites: [
      "Embarcadère principal des Pangalanes",
      "Centre d'information touristique des Pangalanes",
      "Début du circuit de navigation"
    ]
  },
  { 
    id: 2, 
    name: "Vatomandry", 
    coordinates: [-19.3500, 48.9500],
    description: "Ville côtière pittoresque",
    activities: ["Pêche", "Randonnées", "Observation de la faune"],
    tourist_sites: [
      {
        name: "Cascade de Vatomandry", 
        image: "/api/placeholder/400/300?text=Cascade+Vatomandry"
      },
      {
        name: "Marché local traditionnel", 
        image: "/api/placeholder/400/300?text=Marché+Local"
      },
      {
        name: "Plages sauvages",
        image: "/api/placeholder/400/300?text=Plages+Sauvages"
      },
      {
        name: "Forêt tropicale environnante",
        image: "/api/placeholder/400/300?text=Forêt+Tropicale"
      }
    ],
    pangalanes_sites: [
      "Point de traversée des Pangalanes",
      "Zones de navigation traditionnelle",
      "Observation des écosystèmes de canal"
    ]
  },
  { 
    id: 3, 
    name: "Manambato", 
    coordinates: [-19.2833, 48.8500],
    description: "Village au cœur des Pangalanes",
    activities: ["Navigation", "Écotourisme", "Artisanat"],
    tourist_sites: [
      {
        name: "Circuit des Pangalanes", 
        image: "/api/placeholder/400/300?text=Circuit+Pangalanes"
      },
      {
        name: "Village traditionnel", 
        image: "/api/placeholder/400/300?text=Village+Traditionnel"
      },
      {
        name: "Point de départ pour croisières",
        image: "/api/placeholder/400/300?text=Départ+Croisières"
      },
      {
        name: "Observation des oiseaux",
        image: "/api/placeholder/400/300?text=Observation+Oiseaux"
      }
    ],
    pangalanes_sites: [
      "Centre névralgique des Pangalanes",
      "Principale zone de croisière",
      "Musée local des traditions de navigation",
      "Points d'observation de la biodiversité lacustre"
    ]
  },
  { 
    id: 4, 
    name: "Mahanoro", 
    coordinates: [-19.4500, 48.7500],
    description: "Petit village côtier",
    activities: ["Pêche", "Culture locale", "Nature"],
    tourist_sites: [
      {
        name: "Plage de Mahanoro", 
        image: "/api/placeholder/400/300?text=Plage+Mahanoro"
      },
      {
        name: "Marché artisanal", 
        image: "/api/placeholder/400/300?text=Marché+Artisanal"
      },
      {
        name: "Sites de pêche traditionnelle",
        image: "/api/placeholder/400/300?text=Sites+Pêche"
      },
      {
        name: "Forêts côtières",
        image: "/api/placeholder/400/300?text=Forêts+Côtières"
      }
    ],
    pangalanes_sites: [
      "Zones de connexion des canaux",
      "Sites de navigation traditionnelle",
      "Points d'observation écologique"
    ]
  },
  { 
    id: 5, 
    name: "Nosy Varika", 
    coordinates: [-19.5604, 48.5289],
    description: "Petite ville côtière",
    activities: ["Marché local", "Observation vie rurale", "Paysages"],
    tourist_sites: [
      {
        name: "Port de pêche traditionnel", 
        image: "/api/placeholder/400/300?text=Port+Pêche"
      },
      {
        name: "Vue panoramique sur l'océan", 
        image: "/api/placeholder/400/300?text=Vue+Océan"
      },
      {
        name: "Sites de mangrove",
        image: "/api/placeholder/400/300?text=Sites+Mangrove"
      },
      {
        name: "Artisanat local",
        image: "/api/placeholder/400/300?text=Artisanat+Local"
      }
    ],
    pangalanes_sites: [
      "Jonction principale des Pangalanes",
      "Sites de navigation entre lacs et océan",
      "Zones de biodiversité unique"
    ]
  },
  { 
    id: 6, 
    name: "Ambaha", 
    coordinates: [-19.8000, 48.4000],
    description: "Zone rurale côtière",
    activities: ["Nature", "Culture locale", "Randonnée"],
    tourist_sites: [
      {
        name: "Points de vue sur la côte", 
        image: "/api/placeholder/400/300?text=Points+Vue+Côte"
      },
      {
        name: "Villages traditionnels", 
        image: "/api/placeholder/400/300?text=Villages+Traditionnels"
      },
      {
        name: "Sites naturels préservés",
        image: "/api/placeholder/400/300?text=Sites+Naturels"
      },
      {
        name: "Zones de pêche",
        image: "/api/placeholder/400/300?text=Zones+Pêche"
      }
    ],
    pangalanes_sites: [
      "Portions secondaires des canaux",
      "Sites de navigation historique",
      "Points d'observation écologique"
    ]
  },
  { 
    id: 7, 
    name: "Mananjary", 
    coordinates: [-20.3333, 48.2000],
    description: "Destination finale - Ville côtière du sud-est",
    activities: ["Port", "Cuisine locale", "Artisanat"],
    tourist_sites: [
      {
        name: "Phare de Mananjary", 
        image: "/api/placeholder/400/300?text=Phare+Mananjary"
      },
      {
        name: "Marché central", 
        image: "/api/placeholder/400/300?text=Marché+Central"
      },
      {
        name: "Plage de Mananjary",
        image: "/api/placeholder/400/300?text=Plage+Mananjary"
      },
      {
        name: "Sites historiques coloniaux",
        image: "/api/placeholder/400/300?text=Sites+Historiques"
      }
    ],
    pangalanes_sites: [
      "Terminus sud des Pangalanes",
      "Point de confluence océan-canaux",
      "Site historique de navigation"
    ]
  }
];

export default routePoints;