import Head from "next/head";
import {wrapper, hero} from "./Layout.module.css";

import PageHeader from "../PageHeader/PageHeader";
import PageFooter from '../Footer/Footer';

function Layout({ children, title, introtext }) {
  return (
    <>
      <Head>
        <title>Rettigherter i Psykiatrien</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageHeader />
      <main className={wrapper}>
        <section className={hero}>
          <h1>{title}</h1>
          {introtext && <p>{introtext}</p>} 
        </section>

        <section>
          {children}
        </section>
      </main>
      
      <PageFooter />
    </>
  );
}

export default Layout;
