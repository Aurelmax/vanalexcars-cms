import type { CollectionConfig } from 'payload'

export const Vehicles: CollectionConfig = {
  slug: 'vehicles',
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  admin: {
    useAsTitle: 'title',
    description: 'Gestion des véhicules importés',
  },
  fields: [
    // Informations de base
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Titre complet du véhicule',
      },
    },
    {
      name: 'brand',
      type: 'select',
      required: true,
      options: [
        { label: 'Audi', value: 'audi' },
        { label: 'BMW', value: 'bmw' },
        { label: 'Mercedes', value: 'mercedes' },
        { label: 'Porsche', value: 'porsche' },
        { label: 'Volkswagen', value: 'volkswagen' },
        { label: 'MINI', value: 'mini' },
        { label: 'Autre', value: 'other' },
      ],
      admin: {
        description: 'Marque du véhicule',
      },
    },
    {
      name: 'model',
      type: 'text',
      admin: {
        description: 'Modèle du véhicule',
      },
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'SUV', value: 'suv' },
        { label: 'Berline', value: 'berline' },
        { label: 'Coupé', value: 'coupe' },
        { label: 'Break', value: 'break' },
        { label: 'Monospace', value: 'monospace' },
        { label: 'Cabriolet', value: 'cabriolet' },
        { label: 'Autre', value: 'other' },
      ],
      admin: {
        description: 'Catégorie du véhicule',
      },
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      admin: {
        description: 'Prix en euros',
      },
    },
    {
      name: 'year',
      type: 'number',
      required: true,
      admin: {
        description: 'Année de mise en circulation',
      },
    },
    {
      name: 'mileage',
      type: 'number',
      required: true,
      admin: {
        description: 'Kilométrage',
      },
    },
    {
      name: 'doors',
      type: 'number',
      admin: {
        description: 'Nombre de portes',
      },
    },
    {
      name: 'seats',
      type: 'number',
      admin: {
        description: 'Nombre de places',
      },
    },
    {
      name: 'bodyType',
      type: 'select',
      options: [
        { label: 'Berline', value: 'sedan' },
        { label: 'Break', value: 'wagon' },
        { label: 'SUV', value: 'suv' },
        { label: 'Coupé', value: 'coupe' },
        { label: 'Cabriolet', value: 'convertible' },
        { label: 'Monospace', value: 'van' },
        { label: 'Sportback', value: 'sportback' },
        { label: 'Touring', value: 'touring' },
        { label: 'Autre', value: 'other' },
      ],
      admin: {
        description: 'Type de carrosserie',
      },
    },
    {
      name: 'fuel',
      type: 'select',
      required: true,
      options: [
        { label: 'Essence', value: 'essence' },
        { label: 'Diesel', value: 'diesel' },
        { label: 'Électrique', value: 'electric' },
        { label: 'Hybride', value: 'hybrid' },
        { label: 'Hybride rechargeable', value: 'plugin-hybrid' },
        { label: 'Autre', value: 'other' },
      ],
      admin: {
        description: 'Type de carburant',
      },
    },
    {
      name: 'transmission',
      type: 'select',
      required: true,
      options: [
        { label: 'Manuelle', value: 'manual' },
        { label: 'Automatique', value: 'automatic' },
        { label: 'Autre', value: 'other' },
      ],
      admin: {
        description: 'Type de transmission',
      },
    },
    {
      name: 'location',
      type: 'text',
      defaultValue: 'Allemagne',
      admin: {
        description: 'Localisation du véhicule',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Description détaillée',
      },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'active',
      required: true,
      options: [
        { label: 'Actif', value: 'active' },
        { label: 'Vendu', value: 'sold' },
        { label: 'Réservé', value: 'reserved' },
      ],
      admin: {
        description: 'Statut du véhicule',
      },
    },

    // Couleurs
    {
      name: 'exteriorColor',
      type: 'text',
      admin: {
        description: 'Couleur extérieure',
      },
    },
    {
      name: 'interiorColor',
      type: 'text',
      admin: {
        description: 'Couleur intérieure / Sellerie',
      },
    },

    // Spécifications techniques
    {
      name: 'specifications',
      type: 'group',
      label: 'Spécifications techniques',
      fields: [
        {
          name: 'engine',
          type: 'text',
          admin: {
            description: 'Type de moteur (ex: 2.0 TDI, 320i)',
          },
        },
        {
          name: 'power',
          type: 'text',
          admin: {
            description: 'Puissance (ex: 192 ch)',
          },
        },
        {
          name: 'powerKw',
          type: 'number',
          admin: {
            description: 'Puissance en kW',
          },
        },
        {
          name: 'powerHp',
          type: 'number',
          admin: {
            description: 'Puissance en chevaux',
          },
        },
        {
          name: 'consumption',
          type: 'text',
          admin: {
            description: 'Consommation (ex: 6.5 L/100km)',
          },
        },
        {
          name: 'acceleration',
          type: 'text',
          admin: {
            description: '0-100 km/h (ex: 7.2s)',
          },
        },
        {
          name: 'co2',
          type: 'text',
          admin: {
            description: 'Émissions CO2 (g/km)',
          },
        },
      ],
    },

    // Équipements
    {
      name: 'features',
      type: 'array',
      label: 'Équipements',
      admin: {
        description: 'Liste des équipements du véhicule',
      },
      fields: [
        {
          name: 'feature',
          type: 'text',
          required: true,
        },
      ],
    },

    // Métadonnées de scraping (pour gestion des doublons)
    {
      name: 'externalId',
      type: 'text',
      unique: true,
      index: true,
      admin: {
        description: 'ID externe du véhicule (ImporteMoi, AutoScout24, etc.)',
        position: 'sidebar',
      },
    },
    {
      name: 'externalReference',
      type: 'text',
      unique: true,
      index: true,
      admin: {
        description: 'Référence externe (ex: IMP-5474774)',
        position: 'sidebar',
      },
    },
    {
      name: 'sourceUrl',
      type: 'text',
      admin: {
        description: 'URL de l\'annonce source',
        position: 'sidebar',
      },
    },
    {
      name: 'sourcePlatform',
      type: 'text',
      admin: {
        description: 'Plateforme source (importemoi.fr, autoscout24.de, etc.)',
        position: 'sidebar',
      },
    },
    {
      name: 'publishedDate',
      type: 'text',
      admin: {
        description: 'Date de publication sur la plateforme source',
        position: 'sidebar',
      },
    },
    {
      name: 'lastScrapedAt',
      type: 'date',
      admin: {
        description: 'Date de la dernière mise à jour par le scraper (pour détection véhicules obsolètes)',
        position: 'sidebar',
      },
    },
    {
      name: 'imageUrls',
      type: 'array',
      label: 'URLs des Images',
      admin: {
        description: 'URLs des images du véhicule (générées depuis ImporteMoi)',
      },
      fields: [
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
