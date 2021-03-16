const category = {
  title: "Category",
  name: "category",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Parent Category",
      name: "parentCategories",
      type: "array",
      options: {
        layout: "tags"
      },
      of: [
        {
          title: "Kategori",
          name: "parentCategory",
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
    },
  ],
};

export default category;