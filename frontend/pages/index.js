import { useEffect } from "react";
import { usePreviewSubscription } from "../lib/sanity";
import { getClient } from "../lib/sanity.server";

import CategoryGrid from "../components/CategoryGrid/CategoryGrid";
import Layout from "../components/Layout/Layout";

const frontpageQuery = `*[_id == 'frontpage'][0]`;
const categoriesQuery = `*[_type== 'category' && displayOnFrontPage == true]`;

export async function getStaticProps({preview = false}) {
  const frontpageContent = await getClient(preview).fetch(frontpageQuery);
  const categoryData = await getClient(false).fetch(categoriesQuery);

  return {
    props: {
      data: { 
        frontpageContent,
        categoryData,
        previewMode: preview
      },
    },
  };
}

export default function Home({ data }) {
  const { data: frontpageContent } = usePreviewSubscription(frontpageQuery, {
    initialData: data.frontpageContent,
    enabled: data.previewMode,
  });

  return (
    <Layout
      title={frontpageContent?.title}
      introtext={frontpageContent?.body}
      richtextIntro
    >
      <CategoryGrid categories={data?.categoryData} heading={`Kategorier:`} />
    </Layout>
  );
}
