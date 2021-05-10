import BlockContent from '@sanity/block-content-to-react';
import sanityClient from '../../sanityClient';

import Layout from '../../components/Layout/Layout';


export async function getStaticPaths() {
  const articles = await sanityClient.fetch(`*[_type == 'article']{
    slug
  }`)


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
  console.log('articleData : ', articleData);

  return {
    props: {
      articleData
    }
  }
}

function Article({ articleData }) {
  console.log('articleData : ', articleData);
  const { title } = articleData;

  return (
    <Layout>
      <h1>{title}</h1>
      <BlockContent blocks={articleData.body} />
    </Layout>
  )
}

export default Article;