import styles from "../styles/Layout.module.css";
import Layout from "../compnents/Layout";
import Banner from "../compnents/Banner";
import AboutUs from "../compnents/Aboutus";
import InvitedPerson from "../compnents/InvitedPerson";
import Gallery from "../compnents/gallery";
import Venue from "../compnents/Venue";
import Parralax from "../compnents/Parralax";
export default function Home(siteData) {
  const { sectBanner, sectAbout } = siteData.siteData.content_attr;
  return (
    <Layout>
      <Banner bannerData={sectBanner} />
      <AboutUs sectAbout={sectAbout} />
      <Gallery />
      <Parralax
        paragraph="Hallo"
        heading="JAJAJA"
        image1="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-christmas-rose-single-white-flower-royalty-free-image-1578194497.jpg"
        image2="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-christmas-rose-single-white-flower-royalty-free-image-1578194497.jpg"
      />
      <InvitedPerson />
      <Venue />
      <Parralax
        paragraph="Hallo"
        heading="JAJAJA"
        image1="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-christmas-rose-single-white-flower-royalty-free-image-1578194497.jpg"
        image2=""
      />

      {/* </main> */}

      <footer className={styles.footer}></footer>

      {/* </div> */}
    </Layout>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:3000/api/get_site_data`);
  const siteData = await res.json();
  return {
    props: { siteData },
  };
}
