const contact = {
  title: "Kontakt",
  name: "contact",
  type: "document",
  // __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
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
      title: 'Intro', 
      name: 'body',
      type: 'array', 
      of: [{type: 'block'}]
    }
  ],
};

export default contact;
