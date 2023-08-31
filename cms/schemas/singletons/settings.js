const settings = {
  title: "Innstillinger",
  name: "settings",
  type: "document",
  // __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      title: "Site title",
      name: "pageTitle",
      type: "string",
    },
    {
      title: "Site description",
      name: "pageDescription",
      type: "text",
    },
  ],
};

export default settings;
