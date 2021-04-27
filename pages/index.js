import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Loader from "react-loader-spinner";
import styles from "../styles/Layout.module.css";

// Components
import Layout from "../compnents/Layout";
import Banner from "../compnents/Banner";
import AboutUs from "../compnents/Aboutus";
import InvitedPerson from "../compnents/InvitedPerson";
import Gallery from "../compnents/gallery";
import Venue from "../compnents/Venue";
import Parralax from "../compnents/Parralax";
import Rsvp from "../compnents/Rsvp";
import ModalInfoLoad from "../compnents/modalInfoLoad";

export default function Home(siteData) {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({});
  const Router = useRouter();
  const {
    sectBanner,
    sectAbout,
    sectGallery,
    sectParralax1,
  } = siteData.siteData.content_attr;

  useEffect(() => {
    if (Router.isReady) {
      getServerSideProps();
    }
  }, [Router.isReady]);

  async function getServerSideProps() {
    const qry = Router.query;

    if (Object.keys(qry).length == 0) {
      return Router.push("/page404");
    }
    try {
      const res = await fetch(
        `http://localhost:3000/api/get_user?UID=${qry.UID}`
      );
      const userData = await res.json();
      setUserData(userData);
      setLoading(false);
      return;
    } catch {
      return Router.push("/page404");
    }
  }

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
            <ModalInfoLoad />
            <Banner bannerData={sectBanner} />
            <AboutUs sectAbout={sectAbout} />
            <Gallery galleryData={sectGallery} />
            <Parralax parralax={sectParralax1} />
            <InvitedPerson />
            <Venue />
            <Parralax parralax={sectParralax1} />
            <Rsvp userData={userData} />

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
          <div className="row">
            <div className="col m12 s12 l12 ">
              <h1 className="left-align">Daneel</h1>
            </div>
            <div className="col m12 s12 l12 ">
              <Loader
                type="Hearts"
                color="red"
                height={400}
                width={400}
                svgClass="my-custom-class"
              />
            </div>
            <div className="col m12 s12 l12 ">
              <h1 className="right-align">Maryke</h1>
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
