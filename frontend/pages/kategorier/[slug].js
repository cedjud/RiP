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
  console.log('subcategories : ', subcategories);
  console.log('articleData : ', articleData);

  return (
    <Layout title={title}>
      {subcategories && (
        <>
          {/* <h3>Underkategorier:</h3> */}
          <CategoryGrid categories={subcategories} />
          {/* <ContentList content={subCategories} /> */}
        </>
      )}

      {articleData && Array.isArray(articleData) && articleData.length > 0 && (
        <>
          <h3>Artikler:</h3>
          <ContentList content={articleData} />
        </>
      )}
    </Layout>
  );
}

export default Category;
