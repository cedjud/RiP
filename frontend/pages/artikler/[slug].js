import BlockContent from '@sanity/block-content-to-react';
import { getClient } from '../../lib/sanity.server';
import { usePreviewSubscription } from '../../lib/sanity';
import { format } from 'date-fns';

import Layout from '../../components/Layout/Layout';
import { body } from '../../styles/ArticlePage.module.css';


const contentQuery = `*[_type == 'article' && slug.current == $slug][0]{..., "plainTextBody": pt::text(body)}`;
const pathsQuery = `*[_type == 'article']{slug}`;


export async function getStaticPaths() {
  const articles = await getClient(false).fetch(pathsQuery);

  const paths = articles.map(article => {
    return `/artikler/${article.slug.current}`;
  });

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params, preview = false }) {
  const articleData = await getClient(preview).fetch(contentQuery, {
    slug: params.slug
  });

  return {
    props: {
      data: { articleData },
      preview
    }
  }
}


function Article({ data, preview }) {
  const {data: articleData } = usePreviewSubscription(contentQuery, {
    params: {slug: data.articleData?.slug.current},
    initialData: data.articleData,
    enabled: preview && data.articleData?.slug.current,
  })

  return (
    <Layout title={articleData?.title}>
      <p className="text-sm text-red-900 mb-8">sist oppdatert: <time dateTime={articleData?._updatedAt}>{format(new Date(articleData?._updatedAt), "d.M.y")}</time></p>
      <BlockContent blocks={articleData?.body} className={`${body} max-w-3xl`}/>
    </Layout>
  )
}

export default Article;