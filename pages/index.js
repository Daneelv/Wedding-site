import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import styles from "../styles/Layout.module.css";

import Layout from "../compnents/Layout";
import Banner from "../compnents/Banner";
import AboutUs from "../compnents/Aboutus";
import InvitedPerson from "../compnents/InvitedPerson";
import Gallery from "../compnents/gallery";
import Venue from "../compnents/Venue";
import Parralax from "../compnents/Parralax";
import Rsvp from "../compnents/Rsvp";
import ModalInfoLoad from "../compnents/modalInfoLoad";
let Load = true;
export default function Home(siteData) {
  const [loading, setLoading] = useState(Load);
  const {
    sectBanner,
    sectAbout,
    sectGallery,
    sectParralax1,
  } = siteData.siteData.content_attr;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading === false ? (
        <div
          style={{
            opacity: 1,
            transition: "opacity 2s",
          }}
        >
          <Layout>
          <ModalInfoLoad/>
            <Banner bannerData={sectBanner} />
            <AboutUs sectAbout={sectAbout} />
            <Gallery galleryData={sectGallery} />
            <Parralax parralax={sectParralax1} />
            <InvitedPerson />
            <Venue />
            <Parralax parralax={sectParralax1} />
            <Rsvp />


            {/* </main> */}

            <footer className={styles.footer}></footer>

            {/* </div> */}
          </Layout>
        </div>
      ) : (
        <div
          style={{
            height: "100vh",
            background: "#F2F2F2",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div classname="row">
            <div className="col m12 s12 l12 ">
              <h1 class="left-align">Daneel</h1>
            </div>
            <div className="col m12 s12 l12 ">
              <Loader
                type="Hearts"
                color="red"
                height={400}
                width={400}
                timeout={3000} //3 secs
                svgClass="my-custom-class"
              />
            </div>
            <div className="col m12 s12 l12 ">
              <h1 class="right-align">Maryke</h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:3000/api/get_site_data`);
  const siteData = await res.json();
  return {
    props: { siteData },
  };
}
