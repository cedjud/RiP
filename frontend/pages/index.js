import Head from 'next/head'
import styles from '../styles/Home.module.css'

import client from "../client";

export async function getStaticProps() {
  const data = await client.fetch(`*[_type== 'category']`)

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
      content: data
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


      <main className={styles.main}>
        <h1 className={styles.title}>
          Rettigherter i Psykiatrien
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
