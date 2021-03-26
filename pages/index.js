
import styles from '../styles/Layout.module.css'
import Layout from '../compnents/Layout';
import Banner from '../compnents/Banner';
import AboutUs from '../compnents/Aboutus';
import InvitedPerson from '../compnents/InvitedPerson';
import Gallery from '../compnents/gallery';
export default function Home() {
  return (
    <Layout>

    {/* <div className={styles.container}> */}
      {/* <main className={styles.main}> */}
      <Banner/>
      <AboutUs/>
      <Gallery/>
      <InvitedPerson/>


      {/* </main> */}


      <footer className={styles.footer}>
      </footer>

      {/* </div> */}
      </Layout>
  )
}
