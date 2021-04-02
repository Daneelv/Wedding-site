import React from "react";
import { useMediaQuery } from "react-responsive";

const AboutUs = (sectAbout) => {
  const { image, paragraph } = sectAbout.sectAbout;
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const style = {
    Img: {
      height: "600px",
      width: "auto",
      maxWidth: "100%",
      maxHeight: "auto",
    },
    butn: {
      width: "50%",
    },
    centreAlign: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "450px",
    },
    sect: {
      padding: "40px 0 40px 0",
    },
  };

  return (
    <section id="about">
      <style jsx>{`
          @media screen and (max-width: 600px) {
            #about{
              display: flex, 
              flex-direction: column-reverse
              background : green;
            }
          }
  `}</style>

      <h3 className="center-align">Ons Storie</h3>
      <div className="container center-align" style={style.sect}>
        <div className="row">
          <div className="col m6 s12 l6">
            <div className="row">
              <div className="col m12 s12 l12" style={style.centreAlign}>
                <div className="row">
                  <div className="col m12 s12 l12 ">
                    <p className="left-align">{paragraph}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 m6 l6">
            <img style={style.Img} className="" src={image}></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
