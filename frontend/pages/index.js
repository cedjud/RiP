import Head from 'next/head'
import styles from '../styles/Home.module.css'

import sanityClient from "../sanityClient";

import PageHeader from '../components/PageHeader/PageHeader';

export async function getStaticProps() {
  const content = await sanityClient.fetch(`*[_type== 'category']`)

  // const ct = data.reduce((acc, current) =>  {
  //   const type = current._type;

  //   if (!Array.isArray(acc[type])) {
  //     acc[type] = [];
  //   }
  //   acc[type].push(current);

  //   return acc;
  // }, {})

  return {
    props: {
      content 
    }
  }
}

export default function Home({ content }) {
  console.log(content)
  return (
    <div className={styles.container}>
      <Head>
        <title>Rettigherter i Psykiatrien</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageHeader />
    </div>
  )
}
