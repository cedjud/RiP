import { useEffect } from "react";
import { usePreviewSubscription } from "../lib/sanity";
import { getClient } from "../lib/sanity.server";

import Layout from "../components/Layout/Layout";

const aboutPageQuery = `*[_id == 'about'][0]`;

export async function getStaticProps({preview = false}) {
  const aboutPageContent = await getClient(preview).fetch(aboutPageQuery);

  return {
    props: {
      data: { 
        aboutPageContent,
        previewMode: preview
      },
    },
  };
}

export default function Home({ data }) {
  const { data: aboutPageContent } = usePreviewSubscription(aboutPageQuery, {
    initialData: data.aboutPageContent,
    enabled: data.previewMode,
  });

  return (
    <Layout
      title={aboutPageContent?.title}
      introtext={aboutPageContent?.body}
      richtextIntro
    >
    </Layout>
  );
}
