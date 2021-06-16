import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { API_URL } from "../config/index";

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
import ModalOK from "../compnents/modalOK";

export default function Home({ siteData }) {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const Router = useRouter();
  const { sectBanner, sectAbout, sectGallery, sectParralax1 } =
    siteData.content_attr;

  useEffect(() => {
    if (Router.isReady) {
      getUserInfo();
    }
  }, [Router.isReady]);

  async function getUserInfo() {
    const qry = Router.query;

    if (Object.keys(qry).length == 0 || qry.UID === "") {
      return Router.push("/404");
    }
    try {
      const res = await fetch(`${API_URL}/api/get_user?UID=${qry.UID}`);
      const userData = await res.json();

      if (!res.ok) {
        return Router.push("/404");
      }

      setUserData(userData);
      setLoading(false);
      return;
    } catch {
      return Router.push("/404");
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
            <ModalOK
              info={
                <>
                  <p>
                    Die Afsluitingdatum vir RSVP'S is
                    <strong> 2021-07-10 </strong>.
                  </p>
                  <p>
                    As jy nie teen die afsluitings datum ge RSVP het nie, dan
                    aanvaar ons dat jy nie die troue gaan bywoon nie.{" "}
                  </p>
                  <p>Maak asseblief seker van jou besluit voordat jy RSVP</p>
                  <p>
                    Indien jy nie kan RSVP nie weens n tegniese fout, skakel dan
                    gerus vir Daneel of Maryke{" "}
                  </p>
                  <p>
                    Hierdie uitnodiging is slegs vir jou bedoel.{" "}
                    <strong>
                      Ongelukkig word daar nie metgeselle toegelaat nie.
                    </strong>
                  </p>
                </>
              }
              btnCaption={"Ek Verstaan"}
            />

            <Banner />
            {/* <Banner bannerData={sectBanner} /> */}
            <AboutUs sectAbout={sectAbout} />
            <Gallery galleryData={sectGallery} />
            {/* <Parralax parralax={sectParralax1} /> */}
            <InvitedPerson
              message={userData.attr.welcome_msg}
              image={userData.attr.guest_img}
              name={userData.name}
            />
            <Venue />
            <Parralax parralax={sectParralax1} />
            <Rsvp
              attending={userData.attending}
              guest_comment={userData.guest_comment}
              name={userData.name}
              rsvp_date={userData.rsvp_date}
              url_param_id={userData.url_param_id}
            />

            {/* <footer className={styles.footer}></footer> */}
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
            <div className="col s12">
              <h1 className="left-align">Daneel</h1>
            </div>
            <div className="col s12">
              <Loader
                type="Hearts"
                color="red"
                height={400}
                width={400}
                svgClass="my-custom-class"
              />
            </div>
            <div className="col s12">
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
