import sanityClient from "../../sanityClient";

import ContentList from '../../components/ContentList/ContentList';
import Layout from '../../components/Layout/Layout';

export async function getStaticProps() {
  const content = await sanityClient.fetch(`*[_type == 'category']`)

  return {
    props: {
      content 
    }
  }
}

function Categories({ content }) {
  return (
    <Layout>
      <main>
        <h1>Kategorier:</h1>
        <ContentList content={content} />
      </main>
    </Layout>
  )
}

export default Categories;