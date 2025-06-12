import { CollectionConfig } from 'payload/types'

const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "filename" },
  upload: {
    mimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp'],
    disableLocalStorage: false,
    staticDir: '/var/www/html/media'
  // staticDir: 'C:/Users/chriss/Desktop/DEV/gesineGrundmann/frontend/public/media'

  },
  fields: [

// {
//     name: 'orderOfImages',
//     type: 'number',
//     required: false,
// },

  ],
};

export default Media;