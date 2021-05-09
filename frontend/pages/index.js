import sanityClient from "../sanityClient";

import CategoryGrid from '../components/CategoryGrid/CategoryGrid';
import Layout from '../components/Layout/Layout';

export async function getStaticProps() {
  const content = await sanityClient.fetch(`*[_type== 'category' && displayOnFrontPage == true]{
    _id, slug, title, parentCategories
  }`)

  // const ct = data.reduce((acc, current) =>  {
  //   const type = current._type;

  //   if (!Array.isArray(acc[type])) {
  //     acc[type] = [];
  //   }
  //   acc[type].push(current);

  //   return acc;
  // }, {})

  return {
    props: {
      content 
    }
  }
}

export default function Home({ content }) {
  return (
    <Layout>
      <CategoryGrid categories={content}/>
    </Layout>
  )
}
