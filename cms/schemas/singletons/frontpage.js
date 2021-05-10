const frontpage = {
  title: "Forside",
  name: "frontpage",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: 'Intro', 
      name: 'body',
      type: 'array', 
      of: [{type: 'block'}]
    }
  ],
};

export default frontpage;
