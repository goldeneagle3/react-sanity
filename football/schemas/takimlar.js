export default {
  name: 'takimlar',
  title: 'Takimlar',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'string',
    },
    {
      name: 'yonetim',
      title: 'Yonetim',
      type: 'string',
    },
    {
      name: 'altyapi',
      title: 'Altyapi',
      type: 'string',
    },
    {
      name: 'lastUpdated',
      title: 'Last Updated',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    
    {
      name: 'mainImage1',
      title: 'Main image 1',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'mainImage2',
      title: 'Main image 2',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'mainImage3',
      title: 'Main image 3',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD'
      }
    },
    {
      name: 'bodyOne',
      title: 'Body One',
      type: 'blockContent',
    },
    {
      name: 'bodyTwo',
      title: 'Body Two',
      type: 'blockContent',
    },
    {
      name: 'bodyThree',
      title: 'Body Three',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle'
    }
  },


}