// deskStructure.js
import S from "@sanity/desk-tool/structure-builder";
 
export default () =>
  S.list()
    .title('Innhold')
    .items([
      S.listItem()
        .title('Forside')
        .child(
          S.editor()
            .schemaType('frontpage')
            .documentId('frontpage')
        ),
      // Add a visual divider (optional)
      S.divider(),
      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems()
        .filter(listItem => !['frontpage'].includes(listItem.getId()))
    ])
    