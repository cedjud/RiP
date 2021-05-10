import Head from "next/head";
import {wrapper} from "./Layout.module.css";

import PageHeader from "../PageHeader/PageHeader";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Rettigherter i Psykiatrien</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageHeader />
      <main className={wrapper}>
        {children}
      </main>
    </>
  );
}

export default Layout;
