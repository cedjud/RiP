import BlockContent from '@sanity/block-content-to-react';
import sanityClient from '../../sanityClient';
import { format } from 'date-fns';

import Layout from '../../components/Layout/Layout';
import { body } from '../../styles/ArticlePage.module.css';


export async function getStaticPaths() {
  const articles = await sanityClient.fetch(`*[_type == 'article']{
    slug
  }`);

  const paths = articles.map(article => {
    return `/artikler/${article.slug.current}`;
  });

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const groqQuery = `*[_type == 'article' && slug.current == '${params.slug}'][0]{..., "plainTextBody": pt::text(body)}`;
  const articleData = await sanityClient.fetch(groqQuery);

  return {
    props: {
      articleData
    }
  }
}

function Article({ articleData }) {
  const { title, _updatedAt } = articleData;

  return (
    <Layout title={title}>
      <p className="text-sm text-red-900 mb-8">sist oppdatert: <time dateTime={_updatedAt}>{format(new Date(_updatedAt), "d.M.y")}</time></p>
      <BlockContent blocks={articleData.body} className={`${body} max-w-3xl`}/>
    </Layout>
  )
}

export default Article;