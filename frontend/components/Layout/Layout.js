import Head from "next/head";
import styles from "../../styles/Home.module.css";

import PageHeader from "../PageHeader/PageHeader";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rettigherter i Psykiatrien</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageHeader />
      {children}
    </div>
  );
}

export default Layout;
