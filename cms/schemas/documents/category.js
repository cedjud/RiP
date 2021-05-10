const category = {
  title: "Category",
  name: "category",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "The name of the category.",
      type: "string",
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The address of the category. It will be accessible at /kategorier/article-slug',
      options: {
        source: 'title',
      }
    },
    {
      name: 'description',
      title: 'Description',
      description: "A short text describing the category. Can be displayed in search or links to the category.",
      type: 'text',
    },
    {
      name: "subcategories",
      title: "Subcategories",
      type: "array",
      options: {
        layout: "tags"
      },
      of: [
        {
          title: "Subcategory",
          name: "subcategory",
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
    },
    {
      name: "displayOnFrontPage",
      title: "Visible on Front Page",
      type: "boolean",
      description: "Should this category be displayed on the front page?",
      initialValue: false
    }
  ],
};

export default category;