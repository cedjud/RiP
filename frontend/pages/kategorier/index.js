import { usePreviewSubscription } from "../../lib/sanity";
import { getClient } from "../../lib/sanity.server";

import CategoryGrid from "../../components/CategoryGrid/CategoryGrid";
import Layout from '../../components/Layout/Layout';

const query = `*[_type == 'category']`;

export async function getStaticProps({preview = false}) {
  const content = await getClient(preview).fetch(query)

  return {
    props: {
      data: { 
        content,
      },
      preview: preview
    }
  }
}

function Categories({ data, preview }) {
  const {data: content} = usePreviewSubscription(query, {
    initialData: data.content,
    enabled: preview
  })

  return (
    <Layout title={'Alle Kategorier:'}>
      <CategoryGrid categories={content} />
    </Layout>
  )
}

export default Categories;