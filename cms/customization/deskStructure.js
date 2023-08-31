// deskStructure.js
import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("RiP")
    .items([
      S.listItem()
        .title("Forside")
        .child(
          S.editor().schemaType("frontpage").documentId("frontpage")
        ),
      S.listItem()
        .title("Kontakt")
        .child(S.editor().schemaType("contact").documentId("contact")),
      S.listItem()
        .title("Om")
        .child(S.editor().schemaType("about").documentId("about")),

      // Add a visual divider (optional)
      S.divider(),

      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["frontpage", "contact", "about", "settings"].includes(listItem.getId())
      ),
      S.divider(),
      S.listItem()
      .title("Innstillinger")
      .child(S.editor().schemaType("settings").documentId("settings")),
    ]);
