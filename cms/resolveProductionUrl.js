// ./resolveProductionUrl.js


export default function resolveProductionUrl(document) {
  let domain = ``; 

  if (process.env.SANITY_ACTIVE_ENV === 'production') {
    domain = `https://ri-p.vercel.app`;
  } else {
    domain = `http://localhost:3000`;
  }

  let path = ''

  switch (document._type) {
    case "article":
      path = 'artikler/'
      break;

    case "category":
      path = 'kategorier/'
  
    default:
      break;
  }

  return `${domain}/api/preview?secret=${process.env.SANITY_STUDIO_PREVIEW_TOKEN}&path=${path}&slug=${document.slug.current}`
}