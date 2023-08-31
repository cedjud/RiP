// ./resolveProductionUrl.js


export default function resolveProductionUrl(document) {
  let domain = ``; 

  if (process.env.NODE_ENV === 'production') {
    domain = `https://ri-p.vercel.app`;
  } else {
    domain = `http://localhost:3000`;
  }

  let path = '';
  let slug = '';

  switch (document._type) {
    case "article":
      path = 'artikler/';
      slug = document.slug.current;
      break;

    case "category":
      path = 'kategorier/'
      slug = document.slug.current;
      break;
  
    default:
      break;
  }

  return `${domain}/api/preview?secret=${process.env.SANITY_STUDIO_PREVIEW_TOKEN}&path=${path}&slug=${slug}`
}