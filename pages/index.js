import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { API_URL } from "../config/index";

import Loader from "react-loader-spinner";
import {getWeddingDay,getStringDate, getStringTime, getStringDateTime} from "../helpers/dateTime"

// Components
import Layout from "../compnents/Layout";
import Banner from "../compnents/Banner";
import AboutUs from "../compnents/AboutUs";
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
  const { sectBanner, sectAbout, sectGallery, sectParralax1, Global } =
    siteData.content_attr;

  const{weddingDate,RSVPCutOff1,RSVPCutOff2 } = Global;
  
  const StringWeddingDate =  getStringDate(weddingDate);
  const StringWeddingTime =  getStringTime(weddingDate);
  const StringWeddingDay =  getWeddingDay(weddingDate)

  const StringRSVPCutOff1 = getStringDateTime(RSVPCutOff1);
  const StringRSVPCutOff2 = getStringDateTime(RSVPCutOff2);

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

  console.log(userData)

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
           { !userData.infopopupaccept && <ModalOK
                info={
                  <>
                    <p>
                      Die Afsluitingdatum vir RSVP'S is
                      <strong style = {{fontWeight: "600"}}> {userData.cutoff2 ? StringRSVPCutOff2 : StringRSVPCutOff1} </strong>
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
                url_param_id = {userData.url_param_id}
                btnCaption={"Ek Verstaan"}
              /> 
            }

            <Banner />
            <AboutUs sectAbout={sectAbout} />
            <Gallery galleryData={sectGallery} />
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
          </Layout>
        </div>
      ) : (
        <div
          style={{
            height: "100vh",
            background: "#F2F2F2",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            flexWrap: "nowrap",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div className="row">
            <div className="col s12">
              <h1 className="left-align">Daneel</h1>
            </div>
            <div className="col s12" style ={{textAlign: "center"}}>
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
  const res = await fetch(`${API_URL}/api/get_site_data`);
  const siteData = await res.json();
  return {
    props: { siteData },
  };
}
