import { useEffect } from "react";
import { usePreviewSubscription } from "../lib/sanity";
import { getClient } from "../lib/sanity.server";

import CategoryGrid from "../components/CategoryGrid/CategoryGrid";
import Layout from "../components/Layout/Layout";

const contactPageQuery = `*[_id == 'contact'][0]`;
// const categoriesQuery = `*[_type== 'category' && displayOnFrontPage == true]`;

export async function getStaticProps({preview = false}) {
  const contactPageContent = await getClient(preview).fetch(contactPageQuery);
  // const categoryData = await getClient(false).fetch(categoriesQuery);

  return {
    props: {
      data: { 
        contactPageContent,
        // categoryData,
        previewMode: preview
      },
    },
  };
}

export default function Home({ data }) {
  const { data: contactPageContent } = usePreviewSubscription(contactPageQuery, {
    initialData: data.contactPageContent,
    enabled: data.previewMode,
  });

  return (
    <Layout
      title={contactPageContent?.title}
      introtext={contactPageContent?.body}
      richtextIntro
    >
      {/* <CategoryGrid categories={data?.categoryData} heading={`Kategorier:`} /> */}
    </Layout>
  );
}
