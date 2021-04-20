import React from "react";

const AboutUs = (sectAbout) => {
  const { image, paragraph } = sectAbout.sectAbout;
  const style = {
    Img: {
      maxHeight: "500px",
    },
    butn: {
      width: "50%",
    },
    sect: {
      padding: "40px 0 40px 0",
    },
  };

  return (
    <section id="about">
      <h3 className="center-align">Ons Storie</h3>
      <div className="container center-align" style={style.sect}>
        <div className="row">
          <div className="col m7 s12 l7 ">
            <p className="left-align">{paragraph}</p>
          </div>
          <div className="col s12 m5 l5 ">
            <img className="responsive-img" style={style.Img} src={image}></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
