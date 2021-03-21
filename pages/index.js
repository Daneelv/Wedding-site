import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Layout from '../compnents/Layout';
import Banner from '../compnents/Banner';
import AboutUs from '../compnents/Aboutus';
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Daneel & Maryke Trou</title>
        <link rel="icon" href="/heart.png" />
      </Head>
    {/* <div className={styles.container}> */}
      {/* <main className={styles.main}> */}
      <Banner/>
      <AboutUs/>


      {/* </main> */}


      <footer className={styles.footer}>
      </footer>

      {/* </div> */}
      </Layout>
  )
}
