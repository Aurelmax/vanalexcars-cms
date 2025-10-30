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
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
    },
    {
      name: 'year',
      type: 'number',
    },
    {
      name: 'mileage',
      type: 'number',
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'active',
      options: [
        { label: 'Actif', value: 'active' },
        { label: 'Vendu', value: 'sold' },
        { label: 'Réservé', value: 'reserved' },
      ],
    },
  ],
}
