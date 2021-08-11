import Head from "next/head";
import {wrapper, hero} from "./Layout.module.css";

import PageHeader from "../PageHeader/PageHeader";
import PageFooter from '../Footer/Footer';

function Layout({ children, title, introtext, classNames }) {
  return (
    <>
      <Head>
        <title>Rettigherter i Psykiatrien</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageHeader />

      <main className={`container mx-auto flex-1 p-4`}>
        <section className={``}>
          <h1 className={`text-3xl mt-4 mb-4`}>{title}</h1>
          {introtext && <p className={`max-w-3xl`}>{introtext}</p>} 
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
