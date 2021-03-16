const article = {
  title: "Artikkel",
  name: "article",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      }
    },
    {
      title: "Kategorier",
      name: "categories",
      type: "array",
      options: {
        layout: "tags"
      },
      of: [
        {
          title: "Kategori",
          name: "category",
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
    },
    {
      title: 'Innhold', 
      name: 'body',
      type: 'array', 
      of: [{type: 'block'}]
    }
  ],
};

export default article;
