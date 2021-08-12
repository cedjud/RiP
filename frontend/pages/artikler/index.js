import { usePreviewSubscription } from "../../lib/sanity";
import { getClient } from "../../lib/sanity.server";

import ContentList from '../../components/ContentList/ContentList';
import Layout from '../../components/Layout/Layout';

const query = `*[_type == 'article']{..., 'plainTextBody': pt::text(body)}`;

export async function getStaticProps({preview = false}) {
  const content = await getClient(preview).fetch(query);

  return {
    props: {
      data: {content },
      preview,
    }
  }
}

function Articles({ data, preview }) {
  const { data: content} = usePreviewSubscription(query, {
    initialData: data.content,
    enabled: preview
  });

  return (
    <Layout title="Alle Artikler:">
      <ContentList content={content} />
    </Layout>
  )
}

export default Articles;