import { getClient } from "../../lib/sanity.server";
import { usePreviewSubscription } from "../../lib/sanity";

import ContentList from "../../components/ContentList/ContentList";
import CategoryGrid from "../../components/CategoryGrid/CategoryGrid";
import Layout from "../../components/Layout/Layout";

const pathsQuery = `*[_type == 'category']{
  slug
}`;

const categoryQuery = `*[_type == 'category' && slug.current == $slug][0]{
    _id,
    title,
    slug, 
    subcategories[]->{
      _id,
      _type,
      title,
      description,
      slug
    }
  }`;

const articlesQuery = `*[_type == 'article' && $id in categories[]._ref]{
    ...,
    "plainTextBody": pt::text(body)
  }`;

export async function getStaticPaths() {
  const categories = await getClient(false).fetch(pathsQuery);

  const paths = categories.map((category) => {
    return `/kategorier/${category.slug.current}`;
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const categoryData = await getClient(preview).fetch(categoryQuery, {
    slug: params.slug,
  });

  const articleData = await getClient(false).fetch(articlesQuery, {
    id: categoryData._id,
  });

  return {
    props: {
      data: { categoryData },
      articleData,
      preview
    },
  };
}

function Category({ data, articleData, preview }) {
  const { data: categoryData } = usePreviewSubscription(categoryQuery, {
    params: { slug: data.categoryData?.slug.current },
    initialData: data.categoryData,
    enabled: preview && data.categoryData?.slug.current,
  });

  return (
    <Layout title={categoryData?.title}>
      {categoryData?.subcategories && (
        <CategoryGrid
          categories={categoryData?.subcategories}
          classNames={`mb-8`}
          heading={`Relaterte kategorier:`}
        />
      )}

      {articleData && Array.isArray(articleData) && articleData.length > 0 && (
        <ContentList content={articleData} heading={`Artikler:`} />
      )}
    </Layout>
  );
}

export default Category;
