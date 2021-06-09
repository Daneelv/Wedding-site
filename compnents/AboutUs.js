import React from "react";

const AboutUs = (sectAbout) => {
  const { image, paragraph } = sectAbout.sectAbout;
  const style = {
    sect: {
      padding: "40px 0 40px 0",
    },
    backImage : {
      background: `url("${image}") center center / cover no-repeat`,
      height: "80vh",
      marginBottom: "-20px",
    }
  };

  return (
    <section id="about">
      {/* <div className="container center-align" style={style.sect}> */}
        <div className="row">
        <div className="col s12 m9" style = {style.backImage}>
          </div>
          <div className="col m3 s12">
            <h3 className="center-align">Ons Storie</h3>
            <p className="left-align">{paragraph}</p>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
};

export default AboutUs;
