import { CollectionConfig } from 'payload/types'

const artObjects: CollectionConfig = {
  slug: 'artobjects',
  access: {
    read: () => true,
  },

  fields: [
    {name: "images",
      type: "array",
      maxRows: 5,
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media"
        }
      ]
    },

{
    name: 'description',
    type: 'text',
    required: true,
},
{
    name: 'vorangestellt',
    type: 'checkbox',
    required: true,
},
{
  name: 'orderOfObjects',
  type: 'number'
}
  ],
}

export default artObjects