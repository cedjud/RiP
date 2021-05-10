import sanityClient from "../../sanityClient";

import ContentList from '../../components/ContentList/ContentList';
import Layout from '../../components/Layout/Layout';

export async function getStaticProps() {
  const content = await sanityClient.fetch(`*[_type == 'article']{..., 'plainTextBody': pt::text(body)}`)

  return {
    props: {
      content 
    }
  }
}

function Articles({ content }) {
  return (
    <Layout>
      <main>
        <h1>Artikler:</h1>
        <ContentList content={content} />
      </main>
    </Layout>
  )
}

export default Articles;