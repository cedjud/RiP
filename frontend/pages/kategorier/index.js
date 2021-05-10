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
    <Layout title={'Kategorier'}>
      <ContentList content={content} />
    </Layout>
  )
}

export default Categories;