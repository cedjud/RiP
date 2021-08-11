import ContentList from "../../components/ContentList/ContentList";
import CategoryGrid from "../../components/CategoryGrid/CategoryGrid";
import Layout from "../../components/Layout/Layout";

import sanityClient from "../../sanityClient";

export async function getStaticPaths() {
  const categories = await sanityClient.fetch(`*[_type == 'category']{
    slug
  }`);

  const paths = categories.map((category) => {
    return `/kategorier/${category.slug.current}`;
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const categoryQuery = `*[_type == 'category' && slug.current == '${params.slug}'][0]{
    _id,
    title,
    subcategories[]->{
      _id,
      _type,
      title,
      description,
      slug
    }
  }`;
  const categoryData = await sanityClient.fetch(categoryQuery);

  const articlesQuery = `*[_type == 'article' && '${categoryData._id}' in categories[]._ref]{
    ...,
    "plainTextBody": pt::text(body)
  }`;
  const articleData = await sanityClient.fetch(articlesQuery);

  return {
    props: {
      categoryData,
      articleData,
    },
  };
}

function Category({ categoryData, articleData }) {
  const { title, subcategories } = categoryData;
  return (
    <Layout title={title}>
      {subcategories && (
        <CategoryGrid categories={subcategories} classNames={`mb-8`} heading={`Relaterte kategorier:`} />
      )}

      {articleData && Array.isArray(articleData) && articleData.length > 0 && (
        <ContentList content={articleData} heading={`Artikler:`} />
      )}
    </Layout>
  );
}

export default Category;
