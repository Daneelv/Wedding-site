import React from "react";

const AboutUs = (sectAbout) => {
  const { image, paragraph } = sectAbout.sectAbout;
  const style = {
    heading: {
      padding: "30px 0 0 0",
    },
    backImage : {
      background: `url("${image}") center center / cover no-repeat`,
      height: "80vh",
      marginBottom: "-20px",
    }
  };

  return (
    <section id="about">
        <div className="row">
        <div className="col s12 m9" style = {style.backImage}>
          </div>
          <div className="col m3 s12">
            <h3 className="center-align" style = {style.heading}>Ons Storie</h3>
            <hr className="style"/>
            <p className="left-align">{paragraph}</p>
            <hr className="style"/>
          </div>
        </div>
    </section>
  );
};

export default AboutUs;
