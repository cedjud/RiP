import sanityClient from "../sanityClient";

import CategoryGrid from '../components/CategoryGrid/CategoryGrid';
import Layout from '../components/Layout/Layout';

export async function getStaticProps() {
  const content = await sanityClient.fetch(`*[_type== 'category' && displayOnFrontPage == true]`)

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
    <Layout 
      title="Rettigheter i Psykiatri"
      introtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique velit sed purus laoreet, vitae ultricies tellus porttitor. Donec ac sagittis quam, eu lacinia sem. Praesent venenatis accumsan eros a scelerisque. Etiam dapibus vitae diam a imperdiet. Nulla maximus luctus accumsan."
    >
      <CategoryGrid categories={content}/>
    </Layout>
  )
}
